"use client";

import { useState } from "react";
import GlobalCanvas from "@/components/GlobalCanvas";
import Header from "@/components/Header";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  X, 
  Loader2, 
  Code2, 
  Palette, 
  PhoneCall,
  Compass, 
  Zap, 
  ShieldCheck, 
  Mail,
  Users
} from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  department: "Sales" | "Design" | "Engineering";
  type: string;
  location: string;
  experience: string;
  openings?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: "sales-executive-telecalling",
    title: "Sales Executive (Telecalling)",
    department: "Sales",
    type: "Full-Time",
    openings: "2 Openings",
    location: "India / Hybrid / Remote",
    experience: "0 - 2 Years",
    description: "Drive agency business growth through outbound telecalling, client outreach, lead qualification, and pitching creative tech solutions (branding, web development, UI/UX, AI products).",
    responsibilities: [
      "Conduct outbound calling to potential clients, businesses, and startups to pitch agency services",
      "Qualify incoming leads, understand client digital requirements, and schedule discovery calls",
      "Maintain organized calling records, customer notes, and proactive follow-ups in CRM",
      "Present agency capabilities with clarity, enthusiasm, and high professional standards"
    ],
    requirements: [
      "Strong verbal communication skills and confident, persuasive telecalling telephone etiquette",
      "Prior experience in telecalling, cold calling, inside sales, or client outreach is preferred (freshers with high energy are welcome)",
      "Knowledge of or keen interest in websites, branding, UI/UX, and digital services",
      "Goal-oriented, self-motivated mindset with resilience and great conversational ability"
    ],
    skills: ["Telecalling", "Cold Calling", "Lead Generation", "Client Pitching", "Inside Sales", "CRM Follow-ups"]
  },
  {
    id: "designer-fulltime",
    title: "Designer",
    department: "Design",
    type: "Full-Time",
    location: "Remote / India",
    experience: "1 - 3+ Years",
    description: "Lead end-to-end design across UI/UX, web interfaces, brand identity systems, marketing visuals, and interactive digital products with exceptional craft.",
    responsibilities: [
      "Design modern UI/UX layouts, wireframes, and interactive clickable prototypes in Figma",
      "Create striking brand assets, typography systems, logos, and high-impact presentation decks",
      "Collaborate directly with developers to guarantee 100% pixel-perfect implementation",
      "Iterate rapidly based on creative direction while upholding an uncompromising aesthetic standard"
    ],
    requirements: [
      "Solid design portfolio showcasing modern web design, UI/UX, and brand identity projects",
      "Mastery of Figma, component variants, auto-layout, and interactive prototyping",
      "Proficiency with Adobe Illustrator / Photoshop for vector art and graphic collaterals",
      "Sharp aesthetic eye for typography, whitespace, layout balance, and micro-interactions"
    ],
    skills: ["Figma", "UI/UX Design", "Web Design", "Brand Identity", "Prototyping", "Design Systems"]
  },
  {
    id: "vibecoder-fulltime",
    title: "Vibecoder",
    department: "Engineering",
    type: "Full-Time",
    location: "Remote / India",
    experience: "High Speed & Agency",
    description: "High-velocity product builder who leverages modern AI coding tools (Cursor, Claude, Copilot, LLMs) + Next.js/React to turn product concepts into deployed reality at lightspeed.",
    responsibilities: [
      "Vibecode, iterate, and ship functional web applications, SaaS MVPs, and immersive landing pages in record time",
      "Harness AI-assisted workflows (Cursor, Claude, LLMs) to write, debug, and refactor clean code fast",
      "Implement responsive UI components, fluid animations (GSAP / Framer Motion), and API integrations",
      "Deploy, test, and ship continuously with an obsessive hacker mindset and high agency"
    ],
    requirements: [
      "Demonstrated ability to ship functional web products, tools, or applications at breakneck speed",
      "Solid practical knowledge of Next.js, React, TypeScript, Tailwind CSS, and modern web APIs",
      "Proficient with AI coding assistants, prompt engineering for code, and modern dev tooling",
      "Relentless curiosity, bias for action, and passion for building software that feels incredible"
    ],
    skills: ["Vibecoding", "Next.js", "React", "TypeScript", "Tailwind CSS", "AI Coding Tools", "Rapid Prototyping"]
  }
];

const perks = [
  {
    icon: Compass,
    title: "Autonomy & Freedom",
    description: "No micro-management. You have full ownership over your projects and decisions from ideation to production."
  },
  {
    icon: Zap,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world. Flexible hours designed around asynchronous deep focus and healthy work-life balance."
  },
  {
    icon: Sparkles,
    title: "Zero Legacy Tech",
    description: "We work with modern, cutting-edge tools: Next.js, Three.js, Figma, AI models, and real-time 3D pipelines."
  },
  {
    icon: ShieldCheck,
    title: "High Impact & Growth",
    description: "Direct impact on high-profile client launches, competitive compensation, and accelerated creative leadership."
  }
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [activeJob, setActiveJob] = useState<JobPosition | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyingForRole, setApplyingForRole] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    resume: "",
    role: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const departments = ["All", "Sales", "Design", "Engineering"];

  const filteredJobs = selectedDept === "All"
    ? jobPositions
    : jobPositions.filter(job => job.department === selectedDept);

  const handleOpenApply = (roleTitle: string) => {
    setApplyingForRole(roleTitle);
    setFormData(prev => ({ ...prev, role: roleTitle }));
    setIsSubmitted(false);
    setErrorMessage("");
    setIsApplyModalOpen(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.portfolio.trim()) {
      setErrorMessage("Please fill in your name, email, and portfolio / profile link.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      portfolio: "",
      resume: "",
      role: "",
      message: ""
    });
    setIsSubmitted(false);
    setIsApplyModalOpen(false);
  };

  return (
    <>
      <GlobalCanvas />
      <Header />

      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        
        {/* Main Content Area */}
        <main className="flex-1 pt-32 sm:pt-40 md:pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
          
          {/* Hero Section */}
          <section className="text-center max-w-3xl mx-auto space-y-6 mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-medium uppercase tracking-widest text-foreground/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              We Are Hiring &bull; Join The Krew
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
              Build the Future of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                Creative Tech.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
              We are an interdisciplinary creative technology studio combining branding, UI/UX, 3D experiences, web engineering, and AI products. We are looking for relentless craftspeople who care deeply about aesthetics, speed, and pushing boundaries.
            </p>

            <div className="pt-2 flex items-center justify-center gap-4">
              <a
                href="#open-positions"
                className="px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <span className="text-black">View Open Roles</span>
                <ChevronRight size={17} className="text-black stroke-[3]" />
              </a>
              <button
                type="button"
                onClick={() => handleOpenApply("General Application")}
                className="px-7 py-3.5 rounded-full bg-transparent border border-white/30 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                General Application
              </button>
            </div>
          </section>

          {/* Perks & Studio Culture Section */}
          <section className="mb-24">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Why Build With KREW / MESH?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400">
                A culture built for autonomous creators who take pride in high-tier execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 backdrop-blur-md hover:border-neutral-700 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{perk.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{perk.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Open Positions Section */}
          <section id="open-positions" className="scroll-mt-28 mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  <Briefcase size={14} />
                  <span>Opportunities</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  Open Positions ({filteredJobs.length})
                </h2>
              </div>

              {/* Department Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 bg-neutral-950/80 p-1.5 rounded-full border border-neutral-800">
                {departments.map(dept => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedDept === dept
                        ? "bg-white text-black shadow-md font-bold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              {filteredJobs.map((job) => {
                const isExpanded = activeJob?.id === job.id;

                return (
                  <div
                    key={job.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? "bg-neutral-900/95 border-white/40 shadow-2xl"
                        : "bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/50"
                    }`}
                  >
                    {/* Job Card Header */}
                    <div 
                      className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer"
                      onClick={() => setActiveJob(isExpanded ? null : job)}
                    >
                      <div className="space-y-3 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/10 text-white border border-white/20">
                            {job.department}
                          </span>
                          {job.openings && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              <Users size={12} /> {job.openings}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 text-xs text-neutral-300">
                            <Clock size={13} /> {job.type}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-neutral-300">
                            <MapPin size={13} /> {job.location}
                          </span>
                          <span className="text-xs text-neutral-400">
                            &bull; {job.experience}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                          {job.title}
                        </h3>

                        <p className="text-sm text-neutral-400 line-clamp-2 max-w-3xl">
                          {job.description}
                        </p>
                      </div>

                      {/* Right Action Buttons */}
                      <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                        <RainbowButton
                          type="button"
                          onClick={() => handleOpenApply(job.title)}
                          className="h-10 px-5 rounded-full text-xs sm:text-sm font-bold gap-2 cursor-pointer shadow-md"
                        >
                          <span>Apply Now</span>
                          <ArrowUpRight size={17} className="stroke-[3]" />
                        </RainbowButton>

                        <button
                          type="button"
                          onClick={() => setActiveJob(isExpanded ? null : job)}
                          className="p-2.5 rounded-full bg-white/10 border border-white/25 text-white hover:bg-white/20 hover:border-white/50 transition-colors cursor-pointer"
                          aria-label={isExpanded ? "Collapse job details" : "Expand job details"}
                        >
                          <ChevronRight
                            size={18}
                            className={`text-white stroke-[2.5] transform transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Expandable Job Details */}
                    {isExpanded && (
                      <div className="px-6 sm:px-7 pb-8 pt-2 border-t border-neutral-800/80 space-y-6 animate-fade-in-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-200 mb-3 flex items-center gap-2">
                              <Code2 size={16} className="text-neutral-300" /> What You'll Do
                            </h4>
                            <ul className="space-y-2.5">
                              {job.responsibilities.map((resp, i) => (
                                <li key={i} className="text-sm text-neutral-300 flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-200 mb-3 flex items-center gap-2">
                              <Palette size={16} className="text-neutral-300" /> What We Look For
                            </h4>
                            <ul className="space-y-2.5">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="text-sm text-neutral-300 flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Skills Pills & Apply Button */}
                        <div className="pt-4 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs text-neutral-400 mr-1">Skills & Tools:</span>
                            {job.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/10 border border-white/15 text-neutral-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => handleOpenApply(job.title)}
                            className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-md hover:scale-105 cursor-pointer"
                          >
                            <span className="text-black font-bold">Apply for {job.title}</span>
                            <ArrowUpRight size={17} className="text-black stroke-[3]" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Spontaneous Application Banner */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-neutral-950/80 border border-neutral-800 text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
              <Mail size={22} />
            </div>
            <div className="space-y-2 max-w-xl mx-auto">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Don't See Your Ideal Role?
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                We are always excited to collaborate with extraordinary thinkers, sales pros, designers, and coders. Send us your portfolio, github, or resume and tell us how you can contribute.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleOpenApply("Open / Custom Application")}
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                Send General Application
              </button>
            </div>
          </section>

        </main>

        {/* Unified Bottom Footer */}
        <CTAWithVerticalMarquee />
      </div>

      {/* Application Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={handleResetForm}
          />

          <div className="relative w-full max-w-xl rounded-3xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  Job Application
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {applyingForRole || "Join KREW / MESH"}
                </h3>
              </div>
              <button
                onClick={handleResetForm}
                className="p-2 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">Application Received!</h4>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto">
                    Thank you, {formData.name}. We will review your application and get back to you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-opacity"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-300">Position</label>
                  <select
                    value={formData.role || applyingForRole}
                    onChange={(e) => {
                      setFormData({ ...formData, role: e.target.value });
                      setApplyingForRole(e.target.value);
                    }}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="General Application">General / Spontaneous Application</option>
                    {jobPositions.map(j => (
                      <option key={j.id} value={j.title}>
                        {j.title} {j.openings ? `(${j.openings})` : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-300">Portfolio / Profile / Resume Link *</label>
                  <input
                    type="url"
                    required
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://yourportfolio.com or drive/linkedin link"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-300">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={formData.resume}
                    onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-300">Note / Why Krew Mesh?</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself, your experience, and what makes you a great fit..."
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <RainbowButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full h-12 text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-white" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <span>Submit Application</span>
                    )}
                  </RainbowButton>
                </div>

                <p className="text-[11px] text-center text-neutral-500 pt-1">
                  Prefer direct email? Send your resume &amp; details to{" "}
                  <a href="mailto:careers@krewmesh.com" className="text-neutral-300 underline hover:text-white">
                    careers@krewmesh.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
