"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Starter Website",
    price: "Custom Quote",
    description: "Perfect for small businesses and personal portfolios starting their digital journey.",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Free Support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    title: "Business Website",
    price: "Custom Quote",
    description: "Ideal for growing companies needing a professional, comprehensive web presence.",
    features: [
      "Up to 10 Pages",
      "Premium UI/UX Design",
      "Advanced SEO Optimization",
      "Social Media Integration",
      "Fast Loading Speed Setup",
      "3 Months Free Support",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    title: "E-commerce Website",
    price: "Custom Quote",
    description: "Complete online store solution to sell products and manage inventory.",
    features: [
      "Unlimited Products",
      "Secure Payment Gateways",
      "Inventory Management System",
      "User Accounts & Dashboards",
      "High Conversion Design",
      "6 Months Free Support",
    ],
    highlighted: false,
    cta: "Start Selling",
  },
  {
    title: "Custom Web App",
    price: "Contact Us",
    description: "Tailor-made web applications designed specifically for your unique workflow.",
    features: [
      "Custom Architecture",
      "API Integrations",
      "Complex Data Handling",
      "High Security Standards",
      "Dedicated Project Manager",
      "Lifetime Tech Guidance",
    ],
    highlighted: false,
    cta: "Discuss Project",
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-[var(--card)] border-b border-[var(--border)] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            WEBSITE PACKAGES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-lg"
          >
            Transparent, affordable pricing tailored to your business needs. 
            No hidden costs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.highlighted 
                  ? "bg-gradient-to-b from-[var(--background)] to-[var(--primary)]/10 border-[var(--primary)] shadow-[0_10px_30px_rgba(0,71,179,0.2)] transform xl:-translate-y-4" 
                  : "bg-[var(--background)] border-[var(--border)] hover:border-[var(--accent-gold)]/50"
              } transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[var(--primary)] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Recommended
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
              <p className="text-[var(--muted-foreground)] text-sm mb-6 min-h-[60px]">{plan.description}</p>
              
              <div className="mb-8">
                <span className={`text-3xl md:text-4xl font-extrabold ${plan.highlighted ? "text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-400" : "text-[var(--accent-gold)]"}`}>
                  {plan.price}
                </span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-[var(--primary)]" : "text-[var(--accent-gold)]"}`} size={18} />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[var(--primary)] text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/30"
                    : "bg-transparent border border-[var(--border)] text-white hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
                }`}
              >
                {plan.cta}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
