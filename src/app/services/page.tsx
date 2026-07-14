"use client";

import { motion } from "framer-motion";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";

export default function ServicesPage() {
  return (
    <div className="pt-10">
      {/* Header */}
      <section className="bg-[var(--card)] py-20 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--accent-gold)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-medium text-sm mb-6"
          >
            OUR EXPERTISE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Premium Web Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted-foreground)] text-lg max-w-3xl mx-auto"
          >
            From simple landing pages to complex custom web applications, we have the expertise to bring your vision to life. Explore our comprehensive range of services below.
          </motion.p>
        </div>
      </section>

      {/* Services List from Homepage */}
      <ServicesSection />

      {/* Why Choose Us */}
      <section className="py-24 bg-[var(--card)] border-t border-b border-[var(--border)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Why Choose <br />
                <span className="text-[var(--accent-gold)]">HN Web Technologies?</span>
              </h2>
              <p className="text-[var(--muted-foreground)] text-lg mb-8">
                We don&apos;t just build websites; we build digital experiences that drive real business growth. Our approach combines cutting-edge technology with premium design aesthetics.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Modern & Creative UI/UX Design",
                  "100% Mobile Friendly & Responsive",
                  "Fast Delivery & On-Time Project Completion",
                  "Affordable Pricing for Everyone",
                  "100% Client Satisfaction Guarantee",
                  "Lifetime Support & Maintenance Guidance"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--background)] aspect-square lg:aspect-auto lg:h-[600px]"
            >
              {/* Decorative element representing high quality code/design */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full border border-[var(--border)] rounded-2xl bg-[var(--card)]/50 backdrop-blur-sm p-6 relative">
                   <div className="flex gap-2 mb-4">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="space-y-4 font-mono text-sm">
                     <p className="text-[var(--primary)]">import <span className="text-white">{"{ Excellence }"}</span> from <span className="text-green-400">&apos;hn-web-tech&apos;</span>;</p>
                     <br />
                     <p className="text-[var(--accent-gold)]">const <span className="text-white">project</span> = new <span className="text-white">Excellence</span>({"{ "}</p>
                     <p className="pl-4 text-[var(--muted-foreground)]">design: <span className="text-green-400">&apos;premium&apos;</span>,</p>
                     <p className="pl-4 text-[var(--muted-foreground)]">performance: <span className="text-green-400">&apos;lightning-fast&apos;</span>,</p>
                     <p className="pl-4 text-[var(--muted-foreground)]">responsive: <span className="text-blue-400">true</span>,</p>
                     <p className="pl-4 text-[var(--muted-foreground)]">seo: <span className="text-green-400">&apos;optimized&apos;</span></p>
                     <p className="text-white">{"});"}</p>
                     <br />
                     <p className="text-[var(--primary)]">await <span className="text-white">project.launch()</span>;</p>
                     <p className="text-green-400">{"// Success: Client expectations exceeded!"}</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
