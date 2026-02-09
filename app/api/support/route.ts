import { NextResponse } from "next/server";
import { adminDb, adminSdk } from "@/lib/firebase-admin";
import { sendEmailNotification } from "@/lib/email";
import filter from "leo-profanity";

// Load default English list
filter.loadDictionary("en");
// Basic German bad words list
filter.add(["arsch", "arschloch", "bastard", "wixe", "wixer", "hure", "hurensohn", "schlampe", "fick", "ficken", "pisser", "fotze", "miststück", "penner"]);

const INITIAL_TICKET_SEQUENCE = 10233;

function formatTicketNumber(sequence: number): string {
  return `PRF-${String(sequence).padStart(5, "0")}`;
}

function getSupportCounterDoc() {
  return adminDb.collection("system").doc("support_ticket_counter");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, source = "direct", language } = body;

    // 0. Profanity Check
    if (filter.check(message || "") || filter.check(subject || "") || filter.check(name || "")) {
      return NextResponse.json(
        { error: "Your message contains language that violates our community guidelines. Please rephrase your request." },
        { status: 400 }
      );
    }

    // 1. Validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!adminDb) {
      console.error("Support Firebase not configured. Please check environment variables.");
      return NextResponse.json(
        { error: "Support system is currently not available. Please try again later." },
        { status: 503 }
      );
    }

    const normalizedLanguage =
      typeof language === "string" && language.trim().length > 0
        ? language.trim().toLowerCase().slice(0, 20)
        : "unknown";
    const rawMessage = message || "No Content";
    const intakePrefix =
      source === "chatbot"
        ? `[Proofy Intake]\nLanguage: ${normalizedLanguage}\nSummary: ${rawMessage}\n\n---\nOriginal Message:\n`
        : "";
    const ticketBody = `${intakePrefix}${rawMessage}`;

    // 2. Map to the required structure for the helpdesk system
    const ticketData = {
      projectId: "proofio", // Filtered in the admin panel
      from: email,
      fromName: name || "Unknown User",
      subject: subject || "No Subject",
      body: ticketBody,
      status: "open", // Initial status
      source,
      language: normalizedLanguage,
      createdAt: adminSdk.firestore.FieldValue.serverTimestamp(),
      attachments: [], // Optional, empty for now
    };

    // 3. Create ticket + sequential ticket number atomically
    let createdTicket;
    try {
      createdTicket = await adminDb.runTransaction(async (transaction) => {
        const counterRef = getSupportCounterDoc();
        const counterSnapshot = await transaction.get(counterRef);
        const currentRaw = counterSnapshot.data()?.current;
        const currentSequence =
          typeof currentRaw === "number" && Number.isFinite(currentRaw) && currentRaw >= INITIAL_TICKET_SEQUENCE
            ? currentRaw
            : INITIAL_TICKET_SEQUENCE;
        const nextSequence = currentSequence + 1;
        const nextTicketNumber = formatTicketNumber(nextSequence);
        const ticketRef = adminDb.collection("support_tickets").doc();

        transaction.set(ticketRef, {
          ...ticketData,
          ticketNumber: nextTicketNumber,
          ticketSequence: nextSequence,
        });
        transaction.set(
          counterRef,
          {
            current: nextSequence,
            updatedAt: adminSdk.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );

        return { ticketId: ticketRef.id, ticketNumber: nextTicketNumber };
      });
    } catch (dbError: any) {
      console.error("Firestore Database Error:", dbError);
      
      // If we get the "Project ID" error, it means initialization failed
      if (dbError.message?.includes("Project Id") || dbError.message?.includes("credentials")) {
        return NextResponse.json(
          { error: "Support system configuration error. Please contact the administrator." },
          { status: 500 }
        );
      }
      throw dbError;
    }
    const { ticketId, ticketNumber } = createdTicket;

    // 4. Send Confirmation Email
    try {
      await sendEmailNotification({
        email: email,
        recipientName: name || "User",
        subject: `Support Ticket Received - ${ticketNumber}`,
        content: {
          title: 'We received your message!',
          message: `Hello ${name || 'there'}!\n\nThank you for reaching out to Proofio. We have created a support ticket for you and our team will get back to you as soon as possible.\n\nYour reference number is: **${ticketNumber}**\n\nYou will receive a response directly to this email address (${email}).`,
          metadata: {
            referenceNumber: ticketNumber,
            subject: subject || 'No Subject',
            status: 'Open'
          },
          ctaText: 'Visit Proofio',
          ctaLink: 'https://proofio.app'
        }
      });
    } catch (emailError) {
      console.error("Support Email Error (Landing):", emailError);
      // Don't fail the response if email fails
    }

    // 5. Return the Ticket ID (doc.id) to the frontend
    return NextResponse.json({ 
      success: true, 
      ticketId: ticketId,
      ticketNumber: ticketNumber,
      message: "Ticket created successfully" 
    });

  } catch (error) {
    console.error("Support Ticket Error:", error);
    return NextResponse.json(
      { error: "Failed to create support ticket. Please try again later." },
      { status: 500 }
    );
  }
}
