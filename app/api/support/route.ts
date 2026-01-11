import { NextResponse } from "next/server";
import { supportDb, adminSdk } from "@/lib/firebase-admin";
import { sendEmailNotification } from "@/lib/email";
import filter from "leo-profanity";

// Load default English list
filter.loadDictionary("en");
// Basic German bad words list
filter.add(["arsch", "arschloch", "bastard", "wixe", "wixer", "hure", "hurensohn", "schlampe", "fick", "ficken", "pisser", "fotze", "miststück", "penner"]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

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

    if (!supportDb) {
      console.error("Support Firebase not configured. Please check environment variables.");
      return NextResponse.json(
        { error: "Support system is currently not available. Please try again later." },
        { status: 503 }
      );
    }

    // 2. Map to the required structure for the helpdesk system
    const ticketData = {
      projectId: "proofio", // Filtered in the admin panel
      from: email,
      fromName: name || "Unknown User",
      subject: subject || "No Subject",
      body: message || "No Content",
      status: "open", // Initial status
      createdAt: adminSdk.firestore.FieldValue.serverTimestamp(),
      attachments: [], // Optional, empty for now
    };

    // 3. Save to Firestore in the OTHER project
    const docRef = await supportDb.collection("support_tickets").add(ticketData);
    const ticketId = docRef.id;
    const referenceNumber = ticketId.substring(0, 8).toUpperCase();

    // 4. Send Confirmation Email
    try {
      await sendEmailNotification({
        email: email,
        recipientName: name || "User",
        subject: `Support Ticket Received - #${referenceNumber}`,
        content: {
          title: 'We received your message!',
          message: `Hello ${name || 'there'}!\n\nThank you for reaching out to Proofio. We have created a support ticket for you and our team will get back to you as soon as possible.\n\nYour reference number is: **#${referenceNumber}**\n\nYou will receive a response directly to this email address (${email}).`,
          metadata: {
            referenceNumber: `#${referenceNumber}`,
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
