"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="pt-10 pb-24">
      {/* Header */}
      <section className="bg-[var(--card)] py-20 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto"
          >
            Ready to start your digital journey? Contact us today to discuss your project requirements and get a free quote.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] shrink-0 shadow-lg group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-[var(--primary)] transition-colors">Phone</h4>
                    <p className="mb-2 text-[var(--muted-foreground)] group-hover:text-white transition-colors">
                      <a href="tel:+918088738224" className="hover:underline">+91 8088738224</a>
                    </p>
                    <p className="text-xs text-[var(--accent-gold)]">Mon–Sat | 9:00 AM – 8:00 PM (IST)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] shrink-0 shadow-lg group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-[var(--primary)] transition-colors">Email</h4>
                    <p className="mb-2 text-[var(--muted-foreground)] group-hover:text-white transition-colors">
                      <a href="mailto:hello@hnwebtechnologies.com" className="hover:underline">hello@hnwebtechnologies.com</a>
                    </p>
                    <p className="text-xs text-[var(--accent-gold)]">Average response time: Less than 1 hour</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] shrink-0 shadow-lg group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-[var(--primary)] transition-colors">Location</h4>
                    <p className="mb-2 text-[var(--muted-foreground)] group-hover:text-white transition-colors">
                      <a href="https://maps.google.com/?q=Mysore,Karnataka,India" target="_blank" rel="noopener noreferrer" className="hover:underline">Mysore, Karnataka, India</a>
                    </p>
                    <p className="text-xs text-[var(--accent-gold)]">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--card)] border border-[var(--border)] p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">Instant Reply?</h3>
                <p className="text-[var(--muted-foreground)] mb-6 text-sm">
                  Send us a message on WhatsApp for the fastest response to your queries.
                </p>
                <a 
                  href="https://wa.me/918088738224?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl font-bold transition-colors"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[var(--card)] border border-[var(--border)] p-8 md:p-10 rounded-3xl shadow-2xl relative"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send Us A Message</h2>
              
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  Thank you! Your message has been sent successfully. We will get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  Oops! Something went wrong. Please try again or contact us via WhatsApp.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-[var(--muted-foreground)]">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      minLength={2}
                      maxLength={50}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-[var(--muted-foreground)]">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-[var(--muted-foreground)]">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      pattern="^\+?[0-9\s\-\(\)]{7,15}$"
                      title="Please enter a valid phone number (7-15 digits)"
                      value={formData.phone}
                      onChange={handleChange} 
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm text-[var(--muted-foreground)]">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange} 
                      className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="business">Business Website</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="webapp">Custom Web App</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-[var(--muted-foreground)]">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    minLength={10}
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[var(--primary)] to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(0,71,179,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
