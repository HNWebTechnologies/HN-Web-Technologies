"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--secondary)_0%,var(--background)_100%)] opacity-50"></div>
      
      {/* Animated glowing orbs for premium feel */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-gold)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          {/* Crown/Swoosh representation - using text/css for now, can be replaced with actual image */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-gold)] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-32 w-32 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)] bg-[#0A0F1C]">
               <Image src="/logo.png" alt="HN Web Technologies Logo" width={128} height={128} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          We Build Websites <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-gold)]">
            That Grow Your Business
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 font-light"
        >
          <span className="text-white font-medium">BEYOND CODE. BEYOND DESIGN. BEYOND EXPECTATIONS.</span>
          <br />
          We design and develop modern, high-performance websites and mobile applications that help businesses attract customers, increase sales, and build a powerful online presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-blue-700 text-white rounded-full font-semibold text-lg overflow-hidden shadow-[0_0_20px_rgba(0,71,179,0.4)] hover:shadow-[0_0_30px_rgba(0,71,179,0.6)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[var(--accent-gold)] to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 bg-transparent border border-[var(--border)] text-white hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] rounded-full font-medium text-lg transition-colors"
          >
            View Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-[var(--muted-foreground)]"
        >
          <span className="flex items-center gap-2"><span className="text-[var(--accent-gold)]">✓</span> Mobile Responsive</span>
          <span className="flex items-center gap-2"><span className="text-[var(--accent-gold)]">✓</span> SEO Optimized</span>
          <span className="flex items-center gap-2"><span className="text-[var(--accent-gold)]">✓</span> Fast Delivery</span>
          <span className="flex items-center gap-2"><span className="text-[var(--accent-gold)]">✓</span> Affordable Pricing</span>
          <span className="flex items-center gap-2"><span className="text-[var(--accent-gold)]">✓</span> Ongoing Support</span>
        </motion.div>
      </div>
    </section>
  );
}
