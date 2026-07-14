"use client";

import React from "react";
import { motion } from "framer-motion";
import CTASection from "@/components/home/CTASection";

export default function AboutPage() {
  return (
    <div className="pt-10">
      {/* Header */}
      <section className="bg-[var(--card)] py-20 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--accent-gold)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-medium text-sm mb-6"
          >
            WHO WE ARE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Crafting Digital Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted-foreground)] text-lg max-w-3xl mx-auto"
          >
            HN Web Technologies is a digital agency focused on pushing the boundaries of web design, development, and user experience.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[var(--background)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                At HN Web Technologies, we believe that your digital presence should be more than just a website—it should be an experience. Our mission is to empower businesses by providing innovative, scalable, and visually stunning digital solutions.
              </p>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                Whether you&apos;re a startup looking to make your mark or an established enterprise needing a digital refresh, our team is dedicated to delivering excellence in every pixel and every line of code.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl bg-[#0d1117] flex flex-col"
            >
              {/* Fake Window Header */}
              <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-[#161b22]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs text-gray-400 font-mono">App.tsx</div>
              </div>
              
              {/* Fake Code Content */}
              <div className="p-6 font-mono text-sm sm:text-base overflow-hidden flex-grow relative">
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
                 
                 <motion.div 
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative z-10 space-y-1 text-gray-300"
                 >
                    {[
                      <React.Fragment key="l1"><span className="text-pink-400">import</span> <span className="text-blue-300">{`{`}</span> useState, useEffect <span className="text-blue-300">{`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">&apos;react&apos;</span>;</React.Fragment>,
                      <br key="br1" />,
                      <React.Fragment key="l2"><span className="text-pink-400">export default function</span> <span className="text-yellow-200">HNWebTech</span>() <span className="text-blue-300">{`{`}</span></React.Fragment>,
                      <span key="l3" className="pl-4"><span className="text-pink-400">const</span> [vision, setVision] = <span className="text-yellow-200">useState</span>(<span className="text-green-300">&apos;limitless&apos;</span>);</span>,
                      <br key="br2" />,
                      <span key="l4" className="pl-4"><span className="text-yellow-200">useEffect</span>(() <span className="text-pink-400">=&gt;</span> <span className="text-purple-300">{`{`}</span></span>,
                      <span key="l5" className="pl-8"><span className="text-blue-400">buildFuture</span>(<span className="text-green-300">&apos;scalable&apos;</span>, <span className="text-green-300">&apos;beautiful&apos;</span>);</span>,
                      <span key="l6" className="pl-4"><span className="text-purple-300">{`}`}</span>, []);</span>,
                      <br key="br3" />,
                      <span key="l7" className="pl-4"><span className="text-pink-400">return</span> (</span>,
                      <span key="l8" className="pl-8 text-blue-300">&lt;<span className="text-green-400">DigitalExperience</span></span>,
                      <span key="l9" className="pl-12"><span className="text-blue-200">quality</span>=<span className="text-blue-300">{`{`}</span><span className="text-orange-300">100</span><span className="text-blue-300">{`}`}</span></span>,
                      <span key="l10" className="pl-12"><span className="text-blue-200">innovation</span>=<span className="text-blue-300">{`{`}</span><span className="text-orange-300">true</span><span className="text-blue-300">{`}`}</span></span>,
                      <span key="l11" className="pl-8">/&gt;</span>,
                      <span key="l12" className="pl-4">);</span>,
                      <React.Fragment key="l13"><span className="text-blue-300">{`}`}</span> <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-[var(--primary)] ml-1 align-middle"></motion.span></React.Fragment>
                    ].map((line, i) => (
                      <motion.div key={i} variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}>
                        {line}
                      </motion.div>
                    ))}
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
