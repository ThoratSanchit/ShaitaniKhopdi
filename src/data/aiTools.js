const aiTools = [
  {
    "id": 1,
    "name": "Kimi K2",
    "description": "Next-generation reasoning model from Moonshot AI with 2 M-token context and advanced chain-of-thought.",
    "tags": ["LLM", "Reasoning", "Long-Context", "Chinese", "English"],
    "category": "foundation",
    "icon": "🌙",
    "link": "https://www.kimi.com/"
  },
  {
    "id": 2,
    "name": "Runner H",
    "description": "Multi-step workflow orchestrator for automating complex business processes across apps.",
    "tags": ["AI Agent", "Automation", "Enterprise"],
    "category": "productivity",
    "icon": "🤖",
    "link": "https://www.hcompany.ai/"
  },
  {
    "id": 3,
    "name": "ComputerX",
    "description": "No-code agent builder that lets anyone create autonomous web & desktop bots via natural language.",
    "tags": ["AI Agent", "No-Code", "RPA", "Desktop"],
    "category": "productivity",
    "icon": "🖥️",
    "link": "https://computerx.io/"
  },
  {
    "id": 4,
    "name": "Gemini 2.5 Flash-Lite",
    "description": "Google’s fastest lightweight multimodal model optimized for low-latency, high-throughput tasks.",
    "tags": ["LLM", "Multimodal", "Fast", "Google"],
    "category": "foundation",
    "icon": "♊",
    "link": "https://ai.google.dev/gemini"
  },
  {
    "id": 5,
    "name": "Imagen 4",
    "description": "Google’s latest text-to-image model with 2 K resolution, superior typography and watermarking.",
    "tags": ["Image Gen", "Google", "Creative"],
    "category": "creative",
    "icon": "🖼️",
    "link": "https://ai.google.dev/gemini/imagen"
  },
  {
    "id": 6,
    "name": "AWS Agentic AI",
    "description": "Managed service for deploying autonomous agents that integrate with 200+ AWS services.",
    "tags": ["AI Agent", "Cloud", "Enterprise", "AWS"],
    "category": "productivity",
    "icon": "☁️",
    "link": "https://aws.amazon.com/q/agentic-ai/"
  },
  {
    "id": 7,
    "name": "Lloyds Bank Athena",
    "description": "Internal risk & fraud-detection AI used across Lloyds Banking Group for real-time transaction monitoring.",
    "tags": ["Finance", "Fraud-Detection", "Enterprise"],
    "category": "vertical",
    "icon": "🏦",
    "link": "https://www.lloydsbankinggroup.com/"
  },
  {
    "id": 8,
    "name": "Microsoft Copilot Vision",
    "description": "Multimodal assistant that sees your screen and offers contextual help in Windows 11.",
    "tags": ["Multimodal", "Desktop", "Windows", "Microsoft"],
    "category": "productivity",
    "icon": "👁️",
    "link": "https://support.microsoft.com/copilot-vision"
  },
  {
    "id": 9,
    "name": "Thinking Machines",
    "description": "Open-source research lab creating interpretable and steerable foundation models.",
    "tags": ["Research", "Open-Source", "Interpretability"],
    "category": "research",
    "icon": "🧠",
    "link": "https://thinkingmachines.ai/"
  },
  {
    "id": 10,
    "name": "SoundHound Healthcare",
    "description": "Voice-AI platform purpose-built for HIPAA-compliant clinical workflows and patient engagement.",
    "tags": ["Healthcare", "Voice", "HIPAA", "Enterprise"],
    "category": "vertical",
    "icon": "🗣️",
    "link": "https://www.soundhound.com/healthcare"
  },
  {
    "id": 11,
    "name": "Google Veo 3",
    "description": "State-of-the-art 8-sec 720p video generation with natively synchronized audio and lip-sync.",
    "tags": ["Video Gen", "Audio", "Creative", "Google"],
    "category": "creative",
    "icon": "🎬",
    "link": "https://ai.google.dev/gemini/veo"
  },
  {
    "id": 12,
    "name": "AlphaGenome",
    "description": "DeepMind’s unified genomic foundation model predicting variant impact on gene regulation.",
    "tags": ["Genomics", "DeepMind", "Research"],
    "category": "research",
    "icon": "🧬",
    "link": "https://deepmind.google/discover/blog/alphagenome/"
  },
  {
    "id": 13,
    "name": "Delta Airlines AI",
    "description": "Operational AI suite for predictive maintenance, crew scheduling and dynamic pricing at Delta.",
    "tags": ["Aviation", "Operations", "Enterprise"],
    "category": "vertical",
    "icon": "✈️",
    "link": "https://news.delta.com/ai-innovation"
  },
  {
    "id": 14,
    "name": "Bloomberg Government AI",
    "description": "Legislative analytics platform that transforms bills, hearings and filings into actionable insights.",
    "tags": ["Government", "Legal", "Finance", "Enterprise"],
    "category": "vertical",
    "icon": "🏛️",
    "link": "https://www.bloomberg.com/government"
  },
  {
    "id": 15,
    "name": "Singapore Materials AI",
    "description": "National program leveraging AI to design next-gen sustainable materials and battery chemistries.",
    "tags": ["Materials", "Sustainability", "Research"],
    "category": "research",
    "icon": "🔋",
    "link": "https://www.aisingapore.org/materials-ai"
  },
  {
    "id": 16,
    "name": "Pentagon Military AI",
    "description": "Classified portfolio of DoD AI programs including Project Maven and autonomous drone swarms.",
    "tags": ["Defense", "Security", "Government"],
    "category": "vertical",
    "icon": "🎖️",
    "link": "https://www.defense.gov/ai/"
  },
  {
    "id": 17,
    "name": "GPT-4.5",
    "description": "OpenAI’s latest GPT-series model with enhanced reasoning, multimodal understanding and lower cost.",
    "tags": ["LLM", "Multimodal", "OpenAI"],
    "category": "foundation",
    "icon": "🤖",
    "link": "https://openai.com/index/gpt-4-5/"
  },
  {
    "id": 18,
    "name": "Claude 3.7 Sonnet",
    "description": "Anthropic’s most capable public model, featuring hybrid reasoning and a 200 K-token context window.",
    "tags": ["LLM", "Reasoning", "Anthropic"],
    "category": "foundation",
    "icon": "🟢",
    "link": "https://claude.ai/"
  },
  {
    "id": 19,
    "name": "Grok 3",
    "description": "xAI’s reasoning-first model with real-time 𝕏 data access and 128 K-token context.",
    "tags": ["LLM", "Reasoning", "Real-Time", "xAI"],
    "category": "foundation",
    "icon": "🪓",
    "link": "https://grok.x.ai/"
  },
  {
    "id": 20,
    "name": "Stable Diffusion 3.5",
    "description": "Stability AI’s open-weights image model delivering photorealism and typography in one forward pass.",
    "tags": ["Image Gen", "Open-Source", "Creative"],
    "category": "creative",
    "icon": "🎨",
    "link": "https://stability.ai/stable-diffusion-3-5"
  },
  {
    "id": 21,
    "name": "Gemini 2.5 Pro",
    "description": "Google’s flagship reasoning model with 1 M-token context and best-in-class multimodal performance.",
    "tags": ["LLM", "Reasoning", "Multimodal", "Google"],
    "category": "foundation",
    "icon": "♊",
    "link": "https://ai.google.dev/gemini"
  },
  {
    "id": 22,
    "name": "DeepSeek R1",
    "description": "Open-weights reasoning model rivaling GPT-4.5 at 1/10th the cost; supports 128 K context.",
    "tags": ["LLM", "Reasoning", "Open-Source", "Chinese"],
    "category": "foundation",
    "icon": "🔍",
    "link": "https://www.deepseek.com/"
  },
  {
    "id": 23,
    "name": "Llama 4 405B",
    "description": "Meta’s largest open-source LLM with native multimodal capabilities and 128 K-token context.",
    "tags": ["LLM", "Multimodal", "Open-Source", "Meta"],
    "category": "foundation",
    "icon": "🦙",
    "link": "https://llama.meta.com/llama4"
  },
  {
    "id": 24,
    "name": "Mistral Large 2",
    "description": "French 123 B-parameter powerhouse excelling at code, math and multilingual tasks.",
    "tags": ["LLM", "Code", "Multilingual", "French"],
    "category": "foundation",
    "icon": "🌬️",
    "link": "https://mistral.ai/news/mistral-large-2"
  },
  {
    "id": 25,
    "name": "Qwen 3 235B",
    "description": "Alibaba’s bilingual flagship with state-of-the-art reasoning and 128 K-token support.",
    "tags": ["LLM", "Bilingual", "Open-Source", "Alibaba"],
    "category": "foundation",
    "icon": "🐉",
    "link": "https://qwenlm.github.io/blog/qwen3"
  },
  {
    "id": 26,
    "name": "Claude 4 Opus",
    "description": "Anthropic’s upcoming top-tier model; early API partners report 72.7 % SWE-bench coding scores.",
    "tags": ["LLM", "Coding", "Anthropic"],
    "category": "foundation",
    "icon": "🟢",
    "link": "https://anthropic.com/news/claude-4-family"
  },
  {
    "id": 27,
    "name": "OpenAI o3",
    "description": "Specialized reasoning model released April 2025; 200 K context, 69 % SWE-bench agentic coding.",
    "tags": ["LLM", "Reasoning", "OpenAI"],
    "category": "foundation",
    "icon": "🤖",
    "link": "https://openai.com/index/introducing-o3"
  },
  {
    "id": 28,
    "name": "DALL·E 3",
    "description": "OpenAI’s flagship image generator integrated into ChatGPT Plus and the API.",
    "tags": ["Image Gen", "OpenAI", "Creative"],
    "category": "creative",
    "icon": "🎨",
    "link": "https://openai.com/dall-e-3"
  },
  {
    "id": 29,
    "name": "Sora Turbo",
    "description": "OpenAI’s 20-second 1080p video generator available to Plus/Pro users.",
    "tags": ["Video Gen", "OpenAI", "Creative"],
    "category": "creative",
    "icon": "🎥",
    "link": "https://openai.com/sora"
  },
  {
    "id": 30,
    "name": "Midjourney v7",
    "description": "Independent research lab’s ultra-realistic image model with style-reference and character consistency.",
    "tags": ["Image Gen", "Independent", "Creative"],
    "category": "creative",
    "icon": "🌌",
    "link": "https://www.midjourney.com/"
  },
  {
    "id": 31,
    "name": "Flux 1.1 Pro",
    "description": "Black Forest Labs’ open-weights model delivering SOTA prompt adherence and typography.",
    "tags": ["Image Gen", "Open-Source", "Creative"],
    "category": "creative",
    "icon": "⚡",
    "link": "https://blackforestlabs.ai/flux-1-1-pro"
  },
  {
    "id": 32,
    "name": "Runway Gen-3 Alpha Turbo",
    "description": "10-second 720p video generator with fine-grained camera and motion controls.",
    "tags": ["Video Gen", "Creative", "Runway"],
    "category": "creative",
    "icon": "🛤️",
    "link": "https://runwayml.com/gen3"
  },
  {
    "id": 33,
    "name": "ElevenLabs Voice AI",
    "description": "Production-grade text-to-speech, voice cloning and dubbing in 32 languages.",
    "tags": ["Voice", "Multilingual", "Creative"],
    "category": "creative",
    "icon": "🔊",
    "link": "https://elevenlabs.io"
  },
  {
    "id": 34,
    "name": "Cohere Command R+",
    "description": "128 K-context retrieval-augmented LLM optimized for enterprise RAG and tool use.",
    "tags": ["LLM", "RAG", "Enterprise", "Cohere"],
    "category": "productivity",
    "icon": "📚",
    "link": "https://cohere.com/command-r-plus"
  },
  {
    "id": 35,
    "name": "Perplexity Sonar",
    "description": "Real-time web-search LLM with citations and up-to-date knowledge.",
    "tags": ["LLM", "Search", "Real-Time", "Perplexity"],
    "category": "productivity",
    "icon": "🔍",
    "link": "https://www.perplexity.ai"
  },
  {
    "id": 36,
    "name": "AutoGPT Agent",
    "description": "Open-source framework for spinning up fully autonomous goal-driven agents.",
    "tags": ["AI Agent", "Open-Source", "Framework"],
    "category": "productivity",
    "icon": "🤖",
    "link": "https://agpt.co"
  },
  {
    "id": 37,
    "name": "Hugging Face Transformers",
    "description": "Library & hub hosting 500 k+ open-source models and datasets.",
    "tags": ["Hub", "Open-Source", "Community"],
    "category": "research",
    "icon": "🤗",
    "link": "https://huggingface.co"
  },
  {
    "id": 38,
    "name": "OpenRouter",
    "description": "Universal gateway that unifies 200+ LLMs behind a single API key.",
    "tags": ["Gateway", "Multi-Provider", "API"],
    "category": "productivity",
    "icon": "🔄",
    "link": "https://openrouter.ai"
  },
  {
    "id": 39,
    "name": "LangChain",
    "description": "Framework for building context-aware reasoning applications with LLMs.",
    "tags": ["Framework", "Open-Source", "Chain-of-Thought"],
    "category": "productivity",
    "icon": "⛓️",
    "link": "https://langchain.com"
  },
  {
    "id": 40,
    "name": "LangGraph",
    "description": "Library for creating cyclic, stateful multi-agent workflows on top of LangChain.",
    "tags": ["AI Agent", "Workflow", "Open-Source"],
    "category": "productivity",
    "icon": "🕸️",
    "link": "https://langchain-ai.github.io/langgraph"
  }
]

export default aiTools;