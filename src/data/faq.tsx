import React from 'react';
import Link from 'next/link';

export interface FAQItem {
  id: string;
  question: string;
  summaryAnswer: string;
  answer: React.ReactNode;
  keywords: string[];
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'cost-pricing',
    question: 'How much will a custom website cost for my business?',
    keywords: ['cost', 'price', 'pricing', 'packages', 'fastforward', 'deepweb', 'rates', 'how much', 'budget'],
    summaryAnswer: 'Our website builds start at ₹9,999 for the FASTFORWARD package (up to 5 pages, 3–5 days) and ₹19,999 for the DEEPWEB package (up to 10 pages with CMS and animations). Custom web apps and SaaS platforms receive fixed upfront proposals.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          We offer clear, fixed-price packages tailored to your business scale so you know your exact investment upfront:
        </p>
        <div className="space-y-2.5 pl-2 my-2 text-sm">
          <div>
            <span className="text-white font-medium">FASTFORWARD Package (Starting ₹9,999 • 3–5 days): </span>
            <span className="text-neutral-400">
              Up to 5 custom pages, responsive mobile design, WhatsApp &amp; contact inquiry setup, basic SEO, and domain configuration. Perfect for local businesses, consultants, and early startups.
            </span>
          </div>
          <div>
            <span className="text-white font-medium">DEEPWEB Package (Starting ₹19,999 • 7–10 days): </span>
            <span className="text-neutral-400">
              Up to 10 custom pages, custom kinetic animations, blog or CMS integration, multi-step lead capture funnels, structured schema data, and analytics. Ideal for growing brands and clinics.
            </span>
          </div>
          <div>
            <span className="text-white font-medium">Custom Web Apps &amp; SaaS (Bespoke scope • 2–4 weeks): </span>
            <span className="text-neutral-400">
              Tailored development for portals, customer dashboards, authentication, database architecture, and payment gateway integrations.
            </span>
          </div>
        </div>
        <p className="text-sm text-neutral-400">
          Have unique requirements? <Link href="/contact" className="text-white underline underline-offset-4 hover:text-neutral-300">Request a custom quote</Link> and we will provide an exact breakdown.
        </p>
      </div>
    ),
  },
  {
    id: 'timeline-launch',
    question: 'How long will it take from start to finish to get my website live?',
    keywords: ['timeline', 'turnaround', 'how long', 'duration', 'days', 'delivery', 'launch date'],
    summaryAnswer: 'FASTFORWARD projects launch in 3 to 5 business days. DEEPWEB multi-page websites launch in 7 to 10 business days. Custom portals typically take 2 to 4 weeks.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          Delivery depends on the scope of your build, but we pride ourselves on rapid execution:
        </p>
        <ul className="space-y-1.5 pl-2 my-2 text-sm">
          <li>
            <span className="text-white font-medium">FASTFORWARD Builds: </span>
            <span>Typically completed and launched in 3 to 5 business days.</span>
          </li>
          <li>
            <span className="text-white font-medium">DEEPWEB Builds: </span>
            <span>Delivered within 7 to 10 business days.</span>
          </li>
          <li>
            <span className="text-white font-medium">Custom Web Applications: </span>
            <span>Typically range between 2 to 4 weeks depending on features.</span>
          </li>
        </ul>
        <p className="text-sm text-neutral-400">
          Have an urgent launch date or marketing campaign? Let us know during discovery and we can coordinate an accelerated schedule.
        </p>
      </div>
    ),
  },
  {
    id: 'requirements-prep',
    question: 'What do I need to prepare or provide before you can start?',
    keywords: ['requirements', 'what to provide', 'prep', 'content', 'assets', 'start', 'checklist'],
    summaryAnswer: 'All we need to begin is a brief summary of your business, your main goals, and any existing branding assets (logo, colors, or copy). We can assist with missing copy or imagery.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          Getting started is low-stress. All we need from your side is:
        </p>
        <ul className="space-y-1.5 pl-4 list-disc marker:text-neutral-600 my-2 text-sm">
          <li>Your primary business objective (e.g., getting leads, booking appointments, selling products).</li>
          <li>Any existing branding assets (your logo file, brand colors, or preferred fonts if available).</li>
          <li>Rough text content or bullet points about your services and company.</li>
          <li>Links to 2–3 reference websites whose aesthetic or functionality you like.</li>
        </ul>
        <p className="text-sm text-neutral-400">
          Don&apos;t have finished copy or professional photos yet? Don&apos;t worry — we assist you with structuring your content and selecting high-grade commercial imagery.
        </p>
      </div>
    ),
  },
  {
    id: 'mobile-responsiveness',
    question: 'Will my website work well and load fast on mobile phones?',
    keywords: ['mobile', 'responsive', 'iphone', 'android', 'tablet', 'screen sizes', 'speed'],
    summaryAnswer: 'Yes. Over 65% of web visitors browse on mobile. We build mobile-first, ensuring sub-second load times, fluid layouts, and ergonomic touch navigation on all screen sizes.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          <strong className="text-white">Yes, absolutely.</strong> Over 65% of all web traffic originates from mobile devices. We design and test with a strict mobile-first methodology.
        </p>
        <p>
          Every page is tested across real iPhones, Android smartphones, iPads, laptops, and wide desktop screens. Buttons are touch-friendly (48px+ tap targets), text remains legible without zooming, images load instantly in next-gen formats (WebP/AVIF), and menus open effortlessly on handheld devices.
        </p>
      </div>
    ),
  },
  {
    id: 'cms-edit-content',
    question: 'Can I make changes to text, images, and blogs myself without knowing code?',
    keywords: ['cms', 'edit text', 'update images', 'blog', 'admin', 'no code', 'self manage'],
    summaryAnswer: 'Yes. For websites requiring regular updates, we integrate an intuitive visual CMS (Sanity, Strapi, or markdown) so your team can edit copy and publish media with zero coding.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          <strong className="text-white">Yes.</strong> If your business requires regular updates — such as publishing new blog posts, adding team bios, updating service pricing, or sharing client case studies — we integrate an intuitive visual Content Management System (CMS).
        </p>
        <p>
          You receive a secure admin login where anyone on your team can type new text, swap images, and hit &ldquo;Publish&rdquo; — with instant updates appearing live across your site. No coding knowledge required.
        </p>
      </div>
    ),
  },
  {
    id: 'ownership-rights',
    question: 'Do I own 100% of my website, source code, and assets after launch?',
    keywords: ['ownership', 'ip rights', 'copyright', 'who owns', 'github', 'source code', 'lock in'],
    summaryAnswer: 'Yes. Upon project completion and final payment, you receive 100% full intellectual property (IP) ownership, complete Git repository code, and Figma design files with zero studio lock-in.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          <strong className="text-white">Yes, 100%.</strong> Unlike agencies that lease websites or lock you into proprietary hosting systems, you own everything we build for you.
        </p>
        <p>
          Upon project handover, we transfer complete Git repository ownership (GitHub), production deployment keys, Figma design files, and all vector graphic assets directly to you. You are never locked into our studio and have total freedom.
        </p>
      </div>
    ),
  },
  {
    id: 'seo-google-ranking',
    question: 'Will my website show up on Google search results (SEO)?',
    keywords: ['seo', 'google rank', 'search console', 'meta tags', 'keywords', 'find on google'],
    summaryAnswer: 'Yes. Core SEO is built into our architecture by default, including 90+ PageSpeed scores, semantic HTML5, Schema.org structured JSON-LD microdata, and automatic sitemaps for Google indexing.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          <strong className="text-white">Yes.</strong> Search engine optimization is built directly into our code architecture from day one:
        </p>
        <ul className="space-y-1.5 pl-2 my-2 text-sm">
          <li>
            <span className="text-white font-medium">Sub-Second Page Speeds: </span>
            <span>Google ranks fast websites higher; we optimize for 90+ Core Web Vitals performance scores.</span>
          </li>
          <li>
            <span className="text-white font-medium">Semantic HTML5 &amp; Metadata: </span>
            <span>Descriptive title tags, meta descriptions, and clean heading hierarchies on every page.</span>
          </li>
          <li>
            <span className="text-white font-medium">Schema.org Structured Data: </span>
            <span>We inject JSON-LD microdata so Google clearly understands your company, products, and FAQs.</span>
          </li>
          <li>
            <span className="text-white font-medium">XML Sitemaps: </span>
            <span>Dynamic XML sitemaps generated automatically for instant Google Search Console indexing.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'post-launch-support',
    question: 'What happens if something breaks or needs fixing after the site is launched?',
    keywords: ['support', 'warranty', 'bugs', 'maintenance', 'help', 'broken', 'after launch'],
    summaryAnswer: 'Every website build includes a complimentary 14 to 30-day post-launch warranty where we fix any browser quirks or formatting issues at zero extra charge.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          Every build includes a <strong className="text-white">14 to 30-day post-launch warranty window</strong> at zero additional charge. During this time, we monitor real user traffic and immediately resolve any unexpected bugs, browser quirks, or formatting issues.
        </p>
        <p>
          After the warranty period, we offer flexible on-demand support and affordable monthly maintenance retainers for businesses that want ongoing updates, new feature builds, and continuous performance tuning.
        </p>
      </div>
    ),
  },
  {
    id: 'redesign-preserve-traffic',
    question: 'Can you redesign my existing website without losing my current Google rankings?',
    keywords: ['redesign', 'existing website', 'traffic loss', '301 redirect', 'preserve seo', 'migration'],
    summaryAnswer: 'Yes. We audit your existing URLs and traffic, setting up 301 redirects and preserving metadata so your search rankings and backlinks carry over without traffic drop-offs.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          <strong className="text-white">Yes.</strong> When redesigning an active website, preserving your existing organic traffic is our top priority.
        </p>
        <p>
          We map all your existing URL structures, configure permanent 301 server redirects for any modified links, preserve critical keyword metadata, and verify that Google Search Console indexes the new pages cleanly without broken 404 links.
        </p>
      </div>
    ),
  },
  {
    id: 'integrations-features',
    question: 'Can you connect online payments, WhatsApp chat, and appointment booking?',
    keywords: ['whatsapp', 'payment gateway', 'stripe', 'razorpay', 'calendly', 'booking', 'forms'],
    summaryAnswer: 'Yes. We regularly integrate WhatsApp direct inquiry buttons, payment gateways (Stripe, Razorpay), calendar booking tools (Calendly), and CRM inquiry funnels.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          <strong className="text-white">Yes.</strong> A website should be an active business asset that captures leads and generates revenue. We regularly integrate:
        </p>
        <ul className="space-y-1.5 pl-2 my-2 text-sm">
          <li>
            <span className="text-white font-medium">WhatsApp &amp; Direct Messaging: </span>
            <span>Instant floating contact triggers so customers can chat with you immediately.</span>
          </li>
          <li>
            <span className="text-white font-medium">Payment Gateways: </span>
            <span>Seamless credit/debit card, UPI, Stripe, or Razorpay checkout workflows.</span>
          </li>
          <li>
            <span className="text-white font-medium">Appointment Scheduling: </span>
            <span>Calendly, Google Calendar, or custom intake booking forms.</span>
          </li>
          <li>
            <span className="text-white font-medium">CRM &amp; Email Marketing: </span>
            <span>Automatic lead routing to your email, WhatsApp alerts, or CRM dashboard.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'recurring-fees',
    question: 'Do I have to pay ongoing monthly fees to your studio?',
    keywords: ['recurring fees', 'monthly cost', 'retainer', 'hidden charges', 'hosting fees', 'annual fee'],
    summaryAnswer: 'No. Our website build fee is a one-time investment. The only recurring costs are your standard domain registration and cloud hosting, registered directly in your own accounts.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          <strong className="text-white">No.</strong> Our build fee is a one-time project fee. You do not pay our studio any monthly retainer or maintenance charge unless you specifically hire us for continuous monthly updates.
        </p>
        <p>
          Your only recurring expenses are standard third-party infrastructure fees (such as your annual domain name renewal and hosting provider, e.g. Vercel or AWS, which frequently offer free tiers for modern static sites). We set these up under your own accounts so you have total financial control.
        </p>
      </div>
    ),
  },
  {
    id: 'revisions-satisfaction',
    question: 'What happens if I want changes during the design or development process?',
    keywords: ['revisions', 'feedback', 'changes', 'satisfaction', 'approval', 'not happy'],
    summaryAnswer: 'Every project includes dedicated collaborative review rounds during both the Figma visual design stage and the private staging build so you are 100% satisfied before launch.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          We treat client feedback as an open, structured collaboration. You are never kept in the dark:
        </p>
        <p>
          We conduct review milestones during the Figma visual mockup stage so you can approve fonts, colors, and layout before any code is written. Later, during development, we provide a private interactive staging link where you and your team can test actual animations, click links, and request refinements prior to public launch.
        </p>
      </div>
    ),
  },
  {
    id: 'copy-and-images',
    question: 'What if I don’t have professional photos or finished website copy?',
    keywords: ['copywriting', 'photos', 'images', 'content writing', 'stock photos', 'branding'],
    summaryAnswer: 'That is completely normal. We help refine your headlines and text content, and curate high-resolution licensed photography and custom iconography tailored to your brand.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          That is very common and completely fine. You do not need to have agency-grade copywriting or a professional photoshoot prepared.
        </p>
        <p>
          We can assist in refining your messaging, crafting clear conversion-focused headlines, and curating high-resolution commercial stock photography and custom icons tailored to your industry to make your brand look world-class.
        </p>
      </div>
    ),
  },
  {
    id: 'custom-features',
    question: 'Can you build custom interactive features, animations, or client portals?',
    keywords: ['custom features', '3d', 'animations', 'portals', 'calculators', 'interactive', 'web app'],
    summaryAnswer: 'Yes. We are full-stack software engineers and specialize in building custom interactive tools, 3D WebGL graphics, client portals, and bespoke web apps.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          <strong className="text-white">Yes.</strong> Because we are full-stack software engineers rather than generic template configurators, we build advanced custom features including:
        </p>
        <ul className="space-y-1.5 pl-4 list-disc marker:text-neutral-600 my-2 text-sm">
          <li>Custom pricing and treatment quote calculators.</li>
          <li>Interactive 3D WebGL scenes, kinetic canvases, and physics models.</li>
          <li>Password-protected client or employee dashboards.</li>
          <li>Multi-step quotation funnels and bespoke interactive questionnaires.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'security-uptime',
    question: 'How secure is my website against hackers, spam, and downtime?',
    keywords: ['security', 'ssl', 'https', 'hackers', 'spam', 'downtime', 'cloudflare', 'protection'],
    summaryAnswer: 'Modern Next.js edge builds eliminate traditional WordPress database vulnerabilities. We configure HTTPS/SSL encryption, security headers, and anti-spam protection by default.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          Because we build modern server-rendered and static Next.js platforms deployed to global CDN edge networks, your site does not suffer from the common security holes, outdated plugins, and database injection attacks associated with traditional WordPress setups.
        </p>
        <p>
          We implement HTTPS/SSL certificates, enterprise security headers, DDoS mitigation, and smart honeypot form protection to eliminate bot spam and guarantee 99.9% uptime.
        </p>
      </div>
    ),
  },
  {
    id: 'payment-kickoff',
    question: 'How do payments work, and how do we officially kick off the project?',
    keywords: ['how to start', 'payment terms', 'deposit', 'kickoff', 'milestones', 'invoice', 'hire'],
    summaryAnswer: 'Projects typically operate on a standard 50% kickoff deposit and 50% upon final approval and live launch. Get started by contacting us or messaging WhatsApp at +91 920 983 9142.',
    answer: (
      <div className="space-y-3 text-neutral-400 leading-relaxed">
        <p>
          Projects typically follow a clear, fair milestone schedule: <strong className="text-white">50% deposit upon project kickoff</strong> and <strong className="text-white">50% upon your final review and public launch</strong>.
        </p>
        <p>
          To get started, simply send an inquiry through our <Link href="/contact" className="text-white underline underline-offset-4 hover:text-neutral-300">contact page</Link> or chat with us on WhatsApp at <a href="https://wa.me/919209839142" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-neutral-300">+91 920 983 9142</a>. We will discuss your goals and send you a formal proposal within 24 hours.
        </p>
      </div>
    ),
  },
];
