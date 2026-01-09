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
          content: `You are Proofy, the friendly and efficient AI assistant for Proofio. 
          Proofio is a comprehensive review aggregation platform that collects reviews from various sources.
          
          Your goal is to help users understand Proofio's features and guide them.
          
          CRITICAL INSTRUCTIONS:
          - Keep your answers as short and concise as possible.
          - Maintain a professional and polite tone.
          - DO NOT use any emojis under any circumstances.
          - Provide direct answers without unnecessary filler text.
          - Use standard Markdown for links: [Link Text](URL).
          - Respond in the language the user uses (English or German).`
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

