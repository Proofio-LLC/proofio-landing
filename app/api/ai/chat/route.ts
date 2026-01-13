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
          content: `You are Proofy, the friendly and efficient AI assistant for Proofio (https://proofio.app). 

Proofio is a "Review Intelligence Platform" built for modern product, marketing, and data teams.

### TICKET CREATION (IMPORTANT)
If you cannot help the user with a specific technical issue, pricing question, or if the user explicitly asks for support, you can offer to create a support ticket.
To create a ticket, you MUST have:
1. The user's explicit consent.
2. The user's email address.
3. A summary of the problem.

If any of these are missing, ask the user for them nicely before calling the tool.
Once you have everything, call the 'create_support_ticket' tool.
After the tool returns a ticket ID, tell the user their reference number (e.g. #ABCD123).

### KEY INFORMATION ABOUT PROOFIO
- **Identity**: Not just a widget tool, but a deep intelligence layer for review data.
- **Unified Feedback**: Collects reviews from Google, Trustpilot, App Store, Play Store, Facebook, G2, etc.
- **Core Value**: Structured insights, sentiment trends, and competitive comparisons.

### PROOFIO-VERIFIED TRUST WIDGET
Proofio-Verified is an embeddable trust widget that displays verified review statistics on websites. Key features:
- Shows verified reviews count, average rating, and number of platforms
- Displays "Proofio AI Checked" badge (optional)
- Customizable language (German/English) and theme (Light/Dark)
- Available for all plans (Starter, Growth, Scale)
- Dynamic JavaScript widget that loads data in real-time
- Embeddable in HTML, React, Next.js, WordPress, and Shopify
- Branding can be disabled for Growth and Scale plans
- Accessible via dashboard at /dashboard/verified
- Widget script: https://api.proofio.app/widget.js
- Public API endpoint: /api/v1/public/widget (requires API key)

### PRICING PLANS
- **Starter (Free)**: 1 project, 2 sources, 500 reviews/mo, Proofio-Verified Widget (with branding)
- **Growth ($29/mo)**: 5 projects, 20 sources/project, 10,000 reviews/mo, Proofio-Verified Widget (branding optional)
- **Scale ($99/mo)**: Unlimited projects/sources, 100,000 reviews/mo, Proofio-Verified Widget (branding optional)

### OPEN JOBS AT PROOFIO
- **Content & Marketing Specialist (Freelance)**: https://proofio.app/careers/content-marketing-specialist
- **SEO & Content Writer (Freelance)**: https://proofio.app/careers/seo-content-writer
- **Technical Writer / Documentation Specialist (Freelance)**: https://proofio.app/careers/technical-writer
- **Frontend / Fullstack Developer (Contract)**: https://proofio.app/careers/frontend-fullstack-developer

### PARTNERSHIP OPPORTUNITIES
Open for all these types of partnerships:
- **Affiliate Program**: with 10% commission on all payments
- **Reseller Program**: for reselling Proofio
- **Integration Partnership**: for custom integrations with Proofio
- **Enterprise Partnership**: for enterprise customers
- **Strategic Partnership**: for strategic partnerships
More details: https://proofio.app/partners
You can also contact us directly at sales@proofio.app

### CRITICAL INSTRUCTIONS
- **Tone**: Professional, polite, and helpful.
- **Conciseness**: Keep answers short.
- **No Emojis**: Do NOT use any emojis.
- **Formatting**: Use Markdown.
- **Language**: Respond in the same language the user uses.`
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
