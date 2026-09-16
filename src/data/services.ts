export interface ServiceDeliverable {
  title: string;
  category: string;
  desc: string;
  highlights: string[];
}

export interface ServiceProcessStep {
  step: string;
  name: string;
  timeframe: string;
  desc: string;
  keyDeliverable: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceComparison {
  feature: string;
  traditional: string;
  krewmesh: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  seoTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  tagline: string;
  heroDescription: string;
  accentColor: string;
  accentGlow: string;
  iconName: string;
  stats: { label: string; value: string }[];
  techStack: { name: string; category: string }[];
  targetAudience: string[];
  keyOutcomes: { metric: string; label: string; detail: string }[];
  deliverables: ServiceDeliverable[];
  process: ServiceProcessStep[];
  comparison: ServiceComparison[];
  faqs: ServiceFaq[];
}

export const servicesData: Record<string, ServiceData> = {
  branding: {
    slug: "branding",
    title: "Brand Strategy & Visual Identity",
    shortTitle: "Branding",
    badge: "Brand Identity & Design",
    seoTitle: "Brand Identity Design & Strategy Studio | Krew / Mesh",
    metaDescription:
      "Build a memorable brand that stands out. We design professional logos, colors, fonts, and complete brand guidelines that build immediate trust with your customers.",
    seoKeywords: [
      "Brand identity design",
      "Logo design agency",
      "Startup branding services",
      "Company visual identity",
      "Brand guidelines design",
      "Creative branding studio",
      "Rebranding services",
    ],
    tagline: "Create a memorable brand that builds trust and wins more customers.",
    heroDescription:
      "We help businesses build distinctive brands that stand out from the competition. From your primary logo and color palette to matching fonts, business stationery, and social media templates, we deliver a cohesive look that makes your business look professional, trustworthy, and ready to grow.",
    accentColor: "#FF1493",
    accentGlow: "rgba(255, 20, 147, 0.4)",
    iconName: "Target",
    stats: [
      { label: "Turnaround", value: "2 - 3 Weeks" },
      { label: "Deliverables", value: "Complete Brand Kit" },
      { label: "Ownership", value: "100% Yours" },
    ],
    techStack: [
      { name: "Figma", category: "Design System" },
      { name: "Adobe Illustrator", category: "Vector Logos" },
      { name: "Adobe Photoshop", category: "Visual Assets" },
      { name: "After Effects", category: "Logo Animation" },
      { name: "Brand Guidelines", category: "Style Manual" },
      { name: "Social Templates", category: "Marketing Kit" },
    ],
    targetAudience: [
      "New & Growing Startups",
      "Established Businesses",
      "E-Commerce Brands",
      "Founders Launching Products",
    ],
    keyOutcomes: [
      { metric: "3x", label: "Stronger Trust", detail: "A polished, cohesive look that makes potential customers confident in choosing you" },
      { metric: "100%", label: "Ready to Use", detail: "High-resolution files ready for your website, social media, print, and merchandise" },
      { metric: "Simple", label: "Brand Guidelines", detail: "Clear rules so your team always knows which fonts and colors to use" },
      { metric: "14 Days", label: "Initial Concepts", detail: "See 2 to 3 creative brand directions presented on real-world mockups quickly" },
    ],
    deliverables: [
      {
        title: "Primary & Secondary Logo Design",
        category: "Core Identity",
        desc: "A distinctive main logo, plus compact versions for mobile screens, social profiles, and small icons that look sharp at any size.",
        highlights: ["Full color, black & white versions", "Crisp formats for web and print", "Complete vector source files (SVG, AI, PDF)"],
      },
      {
        title: "Color Palette & Font Pairing",
        category: "Visual Styling",
        desc: "Handpicked colors and fonts that match your business personality, look great on screens, and are easy for your visitors to read.",
        highlights: ["Primary and accent brand colors", "Selected free or licensed web fonts", "Color codes for web, print, and social media"],
      },
      {
        title: "Digital Brand Style Guide",
        category: "Brand Guidelines",
        desc: "A simple, easy-to-follow guide showing your team how to use your logo, colors, and fonts consistently across everything you create.",
        highlights: ["Logo spacing and dos & don'ts", "Font sizes for headings and paragraphs", "Accessible digital guide you can share with anyone"],
      },
      {
        title: "Social Media & Launch Kit",
        category: "Marketing Templates",
        desc: "Ready-to-use profile banners, post templates, and announcement graphics to launch your refreshed brand on LinkedIn, Instagram, and X.",
        highlights: ["Custom social banner designs", "Editable post and story templates", "Clean email signature templates"],
      },
      {
        title: "Animated Logo Intro",
        category: "Motion Branding",
        desc: "A short, polished video animation of your logo to use at the beginning of product videos, reels, website loaders, and presentations.",
        highlights: ["Clean 4K video animation export", "Lightweight web animation file", "Great for reels, YouTube, and decks"],
      },
      {
        title: "Business Stationery & Print Files",
        category: "Print Collateral",
        desc: "Professional business card layouts, letterhead templates, invoices, and merchandise mockups ready to send straight to your printer.",
        highlights: ["Print-ready CMYK files", "Business card and letterhead layouts", "Packaging or merch mockup guidelines"],
      },
    ],
    process: [
      {
        step: "01",
        name: "Discovery & Direction",
        timeframe: "Week 1",
        desc: "We discuss your business vision, who your ideal customers are, and review visual styles you love to set a clear direction.",
        keyDeliverable: "Creative Direction & Moodboard",
      },
      {
        step: "02",
        name: "Concept Presentation",
        timeframe: "Week 2",
        desc: "We present 2 to 3 distinct logo and brand concepts, shown in real-world contexts like websites, packaging, and mobile screens.",
        keyDeliverable: "2-3 Unique Brand Concept Directions",
      },
      {
        step: "03",
        name: "Feedback & Refinement",
        timeframe: "Week 2-3",
        desc: "You choose your favorite direction, and we refine every detail, color shade, and font curve based on your feedback.",
        keyDeliverable: "Polished & Approved Master Brand",
      },
      {
        step: "04",
        name: "Final Asset Delivery",
        timeframe: "Week 3",
        desc: "We package all your logo files, social templates, print files, and style guide into an organized, easy-to-use folder.",
        keyDeliverable: "Complete Brand Package & Guidelines",
      },
    ],
    comparison: [
      {
        feature: "Communication",
        traditional: "Layers of account managers and slow communication taking weeks for updates",
        krewmesh: "Direct collaboration with senior designers who understand your goals",
      },
      {
        feature: "Turnaround Time",
        traditional: "Drawn out over 2 to 4 months of slow committee meetings and delays",
        krewmesh: "Focused delivery with initial concepts in 14 days and completion in 3 weeks",
      },
      {
        feature: "Deliverable Quality",
        traditional: "Single flat logo image with extra charges for source files or variations",
        krewmesh: "Complete kit with social templates, vector files, color codes, and animated logo",
      },
      {
        feature: "File Ownership",
        traditional: "Complex licensing fine-print and confusion over trademark rights",
        krewmesh: "100% full commercial ownership and all original source files included",
      },
    ],
    faqs: [
      {
        q: "What files and formats do I receive when the project is done?",
        a: "You receive everything you could possibly need: transparent PNG files for your website and documents, sharp vector SVG and PDF files for printing and signage, editable source files (AI/Figma), social media templates, and an easy digital style guide.",
      },
      {
        q: "How many logo options will we get to see?",
        a: "We present 2 to 3 distinct creative directions. Rather than showing floating symbols on a blank page, we show each logo applied to real websites, mobile apps, and business cards so you can easily picture how it looks in daily business.",
      },
      {
        q: "Can you refresh our existing logo without losing our current customers' recognition?",
        a: "Yes, absolutely. We often do brand evolutions where we modernize typography, clean up colors, and make logos look sharper on mobile screens while preserving the recognizable identity your customers already know and trust.",
      },
      {
        q: "How do we get started?",
        a: "Getting started is easy. Simply fill out our short contact form or give us a quick call. We will set up a friendly 20-minute chat to learn about your goals and share a straightforward proposal.",
      },
    ],
  },

  design: {
    slug: "design",
    title: "UI/UX & Website Design",
    shortTitle: "Design",
    badge: "UI/UX & Product Design",
    seoTitle: "UI/UX & Website Design Studio | Krew / Mesh",
    metaDescription:
      "Beautiful, user-friendly UI/UX design for websites, web applications, and mobile apps. We design intuitive interfaces that turn visitors into happy customers.",
    seoKeywords: [
      "UI UX design studio",
      "Website design agency",
      "Mobile app UI design",
      "Product design services",
      "Figma design studio",
      "User experience design",
      "Web app interface design",
    ],
    tagline: "Clean, intuitive websites and apps that your customers love using.",
    heroDescription:
      "Great design isn't just about looking good — it's about how easily your customers can use your product. We design clean, modern websites and apps that guide visitors directly to buying, signing up, or contacting you without confusion or frustration.",
    accentColor: "#00E5FF",
    accentGlow: "rgba(0, 229, 255, 0.4)",
    iconName: "PenTool",
    stats: [
      { label: "Clarity", value: "User-First Flows" },
      { label: "Format", value: "Interactive Figma" },
      { label: "Compatibility", value: "Mobile & Desktop" },
    ],
    techStack: [
      { name: "Figma", category: "Core Design Tool" },
      { name: "Clickable Prototypes", category: "Live Testing" },
      { name: "Design System", category: "Reusable UI" },
      { name: "Mobile First", category: "Phone & Tablet" },
      { name: "User Journey", category: "Flow Mapping" },
      { name: "Dev Specs", category: "Easy Handoff" },
    ],
    targetAudience: [
      "Web & Mobile Startups",
      "SaaS & Tech Companies",
      "Online Stores & E-Commerce",
      "Service & Consulting Businesses",
    ],
    keyOutcomes: [
      { metric: "+40%", label: "More Conversions", detail: "Frictionless page layouts that make it easy for visitors to buy or sign up" },
      { metric: "Mobile", label: "First Experience", detail: "Touch-friendly menus, clear buttons, and easy reading on every smartphone" },
      { metric: "Zero", label: "Confusion", detail: "Interactive clickable prototypes so you can test every screen before coding" },
      { metric: "100%", label: "Developer Ready", detail: "Organized files with exact colors and spacing so your developers build it fast" },
    ],
    deliverables: [
      {
        title: "Full Website & App Screen Designs",
        category: "Interface Design",
        desc: "Pixel-perfect screens designed for every page of your website, customer portal, or mobile app, with clear call-to-action buttons.",
        highlights: ["Homepage, product pages, and checkout", "Dashboard and account screens", "Helpful empty, success, and error states"],
      },
      {
        title: "Mobile & Tablet Responsive Layouts",
        category: "Mobile Design",
        desc: "Every single page adapted so it looks natural and functions smoothly whether your visitor is on an iPhone, iPad, or desktop screen.",
        highlights: ["Thumb-friendly mobile navigation", "Easy-to-tap buttons and links", "Readable typography across all screen sizes"],
      },
      {
        title: "Interactive Clickable Prototype",
        category: "Live Preview",
        desc: "A realistic, clickable demo in Figma that lets you and your team tap through screens like a real app before writing any code.",
        highlights: ["Click through buttons and pages", "Test the customer journey on your phone", "Perfect for showing investors and partners"],
      },
      {
        title: "Reusable Design System & Components",
        category: "Design System",
        desc: "A neat library of your buttons, input fields, cards, and colors so future pages and features can be created quickly and consistently.",
        highlights: ["Consistent buttons, forms, and cards", "Organized color and font tokens", "Saves time when adding new features later"],
      },
      {
        title: "Customer Journey & Wireframe Maps",
        category: "User Experience",
        desc: "Clear visual diagrams showing the exact steps a visitor takes from first arriving on your site to completing a purchase or inquiry.",
        highlights: ["Step-by-step visitor journeys", "Removes unnecessary steps that lose sales", "Organized page structure before visual design"],
      },
      {
        title: "Easy Developer Handoff Package",
        category: "Engineering Handover",
        desc: "Clearly annotated files with spacing, fonts, and colors ready for your web developers to build accurately with zero guesswork.",
        highlights: ["Clear notes for developers", "Export-ready icons and graphics", "Walkthrough call to answer developer questions"],
      },
    ],
    process: [
      {
        step: "01",
        name: "Understanding Your Users",
        timeframe: "Week 1",
        desc: "We learn what your customers want to accomplish and map out a simple, logical journey with wireframe sketches.",
        keyDeliverable: "Customer Journey Map & Wireframes",
      },
      {
        step: "02",
        name: "Visual Styling & Key Screens",
        timeframe: "Week 2",
        desc: "We apply your brand colors and typography to design the most important pages first, getting your feedback early.",
        keyDeliverable: "Initial High-Fidelity Page Designs",
      },
      {
        step: "03",
        name: "Complete Screens & Prototype",
        timeframe: "Week 3",
        desc: "We design all remaining screens, mobile layouts, and connect them into a clickable demo you can test on your phone.",
        keyDeliverable: "Complete Interactive Figma Prototype",
      },
      {
        step: "04",
        name: "Review & Developer Handoff",
        timeframe: "Week 4",
        desc: "We finalize every detail based on your review, organize the files, and conduct a handoff call with your engineering team.",
        keyDeliverable: "Developer-Ready Design Files & System",
      },
    ],
    comparison: [
      {
        feature: "User Focus",
        traditional: "Pretty graphics that look nice in pictures but are confusing for customers to navigate",
        krewmesh: "Thoughtful layouts designed around how real people browse, click, and buy",
      },
      {
        feature: "Mobile Experience",
        traditional: "Designed only for desktop computers, leaving mobile screens cramped and awkward",
        krewmesh: "Designed mobile-first with large touch buttons and clean readability on phones",
      },
      {
        feature: "Testing Before Code",
        traditional: "Flat image files where you can't tell how the website will actually feel",
        krewmesh: "Interactive clickable prototypes you can test right on your own smartphone",
      },
      {
        feature: "Developer Handoff",
        traditional: "Disorganized files that leave developers guessing colors, sizes, and fonts",
        krewmesh: "Clean, structured components with clear annotations and developer support",
      },
    ],
    faqs: [
      {
        q: "What tool do you use, and do I need to pay for software to view it?",
        a: "We use Figma, which is completely free for you to use. You simply click a link in your web browser to review designs, leave comments, and test clickable prototypes on your phone or laptop.",
      },
      {
        q: "Can you also code and build the website for us?",
        a: "Yes! Krew / Mesh is a complete design and development studio. We can take the designs we create and code them into a fast, modern website or web app using Next.js and React.",
      },
      {
        q: "Can you redesign an existing website or app that feels cluttered?",
        a: "Yes. We frequently help companies simplify crowded screens, reorganize confusing menus, and give their product a clean, modern look that boosts customer satisfaction.",
      },
      {
        q: "How do you ensure the design works well on mobile phones?",
        a: "Over 60% of all web browsing happens on mobile devices. We design every page specifically for phones and tablets, testing button sizes, navigation menus, and reading comfort on real devices.",
      },
    ],
  },

  digital: {
    slug: "digital",
    title: "Interactive Websites & 3D Experiences",
    shortTitle: "Digital",
    badge: "Interactive & 3D Web",
    seoTitle: "Interactive Websites & 3D Web Design Agency | Krew / Mesh",
    metaDescription:
      "Stand out with memorable interactive websites, smooth scroll animations, and 3D product previews that load fast on phones and computers.",
    seoKeywords: [
      "Interactive website design",
      "3D web design agency",
      "Creative website studio",
      "Interactive 3D product showcase",
      "Smooth scroll animated websites",
      "Modern web experiences",
      "Three.js website studio",
    ],
    tagline: "Websites that wow your visitors and make your brand unforgettable.",
    heroDescription:
      "Stand out from the crowd with engaging interactive websites, fluid animations, and 3D product views. We create web experiences that captivate attention, keep visitors exploring longer, and leave a lasting impression — all while loading quickly and smoothly on phones and laptops.",
    accentColor: "#BD00FF",
    accentGlow: "rgba(189, 0, 255, 0.4)",
    iconName: "Monitor",
    stats: [
      { label: "Experience", value: "Smooth 60 FPS" },
      { label: "Technology", value: "Web 3D & Motion" },
      { label: "Performance", value: "Fast on Mobile" },
    ],
    techStack: [
      { name: "3D Product Views", category: "Interactive 3D" },
      { name: "Smooth Motion", category: "Scroll Animations" },
      { name: "Three.js", category: "Web Graphics" },
      { name: "Fast Loading", category: "Mobile Optimized" },
      { name: "Custom Visuals", category: "Brand Storytelling" },
      { name: "Cross-Device", category: "All Browsers" },
    ],
    targetAudience: [
      "Physical Product Brands",
      "Innovative Tech Startups",
      "Luxury & Lifestyle Brands",
      "Companies Launching New Products",
    ],
    keyOutcomes: [
      { metric: "3x", label: "Longer Visits", detail: "Visitors spend more time browsing and interacting with engaging visuals" },
      { metric: "Fast", label: "Mobile Speed", detail: "Carefully optimized 3D graphics that load fast and never freeze mobile browsers" },
      { metric: "360°", label: "Product Views", detail: "Shoppers can spin, explore, and view products from every angle before buying" },
      { metric: "Easy", label: "No Downloads", detail: "Runs directly in standard web browsers on iPhones, Androids, and laptops" },
    ],
    deliverables: [
      {
        title: "Interactive 3D Product Showcases",
        category: "Product Experience",
        desc: "Allow customers to spin, zoom, and inspect your products in 3D directly on your website, building high buying confidence.",
        highlights: ["Smooth 360-degree rotation", "Color and material switchers", "Look at details up close without lag"],
      },
      {
        title: "Smooth Scroll Animations",
        category: "Visual Motion",
        desc: "Delightful page transitions and graphics that move naturally as the user scrolls, telling your story step-by-step.",
        highlights: ["Story-driven page flow", "Smooth, natural motion", "Designed not to distract from buying"],
      },
      {
        title: "Interactive Hero Banners",
        category: "First Impression",
        desc: "Eye-catching animated banner sections with gentle mouse or touch interactions that make an immediate strong impression.",
        highlights: ["Captivating first screen impact", "Responds smoothly to mouse and touch", "Keeps text crystal clear and easy to read"],
      },
      {
        title: "Storytelling Product Launch Pages",
        category: "Launch Pages",
        desc: "Special showcase pages designed for new product announcements, combining large imagery, features, and interactive models.",
        highlights: ["High-impact feature walkthroughs", "Engaging visual pacing", "Clear 'Buy Now' and 'Pre-Order' paths"],
      },
      {
        title: "Mobile-Optimized 3D Graphics",
        category: "Performance",
        desc: "Lightweight 3D assets compressed so they load within 1 to 2 seconds even on normal mobile phone connections.",
        highlights: ["Fast asset loading on cellular", "Battery-friendly phone optimization", "Smooth performance on budget phones"],
      },
      {
        title: "Interactive Calculators & Tools",
        category: "Engagement",
        desc: "Custom price estimators, product configurators, or interactive quizzes that keep visitors engaged and generate qualified leads.",
        highlights: ["Help customers configure what they need", "Instant price or feature estimates", "Connects to your lead inquiry form"],
      },
    ],
    process: [
      {
        step: "01",
        name: "Concept & Visual Flow",
        timeframe: "Week 1",
        desc: "We discuss what interactive elements will best showcase your product and storyboard the page's visual flow.",
        keyDeliverable: "Interactive Storyboard & Concept Plan",
      },
      {
        step: "02",
        name: "3D Models & Visual Assets",
        timeframe: "Weeks 2-3",
        desc: "We take your product photos or 3D files, clean them up, and optimize them so they load fast on the web.",
        keyDeliverable: "Optimized Web 3D Assets & Visuals",
      },
      {
        step: "03",
        name: "Interactive Build & Motion",
        timeframe: "Week 4",
        desc: "We code the interactive controls, connect smooth scrolling, and test the user experience on phones and laptops.",
        keyDeliverable: "Interactive Preview Website",
      },
      {
        step: "04",
        name: "Performance Polish & Launch",
        timeframe: "Week 5",
        desc: "We fine-tune loading speed, ensure smooth 60fps framerates on mobile devices, and launch your experience live.",
        keyDeliverable: "Live Interactive Website Ready for Visitors",
      },
    ],
    comparison: [
      {
        feature: "Mobile Loading",
        traditional: "Heavy 3D files that take 15 seconds to load and freeze mobile Safari",
        krewmesh: "Lightweight, optimized visuals that load in 2 seconds and stay silky smooth",
      },
      {
        feature: "Ease of Use",
        traditional: "Overcomplicated navigation where visitors get lost and leave without buying",
        krewmesh: "Intuitive interactive elements paired with clear text and obvious buy buttons",
      },
      {
        feature: "Browser Support",
        traditional: "Requires high-end computers or special browser settings to view",
        krewmesh: "Works out of the box in Safari, Chrome, Edge, and mobile phone browsers",
      },
      {
        feature: "Google Search (SEO)",
        traditional: "Hidden behind graphical plugins where Google cannot read the text",
        krewmesh: "Standard readable web text layered over visuals so Google ranks your pages",
      },
    ],
    faqs: [
      {
        q: "Will an interactive 3D website load slowly on mobile phones?",
        a: "No. We specifically compress and optimize all 3D models so they are featherlight (under 2-3 MB). Smartphones automatically receive a streamlined version, ensuring the site loads quickly and doesn't drain battery.",
      },
      {
        q: "Do visitors need to install special apps or extensions?",
        a: "Not at all. Everything runs natively inside standard mobile and desktop browsers like Safari, Chrome, and Edge without installing anything.",
      },
      {
        q: "Can you create 3D models if we only have regular photos of our product?",
        a: "Yes! If you don't have 3D files, our team can create realistic 3D models of your product using regular high-resolution photos and measurements.",
      },
      {
        q: "Can Google still read and rank the text on an interactive site?",
        a: "Yes. All headlines, descriptions, and buttons are written as standard, readable website text. Search engines like Google can crawl and index your content normally.",
      },
    ],
  },

  development: {
    slug: "development",
    title: "Web & App Development",
    shortTitle: "Development",
    badge: "Web & App Development",
    seoTitle: "Modern Web & App Development Agency | Krew / Mesh",
    metaDescription:
      "Fast, reliable websites and custom web applications. Built with modern technology for sub-second speeds, top Google SEO rankings, and 100% full ownership.",
    seoKeywords: [
      "Web development agency",
      "Custom web application development",
      "Fast website development",
      "Next.js web development",
      "React web developers",
      "Business website design and build",
      "Mobile responsive web development",
    ],
    tagline: "Fast, reliable websites and web apps built to grow your business.",
    heroDescription:
      "We build modern, high-speed websites and web applications that never let your business down. Engineered to load in less than a second, rank high on Google, and work flawlessly on every screen, our code is clean, secure, and completely owned by you.",
    accentColor: "#00FF66",
    accentGlow: "rgba(0, 255, 102, 0.4)",
    iconName: "Code",
    stats: [
      { label: "Page Speed", value: "Under 1 Second" },
      { label: "Uptime", value: "99.9% Reliable" },
      { label: "Code Ownership", value: "100% Yours" },
    ],
    techStack: [
      { name: "Next.js", category: "Fast Loading" },
      { name: "React", category: "Modern UI" },
      { name: "TypeScript", category: "Bug-Free Code" },
      { name: "Easy CMS", category: "Simple Text Edits" },
      { name: "Secure Cloud", category: "Always Online" },
      { name: "Mobile Ready", category: "All Devices" },
    ],
    targetAudience: [
      "Growing Startups",
      "E-Commerce & Retail Stores",
      "B2B & Service Companies",
      "Businesses Needing a Faster Site",
    ],
    keyOutcomes: [
      { metric: "< 1s", label: "Instant Loading", detail: "Fast speeds keep visitors from leaving and significantly boost your Google rank" },
      { metric: "Easy", label: "Edit Yourself", detail: "Simple dashboard lets you update text, photos, and blogs without touching code" },
      { metric: "99.9%", label: "Reliability", detail: "Hosted on global cloud networks so your website never crashes or slows down" },
      { metric: "100%", label: "Full Ownership", detail: "All code, accounts, and designs belong to you with zero monthly agency fees" },
    ],
    deliverables: [
      {
        title: "Custom High-Speed Website or Web App",
        category: "Core Build",
        desc: "A custom-built website engineered from scratch for your business — clean, responsive, and free of slow templates or bloated plugins.",
        highlights: ["Loads in under a second on phones", "Custom built to match your brand", "Smooth animations and fast page transitions"],
      },
      {
        title: "Simple Content Management Dashboard",
        category: "Easy Updates",
        desc: "An easy-to-use visual dashboard where anyone on your team can edit text, upload new photos, and publish blog posts in seconds.",
        highlights: ["No coding required to make changes", "Live preview before publishing", "Secure logins for your team members"],
      },
      {
        title: "Google SEO & Speed Optimization",
        category: "Search Rankings",
        desc: "Configured with fast load times, search engine tags, clean page links, and structured data so Google can easily find and rank your business.",
        highlights: ["Configured for high Google rankings", "Fast Core Web Vitals performance", "Automatic social media preview cards"],
      },
      {
        title: "Mobile-Responsive Phone & Tablet Build",
        category: "Mobile Friendly",
        desc: "Tested carefully across iPhones, Androids, iPads, and laptops to ensure menus, buttons, and text work smoothly for all visitors.",
        highlights: ["Looks natural on all screen sizes", "Easy-to-tap buttons and links", "Tested on real smartphones and tablets"],
      },
      {
        title: "Contact Forms & Lead Notifications",
        category: "Lead Capture",
        desc: "Reliable contact forms that prevent spam and instantly deliver customer inquiries straight to your email inbox or CRM system.",
        highlights: ["Instant email notification on new leads", "Built-in anti-spam protection", "Connects to your CRM or spreadsheet"],
      },
      {
        title: "Security, SSL & Cloud Hosting Setup",
        category: "Security & Hosting",
        desc: "We configure your custom domain name, set up free SSL security certificates (https), and deploy on fast global cloud hosting.",
        highlights: ["Secure HTTPS padlock on all pages", "Automated daily cloud backups", "Zero maintenance headaches for your team"],
      },
    ],
    process: [
      {
        step: "01",
        name: "Plan & Project Setup",
        timeframe: "Week 1",
        desc: "We review your approved designs, plan out page links, and set up your project on modern cloud hosting.",
        keyDeliverable: "Development Blueprint & Timeline",
      },
      {
        step: "02",
        name: "Page Building & Features",
        timeframe: "Weeks 2-3",
        desc: "We code the pages, connect interactive buttons, make everything mobile-responsive, and connect your contact forms.",
        keyDeliverable: "Working Private Staging Website",
      },
      {
        step: "03",
        name: "Content Dashboard & Testing",
        timeframe: "Week 3",
        desc: "We set up your easy content editor dashboard, add your copy and images, and test on phones, tablets, and computers.",
        keyDeliverable: "Content Editor Dashboard & Testing",
      },
      {
        step: "04",
        name: "Domain Connection & Launch",
        timeframe: "Week 4",
        desc: "We connect your custom domain name, run final speed checks, launch your site live, and walk you through how to edit pages.",
        keyDeliverable: "Live Website & Video Walkthrough Guide",
      },
    ],
    comparison: [
      {
        feature: "Loading Speed",
        traditional: "Slow websites packed with 30 bloated plugins that take 5+ seconds to open",
        krewmesh: "Custom-coded for instant sub-second loading that customers and Google love",
      },
      {
        feature: "Updating Content",
        traditional: "Confusing backend panels where one wrong click breaks the whole layout",
        krewmesh: "Simple visual dashboard tailored to your pages where text is easy to change",
      },
      {
        feature: "Ownership",
        traditional: "Trapped in proprietary agency builders with monthly lock-in fees",
        krewmesh: "You own 100% of your code and hosting accounts with zero vendor lock-in",
      },
      {
        feature: "Reliability",
        traditional: "Frequent plugin conflicts, broken pages, and unexpected website downtime",
        krewmesh: "Rock-solid cloud infrastructure that stays online 99.9% of the time",
      },
    ],
    faqs: [
      {
        q: "Can our team update text and photos without knowing how to code?",
        a: "Yes! We connect a simple visual content dashboard (like Sanity or Strapi). You can log in anytime from any browser, edit headlines, update photos, or add blog posts with a single click — no code needed.",
      },
      {
        q: "How long does a website take to build and launch?",
        a: "A standard marketing website or company landing page typically takes 2 to 4 weeks from approved design to live launch. Custom web apps with user accounts or unique features usually take 4 to 8 weeks.",
      },
      {
        q: "Do you help with domain names and hosting?",
        a: "Yes. We take care of the entire launch process. We help connect your domain name, set up free SSL security (https), and launch your site on fast, secure global cloud hosting.",
      },
      {
        q: "What if we need help or changes after the website is live?",
        a: "Every project includes a 30-day post-launch warranty where we fix anything that comes up for free. We also offer friendly monthly support plans if you want ongoing updates and advice.",
      },
    ],
  },

  ai: {
    slug: "ai",
    title: "AI Solutions & Smart Automation",
    shortTitle: "AI",
    badge: "AI & Smart Automation",
    seoTitle: "AI Solutions & Smart Business Automation Studio | Krew / Mesh",
    metaDescription:
      "Automate repetitive tasks and improve customer support with smart AI tools. Custom 24/7 AI chat assistants, automated workflows, and private data search.",
    seoKeywords: [
      "AI solutions for business",
      "Custom AI chat assistant",
      "Business automation agency",
      "AI workflow integration",
      "Customer support AI bot",
      "Document AI search tool",
      "Smart business automation",
    ],
    tagline: "Automate repetitive work and power your business with smart AI tools.",
    heroDescription:
      "Unlock the practical power of modern artificial intelligence for your business. We build custom AI assistants that answer customer questions accurately 24/7, automate repetitive data tasks, and integrate smart features directly into your website so your team saves hours every week.",
    accentColor: "#00B4D8",
    accentGlow: "rgba(0, 180, 216, 0.4)",
    iconName: "Sparkles",
    stats: [
      { label: "Availability", value: "24/7 Instant Answers" },
      { label: "Data Privacy", value: "100% Confidential" },
      { label: "Accuracy", value: "Trained on Your Info" },
    ],
    techStack: [
      { name: "Smart AI Models", category: "Language AI" },
      { name: "Your Knowledge Base", category: "Accurate Answers" },
      { name: "24/7 Chat Widget", category: "Customer Support" },
      { name: "Task Automation", category: "Save Team Hours" },
      { name: "Privacy Shield", category: "Confidential Data" },
      { name: "Easy Integration", category: "Works With Your Site" },
    ],
    targetAudience: [
      "Customer Support Teams",
      "Service & Consulting Firms",
      "E-Commerce & Online Stores",
      "Businesses With Heavy Inquiries",
    ],
    keyOutcomes: [
      { metric: "24/7", label: "Instant Responses", detail: "Answers customer questions right away even on weekends and holidays" },
      { metric: "Hours", label: "Saved Daily", detail: "Automates repetitive email replies, form sorting, and manual copy-pasting" },
      { metric: "100%", label: "Private & Secure", detail: "Your proprietary company data is kept private and never used to train public AI" },
      { metric: "Zero", label: "Made-Up Facts", detail: "Configured strictly to answer using your real business policies and documents" },
    ],
    deliverables: [
      {
        title: "24/7 Customer AI Chat Assistant",
        category: "Customer Support",
        desc: "A friendly AI chat widget installed on your website that answers customer questions accurately in seconds using your official company FAQs.",
        highlights: ["Instant answers at any time of day", "Matches your brand colors and tone", "Offers to connect to a human when needed"],
      },
      {
        title: "Document & Knowledge Search Tool",
        category: "Internal Search",
        desc: "Let your team or customers search through product manuals, PDFs, and guides in plain English to get immediate, accurate answers.",
        highlights: ["Search across PDFs and guides easily", "Cites exact page references", "Saves staff from answering the same questions"],
      },
      {
        title: "Automated Email & Lead Sorting",
        category: "Automation",
        desc: "Smart automation that reads incoming customer inquiries, summarizes the key details, and automatically routes them to the right person.",
        highlights: ["Auto-categorizes new leads", "Drafts quick personalized replies", "Connects to your email and CRM"],
      },
      {
        title: "Repetitive Task & Data Entry Automation",
        category: "Productivity",
        desc: "Connect AI tools to your spreadsheets or forms to automatically extract info from receipts, invoices, or customer notes with zero errors.",
        highlights: ["Eliminates hours of manual data entry", "Extracts clean data from receipts and PDFs", "Updates your spreadsheet automatically"],
      },
      {
        title: "AI Product Descriptions & Copy Tools",
        category: "Content Tools",
        desc: "Custom AI tools that help your team draft product listings, blog outlines, or customer follow-up emails in seconds while keeping your tone.",
        highlights: ["Generate product copy in seconds", "Maintains your brand voice", "Easy for any team member to use"],
      },
      {
        title: "Strict Safety & Accuracy Guardrails",
        category: "Safety & Privacy",
        desc: "Security rules built in so the AI never makes up facts, stays on topic, and keeps your private customer information completely safe.",
        highlights: ["Prevents incorrect or off-topic answers", "Guarantees business data confidentiality", "Simple controls to update what the AI knows"],
      },
    ],
    process: [
      {
        step: "01",
        name: "Identify Key Opportunities",
        timeframe: "Week 1",
        desc: "We discuss what repetitive questions or tasks take up the most time in your business and choose the best AI solution.",
        keyDeliverable: "AI Automation & Assistant Plan",
      },
      {
        step: "02",
        name: "Gather Your Knowledge",
        timeframe: "Weeks 2-3",
        desc: "We collect your business FAQs, product guides, and policies so the AI knows your company thoroughly and accurately.",
        keyDeliverable: "Trained Business Knowledge Base",
      },
      {
        step: "03",
        name: "Testing & Tone Refinement",
        timeframe: "Week 4",
        desc: "We test the AI with hundreds of realistic customer questions, tuning its answers to be friendly, helpful, and 100% accurate.",
        keyDeliverable: "Tested & Verified AI Assistant",
      },
      {
        step: "04",
        name: "Launch on Your Website",
        timeframe: "Week 5",
        desc: "We install the AI widget on your website or connect it to your inbox, and show your team how easy it is to update answers.",
        keyDeliverable: "Live AI Tool & Team Training Guide",
      },
    ],
    comparison: [
      {
        feature: "Answer Accuracy",
        traditional: "Generic online chatbots that invent answers and frustrate your customers",
        krewmesh: "Trained strictly on your real documents with guardrails preventing made-up facts",
      },
      {
        feature: "Data Privacy",
        traditional: "Public AI tools that share your private conversations and customer info",
        krewmesh: "Private enterprise integrations where your data is 100% confidential and safe",
      },
      {
        feature: "Brand Personality",
        traditional: "Robotic, unnatural answers that don't match your company voice",
        krewmesh: "Tuned to speak politely and naturally in your exact brand personality",
      },
      {
        feature: "Ease of Updates",
        traditional: "Requires calling a developer every time a price or business policy changes",
        krewmesh: "Simple dashboard where you upload a new document to update the AI instantly",
      },
    ],
    faqs: [
      {
        q: "Will the AI make up incorrect answers or confuse our customers?",
        a: "No. We put strict guardrails in place. The AI is instructed to only answer questions using your verified business information. If a customer asks something not covered in your documents, the AI politely explains and offers to connect them to your human team.",
      },
      {
        q: "Is our company data kept completely private and secure?",
        a: "Yes. We only use private enterprise business integrations where your information is strictly protected by contract and never used to train public AI models.",
      },
      {
        q: "Do I need coding skills to manage or update the AI?",
        a: "Not at all. Updating the AI is as simple as uploading a new PDF, editing a text document, or typing new FAQs into an easy dashboard.",
      },
      {
        q: "Can the AI speak in multiple languages?",
        a: "Yes! The AI can automatically understand and answer customer questions in over 50 languages, making it great for international customers.",
      },
    ],
  },

  saas: {
    slug: "saas",
    title: "SaaS & Custom Web Software",
    shortTitle: "SaaS",
    badge: "SaaS Platforms & Software",
    seoTitle: "Custom SaaS & Subscription Web Software Studio | Krew / Mesh",
    metaDescription:
      "Turn your software idea into a profitable subscription platform. We build complete SaaS platforms with user logins, Stripe billing, and customer dashboards.",
    seoKeywords: [
      "SaaS development agency",
      "Custom SaaS software build",
      "Subscription website development",
      "Stripe billing integration studio",
      "SaaS MVP development",
      "Web application software development",
      "Customer dashboard software",
    ],
    tagline: "Turn your software idea into a profitable subscription business.",
    heroDescription:
      "We help entrepreneurs and companies build complete subscription software platforms from scratch. From user signups and team accounts to automated Stripe credit card billing and customer dashboards, we deliver working software ready to attract paying subscribers.",
    accentColor: "#FF5400",
    accentGlow: "rgba(255, 84, 0, 0.4)",
    iconName: "Cloud",
    stats: [
      { label: "Billing", value: "Stripe Recurring Payments" },
      { label: "Timeline", value: "4 - 8 Weeks to Launch" },
      { label: "Ownership", value: "100% You Own It" },
    ],
    techStack: [
      { name: "Stripe Payments", category: "Credit Cards & Plans" },
      { name: "User Accounts", category: "Secure Logins" },
      { name: "Customer Dashboard", category: "Clean Portal" },
      { name: "Team Workspaces", category: "Invite Teammates" },
      { name: "Automated Emails", category: "Invoices & Alerts" },
      { name: "Cloud Database", category: "Secure Storage" },
    ],
    targetAudience: [
      "Founders Launching a SaaS",
      "Companies Turning Services Into Software",
      "Businesses Replacing Manual Spreadsheets",
      "Subscription & Membership Businesses",
    ],
    keyOutcomes: [
      { metric: "4 - 8 Wks", label: "Fast to Market", detail: "Get your working subscription platform in front of paying users quickly" },
      { metric: "Auto", label: "Stripe Billing", detail: "Recurring monthly and annual subscriptions with zero manual invoicing hassle" },
      { metric: "Team", label: "Workspaces", detail: "Customers can invite coworkers with secure permissions (Admin, Member)" },
      { metric: "100%", label: "Full Ownership", detail: "You own every single line of code and all customer accounts from day one" },
    ],
    deliverables: [
      {
        title: "Customer Dashboard & Web Portal",
        category: "User Experience",
        desc: "A clean, modern portal where your subscribers log in, use your software features, manage their settings, and invite teammates.",
        highlights: ["Intuitive, distraction-free interface", "Works smoothly on laptops and tablets", "Fast and responsive interactions"],
      },
      {
        title: "Stripe Credit Card Billing & Subscriptions",
        category: "Payments",
        desc: "Turnkey checkout pages, monthly and yearly plans, automated payment receipts, and a customer self-serve billing portal.",
        highlights: ["Accepts Visa, Mastercard, Apple Pay & Google Pay", "Automated monthly & yearly renewals", "Customers can upgrade or update cards easily"],
      },
      {
        title: "Secure User Signups & Team Accounts",
        category: "Authentication",
        desc: "Easy email signups, password resets, Google logins, and workspace permissions so businesses can invite their whole team.",
        highlights: ["One-click Google or email signups", "Team member invite links", "Role permissions for owners and staff"],
      },
      {
        title: "Welcoming Onboarding Experience",
        category: "Activation",
        desc: "A friendly setup checklist and welcome flow that guides new subscribers to their first success so they stick around and keep paying.",
        highlights: ["Step-by-step setup guide", "Reduces trial cancellations", "Easy for non-technical users to get started"],
      },
      {
        title: "Admin Command Center & Metrics",
        category: "Management",
        desc: "A private admin panel where you can see active subscribers, revenue, recent signups, and manage customer accounts easily.",
        highlights: ["Track monthly recurring revenue (MRR)", "View and search active customers", "Quickly help customers with account questions"],
      },
      {
        title: "Automated Emails & Customer Alerts",
        category: "Notifications",
        desc: "Branded automated emails for welcome messages, payment receipts, team invites, and renewal reminders sent right on time.",
        highlights: ["Automatic payment confirmation receipts", "Team invite notifications", "Keeps customers informed automatically"],
      },
    ],
    process: [
      {
        step: "01",
        name: "Plan & Feature Blueprint",
        timeframe: "Week 1",
        desc: "We define your subscription pricing plans, identify the essential features for launch, and map out the customer screens.",
        keyDeliverable: "SaaS Feature Blueprint & Screen Maps",
      },
      {
        step: "02",
        name: "Logins & Stripe Billing Setup",
        timeframe: "Weeks 2-3",
        desc: "We build user accounts, team workspaces, connect Stripe for credit card checkouts, and verify payments in test mode.",
        keyDeliverable: "Working Account & Billing Shell",
      },
      {
        step: "03",
        name: "Core Features & Dashboard",
        timeframe: "Weeks 4-6",
        desc: "We code the primary features that make your software valuable, creating a clean dashboard that is easy to use.",
        keyDeliverable: "Complete Working SaaS Platform",
      },
      {
        step: "04",
        name: "Payment Testing & Live Launch",
        timeframe: "Weeks 7-8",
        desc: "We test signups and payments thoroughly, connect your custom domain, and launch your software ready to take paying customers.",
        keyDeliverable: "Live Subscription Platform Ready for Users",
      },
    ],
    comparison: [
      {
        feature: "Time to Launch",
        traditional: "9 to 12 months of slow, bloated agency development cycles",
        krewmesh: "Focused, production-ready platform launched in 4 to 8 weeks",
      },
      {
        feature: "Billing Setup",
        traditional: "Confusing manual invoicing with broken payment webhooks and payment errors",
        krewmesh: "Turnkey Stripe integration with self-serve billing portals and automated renewals",
      },
      {
        feature: "Code Ownership",
        traditional: "Locked into agency-owned frameworks with recurring monthly maintenance traps",
        krewmesh: "100% full ownership of your code, database, and infrastructure from day one",
      },
      {
        feature: "User Interface",
        traditional: "Clunky, outdated screens that confuse users and cause high cancellations",
        krewmesh: "Clean, modern, and friendly design that customers love logging into daily",
      },
    ],
    faqs: [
      {
        q: "How long does it take to launch a new SaaS platform?",
        a: "A focused, high-value first version with user signups, team workspaces, Stripe subscription billing, and core features typically launches in 4 to 8 weeks.",
      },
      {
        q: "How does payment processing work?",
        a: "We connect directly to Stripe, the world's leading payment processor. Customers can subscribe using credit cards, Apple Pay, or Google Pay. All payments deposit directly into your company bank account.",
      },
      {
        q: "Can customers invite their team members to their workspace?",
        a: "Yes! We build organization workspaces so your subscribers can easily invite coworkers by email and assign roles like Admin or Member.",
      },
      {
        q: "Who owns the code and customer database?",
        a: "You own 100% of the code, customer database, and infrastructure from day one. Everything is deployed directly to your own accounts, with zero agency cuts or royalties.",
      },
    ],
  },
};

export const allServiceSlugs = Object.keys(servicesData);
