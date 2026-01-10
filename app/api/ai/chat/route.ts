import { NextResponse } from "next/server";
import OpenAI from "openai";
import filter from "leo-profanity";

// Load default English list
filter.loadDictionary("en");
// Add common German insults (basic list)
const germanBadWords = [
  "arsch", "arschloch", "bastard", "wixe", "wixer", "hure", "hurensohn", 
  "schlampe", "fick", "ficken", "pisser", "fotze", "miststück", "penner"
];
filter.add(germanBadWords);

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://proofio.app", // Optional, for OpenRouter rankings
    "X-Title": "Proofio Landing Page", // Optional
  }
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // 1. Profanity Filter Check
    const lastUserMessage = [...messages].reverse().find(m => m.role === "user")?.content || "";
    
    if (filter.check(lastUserMessage)) {
      return NextResponse.json(
        { 
          message: { 
            role: "assistant", 
            content: "I'm sorry, but I cannot respond to messages containing offensive language. Please keep our conversation professional." 
          } 
        },
        { status: 200 } // We return 200 so the frontend handles it as a normal message
      );
    }

    if (!process.env.OPENROUTER_API_KEY) {
      console.error("OPENROUTER_API_KEY is not set");
      return NextResponse.json(
        { error: "AI Assistant is currently misconfigured." },
        { status: 500 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "xiaomi/mimo-v2-flash:free",
      messages: [
        {
          role: "system",
          content: `You are Proofy, the friendly and efficient AI assistant for Proofio (https://proofio.app). 

Proofio is a "Review Intelligence Platform" built for modern product, marketing, and data teams. It is not just a widget tool; it is an analytics-first and API-first system focused on business decisions.

KEY INFORMATION ABOUT PROOFIO:
- What it does: Proofio collects, normalizes, and analyzes reviews from major platforms (Google Reviews, Trustpilot, Apple App Store, Google Play Store, G2) and unifies them into a single intelligence layer.
- Core Value: Transforms fragmented feedback into structured insights, sentiment trends, and competitive comparisons.
- Mission: We believe customer feedback should drive better products and business decisions.
- Target Groups: Apps & SaaS teams, Ecommerce & brands, Product & experience teams, Internal tools & analytics.

PRODUCT FEATURES:
- Multi-source coverage & Daily synchronization.
- Smart analytics (trends, sentiment, ratings).
- AI-powered summaries, key insights, and topic detection.
- Competitive comparison directly from customer feedback.
- Full REST API access for custom integrations and BI dashboards.

PRICING PLANS:
- Starter (Free): 1 project, 2 sources/project, 500 reviews/mo, 1,000 API requests.
- Growth ($29/mo): 5 projects, 20 sources/project, 10,000 reviews/mo, 50,000 API requests, advanced insights, team collaboration.
- Scale ($99/mo): Unlimited projects/sources, 100,000 reviews/mo, unlimited API requests, priority support.
- Enterprise (Custom): Dedicated support and SLA guarantees.

IMPORTANT LINKS:
- Documentation: [docs.proofio.app](https://docs.proofio.app)
- Support/Help: [proofio.app/help](https://proofio.app/help)
- Pricing: [proofio.app/pricing](https://proofio.app/pricing)

CRITICAL INSTRUCTIONS FOR PROOFY:
- Tone: Professional, polite, and helpful.
- Conciseness: Keep your answers as short and direct as possible. Avoid filler text.
- Formatting: DO NOT use any emojis. Use standard Markdown for links.
- Language: Respond in the language the user uses (German or English).`
        },
        ...messages
      ],
    });

    const aiMessage = response.choices[0].message;

    return NextResponse.json({ message: aiMessage });
  } catch (error) {
    console.error("OpenRouter AI Error:", error);
    return NextResponse.json(
      { error: "Failed to get a response from Proofy." },
      { status: 500 }
    );
  }
}

