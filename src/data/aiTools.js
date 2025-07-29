const aiTools = [
  {
    id: 1,
    name: "Kimi",
    icon: "🌙",
    description: "Moonshot AI's 2M-token reasoning LLM optimized for long-context analysis.",
    tags: ["LLM", "Reasoning", "Long-Context"],
    category: "Foundation",
    price: "🎁 Free-Tier",
    link: "https://kimi.ai"
  },
  {
    id: 2,
    name: "UiPath",
    icon: "🤖",
    description: "Enterprise-grade multi-step business process automation orchestrator.",
    tags: ["AI Agent", "Automation", "Enterprise"],
    category: "Enterprise",
    price: "💰 Paid",
    link: "https://www.uipath.com"
  },
  {
    id: 3,
    name: "Axiom.ai",
    icon: "🖥️",
    description: "No-code platform for building web/desktop automation bots.",
    tags: ["AI Agent", "No-Code", "RPA"],
    category: "Developer",
    price: "🎁 Free-Trial",
    link: "https://axiom.ai"
  },
  {
    id: 4,
    name: "Gemini 1.5 Flash",
    icon: "♊",
    description: "Google's fastest lightweight multimodal model for real-time tasks.",
    tags: ["LLM", "Multimodal", "Fast"],
    category: "Foundation",
    price: "🎁 Free-Tier",
    link: "https://deepmind.google/technologies/gemini/flash"
  },
  {
    id: 5,
    name: "Imagen 3",
    icon: "🖼️",
    description: "Google's 2K-resolution text-to-image model with superior typography.",
    tags: ["Image Gen", "Creative"],
    category: "Creative",
    price: "💰 Paid",
    link: "https://deepmind.google/technologies/imagen-3/"
  },
  {
    id: 6,
    name: "Agents for Amazon Bedrock",
    icon: "☁️",
    description: "Managed autonomous-agent service for cloud-based workflows.",
    tags: ["AI Agent", "Cloud", "Enterprise"],
    category: "Enterprise",
    price: "💰 Pay-as-you-go",
    link: "https://aws.amazon.com/bedrock/agents/"
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
    name: "Microsoft Copilot in Windows",
    icon: "👁️",
    description: "Screen-aware multimodal assistant integrated into Windows 11.",
    tags: ["Multimodal", "Desktop"],
    category: "Productivity",
    price: "🎁 Bundled",
    link: "https://www.microsoft.com/en-us/windows/copilot-ai-features"
  },
  {
    id: 9,
    name: "EleutherAI",
    icon: "🧠",
    description: "Collective for open-source interpretable foundation models for research.",
    tags: ["Research", "Open-Source"],
    category: "Research",
    price: "🆓 Open-Source",
    link: "https://www.eleuther.ai"
  },
  {
    id: 10,
    name: "SoundHound for Healthcare",
    icon: "🗣️",
    description: "HIPAA-compliant voice AI for clinical documentation and workflows.",
    tags: ["Healthcare", "Voice", "HIPAA"],
    category: "Healthcare",
    price: "💰 Enterprise Quote",
    link: "https://www.soundhound.com/voice-ai-solutions/healthcare/"
  },
  {
    id: 11,
    name: "Google Veo",
    icon: "🎬",
    description: "High-quality 1080p video generation model with advanced controls.",
    tags: ["Video Gen", "Creative"],
    category: "Creative",
    price: "💰 Paid",
    link: "https://deepmind.google/technologies/veo/"
  },
  {
    id: 12,
    name: "AlphaMissense",
    icon: "🧬",
    description: "DeepMind's genomic model for predicting variant impact.",
    tags: ["Genomics", "Research"],
    category: "Research",
    price: "🆓 Research Paper + API",
    link: "https://deepmind.google/discover/blog/alphamissense-catalogue-of-predicted-pathogenic-missense-mutations/"
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
    link: "https://about.bgov.com/"
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
    name: "Pentagon Military AI (CDAO)",
    icon: "🎖️",
    description: "DoD's AI portfolio including Project Maven and autonomous systems.",
    tags: ["Defense", "Security"],
    category: "Government",
    price: "💰 Classified",
    link: "https://www.cdao.mil/"
  },
  {
    id: 17,
    name: "GPT-4o",
    icon: "🤖",
    description: "OpenAI's latest multimodal model with advanced reasoning and vision.",
    tags: ["LLM", "Multimodal"],
    category: "Foundation",
    price: "💰 Paid API / Plus",
    link: "https://openai.com/index/hello-gpt-4o/"
  },
  {
    id: 18,
    name: "Claude 3.5 Sonnet",
    icon: "🟢",
    description: "Anthropic's balanced model with 200K context window and advanced vision.",
    tags: ["LLM", "Reasoning"],
    category: "Foundation",
    price: "🎁 Free-Tier / Paid API",
    link: "https://www.anthropic.com/news/claude-3-5-sonnet"
  },
  {
    id: 19,
    name: "Grok-1.5",
    icon: "🪓",
    description: "xAI's reasoning LLM with real-time 𝕏 (Twitter) data integration.",
    tags: ["LLM", "Real-Time"],
    category: "Foundation",
    price: "💰 𝕏 Premium+",
    link: "https://grok.x.ai"
  },
  {
    id: 20,
    name: "Stable Diffusion 3",
    icon: "🎨",
    description: "Open-weights image model specializing in photorealism and typography.",
    tags: ["Image Gen", "Open-Source"],
    category: "Creative",
    price: "🆓 Open-Source",
    link: "https://stability.ai/stablediffusion3"
  },
  {
    id: 21,
    name: "Gemini 1.5 Pro",
    icon: "♊",
    description: "Google's flagship reasoning model with 1M context.",
    tags: ["LLM", "Reasoning", "Multimodal"],
    category: "Foundation",
    price: "🎁 Free-Tier / Paid",
    link: "https://deepmind.google/technologies/gemini/pro"
  },
  {
    id: 22,
    name: "DeepSeek-V2",
    icon: "🏮",
    description: "Open-source Mixture-of-Experts LLM optimized for performance and efficiency.",
    tags: ["LLM", "Open-Source"],
    category: "Foundation",
    price: "🆓 Open-Source",
    link: "https://www.deepseek.com/en/blog/deepseek-v2"
  },
  {
    id: 23,
    name: "Llama 3",
    icon: "🦙",
    description: "Meta's latest family of open-weight multimodal LLMs.",
    tags: ["LLM", "Multimodal", "Open-Source"],
    category: "Foundation",
    price: "🆓 Open-Source",
    link: "https://llama.meta.com/"
  },
  {
    id: 24,
    name: "Mistral Large 2",
    icon: "🥐",
    description: "French 123B model excelling in code, math, and multilingual tasks.",
    tags: ["LLM", "Code", "Multilingual"],
    category: "Foundation",
    price: "💰 Paid API",
    link: "https://mistral.ai/news/mistral-large-2/"
  },
  {
    id: 25,
    name: "Qwen2",
    icon: "🐉",
    description: "Alibaba's open-source bilingual MoE model family.",
    tags: ["LLM", "Bilingual", "Open-Source"],
    category: "Foundation",
    price: "🆓 Open-Source",
    link: "https://qwenlm.github.io/blog/qwen2/"
  },
  {
    id: 26,
    name: "Claude 3 Opus",
    icon: "🟢",
    description: "Anthropic's top-tier model for coding and complex reasoning.",
    tags: ["LLM", "Coding", "Reasoning"],
    category: "Foundation",
    price: "💰 Paid API",
    link: "https://www.anthropic.com/news/claude-3-family"
  },
  {
    id: 27,
    name: "OpenAI",
    icon: "⚡",
    description: "Research and deployment company behind GPT, DALL·E, and Sora.",
    tags: ["LLM", "Reasoning"],
    category: "Foundation",
    price: "💰 Paid API",
    link: "https://openai.com"
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
    name: "Sora",
    icon: "🎥",
    description: "OpenAI's text-to-video model for generating realistic scenes.",
    tags: ["Video Gen"],
    category: "Creative",
    price: "💰 Plus-Pro",
    link: "https://openai.com/sora"
  },
  {
    id: 30,
    name: "Midjourney v6",
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
    link: "https://blackforestlabs.ai/flux-1-1-pro/"
  },
  {
    id: 32,
    name: "Runway Gen-3 Alpha",
    icon: "🎞️",
    description: "Video generator with fine-grained controls for structure and style.",
    tags: ["Video Gen"],
    category: "Creative",
    price: "💰 Credit-Based",
    link: "https://runwayml.com/pages/gen-3/"
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
    name: "Perplexity",
    icon: "🎯",
    description: "Real-time conversational search engine with citations.",
    tags: ["LLM", "Search"],
    category: "Productivity",
    price: "🎁 Free / Pro",
    link: "https://www.perplexity.ai"
  },
  {
    id: 36,
    name: "AutoGPT",
    icon: "🤖",
    description: "Open-source autonomous goal-driven agent framework.",
    tags: ["AI Agent", "Framework"],
    category: "Developer",
    price: "🆓 Open-Source",
    link: "https://agpt.co"
  },
  {
    id: 37,
    name: "Hugging Face Hub",
    icon: "🤗",
    description: "The leading platform for open-source AI models, datasets, and demos.",
    tags: ["Hub", "Community"],
    category: "Developer",
    price: "🆓 Open-Source",
    link: "https://huggingface.co"
  },
  {
    id: 38,
    name: "OpenRouter",
    icon: "🚪",
    description: "Unified API for 200+ LLMs, with fallback and routing logic.",
    tags: ["Gateway", "API"],
    category: "Developer",
    price: "🎁 Free-Tier / Paid",
    link: "https://openrouter.ai"
  },
  {
    id: 39,
    name: "LangChain",
    icon: "⛓️",
    description: "Framework for developing applications powered by language models.",
    tags: ["Framework", "Open-Source"],
    category: "Developer",
    price: "🆓 Open-Source",
    link: "https://www.langchain.com"
  },
  {
    id: 40,
    name: "LangGraph",
    icon: "🕸️",
    description: "Library for building stateful, multi-agent applications with LLMs.",
    tags: ["AI Agent", "Workflow"],
    category: "Developer",
    price: "🆓 Open-Source",
    link: "https://langchain-ai.github.io/langgraph/"
  }
];


export default aiTools;