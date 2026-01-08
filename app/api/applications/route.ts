import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Proxy the request to the main app API
    const response = await fetch("https://dash.proofio.app/api/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Applications Proxy Error:", error);
    return NextResponse.json(
      { error: "Failed to connect to applications service" },
      { status: 500 }
    );
  }
}

