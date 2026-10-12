"use client";

import { useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { CheckCircle2, Loader2, ArrowRight, ShieldCheck, MessageSquare, Zap, Building2, Mail, User, Clock } from "lucide-react";

const BOTTLENECKS = [
  "Development backlog (Next.js / Frontend)",
  "Complex 3D / WebGL / Interactive requirements",
  "Design system & Figma UI/UX bandwidth",
  "Emergency deadline rescue (48-72h turnaround)",
  "Full-stack SaaS / Backend / AI integration",
  "Ongoing monthly white-label pod",
];

const TIMELINES = [
  "Immediate (Next 48-72 hours)",
  "Within 1-2 weeks",
  "Next month / Planning ahead",
  "Ongoing monthly retainer",
];

export function AgencyPartnerForm() {
  const [formData, setFormData] = useState({
    agencyName: "",
    contactName: "",
    email: "",
    phone: "",
    bottlenecks: [] as string[],
    timeline: "Immediate (Next 48-72 hours)",
    projectScope: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleBottleneck = (item: string) => {
    setFormData((prev) => {
      const exists = prev.bottlenecks.includes(item);
      return {
        ...prev,
        bottlenecks: exists
          ? prev.bottlenecks.filter((b) => b !== item)
          : [...prev.bottlenecks, item],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.contactName} (${formData.agencyName} - B2B Overflow)`,
          email: formData.email,
          service: "development",
          message: `[B2B AGENCY OVERFLOW INQUIRY]\nAgency: ${formData.agencyName}\nContact: ${formData.contactName}\nPhone: ${formData.phone || "N/A"}\nTimeline: ${formData.timeline}\nBottlenecks: ${formData.bottlenecks.join(", ") || "None specified"}\n\nProject Scope & Overload Details:\n${formData.projectScope}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit request. Please reach us via WhatsApp or phone.");
      }
    } catch (err) {
      console.error("B2B Form submission error:", err);
      setErrorMessage("Network error occurred. You can also message our team directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Krew / Mesh team, I lead an agency/studio and would like to discuss white-label overflow capacity for an upcoming deadline.`
  );

  return (
    <div className="rounded-3xl border border-[#E6D5BD]/15 bg-[#141414]/90 p-8 sm:p-12 relative overflow-hidden backdrop-blur-xl shadow-2xl">
      {/* Decorative gradient corner glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D5360C]/10 blur-[90px] rounded-full pointer-events-none" />

      {isSubmitted ? (
        <div className="py-12 sm:py-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D5360C]/20 border border-[#D5360C]/40 text-[#D5360C]">
            <CheckCircle2 size={36} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-medium text-[#E6D5BD]">
              Inquiry Dispatched to B2B Partner Desk
            </h3>
            <p className="text-sm sm:text-base text-[#E6D5BD]/70 max-w-lg mx-auto">
              Our studio partners will review your requirements under strict confidentiality. Expect a direct response within 2 hours during active sprint hours.
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/919209839142?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-[#101010] text-sm font-medium transition-all"
            >
              <MessageSquare size={16} />
              <span>Fast-Track on WhatsApp (+91 920 983 9142)</span>
            </a>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  agencyName: "",
                  contactName: "",
                  email: "",
                  phone: "",
                  bottlenecks: [],
                  timeline: "Immediate (Next 48-72 hours)",
                  projectScope: "",
                });
              }}
              className="text-xs font-mono text-[#E6D5BD]/50 hover:text-[#D5360C] transition-colors underline underline-offset-4"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D5360C] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D5360C] font-semibold">
                Direct B2B Studio Intake
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#E6D5BD]">
              Request Confidential Overflow Capacity
            </h3>
            <p className="text-sm text-[#E6D5BD]/60 mt-1">
              Tell us about your current sprint bottleneck. We operate 100% white-label under mutual NDA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#E6D5BD]/70 flex items-center gap-2">
                <Building2 size={13} className="text-[#D5360C]" />
                Agency / Studio Name *
              </label>
              <input
                type="text"
                required
                value={formData.agencyName}
                onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                placeholder="e.g. Apex Creative Agency"
                className="w-full bg-[#1A1A1A] text-[#E6D5BD] placeholder:text-[#E6D5BD]/30 border border-[#E6D5BD]/15 rounded-xl px-4 py-3 text-sm focus:border-[#D5360C] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#E6D5BD]/70 flex items-center gap-2">
                <User size={13} className="text-[#D5360C]" />
                Your Name & Role *
              </label>
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                placeholder="e.g. Maya Lin (Managing Partner / Creative Director)"
                className="w-full bg-[#1A1A1A] text-[#E6D5BD] placeholder:text-[#E6D5BD]/30 border border-[#E6D5BD]/15 rounded-xl px-4 py-3 text-sm focus:border-[#D5360C] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#E6D5BD]/70 flex items-center gap-2">
                <Mail size={13} className="text-[#D5360C]" />
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="maya@apexcreative.com"
                className="w-full bg-[#1A1A1A] text-[#E6D5BD] placeholder:text-[#E6D5BD]/30 border border-[#E6D5BD]/15 rounded-xl px-4 py-3 text-sm focus:border-[#D5360C] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#E6D5BD]/70 flex items-center gap-2">
                <Clock size={13} className="text-[#D5360C]" />
                Urgency / Timeline *
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full bg-[#1A1A1A] text-[#E6D5BD] border border-[#E6D5BD]/15 rounded-xl px-4 py-3 text-sm focus:border-[#D5360C] focus:outline-none transition-colors"
              >
                {TIMELINES.map((t) => (
                  <option key={t} value={t} className="bg-[#1A1A1A] text-[#E6D5BD]">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bottlenecks Selector */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-[#E6D5BD]/70 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Zap size={13} className="text-[#D5360C]" />
                Where is your agency overloaded? (Select all that apply)
              </span>
              <span className="text-[11px] text-[#E6D5BD]/40 lowercase">optional</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {BOTTLENECKS.map((item) => {
                const active = formData.bottlenecks.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleBottleneck(item)}
                    className={`text-left text-xs px-3.5 py-2.5 rounded-xl border transition-all flex items-center justify-between ${
                      active
                        ? "bg-[#D5360C]/20 border-[#D5360C] text-[#E6D5BD] font-medium"
                        : "bg-[#181818] border-[#E6D5BD]/10 text-[#E6D5BD]/70 hover:border-[#E6D5BD]/30"
                    }`}
                  >
                    <span>{item}</span>
                    <span
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[10px] ${
                        active
                          ? "border-[#D5360C] bg-[#D5360C] text-[#E6D5BD]"
                          : "border-[#E6D5BD]/30"
                      }`}
                    >
                      {active ? "✓" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#E6D5BD]/70 flex items-center justify-between">
              <span>Project Scope & Deliverable Brief *</span>
              <span className="text-[11px] text-[#E6D5BD]/40 font-mono">Confidential under NDA</span>
            </label>
            <textarea
              required
              rows={4}
              value={formData.projectScope}
              onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
              placeholder="e.g. We have a luxury lifestyle client needing a 6-page interactive Next.js build with Framer Motion animations by next Friday. Designs are ready in Figma, but our internal frontend team is completely booked..."
              className="w-full bg-[#1A1A1A] text-[#E6D5BD] placeholder:text-[#E6D5BD]/30 border border-[#E6D5BD]/15 rounded-xl p-4 text-sm focus:border-[#D5360C] focus:outline-none transition-colors resize-none"
            />
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-mono">
              {errorMessage}
            </div>
          )}

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#E6D5BD]/50 font-mono">
              <ShieldCheck size={14} className="text-[#D5360C]" />
              <span>Mutual NDA respected. Zero contact with your end-client.</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/919209839142?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-mono uppercase tracking-wider transition-all"
                title="Direct WhatsApp with Studio Director"
              >
                <MessageSquare size={14} />
                <span className="hidden sm:inline">WhatsApp Hotline</span>
              </a>

              <RainbowButton
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-7 py-3 text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin" />
                    <span>Transmitting...</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <span>Submit Partner Brief</span>
                    <ArrowRight size={14} />
                  </span>
                )}
              </RainbowButton>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
