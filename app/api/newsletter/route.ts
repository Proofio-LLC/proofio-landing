import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const API_KEY =
      process.env.MAILEROO_NEWSLETTER_API_KEY || process.env.MAILEROO_API_KEY;
    const LIST_ID = process.env.MAILEROO_NEWSLETTER_LIST_ID || '2576';

    if (!API_KEY) {
      console.error("MAILEROO_NEWSLETTER_API_KEY (or MAILEROO_API_KEY fallback) is not defined");
      return NextResponse.json(
        { error: "Newsletter service is currently unavailable" },
        { status: 500 }
      );
    }

    if (!LIST_ID) {
      console.error("MAILEROO_NEWSLETTER_LIST_ID is not defined and default list 2576 was not applied");
      return NextResponse.json(
        { error: "Newsletter service is currently unavailable" },
        { status: 500 }
      );
    }

    // Maileroo Contacts API endpoint
    // PUT request to add/update subscriber
    const response = await fetch(`https://manage.maileroo.app/v1/contact/${LIST_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify({
        subscriber_email: email,
        subscriber_status: "UNCONFIRMED", // User will receive opt-in confirmation email from Maileroo
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Maileroo API Error:", data);
      return NextResponse.json(
        { error: data.error?.message || data.message || "Something went wrong" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
