const articles = [
  {
    id: 1,
    title: "AWS Unveils Agentic AI Tools to Supercharge Enterprise Automation",
    author: "Amazon Web Services",
    date: "2025-07-19",
    excerpt: "Amazon introduces new 'agentic AI' capabilities at AWS Summit designed to automate complex, multi-step business processes across applications with minimal human input.",
    tags: ["AI", "Cloud Computing", "Automation"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.crescendo.ai/news/latest-ai-news-and-updates"
  },
  {
    id: 2,
    title: "Google's 'Big Sleep' AI Tool Combats Exploitation of Dormant Domains",
    author: "Google Security Team",
    date: "2025-07-19",
    excerpt: "New AI system detects and disables inactive web domains vulnerable to cyberattacks, preventing their use for phishing scams and malware distribution.",
    tags: ["Cybersecurity", "AI", "Google"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.crescendo.ai/news/latest-ai-news-and-updates"
  },
  {
    id: 3,
    title: "Microsoft Copilot Vision AI Scans Your Desktop for Automated Workflows",
    author: "Microsoft News",
    date: "2025-07-19",
    excerpt: "New Windows AI assistant visually identifies screen elements to detect tasks and automate workflows, with Microsoft claiming all data stays on-device.",
    tags: ["AI", "Microsoft", "Productivity"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.crescendo.ai/news/latest-ai-news-and-updates"
  },
  {
    id: 4,
    title: "SoundHound Expands AI Voice Solutions Into Healthcare Sector",
    author: "SoundHound AI",
    date: "2025-07-19",
    excerpt: "Voice AI company gains traction in healthcare with NLP-powered assistants for patient intake, scheduling, and provider queries in clinical environments.",
    tags: ["AI", "Healthcare", "Voice Tech"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.crescendo.ai/news/latest-ai-news-and-updates"
  },
  {
    id: 5,
    title: "Thinking Machines Raises $2B at $10B Valuation for Agentic AI Systems",
    author: "Reuters Tech",
    date: "2025-07-19",
    excerpt: "Mira Murati's AI startup secures massive funding led by a16z to develop autonomous agentic AI systems for enterprise decision-making.",
    tags: ["AI", "Startups", "Funding"],
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.crescendo.ai/news/latest-ai-news-and-updates"
  },
  {
    id: 6,
    title: "Singapore Accelerates Materials Science Breakthroughs Using AI",
    author: "OpenGov Asia",
    date: "2025-07-19",
    excerpt: "A*STAR and local universities leverage AI to simulate chemical behaviors, cutting years off traditional research timelines for sustainable materials.",
    tags: ["AI", "Research", "Singapore"],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.crescendo.ai/news/latest-ai-news-and-updates"
  },
  {
    id: 7,
    title: "Delta Airlines Implements AI to Optimize Flight Routes and Passenger Experience",
    author: "CBS News Tech",
    date: "2025-07-19",
    excerpt: "New AI tools predict weather disruptions, streamline baggage handling, and assist cabin crew with real-time customer preferences.",
    tags: ["AI", "Aviation", "Travel Tech"],
    image: "https://images.unsplash.com/photo-1545165375-48aa8b320d1a?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.crescendo.ai/news/latest-ai-news-and-updates"
  },
  {
    id: 8,
    title: "Pentagon Partners With 4 Tech Firms to Expand Military AI Capabilities",
    author: "Defense News",
    date: "2025-07-19",
    excerpt: "DoD contracts focus on logistics automation, battlefield decision support, and threat analysis as part of next-gen warfare tech push.",
    tags: ["AI", "Defense", "Military Tech"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.crescendo.ai/news/latest-ai-news-and-updates"
  },
  {
    id: 9,
    title: "EU Faces Backlash Over Controversial AI Guidelines",
    author: "CIO Europe",
    date: "2025-07-19",
    excerpt: "Tech leaders criticize new EU AI rules as overly restrictive, warning they could burden companies with red tape and stifle innovation.",
    tags: ["AI", "Regulation", "EU"],
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.crescendo.ai/news/latest-ai-news-and-updates"
  },
  {
    id: 10,
    title: "Rich On Tech Episode 130: World Network's Private Human Verification",
    author: "Rich DeMuro",
    date: "2025-07-19",
    excerpt: "Adrian Ludwig from Tools for Humanity explains how World Network is building a more private way to prove you're human online.",
    tags: ["Tech Podcast", "Privacy", "AI"],
    image: "https://images.unsplash.com/photo-1593697820826-f4afab81f355?auto=format&fit=crop&w=1200&q=80",
    source: "https://richontech.tv/p/rich-on-tech-episode-130-july-19"
  }
];

export default articles;