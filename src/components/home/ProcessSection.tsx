"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, SearchCheck, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Requirement Discussion",
    description: "We understand your goals, target audience, and feature requirements.",
    icon: <MessageSquare size={24} />,
  },
  {
    id: 2,
    title: "UI Design",
    description: "Creating wireframes and modern, stunning visual designs for your approval.",
    icon: <PenTool size={24} />,
  },
  {
    id: 3,
    title: "Development",
    description: "Writing clean, scalable code to bring the designs to life.",
    icon: <Code size={24} />,
  },
  {
    id: 4,
    title: "Testing",
    description: "Rigorous testing across devices and browsers to ensure perfection.",
    icon: <SearchCheck size={24} />,
  },
  {
    id: 5,
    title: "Launch",
    description: "Deploying your website to a live server with SEO best practices.",
    icon: <Rocket size={24} />,
  },
  {
    id: 6,
    title: "Support",
    description: "Ongoing maintenance, updates, and lifetime technical guidance.",
    icon: <HeartHandshake size={24} />,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[var(--card)] border-b border-[var(--border)] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            OUR DEVELOPMENT PROCESS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted-foreground)] max-w-2xl mx-auto"
          >
            A transparent and proven methodology to deliver high-quality digital solutions on time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[50px] left-20 right-20 h-0.5 bg-[var(--border)] z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center p-6 bg-[var(--background)] rounded-2xl border border-[var(--border)] shadow-lg group hover:border-[var(--primary)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--card)] border-2 border-[var(--primary)] text-[var(--primary)] flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-[var(--primary)] group-hover:text-white transition-colors relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--accent-gold)] text-black flex items-center justify-center text-sm font-black border-[3px] border-[var(--background)]">
                  {step.id}
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[var(--muted-foreground)] text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
