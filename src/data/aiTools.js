const aiTools =[
  {
    "id": 1,
    "name": "Grok 4",
    "description": "Elon Musk’s xAI multimodal LLM with image, video, voice, and reasoning capabilities—touted as ‘smartest AI in the world’",
    "tags": ["LLM","Multimodal","Voice"],
    "icon": "🧠",
    "link": "https://www.axios.com/2025/07/10/grok4-grok-xai-elon-musk"
  },
  {
    "id": 2,
    "name": "Grok for Government",
    "description": "xAI’s government-focused AI suite (Grok, Deep Search, Tool Use) under a $200M DoD contract",
    "tags": ["LLM","GovTech","Agents"],
    "icon": "🏛️",
    "link": "https://www.theguardian.com/technology/2025/jul/14/us-military-xai-deal-elon-musk"
  },
  {
    "id": 3,
    "name": "Claude 4 (Opus/Sonnet)",
    "description": "Anthropic’s Opus and Sonnet multimodal LLMs designed for hybrid reasoning and coding tasks",
    "tags": ["LLM","Coding","Research"],
    "icon": "🧮",
    "link": "https://en.wikipedia.org/wiki/Claude_%28language_model%29"
  },
  {
    "id": 4,
    "name": "Perplexity AI",
    "description": "AI search assistant with cited summaries and enterprise file + web search",
    "tags": ["AI Search","Research","Writing"],
    "icon": "🔍",
    "link": "https://en.wikipedia.org/wiki/Perplexity_AI"
  },
  {
    "id": 5,
    "name": "Mistral Medium 3",
    "description": "Open‑API LLM with performance rivaling Claude Sonnet, available through major clouds",
    "tags": ["LLM","Open-Source","Coding"],
    "icon": "📘",
    "link": "https://en.wikipedia.org/wiki/Mistral_AI"
  },
  {
    "id": 6,
    "name": "ComputerX",
    "description": "Desktop AI agent operating across apps—automates computer tasks as your personal AI operator",
    "tags": ["AI Agent","Productivity","Desktop"],
    "icon": "🖥️",
    "link": "https://computerx.ai/"
  },
  {
    "id": 7,
    "name": "Runner H",
    "description": "Agentic AI for orchestrating multi-step workflows across apps (Slack, Notion, Sheets, APIs)",
    "tags": ["AI Agent","Automation","App Integration"],
    "icon": "🤖",
    "link": "https://www.hcompany.ai/runner-h"
  },
  {
    "id": 8,
    "name": "GitHub Copilot",
    "description": "AI coding assistant integrated into IDEs, offering smart suggestions, refactors, and docs",
    "tags": ["Coding Assistant"],
    "icon": "💻",
    "link": "https://www.businessinsider.com/ai-coding-tools-popular-github-gemini-code-assist-cursor-q-2025-7"
  },
  {
    "id": 9,
    "name": "Gemini Code Assist",
    "description": "Google’s Windsurf-based AI coding tool offering enterprise-grade generation within Gemini",
    "tags": ["Coding Assistant","Enterprise"],
    "icon": "🔧",
    "link": "https://www.marketwatch.com/story/alphabets-latest-deal-reveals-the-hottest-area-of-ai-right-now-19e162aa"
  },
  {
    "id": 10,
    "name": "Midjourney V6",
    "description": "Advanced text-to-image generation for creative art and prototype visuals",
    "tags": ["Image Generation","Creative"],
    "icon": "🖼️",
    "link": "https://topcompany.ai/the-top-50-ai-tools-in-2025"
  },
  {
    "id": 11,
    "name": "Adobe Firefly 3",
    "description": "Integrated Adobe Creative Cloud generative model for text-to-image and beta video",
    "tags": ["Image Generation","Video","Creative"],
    "icon": "🎨",
    "link": "https://en.wikipedia.org/wiki/Adobe_Firefly"
  },
  {
    "id": 12,
    "name": "Runway ML",
    "description": "AI video generation and editing toolkit (Gen‑2) for creators and marketers",
    "tags": ["Video","Creative"],
    "icon": "🎬",
    "link": "https://topcompany.ai/the-top-50-ai-tools-in-2025"
  },
  {
    "id": 13,
    "name": "Synthesia Studio Pro",
    "description": "Multilingual avatar-based video creation from scripts for training & marketing",
    "tags": ["Video","Avatars"],
    "icon": "🎥",
    "link": "https://www.aiplusinfo.com/top-ai-tools-of-2025-and-key-usage-tip"
  },
  {
    "id": 14,
    "name": "ElevenLabs Voice AI",
    "description": "High-fidelity, multilingual voice synthesis with emotional nuance for audio content",
    "tags": ["Voice","Audio"],
    "icon": "🎙️",
    "link": "https://www.aiplusinfo.com/top-ai-tools-of-2025-and-key-usage-tip"
  },
  {
    "id": 15,
    "name": "AutoGPT 2.0",
    "description": "Open-source autonomous agent chaining tasks with minimal prompts",
    "tags": ["AI Agents","Automation"],
    "icon": "🤖",
    "link": "https://www.reviewpublically.com/10-must-try-ai-tools-in-2025-updated-july-2025/"
  },
  {
    "id": 16,
    "name": "Adept ACT‑1",
    "description": "Agent that interacts with software on your behalf to complete digital workflows",
    "tags": ["AI Agents","Productivity"],
    "icon": "🧩",
    "link": "https://topcompany.ai/the-top-50-ai-tools-in-2025"
  },
  {
    "id": 17,
    "name": "Notion AI",
    "description": "Embedded AI in notes/tasks for summarization, generation & brainstorming",
    "tags": ["Productivity","Writing"],
    "icon": "📝",
    "link": "https://www.aiplusinfo.com/top-ai-tools-of-2025-and-key-usage-tip"
  },
  {
    "id": 18,
    "name": "Grammarly GO",
    "description": "Advanced real-time writing assistant that adapts to tone and context",
    "tags": ["Writing","Productivity"],
    "icon": "✍️",
    "link": "https://www.aiplusinfo.com/top-ai-tools-of-2025-and-key-usage-tip"
  },
  {
    "id": 19,
    "name": "Luma AI",
    "description": "Turns smartphone photos into 3D assets for VR, gaming, and design workflows",
    "tags": ["Image Generation","3D"],
    "icon": "📸",
    "link": "https://www.aiplusinfo.com/top-ai-tools-of-2025-and-key-usage-tip"
  },
  {
    "id": 20,
    "name": "Taskade AI",
    "description": "Combined chat, task manager & mind-map workspace powered by AI",
    "tags": ["Productivity","Teamwork"],
    "icon": "📋",
    "link": "https://www.digitalsuccess.us/blog/30-best-ai-tools-to-watch-in-2025-tried-and-tested.html"
  }
]


export default aiTools;
