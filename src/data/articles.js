const articles = [
  {
    id: 1,
    title: "Nikon opens orders for back-end lithography system DSP-100",
    author: "Nikon",
    date: "2025-07-16",
    excerpt:
      "First-ever back-end digital lithography system for advanced packaging and 3-D integration now available for order.",
    tags: ["Semiconductors", "Lithography"],
    likes: 120,
    comments: 18,
    views: 4700,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.nikon.com/company/news/2025/0716_01.html",
  },
  {
    id: 2,
    title: "Xiaomi ships stable Android 16 on Xiaomi 15 series",
    author: "TS2 Tech",
    date: "2025-07-16",
    excerpt:
      "Beats Google to stable Android 16 roll-out with HyperOS 2.3, bringing new privacy controls and smoother animations.",
    tags: ["Android", "Xiaomi"],
    likes: 2100,
    comments: 310,
    views: 19000,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=80",
    source: "https://ts2.tech/en/tech-news-deep-dive-july-2025/",
  },
  {
    id: 3,
    title: "SpaceX to launch Amazon Kuiper satellites today",
    author: "NASASpaceflight",
    date: "2025-07-16",
    excerpt:
      "Falcon 9 will loft at least 20 Amazon Project Kuiper broadband satellites—an ironic twist in the Starlink vs. Kuiper saga.",
    tags: ["Space", "Satellite"],
    likes: 1800,
    comments: 260,
    views: 25000,
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=80",
    source: "https://ts2.tech/en/ai-supremacy-space-odyssey-tech-shakeups/",
  },
  {
    id: 4,
    title: "Australia’s Eris rocket targets maiden orbital launch",
    author: "TS2 Tech",
    date: "2025-07-16",
    excerpt:
      "Gilmour Space eyes today for the first orbital attempt of its 25-m hybrid-fuel Eris rocket from Queensland.",
    tags: ["Launch", "Australia"],
    likes: 950,
    comments: 110,
    views: 11200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaL2JrKkmsCNY2HA9Qe-hZ-aJfUyl1iBq9g&s",
    source: "https://ts2.tech/en/ai-supremacy-space-odyssey-tech-shakeups/",
  },
  {
    id: 5,
    title: "Nvidia crosses $4 trillion market cap",
    author: "Business Insider",
    date: "2025-07-16",
    excerpt:
      "First company ever to hit $4 T valuation, driven by insatiable demand for AI GPUs and data-center accelerators.",
    tags: ["Markets", "Nvidia"],
    likes: 3400,
    comments: 520,
    views: 42000,
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://www.businessinsider.com/nvidia-becomes-first-company-reach-4-trillion-market-cap",
  },
  {
    id: 6,
    title: "iOS 19 Beta 3 refines Spotlight & backs off Liquid Glass",
    author: "TS2 Tech",
    date: "2025-07-16",
    excerpt:
      "Adds clipboard history, AI-powered relevance, and dials down the controversial transparency after user push-back.",
    tags: ["Apple", "iOS"],
    likes: 1300,
    comments: 200,
    views: 15800,
    image:
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=1200&q=80",
    source: "https://ts2.tech/en/tech-news-deep-dive-july-2025/",
  },
  {
    id: 7,
    title: "Tesla Robotaxi geofence expands into phallic Austin map",
    author: "The Daily Beast",
    date: "2025-07-15",
    excerpt:
      "Musk tweets ‘bigger, longer and uncut’ as new service zone resembles male genitalia—flat $4.20 fare included.",
    tags: ["Autonomous", "Tesla"],
    likes: 860,
    comments: 204,
    views: 16000,
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://www.thedailybeast.com/musk-makes-another-juvenile-joke-out-of-his-plot-to-save-tesla/",
  },
  {
    id: 8,
    title: "YouTube demonetizes AI-generated videos from July 15",
    author: "TechStartups",
    date: "2025-07-15",
    excerpt:
      "New policy bans AI voiceovers, low-effort slideshows and recycled content—only human-driven uploads qualify for ad revenue.",
    tags: ["AI", "Platforms"],
    likes: 650,
    comments: 120,
    views: 18000,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://techstartups.com/2025/07/09/youtube-to-demonetize-ai-generated-videos-starting-july-15/",
  },
  {
    id: 9,
    title: "Samsung Galaxy Z Fold7 goes on sale July 25",
    author: "Wired",
    date: "2025-07-09",
    excerpt:
      "Thinner (8.9 mm folded), lighter (215 g) and now 200-MP main camera; pre-orders open today ahead of July 25 retail launch.",
    tags: ["Gadgets", "Samsung"],
    likes: 675,
    comments: 140,
    views: 19500,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://www.wired.com/story/everything-samsung-announced-at-its-summer-galaxy-unpacked-event-july-2025/",
  },
  {
    id: 10,
    title: "Meta pledges ‘hundreds of billions’ for AI data centers",
    author: "Reuters",
    date: "2025-07-14",
    excerpt:
      "Zuckerberg says Meta will invest ‘hundreds of billions’ to build Prometheus & Hyperion super-clusters for AGI ambitions.",
    tags: ["AI", "Infrastructure", "Meta"],
    likes: 950,
    comments: 210,
    views: 14500,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://www.reuters.com/business/zuckerberg-says-meta-will-invest-hundreds-billions-superintelligence-2025-07-14/",
  },
  {
    id: 11,
    title: "Microsoft axes 15 000 jobs, tells staff to upskill in AI",
    author: "Times of India",
    date: "2025-07-12",
    excerpt:
      "Mass layoffs accompany an $80 B AI-infrastructure pivot; remaining employees must hit AI OKRs to keep bonuses.",
    tags: ["Layoffs", "AI", "Microsoft"],
    likes: 720,
    comments: 150,
    views: 13000,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://timesofindia.indiatimes.com/technology/tech-news/microsoft-cuts-15000-jobs-tells-remaining-employees-to-invest-in-ai/articleshow/122384662.cms",
  },
  {
    id: 12,
    title: "Varda Space raises $187 M Series C for orbital manufacturing",
    author: "Ars Technica",
    date: "2025-07-10",
    excerpt:
      "The in-space drug-crystallization start-up will use the capital to scale orbital factories and secure additional launch slots.",
    tags: ["SpaceTech", "Funding"],
    likes: 390,
    comments: 45,
    views: 6800,
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://arstechnica.com/space/2025/07/after-some-success-in-space-varda-raises-187-million-to-expand-ambitions/",
  },
  {
    id: 13,
    title: "FDA-style scrutiny looms over AI data-center power draw",
    author: "TechXplore",
    date: "2025-07-15",
    excerpt:
      "Regulators eye rules as AI data centers could consume 3 % of global electricity by 2030; new cooling & chip innovations showcased.",
    tags: ["AI", "Energy"],
    likes: 290,
    comments: 45,
    views: 5600,
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://techxplore.com/ai-industry-scrambles-curb-data-center-power-use.html",
  },
  {
    id: 14,
    title: "Google Pixel 9a leaks reveal Tensor G5 chip & flat edges",
    author: "Android Authority",
    date: "2025-07-15",
    excerpt:
      "CAD renders show flatter aluminium frame, single 50-MP camera and smaller 6.2-inch display ahead of August reveal.",
    tags: ["Leaks", "Google"],
    likes: 550,
    comments: 85,
    views: 9300,
    image:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.androidauthority.com/google-pixel-9a-leaks-3574821/",
  },
  {
    id: 15,
    title: "EU passes AI Liability Directive",
    author: "Politico",
    date: "2025-07-15",
    excerpt:
      "New law makes developers strictly liable for harm caused by high-risk AI systems, with fines up to 7 % of global turnover.",
    tags: ["Policy", "EU", "AI"],
    likes: 400,
    comments: 60,
    views: 7100,
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    source: "https://www.politico.eu/article/eu-ai-liability-directive-passed/",
  },
  {
    id: 16,
    title: "OpenAI drops GPT-4o-mini-2025-07-16 model",
    author: "OpenAI",
    date: "2025-07-16",
    excerpt:
      "Fast, cheaper 8-billion-parameter GPT-4o-mini update supports 1 M context, function-calling and JSON mode out of the box.",
    tags: ["AI", "OpenAI"],
    likes: 2100,
    comments: 300,
    views: 35000,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    source: "https://openai.com/index/gpt-4o-mini-2025-07-16/",
  },
  {
    id: 17,
    title: "AWS adds 256-GPU EC2 UltraClusters for AI training",
    author: "AWS",
    date: "2025-07-16",
    excerpt:
      "New p5en.48xlarge instances pair 256 NVIDIA H200 GPUs with 3.2-Tbps EFA v3 networking, now live in US-East-1 and EU-Central-1.",
    tags: ["Cloud", "AWS", "AI"],
    likes: 950,
    comments: 120,
    views: 14200,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://aws.amazon.com/about-aws/whats-new/2025/07/25/ec2-ultraclusters-p5en/",
  },
  {
    id: 18,
    title: "Sony slashes PS VR2 price to $299",
    author: "The Verge",
    date: "2025-07-15",
    excerpt:
      "Permanent global price drop aims to boost adoption ahead of rumored PS VR3 announcement later this year.",
    tags: ["Gaming", "Sony"],
    likes: 680,
    comments: 130,
    views: 12800,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1200&q=80",
    source:
      "https://www.theverge.com/2025/7/15/24398765/sony-playstation-vr2-price-drop-299",
  },
  {
    id: 19,
    title: "GitHub Copilot gains self-healing code feature",
    author: "GitHub",
    date: "2025-07-15",
    excerpt:
      "New “Auto-Fix” agent detects runtime errors in CI, generates patches, and opens pull-requests without human intervention.",
    tags: ["Dev-Tools", "AI"],
    likes: 1_400,
    comments: 180,
    views: 22_500,
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=80",
    source: "https://github.blog/changelog/2025-07-15-copilot-auto-fix/",
  },
  {
    id: 20,
    title: "Rivian R2 reservations hit 250 k in first 24 h",
    author: "Rivian",
    date: "2025-07-15",
    excerpt:
      "All-electric $45 k SUV sells out 2026 production capacity after surprise online reveal; quad-motor variant alone claims 100 k deposits.",
    tags: ["EV", "Rivian"],
    likes: 1_200,
    comments: 210,
    views: 19_800,
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    source: "https://rivian.com/news/r2-reservations-250k-24h",
  },
];

export default articles;
