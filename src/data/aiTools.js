// Same exact schema as your original aiTools array  
// ➜ only added new field `image` (model/API links in description)

const aiTools = [
  {
    id: 1,
    name: "Grok 4",
    description: "Model/API: https://x.ai/api — Elon Musk’s xAI multimodal LLM (image, video, voice, reasoning).",
    tags: ["LLM","Multimodal","Voice"],
    icon: "🧠",
    link: "https://x.ai/api",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    name: "Grok for Government",
    description: "Model/API: https://x.ai/api — xAI DoD-focused suite (Grok, Deep Search, Tool Use).",
    tags: ["LLM","GovTech","Agents"],
    icon: "🏛️",
    link: "https://x.ai/api",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    name: "Claude 4 (Opus/Sonnet)",
    description: "Model/API: https://api.anthropic.com — Anthropic multimodal LLM for hybrid reasoning & coding.",
    tags: ["LLM","Coding","Research"],
    icon: "🧮",
    link: "https://api.anthropic.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 4,
    name: "Perplexity AI",
    description: "Model/API: https://api.perplexity.ai — AI search assistant with cited summaries.",
    tags: ["AI Search","Research","Writing"],
    icon: "🔍",
    link: "https://api.perplexity.ai",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 5,
    name: "Mistral Medium 3",
    description: "Model/API: https://api.mistral.ai — Enterprise LLM rivaling Claude Sonnet.",
    tags: ["LLM","Open-Source","Coding"],
    icon: "📘",
    link: "https://api.mistral.ai",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 6,
    name: "ComputerX",
    description: "Model/API: https://computerx.ai/api — Desktop AI agent operating across apps.",
    tags: ["AI Agent","Productivity","Desktop"],
    icon: "🖥️",
    link: "https://computerx.ai/api",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 7,
    name: "Runner H",
    description: "Model/API: https://www.hcompany.ai/api — Multi-step workflow orchestrator.",
    tags: ["AI Agent","Automation","App Integration"],
    icon: "🤖",
    link: "https://www.hcompany.ai/api",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 8,
    name: "GitHub Copilot",
    description: "Model/API: https://api.githubcopilot.com — AI coding assistant in IDEs.",
    tags: ["Coding Assistant"],
    icon: "💻",
    link: "https://api.githubcopilot.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 9,
    name: "Gemini Code Assist",
    description: "Model/API: https://ai.google.dev/gemini — Google’s Windsurf-based coding tool.",
    tags: ["Coding Assistant","Enterprise"],
    icon: "🔧",
    link: "https://ai.google.dev/gemini",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 10,
    name: "Midjourney V6",
    description: "Model/API: https://api.midjourney.com — Advanced text-to-image generation.",
    tags: ["Image Generation","Creative"],
    icon: "🖼️",
    link: "https://api.midjourney.com",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 11,
    name: "Adobe Firefly 3",
    description: "Model/API: https://firefly.adobe.com/api — Integrated Creative Cloud generative model.",
    tags: ["Image Generation","Video","Creative"],
    icon: "🎨",
    link: "https://firefly.adobe.com/api",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 12,
    name: "Runway ML",
    description: "Model/API: https://api.runwayml.com — AI video generation & editing toolkit.",
    tags: ["Video","Creative"],
    icon: "🎬",
    link: "https://api.runwayml.com",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 13,
    name: "Synthesia Studio Pro",
    description: "Model/API: https://api.synthesia.io — Multilingual avatar-based video creation.",
    tags: ["Video","Avatars"],
    icon: "🎥",
    link: "https://api.synthesia.io",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 14,
    name: "ElevenLabs Voice AI",
    description: "Model/API: https://api.elevenlabs.io — High-fidelity multilingual voice synthesis.",
    tags: ["Voice","Audio"],
    icon: "🎙️",
    link: "https://api.elevenlabs.io",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 15,
    name: "AutoGPT 2.0",
    description: "Model/API: https://api.autogpt.ai — Open-source autonomous agent chaining tasks.",
    tags: ["AI Agents","Automation"],
    icon: "🤖",
    link: "https://api.autogpt.ai",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 16,
    name: "Adept ACT-1",
    description: "Model/API: https://api.adept.ai — Agent that interacts with software on your behalf.",
    tags: ["AI Agents","Productivity"],
    icon: "🧩",
    link: "https://api.adept.ai",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 17,
    name: "Notion AI",
    description: "Model/API: https://www.notion.so/help/ai — Embedded AI in notes & tasks.",
    tags: ["Productivity","Writing"],
    icon: "📝",
    link: "https://www.notion.so/help/ai",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 18,
    name: "Grammarly GO",
    description: "Model/API: https://developer.grammarly.com — Real-time writing assistant API.",
    tags: ["Writing","Productivity"],
    icon: "✍️",
    link: "https://developer.grammarly.com",
    image: "https://images.unsplash.com/photo-1555421689-343a945c78d4?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 19,
    name: "Luma AI",
    description: "Model/API: https://lumalabs.ai/api — 3D asset generation from photos.",
    tags: ["Image Generation","3D"],
    icon: "📸",
    link: "https://lumalabs.ai/api",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 20,
    name: "Taskade AI",
    description: "Model/API: https://www.taskade.com/api — AI workspace for chat, tasks & mind-maps.",
    tags: ["Productivity","Teamwork"],
    icon: "📋",
    link: "https://www.taskade.com/api",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=60"
  }
];

export default aiTools;