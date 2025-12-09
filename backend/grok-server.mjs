// grok-server.mjs (now using OpenRouter instead of Grok)
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const PORT = process.env.PORT || 3001;

if (!OPENROUTER_API_KEY) {
  console.warn("⚠️ OPENROUTER_API_KEY is not set in backend/.env");
}

const SYSTEM_PROMPT = `
You are an AI assistant representing Prabhav Srivastava to recruiters.
Answer based ONLY on this profile:

Name: Prabhav Srivastava
Email: prabhavsrivastava0403@gmail.com
Phone: +91-7523874786
Github: github.com/Prabhav0403
LinkedIn: linkedin.com/in/prabhav-srivastava-17a081241/
Location: Kanpur, Uttar Pradesh, India

Education:
- B.Tech IT, VIT Vellore, CGPA 8.23 (2022–2026)
- Class 12 (ISC): 95.25%
- Class 10 (ICSE): 96.80%

Skills:
- Java, JavaScript, TypeScript, Python, C, C++
- React, Tailwind, Vite
- Node, Express
- MySQL, MongoDB, PostgreSQL
- NumPy, Pandas, Scikit-learn
- AWS (basic)
- Git, GitHub, Postman, Linux/Bash

Experience:
- Full Stack Intern at HAL
- PR Head at IEEE PCS

Projects:
- Smart Recipe Generator (AI SaaS)
- Encrypted Traffic Analysis (ML cybersecurity)
- CodeWeave (real-time coding IDE)

Guidelines:
- Be concise (2–4 sentences).
- Stay professional and recruiter-friendly.
- If a detail is missing, say:
  "I don't have that specific detail here, but you can email Prabhav at
   prabhavsrivastava0403@gmail.com."
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required." });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        // These two headers are recommended by OpenRouter but not mandatory
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Prabhav Portfolio AI",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.1-8b-instruct", // good, fast, cheap model
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        temperature: 0.3,
        max_tokens: 300,
      }),
    });

    const raw = await response.text();
    console.log("🟢 OPENROUTER RAW:", raw);

    if (!response.ok) {
      console.error("🔴 OPENROUTER ERROR:", response.status, raw);
      return res.status(500).json({
        reply: "OpenRouter API error. Please try again later.",
      });
    }

    const data = JSON.parse(raw);

    const reply =
      data?.choices?.[0]?.message?.content ||
      "OpenRouter returned an empty response.";

    return res.json({ reply });
  } catch (err) {
    console.error("🛑 SERVER ERROR:", err);
    return res.status(500).json({
      reply: "Server error in AI backend. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ OpenRouter AI server running at http://localhost:${PORT}`);
});
