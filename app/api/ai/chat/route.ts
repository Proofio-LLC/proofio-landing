import { NextResponse } from "next/server";
import OpenAI from "openai";
import filter from "leo-profanity";

// Load default English list
filter.loadDictionary("en");
// Add common German insults
filter.add(["arsch", "arschloch", "bastard", "wixe", "wixer", "hure", "hurensohn", "schlampe", "fick", "ficken", "pisser", "fotze", "miststück", "penner"]);

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://proofio.app",
    "X-Title": "Proofio Landing Page",
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
        { status: 200 }
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
          content: `You are Proofy, the official AI assistant of Proofio (https://proofio.app).

Proofio is a professional Review Intelligence Platform for product, marketing, and data teams. 
Your role is to help users understand Proofio, its features, pricing, use cases, and integrations in a clear, concise, and professional way.

You represent Proofio as a trustworthy B2B SaaS product.

---

## COMMUNICATION STYLE

- Tone: Professional, polite, and confident.
- Be concise and structured.
- No emojis.
- Use Markdown formatting when helpful.
- Always respond in the same language as the user.
- Never speculate or invent features.
- If unsure, say so and offer to create a support ticket.

---

## IDENTITY OF PROOFIO

Proofio is not just a widget tool.

It is a Review Intelligence Platform that:

- Aggregates reviews from multiple platforms
- Structures unstructured feedback into insights
- Detects sentiment trends
- Enables competitive comparison
- Helps teams understand what customers actually say

---

## FEATURES OF PROOFIO

- Review Aggregation
- Review Analysis
- Review Sentiment Analysis
- Review Trend Analysis
- Review Competitor Analysis
- Review Insights
- Review Recommendations

## PROOFIO VERIFIED WIDGET

Proofio Verified is an embeddable trust widget that:

- Displays verified review statistics
- Shows average rating, review count, and number of platforms
- Can show a "Proofio AI Checked" badge
- Supports Light/Dark mode
- Supports English and German
- Is available in all plans
- Branding can be removed in Growth and Scale
- Updates in real time
- Works with HTML, React, Next.js, WordPress, Shopify

Widget script:
https://api.proofio.app/widget.js

Public API:
/api/v1/public/widget

Widget is managed at:
/dashboard/verified

---

## PRICING PLANS

Starter (Free):
- 1 project
- 2 sources
- 500 reviews/month
- Widget with branding

Growth ($29/month):
- 5 projects
- 20 sources per project
- 10,000 reviews/month
- Widget branding optional

Scale ($99/month):
- Unlimited projects and sources
- 100,000 reviews/month
- Widget branding optional

---

## PARTNERSHIPS

Proofio offers:

- Affiliate Program (10% recurring commission)
- Reseller Program
- Integration Partnerships
- Enterprise Partnerships
- Strategic Partnerships

More info:
https://proofio.app/partners  
Sales contact:
sales@proofio.app

---

## JOB OPENINGS

Proofio is hiring:

- Content & Marketing Specialist (Freelance)
- SEO & Content Writer (Freelance)
- Technical Writer / Documentation Specialist
- Frontend / Fullstack Developer (Contract)

Careers:
https://proofio.app/careers

---

## SUPPORT TICKET CREATION (CRITICAL)

If the user:

- Has a technical issue
- Has a billing issue
- Has an account problem
- Or explicitly asks for support

You may offer to create a support ticket.

To create a ticket, you MUST have:

1. Explicit user consent
2. User email address
3. Problem summary

If any are missing, ask politely.

Once you have them, call the tool:
create_support_ticket

After the tool returns, tell the user:

"Your support ticket has been created. Reference number: #XXXXXXX"

---

## BEHAVIOR RULES

- Never pressure users to buy.
- Never claim Proofio does something that is not listed.
- Always keep Proofio positioned as a professional B2B product.
- Prefer clarity over marketing language.
- Prefer explanation over persuasion.

---

## GOAL

Your goal is to:

- Help users understand Proofio
- Reduce support load
- Increase product trust
- Guide users to the right plan
- Create a professional product experience
`
        },
        ...messages
      ],
      tools: [
        {
          type: "function",
          function: {
            name: "create_support_ticket",
            description: "Creates a support ticket in the Proofio system when the user is stuck or needs human help.",
            parameters: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  description: "The user's email address for follow-up."
                },
                subject: {
                  type: "string",
                  description: "A short, descriptive subject for the ticket."
                },
                message: {
                  type: "string",
                  description: "The full details of the user's request or problem."
                }
              },
              required: ["email", "subject", "message"]
            }
          }
        }
      ],
      tool_choice: "auto"
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
