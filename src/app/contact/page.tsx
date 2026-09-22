"use client";

import { useState, useEffect } from "react";
import { ContactCard } from "@/components/ui/contact-card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MapPin, Phone, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { InstagramIcon } from "@/components/ui/footer-section-4-utils/social-cloud";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Check URL query params for prefilled service (e.g. ?service=ai)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        const validServices = ["branding", "design", "digital", "development", "ai", "saas"];
        const matched = validServices.find(s => serviceParam.toLowerCase().includes(s));
        if (matched) {
          setFormData(prev => ({ ...prev, service: matched }));
        }
      }
    }
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 92098 39142",
      href: "tel:+919209839142",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@krewmesh.agency",
      href: "mailto:hello@krewmesh.agency",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: "@krewmesh",
      href: "https://www.instagram.com/krewmesh/",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Nagpur, India",
      href: "https://maps.app.goo.gl/B2rDStGkXQ8Z9JdJ6",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", service: "", message: "" });
    setIsSubmitted(false);
    setErrorMessage("");
  };

  return (
    <>
      
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, paddingTop: '150px' }} className="px-6 md:px-12 pb-24">
            <div className="max-w-6xl mx-auto">
              <ContactCard 
                contactInfo={contactInfo} 
                title="Get in Touch"
                description="Ready to elevate your digital presence? Reach out to us using the form below or contact us directly. We do our best to respond quickly."
              >
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center p-6 space-y-4 w-full">
                    <div className="p-3 rounded-full bg-foreground/10 text-foreground">
                      <CheckCircle2 size={40} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold">Message Sent!</h4>
                      <p className="text-sm text-muted-foreground">
                        Thank you, {formData.name}. We&apos;ve received your note and will be in touch shortly.
                      </p>
                    </div>
                    <RainbowButton 
                      type="button"
                      onClick={handleReset}
                      className="h-11 px-6 rounded-xl text-sm font-semibold mt-4"
                    >
                      Send Another Message
                    </RainbowButton>
                  </div>
                ) : (
                  <form className="flex flex-col gap-4 w-full mx-auto" onSubmit={handleSubmit}>
                    {errorMessage && (
                      <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                        {errorMessage}
                      </div>
                    )}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input 
                        id="name" 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input 
                        id="email" 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">Service Needed</label>
                      <div className="relative">
                        <select 
                          id="service" 
                          value={formData.service} 
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                        >
                          <option value="" disabled className="text-muted-foreground">What do you need help with?</option>
                          <option value="branding" className="text-foreground bg-background">Branding</option>
                          <option value="design" className="text-foreground bg-background">Design</option>
                          <option value="digital" className="text-foreground bg-background">Digital</option>
                          <option value="development" className="text-foreground bg-background">Development</option>
                          <option value="ai" className="text-foreground bg-background">AI</option>
                          <option value="saas" className="text-foreground bg-background">SaaS</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-foreground">
                          <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea 
                        id="message" 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?" 
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      />
                    </div>
                    <div className="pt-2">
                      <RainbowButton 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full sm:w-auto h-11 px-7 rounded-xl text-sm font-semibold mt-3"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <Loader2 size={16} className="animate-spin text-white" /> Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </RainbowButton>
                    </div>
                  </form>
                )}
              </ContactCard>
            </div>
          </div>
      </div>
    </>
  );
}
