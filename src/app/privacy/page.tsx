import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, Cookie, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";
import CookieTriggerButton from "./components/CookieTriggerButton";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krewmesh.agency";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection | Krew / Mesh Studio",
  description:
    "Learn how Krew / Mesh protects your personal data, client confidentiality, 100% code IP ownership, cookie preferences, and technical infrastructure.",
  keywords: [
    "Krew Mesh Privacy Policy",
    "data protection policy",
    "client confidentiality agreement",
    "IP ownership web development",
    "cookie policy Krew Mesh",
    "creative technology studio privacy",
  ],
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy & Data Governance | Krew / Mesh",
    description:
      "Transparent data privacy practices, client confidentiality, 100% IP code ownership transfer, and cookie preferences.",
    url: `${baseUrl}/privacy`,
    siteName: "KREW / MESH",
    type: "website",
  },
};

const privacyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/privacy#webpage`,
      url: `${baseUrl}/privacy`,
      name: "Privacy Policy & Data Protection | Krew / Mesh",
      description:
        "Official Privacy Policy of Krew / Mesh studio detailing our data collection, security measures, client confidentiality, and cookie preferences.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Krew / Mesh",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy Policy",
            item: `${baseUrl}/privacy`,
          },
        ],
      },
    },
  ],
};

const SECTIONS = [
  { id: "studio-scope", title: "1. Scope & Studio Overview" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "purpose-of-processing", title: "3. How We Use Data" },
  { id: "client-confidentiality", title: "4. Client Confidentiality & 100% IP" },
  { id: "cookies-tracking", title: "5. Cookies & Tracking Preferences" },
  { id: "third-parties", title: "6. Infrastructure & Third Parties" },
  { id: "security-retention", title: "7. Security & Data Retention" },
  { id: "your-rights", title: "8. Your Rights & Data Subject Requests" },
  { id: "updates-contact", title: "9. Policy Updates & Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-background text-[#101010] pt-8 sm:pt-12 pb-24 overflow-hidden selection:bg-[#101010]/10">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
      />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D5360C]/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5360C]/30 bg-[#D5360C]/10 text-[11px] sm:text-xs font-mono tracking-widest text-[#D5360C] uppercase backdrop-blur-md font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5360C] animate-pulse" />
            <span>KREW / MESH • LEGAL & DATA GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#101010] uppercase leading-[1.1]">
            Privacy Policy & <span className="text-[#D5360C]">Data Protection.</span>
          </h1>

          <p className="text-[#101010]/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We value your trust and are committed to complete transparency regarding how your data is collected,
            processed, and secured when engaging with our studio and digital products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono text-[#101010]/60">
            <span>Last Updated: October 2026</span>
            <span>•</span>
            <span>Version: 2.1 (GDPR, CCPA & DPDP Aligned)</span>
            <span>•</span>
            <span>Status: Active</span>
          </div>
        </div>

        {/* Studio Privacy Pillars / Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-[#101010]/[0.03] border border-[#101010]/10 backdrop-blur-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#D5360C]/10 text-[#D5360C] flex items-center justify-center mb-3">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-sm text-[#101010] uppercase">100% Code Ownership</h3>
            <p className="text-xs text-[#101010]/70 leading-relaxed font-medium">
              All bespoke code, schemas, and design files produced for clients transfer 100% upon delivery with zero lock-in.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101010]/[0.03] border border-[#101010]/10 backdrop-blur-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#D5360C]/10 text-[#D5360C] flex items-center justify-center mb-3">
              <Lock size={20} />
            </div>
            <h3 className="font-bold text-sm text-[#101010] uppercase">Zero Data Brokering</h3>
            <p className="text-xs text-[#101010]/70 leading-relaxed font-medium">
              We never sell, monetize, or license your contact details, project specifications, or behavioral telemetry to data brokers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101010]/[0.03] border border-[#101010]/10 backdrop-blur-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#D5360C]/10 text-[#D5360C] flex items-center justify-center mb-3">
              <FileText size={20} />
            </div>
            <h3 className="font-bold text-sm text-[#101010] uppercase">Strict NDA Compliance</h3>
            <p className="text-xs text-[#101010]/70 leading-relaxed font-medium">
              Proprietary ideas, roadmap features, API keys, and unreleased designs are treated under bank-grade confidentiality.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101010]/[0.03] border border-[#101010]/10 backdrop-blur-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#D5360C]/10 text-[#D5360C] flex items-center justify-center mb-3">
              <Cookie size={20} />
            </div>
            <h3 className="font-bold text-sm text-[#101010] uppercase">Cookie Control</h3>
            <p className="text-xs text-[#101010]/70 leading-relaxed font-medium">
              You retain granular control over non-essential cookies with instant preference toggling at any time.
            </p>
          </div>
        </div>

        {/* Main Content Layout with Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="p-6 rounded-2xl bg-[#101010]/[0.03] border border-[#101010]/10 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#101010]/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#101010]/70 font-semibold">
                  Table of Contents
                </span>
                <span className="text-[11px] font-mono text-[#D5360C] font-semibold">
                  {SECTIONS.length} Sections
                </span>
              </div>
              <nav className="space-y-1.5" aria-label="Privacy sections">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-xs py-1.5 px-2 rounded-lg text-[#101010]/80 hover:text-[#D5360C] hover:bg-[#101010]/[0.04] transition-colors font-medium"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#101010]/10 space-y-3">
                <p className="text-xs text-[#101010]/70 leading-relaxed">
                  Need to update your cookie preferences for this browser?
                </p>
                <CookieTriggerButton />
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-5 rounded-2xl border border-[#D5360C]/20 bg-[#D5360C]/[0.03] space-y-3">
              <span className="text-[11px] font-mono uppercase text-[#D5360C] tracking-widest font-semibold block">
                Have Privacy Questions?
              </span>
              <p className="text-xs text-[#101010]/80 leading-relaxed">
                Reach our team directly for legal, DPA, or security assessment inquiries.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#D5360C] hover:text-[#101010] transition-colors"
              >
                <span>Contact Legal & Support</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </aside>

          {/* Legal Document Body */}
          <main className="lg:col-span-8 space-y-12">
            {/* Section 1 */}
            <section id="studio-scope" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] flex items-center gap-2">
                <span className="text-[#D5360C] font-mono text-base">01.</span>
                <span>Scope & Studio Overview</span>
              </h2>
              <div className="text-sm text-[#101010]/85 leading-relaxed space-y-3 font-medium">
                <p>
                  This Privacy Policy applies to all services, websites, client staging environments, and digital applications
                  operated by <strong>Krew / Mesh</strong> (&ldquo;Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
                  accessible via <Link href="/" className="text-[#D5360C] underline underline-offset-4">krewmesh.agency</Link> and
                  associated subdomains.
                </p>
                <p>
                  As an independent creative technology and web engineering studio, we partner with startups, growing businesses,
                  and enterprises globally. We treat your personal data in strict compliance with applicable data protection laws,
                  including the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA),
                  and the Digital Personal Data Protection (DPDP) Act.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="information-collected" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] flex items-center gap-2">
                <span className="text-[#D5360C] font-mono text-base">02.</span>
                <span>Information We Collect</span>
              </h2>
              <div className="text-sm text-[#101010]/85 leading-relaxed space-y-4 font-medium">
                <p>
                  We only gather information necessary to provide top-tier design, software development, consultative services,
                  and ensure the security and uptime of our digital assets.
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#101010]/[0.02] border border-[#101010]/10">
                    <h4 className="font-bold text-xs uppercase text-[#101010] font-mono mb-1">
                      A. Voluntary Client & Inquiry Information
                    </h4>
                    <p className="text-xs text-[#101010]/75 leading-relaxed">
                      When you submit our project contact form, request a custom quote, apply for careers, or subscribe to studio insights,
                      we collect your name, business email, organization name, phone or WhatsApp number, estimated budget range, and project briefs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#101010]/[0.02] border border-[#101010]/10">
                    <h4 className="font-bold text-xs uppercase text-[#101010] font-mono mb-1">
                      B. Client Project Deliverables & Credentials
                    </h4>
                    <p className="text-xs text-[#101010]/75 leading-relaxed">
                      During active design and engineering contracts, you may provide brand assets, vector artwork, third-party API credentials,
                      domain DNS settings, or staging database connection strings. These are stored strictly within encrypted environment vaults
                      and deleted or rotated upon delivery.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#101010]/[0.02] border border-[#101010]/10">
                    <h4 className="font-bold text-xs uppercase text-[#101010] font-mono mb-1">
                      C. Automated Technical Telemetry
                    </h4>
                    <p className="text-xs text-[#101010]/75 leading-relaxed">
                      Standard server logs record IP addresses (anonymized for analytics), browser type, referring URLs, screen resolution,
                      and error stack traces to detect security anomalies, DDoS attacks, and cross-browser rendering flaws.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="purpose-of-processing" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] flex items-center gap-2">
                <span className="text-[#D5360C] font-mono text-base">03.</span>
                <span>How We Use Your Information</span>
              </h2>
              <div className="text-sm text-[#101010]/85 leading-relaxed space-y-3 font-medium">
                <p>We process collected data exclusively under legitimate business bases and client agreements:</p>
                <ul className="space-y-2 text-xs text-[#101010]/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#D5360C] shrink-0 mt-0.5" />
                    <span><strong>Project Delivery:</strong> To architect, design, program, test, and deploy agreed-upon digital deliverables.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#D5360C] shrink-0 mt-0.5" />
                    <span><strong>Communication & Support:</strong> Responding to client sprint inquiries, scheduling strategy sessions, and sharing production builds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#D5360C] shrink-0 mt-0.5" />
                    <span><strong>Invoicing & Compliance:</strong> Issuing tax invoices, milestone receipts, and complying with statutory business accounting requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#D5360C] shrink-0 mt-0.5" />
                    <span><strong>Studio Improvement:</strong> Enhancing our web performance, Core Web Vitals, and interactive UX through aggregated telemetry.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="client-confidentiality" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] flex items-center gap-2">
                <span className="text-[#D5360C] font-mono text-base">04.</span>
                <span>Client Confidentiality & 100% IP Ownership</span>
              </h2>
              <div className="text-sm text-[#101010]/85 leading-relaxed space-y-3 font-medium">
                <div className="p-5 rounded-2xl bg-[#D5360C]/[0.05] border border-[#D5360C]/20 space-y-3">
                  <h4 className="font-bold text-sm uppercase text-[#101010]">
                    Our Guarantee to Founders and Enterprise Clients:
                  </h4>
                  <p className="text-xs text-[#101010]/80 leading-relaxed">
                    1. <strong>Full Intellectual Property Assignment:</strong> Upon receipt of full project payment, all bespoke source code,
                    Next.js applications, Figma design libraries, vector icons, custom shaders, and branding artifacts created for your project
                    become 100% your exclusive intellectual property.
                  </p>
                  <p className="text-xs text-[#101010]/80 leading-relaxed">
                    2. <strong>No LLM Training on Client Codebases:</strong> We never submit client proprietary code, secret algorithms,
                    or confidential datasets to public machine learning training pools.
                  </p>
                  <p className="text-xs text-[#101010]/80 leading-relaxed">
                    3. <strong>Non-Disclosure Agreements (NDAs):</strong> We routinely execute mutual NDAs prior to reviewing proprietary
                    pitch decks, technical specifications, or business workflows.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="cookies-tracking" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] flex items-center gap-2">
                <span className="text-[#D5360C] font-mono text-base">05.</span>
                <span>Cookies & Tracking Preferences</span>
              </h2>
              <div className="text-sm text-[#101010]/85 leading-relaxed space-y-3 font-medium">
                <p>
                  Cookies are small text records stored in your browser to remember user state and understand browsing performance.
                  We distinguish between two tiers:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-[#101010]/10 bg-[#101010]/[0.02]">
                    <h5 className="font-bold text-xs uppercase font-mono text-[#101010] mb-1">
                      Essential / Functional (Required)
                    </h5>
                    <p className="text-xs text-[#101010]/75 leading-relaxed">
                      Maintains theme preference, currency selections (INR, USD, EUR, GBP, AED), and security CSRF tokens.
                      These cannot be turned off as the website cannot operate properly without them.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#101010]/10 bg-[#101010]/[0.02]">
                    <h5 className="font-bold text-xs uppercase font-mono text-[#101010] mb-1">
                      Analytics & Performance (Optional)
                    </h5>
                    <p className="text-xs text-[#101010]/75 leading-relaxed">
                      Measures aggregate page views, outbound demo clicks, and Core Web Vitals latency without recording personally
                      identifying details. You can disable these at any time.
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <CookieTriggerButton />
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="third-parties" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] flex items-center gap-2">
                <span className="text-[#D5360C] font-mono text-base">06.</span>
                <span>Third-Party Infrastructure</span>
              </h2>
              <div className="text-sm text-[#101010]/85 leading-relaxed space-y-3 font-medium">
                <p>
                  To host high-availability web applications and process client inquiries securely, we partner with leading
                  cloud infrastructure providers vetted for international security compliance (ISO 27001, SOC 2 Type II):
                </p>
                <ul className="space-y-1.5 text-xs text-[#101010]/80">
                  <li>• <strong>Cloud Hosting & Edge CDN:</strong> Vercel Inc. and Amazon Web Services (AWS) for edge server rendering.</li>
                  <li>• <strong>Version Control:</strong> GitHub Enterprise (Microsoft) for encrypted, private git code repositories.</li>
                  <li>• <strong>Design Collaboration:</strong> Figma Inc. for secure visual design and client prototype reviews.</li>
                  <li>• <strong>Communication:</strong> Google Workspace & WhatsApp Business for direct client correspondence.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="security-retention" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] flex items-center gap-2">
                <span className="text-[#D5360C] font-mono text-base">07.</span>
                <span>Security & Data Retention</span>
              </h2>
              <div className="text-sm text-[#101010]/85 leading-relaxed space-y-3 font-medium">
                <p>
                  All data in transit is encrypted using Modern TLS 1.3 cryptographic protocols with HSTS preloading.
                  Internal access to customer records is restricted under the principle of least privilege (PoLP) and requires
                  hardware-backed two-factor authentication (2FA).
                </p>
                <p>
                  We retain contact inquiries for as long as active communication continues or up to 24 months thereafter for
                  contractual reference, unless an earlier erasure request is filed.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="your-rights" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] flex items-center gap-2">
                <span className="text-[#D5360C] font-mono text-base">08.</span>
                <span>Your Rights & Data Subject Requests</span>
              </h2>
              <div className="text-sm text-[#101010]/85 leading-relaxed space-y-3 font-medium">
                <p>Under international privacy regulations, you are entitled to exercise the following rights free of charge:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#101010]/80">
                  <div className="p-3 rounded-lg border border-[#101010]/10 bg-[#101010]/[0.02]">
                    <strong>Right to Access:</strong> Request a full copy of the personal data we hold about you.
                  </div>
                  <div className="p-3 rounded-lg border border-[#101010]/10 bg-[#101010]/[0.02]">
                    <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete contact records.
                  </div>
                  <div className="p-3 rounded-lg border border-[#101010]/10 bg-[#101010]/[0.02]">
                    <strong>Right to Erasure (&ldquo;To Be Forgotten&rdquo;):</strong> Request permanent deletion of your data.
                  </div>
                  <div className="p-3 rounded-lg border border-[#101010]/10 bg-[#101010]/[0.02]">
                    <strong>Right to Restrict or Object:</strong> Limit processing for direct marketing or profiling.
                  </div>
                </div>
                <p className="text-xs pt-1">
                  To submit a Data Subject Request, please contact our team at{" "}
                  <a href="tel:+919209839142" className="text-[#D5360C] font-bold underline">+91 920 983 9142</a> or message us via our{" "}
                  <Link href="/contact" className="text-[#D5360C] font-bold underline">contact portal</Link>.
                  We acknowledge and fulfill verified requests within thirty (30) days.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="updates-contact" className="scroll-mt-28 space-y-4 pb-8">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#101010] flex items-center gap-2">
                <span className="text-[#D5360C] font-mono text-base">09.</span>
                <span>Policy Updates & Contact</span>
              </h2>
              <div className="text-sm text-[#101010]/85 leading-relaxed space-y-4 font-medium">
                <p>
                  We may periodically revise this policy to reflect evolutions in our technology offerings, cloud architecture,
                  or statutory requirements. All revisions will be posted to this page with an updated &ldquo;Last Updated&rdquo; date.
                </p>

                <div className="p-6 rounded-2xl bg-[#101010] text-[#E6D5BD] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D5360C] uppercase tracking-wider font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#D5360C]" />
                    <span>Studio Office & Legal Representative</span>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#E6D5BD]">
                    Krew / Mesh Creative Technology Studio
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#E6D5BD]/80">
                    <div>
                      <p className="font-semibold text-[#E6D5BD]">Regional Studio Hubs:</p>
                      <p>Pune, Maharashtra • Indore, Madhya Pradesh</p>
                      <p>India (Serving Clients Worldwide)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#E6D5BD]">Inquiries & Legal Requests:</p>
                      <p>Phone / WhatsApp: <a href="tel:+919209839142" className="text-[#D5360C] font-bold hover:underline">+91 920 983 9142</a></p>
                      <p>Web Inquiry: <Link href="/contact" className="text-[#D5360C] font-bold hover:underline">krewmesh.agency/contact</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
