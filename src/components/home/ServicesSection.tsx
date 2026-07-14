"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, ShoppingCart, Briefcase, LayoutTemplate, Building2, MonitorSmartphone, Smartphone, X } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Business Websites",
    slug: "business-websites",
    description: "Professional websites that represent your brand and grow your business.",
    detailedDescription: "Your website is the digital face of your business. We build premium, custom-designed business websites that perfectly align with your brand identity and corporate goals. Our designs are fully responsive, optimized for search engines (SEO), and engineered for lightning-fast performance to ensure you make a powerful first impression on your clients.",
    features: ["Custom Branded Design", "SEO Optimization", "Mobile Responsive", "CMS Integration"],
    icon: <Code size={32} />,
  },
  {
    id: 2,
    title: "E-Commerce Websites",
    slug: "e-commerce-websites",
    description: "Powerful online stores to sell your products and deliver great customer experience.",
    detailedDescription: "Grow your online sales with our robust e-commerce solutions. We develop highly secure, scalable, and conversion-optimized online stores. Whether you're selling a few products or managing a massive inventory, we provide seamless payment gateway integrations, intuitive inventory management, and a frictionless checkout experience for your customers.",
    features: ["Secure Payment Gateways", "Inventory Management", "Conversion Optimized", "User-friendly Checkout"],
    icon: <ShoppingCart size={32} />,
  },
  {
    id: 3,
    title: "Portfolio Websites",
    slug: "portfolio-websites",
    description: "Showcase your skills, projects and experience with stunning portfolio websites.",
    detailedDescription: "Stand out from the crowd with a stunning, interactive portfolio website. Designed specifically for creatives, freelancers, and professionals, our portfolio sites highlight your best work through high-quality image galleries, smooth animations, and compelling layouts that let your work speak for itself.",
    features: ["Dynamic Galleries", "Smooth Animations", "Fast Loading Speeds", "Contact Form Integration"],
    icon: <Briefcase size={32} />,
  },
  {
    id: 4,
    title: "Landing Page Design",
    slug: "landing-page-design",
    description: "High-converting landing pages to boost leads and grow your business.",
    detailedDescription: "Maximize your marketing ROI with high-converting landing pages. We design laser-focused, psychologically driven landing pages optimized for single-action conversions. With compelling copywriting structures, clear calls-to-action, and A/B testing readiness, our landing pages are built to turn clicks into customers.",
    features: ["High Conversion Rates", "Clear Call-to-Actions", "Lead Generation Forms", "Analytics Integration"],
    icon: <LayoutTemplate size={32} />,
  },
  {
    id: 5,
    title: "Company Websites",
    slug: "company-websites",
    description: "Corporate websites for your company to build trust and credibility.",
    detailedDescription: "Establish absolute authority in your industry with a premium company website. We create comprehensive digital platforms for medium to large enterprises, featuring investor relations portals, newsrooms, careers pages, and team directories. Built with robust architecture to handle high traffic and complex content structures.",
    features: ["Corporate Identity", "Scalable Architecture", "Multi-page Structures", "Content Management System"],
    icon: <Building2 size={32} />,
  },
  {
    id: 6,
    title: "Custom Web Applications",
    slug: "custom-web-apps",
    description: "Custom web apps tailored to your business needs and workflow.",
    detailedDescription: "Streamline your operations with tailor-made web applications. If off-the-shelf software doesn't fit your unique workflow, we engineer custom web apps from the ground up. From bespoke CRM systems to complex data dashboards, we use modern frameworks like Next.js and React to build secure, scalable, and high-performance applications.",
    features: ["Complex Data Handling", "Custom Dashboards", "API Integrations", "High Security Standards"],
    icon: <MonitorSmartphone size={32} />,
  },
  {
    id: 7,
    title: "Mobile App Solutions",
    slug: "mobile-app-solutions",
    description: "Android & iOS apps designed to engage users and grow your business.",
    detailedDescription: "Reach your customers wherever they are with our mobile app solutions. We develop cross-platform and native mobile applications for both iOS and Android. Our apps feature intuitive UX/UI design, push notifications, offline capabilities, and seamless integration with your existing web infrastructure.",
    features: ["iOS & Android", "Intuitive UI/UX", "Push Notifications", "Cross-Platform Sync"],
    icon: <Smartphone size={32} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesSection() {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[var(--background)] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-medium text-sm mb-4"
          >
            SERVICES WE OFFER
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Digital solutions tailored <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-gold)]">
              to your business goals
            </span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`group relative p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,71,179,0.15)] flex flex-col ${
                index === 6 ? "lg:col-span-3 xl:col-span-1" : "" // Adjust last item span for nice grid
              }`}
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:text-[var(--accent-gold)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--accent-gold)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <button 
                  onClick={() => {
                    setSelectedServiceId(service.id);
                    setTimeout(() => {
                      document.getElementById('service-details-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="text-sm font-medium text-[var(--primary)] hover:text-[var(--accent-gold)] flex items-center gap-1 transition-colors w-max"
                >
                  Explore Service <span className="text-lg leading-none">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Detailed Services Section */}
        {selectedServiceId !== null && (
          <div id="service-details-section" className="mt-20">
            <div className="text-center mb-16 relative">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Service Details</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-gold)] mx-auto rounded-full mb-8"></div>
              <button 
                onClick={() => setSelectedServiceId(null)}
                className="absolute right-0 top-0 p-2 text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--primary)]/20 rounded-full transition-colors"
                title="Close Details"
              >
                <X size={24} />
              </button>
            </div>
            
            {services.filter(s => s.id === selectedServiceId).map((service) => (
            <motion.div 
              key={service.id}
              id={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col lg:flex-row gap-12 items-center pt-8 border-t border-[var(--border)]/50 first:border-0 scroll-mt-32"
            >
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] border border-[var(--primary)]/20 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8">
                  {service.detailedDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)]"></div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-block px-8 py-4 rounded-full bg-[var(--primary)] text-white font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(0,71,179,0.4)] transition-all duration-300">
                  Request this service
                </Link>
              </div>
              <div className="w-full lg:w-1/2 relative">
                {/* Visual placeholder for the service to make it look premium */}
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-[var(--card)] via-[var(--background)] to-[var(--accent-gold)]/20 border border-[var(--border)] group-hover:border-[var(--accent-gold)]/30 overflow-hidden shadow-2xl flex items-center justify-center group relative transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-[var(--accent-gold)]/5 mix-blend-overlay group-hover:bg-[var(--accent-gold)]/15 transition-colors duration-500"></div>
                  {/* Magnified Icon */}
                  <div className="transform scale-[4] opacity-80 text-[var(--accent-gold)] group-hover:scale-[4.5] group-hover:opacity-100 transition-all duration-700">
                    {service.icon}
                  </div>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
