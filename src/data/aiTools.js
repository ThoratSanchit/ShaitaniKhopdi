const aiTools = [
  {
    "id": 1,
    "name": "Kimi K2",
    "description": "Open-source Mixture-of-Experts model with 1T parameters, excelling in agentic tasks like coding, math, and tool orchestration.",
    "tags": ["LLM", "Open-Source", "Coding"],
    "category": "llm",
    "icon": "🛠️",
    "link": "https://kimi.com",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 2,
    "name": "Runner H",
    "description": "Multi-step workflow orchestrator for automating complex business processes across apps.",
    "tags": ["AI Agent", "Automation", "Enterprise"],
    "category": "productivity",
    "icon": "🤖",
    "link": "https://www.hcompany.ai/api",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 3,
    "name": "ComputerX",
    "description": "Desktop AI agent that operates across applications, automating tasks locally.",
    "tags": ["AI Agent", "Productivity", "Desktop"],
    "category": "productivity",
    "icon": "🖥️",
    "link": "https://computerx.ai/api",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 4,
    "name": "Gemini 2.5 Flash-Lite",
    "description": "Google's fastest and most cost-efficient model for real-time tasks, now generally available.",
    "tags": ["LLM", "Multimodal", "Google"],
    "category": "llm",
    "icon": "⚡",
    "link": "https://ai.google.dev",
    "image": "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 5,
    "name": "Imagen 4",
    "description": "Google's advanced text-to-image model with improved text rendering and multimodal capabilities.",
    "tags": ["Image Generation", "Creative"],
    "category": "image",
    "icon": "🎨",
    "link": "https://firefly.adobe.com/api",
    "image": "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 6,
    "name": "AWS Agentic AI",
    "description": "Amazon's enterprise automation suite for multi-step business processes with minimal human input.",
    "tags": ["AI Agent", "Enterprise", "Automation"],
    "category": "productivity",
    "icon": "🔗",
    "link": "https://aws.amazon.com/agentic-ai",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 7,
    "name": "Lloyds Bank Athena",
    "description": "Generative AI assistant for financial services, automating customer support and compliance tasks.",
    "tags": ["Finance", "Productivity"],
    "category": "productivity",
    "icon": "🏦",
    "link": "https://www.lloydsbank.com/athena",
    "image": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 8,
    "name": "Microsoft Copilot Vision",
    "description": "AI that scans your desktop to detect tasks and automate workflows visually.",
    "tags": ["Productivity", "Windows"],
    "category": "productivity",
    "icon": "👁️",
    "link": "https://www.microsoft.com/copilot",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 9,
    "name": "Thinking Machines",
    "description": "Mira Murati's $10B-valued startup focused on autonomous agentic AI for enterprise decision-making.",
    "tags": ["AI Agents", "Enterprise"],
    "category": "productivity",
    "icon": "🧠",
    "link": "https://thinkingmachines.ai",
    "image": "https://images.unsplash.com/photo-1620712943543-b0712943543?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 10,
    "name": "SoundHound Healthcare",
    "description": "Voice AI assistant for clinics, handling patient intake and scheduling via natural language.",
    "tags": ["Voice", "Healthcare"],
    "category": "audio",
    "icon": "🎙️",
    "link": "https://www.soundhound.com/healthcare",
    "image": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 11,
    "name": "Google Veo 3",
    "description": "AI video generator with audio synthesis, ideal for creative storytelling and marketing.",
    "tags": ["Video", "Creative"],
    "category": "video",
    "icon": "🎬",
    "link": "https://ai.google/veo",
    "image": "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 12,
    "name": "AlphaGenome",
    "description": "Google's DNA sequence model for predicting regulatory variants, available for non-commercial research.",
    "tags": ["Biotech", "Science"],
    "category": "research",
    "icon": "🧬",
    "link": "https://alphagenome.google",
    "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 13,
    "name": "Delta Airlines AI",
    "description": "Optimizes flight routes, baggage handling, and passenger experiences using real-time AI.",
    "tags": ["Logistics", "Travel"],
    "category": "productivity",
    "icon": "✈️",
    "link": "https://www.delta.com/ai",
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 14,
    "name": "Bloomberg Government AI",
    "description": "Converts federal budget documents into actionable data for faster decision-making.",
    "tags": ["Government", "Data"],
    "category": "research",
    "icon": "📊",
    "link": "https://www.bloomberggovernment.com/ai",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 15,
    "name": "Singapore Materials AI",
    "description": "Accelerates discovery of sustainable materials using AI simulations.",
    "tags": ["Science", "Sustainability"],
    "category": "research",
    "icon": "🔬",
    "link": "https://www.a-star.edu.sg/materials-ai",
    "image": "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 16,
    "name": "Pentagon Military AI",
    "description": "Partners with tech firms to enhance battlefield logistics and threat analysis.",
    "tags": ["Defense", "AI Agents"],
    "category": "research",
    "icon": "🛡️",
    "link": "https://www.defense.gov/ai",
    "image": "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 17,
    "name": "GPT-4.5",
    "description": "OpenAI's latest multimodal model with improved reasoning and emotional intelligence.",
    "tags": ["LLM", "Multimodal"],
    "category": "llm",
    "icon": "🤖",
    "link": "https://openai.com/gpt-4.5",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 18,
    "name": "Claude 3.7 Sonnet",
    "description": "Anthropic's coding-optimized LLM with extended thinking mode for complex tasks.",
    "tags": ["LLM", "Coding"],
    "category": "code",
    "icon": "🧮",
    "link": "https://claude.ai",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 19,
    "name": "Grok 3",
    "description": "xAI's uncensored model with advanced reasoning and real-time X (Twitter) integration.",
    "tags": ["LLM", "Social"],
    "category": "llm",
    "icon": "🦊",
    "link": "https://grok.x.ai",
    "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 20,
    "name": "Stable Diffusion 3.5",
    "description": "Open-source image generator with enhanced quality for UI mockups and technical illustrations.",
    "tags": ["Image Generation", "Open-Source"],
    "category": "image",
    "icon": "🎨",
    "link": "https://stablediffusion.com",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=60"
  }
];

export default aiTools;