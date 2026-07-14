"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Modern UI/UX Design",
  "Fast Loading Websites",
  "SEO Ready Development",
  "Mobile Responsive",
  "Secure Development",
  "Affordable Pricing",
  "Lifetime Technical Guidance",
  "WhatsApp Support",
  "On-time Delivery",
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-[var(--card)] border-b border-[var(--border)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-64 -top-64 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Why Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-gold)]">
                HN Web Technologies?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--muted-foreground)] text-lg mb-8"
            >
              We don&apos;t just build websites; we build digital experiences that drive growth, engage customers, and elevate your brand in the digital landscape.
            </motion.p>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[var(--background)] p-4 rounded-xl border border-[var(--border)] shadow-sm hover:border-[var(--primary)]/50 transition-colors"
                >
                  <CheckCircle2 className="text-[var(--accent-gold)] shrink-0 mt-0.5" size={20} />
                  <span className="text-white font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
