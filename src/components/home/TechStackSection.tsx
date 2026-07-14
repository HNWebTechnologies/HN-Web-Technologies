"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "WordPress",
  "Flutter",
  "Firebase",
  "MySQL",
  "MongoDB",
  "AWS",
  "GitHub",
];

export default function TechStackSection() {
  return (
    <section className="py-20 bg-[var(--background)] border-t border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-white mb-4"
        >
          Technologies We Use
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[var(--muted-foreground)] mb-12"
        >
          We build robust, scalable solutions using the latest tech stack.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-[var(--card)] border border-[var(--border)] rounded-full text-white font-medium shadow-sm hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
