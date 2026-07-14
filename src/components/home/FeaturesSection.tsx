"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Search, Zap, ShieldCheck, Cloud, Headset, MessageCircle, BarChart } from "lucide-react";

const features = [
  {
    title: "RESPONSIVE DESIGN",
    description: "Looks great on every device",
    icon: <MonitorSmartphone size={28} />,
  },
  {
    title: "SEO FRIENDLY",
    description: "Optimized for search engines",
    icon: <Search size={28} />,
  },
  {
    title: "LIGHTNING FAST",
    description: "Speed optimized for better performance",
    icon: <Zap size={28} />,
  },
  {
    title: "SECURE & RELIABLE",
    description: "SSL-secured websites",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "DOMAIN & HOSTING",
    description: "Complete support for domain & hosting",
    icon: <Cloud size={28} />,
  },
  {
    title: "WEBSITE MAINTENANCE",
    description: "Ongoing support and regular updates",
    icon: <Headset size={28} />,
  },
  {
    title: "WHATSAPP INTEGRATION",
    description: "Connect with your customers instantly",
    icon: <MessageCircle size={28} />,
  },
  {
    title: "GOOGLE ANALYTICS",
    description: "Track your site's performance",
    icon: <BarChart size={28} />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[var(--background)] to-[var(--card)] border-t border-b border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 bg-[var(--background)] border border-[var(--border)] rounded-full px-6 py-4 hover:border-[var(--accent-gold)] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 group"
            >
              <div className="text-[var(--accent-gold)] group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-white text-sm font-bold tracking-wider">{feature.title}</h4>
                <p className="text-[var(--muted-foreground)] text-xs">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
