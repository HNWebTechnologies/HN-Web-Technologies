"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity of the project. A standard business website usually takes 1-3 weeks, while complex e-commerce stores or custom web apps can take 4-8 weeks. We will provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide domain and hosting services?",
    answer: "Yes! We offer complete end-to-end solutions. We can assist you in purchasing the right domain name and provide secure, fast, and reliable hosting services, so you don't have to worry about the technical details.",
  },
  {
    question: "Will I be able to edit my website after it's launched?",
    answer: "Absolutely. We build our websites using user-friendly Content Management Systems (CMS) like WordPress or custom dashboards, allowing you to easily update text, images, and products without any coding knowledge. We also provide training upon handover.",
  },
  {
    question: "Is SEO included in your website packages?",
    answer: "Yes, basic on-page SEO is included in all our packages. We ensure your website is structured correctly, loads fast, and has optimized meta tags to help you rank better on search engines like Google.",
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Yes, we do. If your current website is outdated, slow, or not converting visitors into customers, we can completely revamp its design and underlying technology to meet modern standards and improve performance.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including Bank Transfers (NEFT/IMPS/RTGS) and UPI (GPay, PhonePe, Paytm). Payment milestones are typically split across the project duration.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[var(--background)] border-b border-[var(--border)] relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[var(--accent-gold)] mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-[var(--muted-foreground)] text-lg"
          >
            Find answers to common questions about our services and process.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                openIndex === index ? "bg-[var(--card)] border-[var(--primary)]/50 shadow-md" : "bg-[var(--background)] border-[var(--border)] hover:border-[var(--accent-gold)]/30"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none gap-4"
              >
                <h3 className={`font-semibold text-lg transition-colors ${openIndex === index ? "text-[var(--accent-gold)]" : "text-white"}`}>
                  {faq.question}
                </h3>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "bg-[var(--primary)] text-white rotate-180" : "bg-[var(--card)] text-[var(--muted-foreground)]"}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-[var(--muted-foreground)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
