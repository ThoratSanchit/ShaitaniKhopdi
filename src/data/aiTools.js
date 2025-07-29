const aiTools = [
  {
    id: 1,
    name: "Kimi K2",
    icon: "🌙",
    description: "Moonshot AI's 2M-token reasoning LLM optimized for long-context analysis.",
    tags: ["LLM", "Reasoning", "Long-Context"],
    category: "Foundation",
    price: "🎁 Free-Tier",
    link: "https://www.kimi.com"
  },
  {
    id: 2,
    name: "Runner H",
    icon: "🤖",
    description: "Enterprise-grade multi-step business process automation orchestrator.",
    tags: ["AI Agent", "Automation", "Enterprise"],
    category: "Enterprise",
    price: "💰 Paid",
    link: "https://www.hcompany.ai"
  },
  {
    id: 3,
    name: "ComputerX",
    icon: "🖥️",
    description: "No-code platform for building web/desktop automation bots.",
    tags: ["AI Agent", "No-Code", "RPA"],
    category: "Developer",
    price: "🎁 Free-Trial",
    link: "https://computerx.io"
  },
  {
    id: 4,
    name: "Gemini 2.5 Flash-Lite",
    icon: "♊",
    description: "Google's fastest lightweight multimodal model for real-time tasks.",
    tags: ["LLM", "Multimodal", "Fast"],
    category: "Foundation",
    price: "🎁 Free-Tier",
    link: "https://ai.google.dev/gemini"
  },
  {
    id: 5,
    name: "Imagen 4",
    icon: "🖼️",
    description: "Google's 2K-resolution text-to-image model with superior typography.",
    tags: ["Image Gen", "Creative"],
    category: "Creative",
    price: "💰 Paid",
    link: "https://ai.google.dev/gemini/imagen"
  },
  {
    id: 6,
    name: "AWS Agentic AI",
    icon: "☁️",
    description: "Managed autonomous-agent service for cloud-based workflows.",
    tags: ["AI Agent", "Cloud", "Enterprise"],
    category: "Enterprise",
    price: "💰 Pay-as-you-go",
    link: "https://aws.amazon.com/q/agentic-ai"
  },
  {
    id: 7,
    name: "Lloyds Bank Athena",
    icon: "🏦",
    description: "Real-time fraud detection AI for banking transactions.",
    tags: ["Finance", "Fraud-Detection"],
    category: "Enterprise",
    price: "💰 Internal Only",
    link: "https://www.lloydsbankinggroup.com"
  },
  {
    id: 8,
    name: "Microsoft Copilot Vision",
    icon: "👁️",
    description: "Screen-aware multimodal assistant integrated into Windows 11.",
    tags: ["Multimodal", "Desktop"],
    category: "Productivity",
    price: "🎁 Bundled",
    link: "https://support.microsoft.com/copilot-vision"
  },
  {
    id: 9,
    name: "Thinking Machines",
    icon: "🧠",
    description: "Open-source interpretable foundation models for research.",
    tags: ["Research", "Open-Source"],
    category: "Research",
    price: "🆓 Open-Source",
    link: "https://thinkingmachines.ai"
  },
  {
    id: 10,
    name: "SoundHound Healthcare",
    icon: "🗣️",
    description: "HIPAA-compliant voice AI for clinical documentation and workflows.",
    tags: ["Healthcare", "Voice", "HIPAA"],
    category: "Healthcare",
    price: "💰 Enterprise Quote",
    link: "https://www.soundhound.com/healthcare"
  },
  {
    id: 11,
    name: "Google Veo 3",
    icon: "🎬",
    description: "8-second 720p video generation with synchronized audio.",
    tags: ["Video Gen", "Creative"],
    category: "Creative",
    price: "💰 Paid",
    link: "https://ai.google.dev/gemini/veo"
  },
  {
    id: 12,
    name: "AlphaGenome",
    icon: "🧬",
    description: "DeepMind's genomic model for predicting variant impact.",
    tags: ["Genomics", "Research"],
    category: "Research",
    price: "🆓 Research Paper + API",
    link: "https://deepmind.google/discover/blog/alphagenome/"
  },
  {
    id: 13,
    name: "Delta Airlines AI",
    icon: "✈️",
    description: "Predictive maintenance and dynamic pricing system for aviation.",
    tags: ["Aviation", "Operations"],
    category: "Enterprise",
    price: "💰 Internal Only",
    link: "https://news.delta.com/ai-innovation"
  },
  {
    id: 14,
    name: "Bloomberg Government AI",
    icon: "🏛️",
    description: "Legislative analytics for tracking bills and hearings.",
    tags: ["Government", "Legal"],
    category: "Enterprise",
    price: "💰 Subscription",
    link: "https://www.bloomberg.com/government"
  },
  {
    id: 15,
    name: "Singapore Materials AI",
    icon: "🔋",
    description: "National AI program for discovering sustainable materials.",
    tags: ["Materials", "Sustainability"],
    category: "Research",
    price: "🆓 Academic Collaboration",
    link: "https://www.aisingapore.org/materials-ai"
  },
  {
    id: 16,
    name: "Pentagon Military AI",
    icon: "🎖️",
    description: "DoD's AI portfolio including Project Maven and autonomous drone swarms.",
    tags: ["Defense", "Security"],
    category: "Government",
    price: "💰 Classified",
    link: "https://www.defense.gov/ai/"
  },
  {
    id: 17,
    name: "GPT-4.5",
    icon: "🤖",
    description: "OpenAI's latest multimodal model with advanced reasoning and vision.",
    tags: ["LLM", "Multimodal"],
    category: "Foundation",
    price: "💰 Paid API / Plus",
    link: "https://openai.com/index/gpt-4-5/"
  },
  {
    id: 18,
    name: "Claude 3.7 Sonnet",
    icon: "🟢",
    description: "Anthropic's balanced model with 200K context window.",
    tags: ["LLM", "Reasoning"],
    category: "Foundation",
    price: "🎁 Free-Tier / Paid API",
    link: "https://claude.ai"
  },
  {
    id: 19,
    name: "Grok 3",
    icon: "🪓",
    description: "xAI's reasoning LLM with real-time 𝕏 (Twitter) data integration.",
    tags: ["LLM", "Real-Time"],
    category: "Foundation",
    price: "💰 𝕏 Premium+",
    link: "https://grok.x.ai"
  },
  {
    id: 20,
    name: "Stable Diffusion 3.5",
    icon: "🎨",
    description: "Open-weights image model specializing in photorealism.",
    tags: ["Image Gen", "Open-Source"],
    category: "Creative",
    price: "🆓 Open-Source",
    link: "https://stability.ai/stable-diffusion-3-5"
  },
  {
    id: 21,
    name: "Gemini 2.5 Pro",
    icon: "♊",
    description: "Google's flagship reasoning model with 1M context.",
    tags: ["LLM", "Reasoning", "Multimodal"],
    category: "Foundation",
    price: "🎁 Free-Tier / Paid",
    link: "https://ai.google.dev/gemini"
  },
  {
    id: 22,
    name: "DeepSeek R1",
    icon: "🏮",
    description: "Open-weights reasoning LLM optimized for 1/10th the cost of alternatives.",
    tags: ["LLM", "Open-Source"],
    category: "Foundation",
    price: "🆓 Open-Source",
    link: "https://www.deepseek.com"
  },
  {
    id: 23,
    name: "Llama 4 405B",
    icon: "🦙",
    description: "Meta's largest open-weight multimodal LLM.",
    tags: ["LLM", "Multimodal", "Open-Source"],
    category: "Foundation",
    price: "🆓 Open-Source",
    link: "https://llama.meta.com/llama4"
  },
  {
    id: 24,
    name: "Mistral Large 2",
    icon: "🥐",
    description: "French 123B model excelling in code and math.",
    tags: ["LLM", "Code", "Multilingual"],
    category: "Foundation",
    price: "💰 Paid API",
    link: "https://mistral.ai/news/mistral-large-2"
  },
  {
    id: 25,
    name: "Qwen 3 235B",
    icon: "🐉",
    description: "Alibaba's bilingual MoE model with 128K context and hybrid reasoning.",
    tags: ["LLM", "Bilingual", "Open-Source"],
    category: "Foundation",
    price: "🆓 Open-Source",
    link: "https://qwenlm.github.io/blog/qwen3"
  },
  {
    id: 26,
    name: "Claude 4 Opus",
    icon: "🟢",
    description: "Anthropic's top-tier model (preview) for coding and complex reasoning.",
    tags: ["LLM", "Coding", "Reasoning"],
    category: "Foundation",
    price: "💰 Paid API (Preview)",
    link: "https://anthropic.com/news/claude-4-family"
  },
  {
    id: 27,
    name: "OpenAI o3",
    icon: "⚡",
    description: "April 2025 reasoning specialist model.",
    tags: ["LLM", "Reasoning"],
    category: "Foundation",
    price: "💰 Paid API",
    link: "https://openai.com/index/introducing-o3"
  },
  {
    id: 28,
    name: "DALL·E 3",
    icon: "🎨",
    description: "OpenAI's built-in ChatGPT image generator.",
    tags: ["Image Gen"],
    category: "Creative",
    price: "💰 ChatGPT Plus",
    link: "https://openai.com/dall-e-3"
  },
  {
    id: 29,
    name: "Sora Turbo",
    icon: "🎥",
    description: "OpenAI's 20-second 1080p video generator.",
    tags: ["Video Gen"],
    category: "Creative",
    price: "💰 Plus-Pro",
    link: "https://openai.com/sora"
  },
  {
    id: 30,
    name: "Midjourney v7",
    icon: "🌌",
    description: "Ultra-realistic style-consistent image generation.",
    tags: ["Image Gen"],
    category: "Creative",
    price: "💰 Subscription",
    link: "https://www.midjourney.com"
  },
  {
    id: 31,
    name: "Flux 1.1 Pro",
    icon: "🌠",
    description: "Open-weights SOTA image model for prompt adherence.",
    tags: ["Image Gen", "Open-Source"],
    category: "Creative",
    price: "🆓 Open-Weights",
    link: "https://blackforestlabs.ai/flux-1-1-pro"
  },
  {
    id: 32,
    name: "Runway Gen-3 Alpha Turbo",
    icon: "🎞️",
    description: "10-second 720p video generator with camera controls.",
    tags: ["Video Gen"],
    category: "Creative",
    price: "💰 Credit-Based",
    link: "https://runwayml.com/gen3"
  },
  {
    id: 33,
    name: "ElevenLabs Voice AI",
    icon: "🔊",
    description: "TTS, voice cloning, and dubbing in 32 languages.",
    tags: ["Voice", "Multilingual"],
    category: "Creative",
    price: "🎁 Free-Tier / Paid",
    link: "https://elevenlabs.io"
  },
  {
    id: 34,
    name: "Cohere Command R+",
    icon: "🧩",
    description: "128K-context RAG-optimized LLM for enterprise.",
    tags: ["LLM", "RAG", "Enterprise"],
    category: "Enterprise",
    price: "💰 Paid API",
    link: "https://cohere.com/command-r-plus"
  },
  {
    id: 35,
    name: "Perplexity Sonar",
    icon: "🎯",
    description: "Real-time search LLM with citations.",
    tags: ["LLM", "Search"],
    category: "Productivity",
    price: "🎁 Free / Pro",
    link: "https://www.perplexity.ai"
  },
  {
    id: 36,
    name: "AutoGPT Agent",
    icon: "🤖",
    description: "Autonomous goal-driven agent framework.",
    tags: ["AI Agent", "Framework"],
    category: "Developer",
    price: "🆓 Open-Source",
    link: "https://agpt.co"
  },
  {
    id: 37,
    name: "Hugging Face Transformers",
    icon: "🤗",
    description: "Hub for 500K+ models and datasets.",
    tags: ["Hub", "Community"],
    category: "Developer",
    price: "🆓 Open-Source",
    link: "https://huggingface.co"
  },
  {
    id: 38,
    name: "OpenRouter",
    icon: "🚪",
    description: "Unified API for 200+ LLMs.",
    tags: ["Gateway", "API"],
    category: "Developer",
    price: "🎁 Free-Tier / Paid",
    link: "https://openrouter.ai"
  },
  {
    id: 39,
    name: "LangChain",
    icon: "⛓️",
    description: "Framework for building LLM-powered applications.",
    tags: ["Framework", "Open-Source"],
    category: "Developer",
    price: "🆓 Open-Source",
    link: "https://langchain.com"
  },
  {
    id: 40,
    name: "LangGraph",
    icon: "🕸️",
    description: "Cyclic multi-agent workflow library.",
    tags: ["AI Agent", "Workflow"],
    category: "Developer",
    price: "🆓 Open-Source",
    link: "https://langchain-ai.github.io/langgraph"
  }
];


export default aiTools;