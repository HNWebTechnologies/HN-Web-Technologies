"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Send } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[var(--background)]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-[var(--card)] rounded-3xl p-8 md:p-12 border border-[var(--border)] shadow-2xl relative overflow-hidden">
          
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--accent-gold)] rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>

          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Grow Your <br />
              <span className="text-[var(--accent-gold)]">Business Online?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--muted-foreground)] text-lg mb-8"
            >
              Let’s build a website that attracts more customers and helps your business stand out.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4 text-xl font-medium text-white mb-8"
            >
              <a href="tel:+918088738224" className="flex items-center gap-4 justify-center lg:justify-start group cursor-pointer w-max">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--accent-gold)] transition-colors text-white">
                  <Phone size={24} />
                </div>
                <span className="group-hover:text-[var(--accent-gold)] transition-colors">+91 8088738224</span>
              </a>
              <a href="mailto:hello@hnwebtechnologies.com" className="flex items-center gap-4 justify-center lg:justify-start group cursor-pointer w-max">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--accent-gold)] transition-colors text-white">
                  <Mail size={24} />
                </div>
                <span className="text-lg md:text-xl group-hover:text-[var(--accent-gold)] transition-colors">hello@hnwebtechnologies.com</span>
              </a>
            </motion.div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-[var(--accent-gold)] to-yellow-600 text-black rounded-xl font-bold text-lg md:text-xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-1 text-center"
              >
                Get a Free Consultation Today
                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" size={24} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
