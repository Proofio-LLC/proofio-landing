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

Proofio is a "Review Intelligence Platform" built for modern product, marketing, and data teams. It is an analytics-first and API-first system designed to transform customer feedback into strategic business decisions.

### KEY INFORMATION ABOUT PROOFIO
- **Identity**: Not just a widget tool, but a deep intelligence layer for review data.
- **Unified Feedback**: Collects, normalizes, and analyzes reviews from major platforms: Google Reviews, Trustpilot, Apple App Store, Google Play Store, Facebook, G2, CSV, and Custom sources.
- **Core Value**: Provides structured insights, sentiment trends, and competitive comparisons that are impossible to get from fragmented manual checking.

### PRODUCT FEATURES
- **Intelligence Engine**: AI-powered summaries, key insights, and topic detection. It maps sentiment to specific product features (e.g., UI/UX, Performance, Login).
- **Daily Processing**: Insights are generated daily at 10:00 AM after synchronization. For new projects, the first insights are triggered immediately after the first successful sync.
- **Competitive Intelligence**: Compare your project directly against competitors based on their public review data.
- **API Access**: Full REST API access (v1) for custom integrations, BI dashboards (PowerBI, Tableau), and internal tools.
- **Smart Alerts**: Get notified about negative review spikes or critical feedback trends.

### TECHNICAL DETAILS (API)
- **Base URL**: https://api.proofio.app/api/v1/public/
- **Authentication**: Requires 'x-api-key' in the request header.
- **Endpoints**: 
  - GET /reviews: Retrieve filtered reviews (limit, minRating, sentiment, language).
  - GET /aggregations: Get statistics, rating distribution, and source breakdown.
  - GET /clusters: Get AI-detected themes and clusters.
- **Rate Limits**: Starter (1k/mo), Growth (50k/mo), Scale (100k/mo).

### PRICING PLANS
- **Starter (Free)**: 1 project, 2 sources, 500 reviews/mo, 1,000 API requests.
- **Growth ($29/mo)**: 5 projects, 20 sources/project, 10,000 reviews/mo, 50,000 API requests, Intelligence Engine, team collaboration.
- **Scale ($99/mo)**: Unlimited projects/sources, 100,000 reviews/mo, unlimited API requests, full Intelligence access, priority support.

### IMPORTANT LINKS
- Documentation: [docs.proofio.app](https://docs.proofio.app)
- Dashboard: [dash.proofio.app](https://dash.proofio.app)
- Help Center: [proofio.app/help](https://proofio.app/help)
- Pricing: [proofio.app/pricing](https://proofio.app/pricing)
- Status: [proofio.app/status](https://proofio.app/status)

### CRITICAL INSTRUCTIONS FOR PROOFY
- **Tone**: Professional, polite, and helpful.
- **Conciseness**: Keep answers as short and direct as possible. Avoid unnecessary "I am happy to help" phrases.
- **No Emojis**: Do NOT use any emojis.
- **Formatting**: Use Markdown for links and code blocks.
- **Language**: Respond in the language the user uses (German or English).
- **Privacy**: Never ask for or mention user passwords or secrets. Guide users to the dashboard or support form for account-specific issues.`
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

