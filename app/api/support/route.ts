import { NextResponse } from "next/server";
import { supportDb, adminSdk } from "@/lib/firebase-admin";
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
    if (filter.check(message) || filter.check(subject) || filter.check(name)) {
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
      fromName: name,
      subject: subject,
      body: message,
      status: "open", // Initial status
      createdAt: adminSdk.firestore.FieldValue.serverTimestamp(),
      attachments: [], // Optional, empty for now
    };

    // 3. Save to Firestore in the OTHER project
    const docRef = await supportDb.collection("support_tickets").add(ticketData);

    // 4. Return the Ticket ID (doc.id) to the frontend
    return NextResponse.json({ 
      success: true, 
      ticketId: docRef.id,
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
