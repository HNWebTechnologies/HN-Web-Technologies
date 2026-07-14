"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Arha Groups",
    category: "Business",
    industry: "Corporate & Luxury",
    duration: "4 Weeks",
    description: "Corporate website for Arha the Billionaires Hereditary.",
    extendedDescription: "A luxurious corporate web presence designed for Arha the Billionaires Hereditary. The project focuses on a high-end visual aesthetic, utilizing gold accents, smooth scrolling, and elegant typography to convey prestige and heritage.",
    technologies: ["HTML", "CSS", "GitHub"],
    features: ["Custom Animations", "Responsive Design", "Premium UI/UX", "SEO Optimized"],
    image: "/arha-group.png",
    link: "https://arhagroups.com/",
  },
  {
    id: 2,
    title: "Lohithaksha M Portfolio",
    category: "Portfolio",
    industry: "Personal Branding",
    duration: "2 Weeks",
    description: "Personal portfolio for Data Analyst – Power BI, SQL, Python.",
    extendedDescription: "A dynamic and data-driven personal portfolio showcasing expertise in Power BI, SQL, and Python. The interface is designed to highlight analytical skills, displaying complex data visualizations and case studies in a clean, accessible format.",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    features: ["Interactive Galleries", "Project Showcase", "Contact Form", "Fast Loading"],
    image: "/portfolio-lm.png",
    link: "https://lohtihaksha-m-portfolio.netlify.app/",
  },
  {
    id: 3,
    title: "Finance Web Application",
    category: "Web Apps",
    industry: "FinTech",
    duration: "Ongoing",
    description: "A comprehensive finance web application (Currently in progress).",
    extendedDescription: "An upcoming full-stack financial dashboard designed to handle complex data streams, user authentication, and real-time market tracking. It focuses on absolute security, fast rendering, and an intuitive user experience for financial planning.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    features: ["Real-time Data", "Secure Auth", "Dashboard UI", "API Integration"],
    image: "coming-soon",
    link: "#",
  }
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="py-24 bg-[var(--card)] relative border-b border-[var(--border)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            OUR RECENT WORK
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[var(--accent-gold)] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group rounded-2xl overflow-hidden bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] transition-colors duration-300 shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-[#0A0F1C] flex items-center justify-center p-4">
                 {project.image === "coming-soon" ? (
                   <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
                     <span className="text-2xl font-bold uppercase tracking-widest text-[var(--accent-gold)] mb-2">Coming Soon</span>
                     <span className="text-[var(--muted-foreground)] text-sm">Work in Progress</span>
                   </div>
                 ) : (
                   <Image src={project.image} alt={project.title} fill className="object-contain group-hover:scale-105 transition-transform duration-700" />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] to-transparent opacity-60 z-10 pointer-events-none"></div>
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-[var(--primary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center backdrop-blur-sm gap-4">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-2 bg-white text-[var(--primary)] rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Details
                    </button>
                    {project.link && project.link !== "#" && (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white hover:text-[var(--primary)]">
                        Visit Live Site
                      </Link>
                    )}
                 </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-30">
                <div className="text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white hover:text-[var(--accent-gold)] font-medium transition-colors">
                See all projects <ArrowRight size={16} />
            </Link>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-[101] w-full max-w-4xl bg-[var(--card)] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)] flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-[#0A0F1C]">
                {selectedProject?.image === "coming-soon" ? (
                   <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
                     <span className="text-3xl font-bold uppercase tracking-widest text-[var(--accent-gold)] mb-2">Coming Soon</span>
                     <span className="text-[var(--muted-foreground)] text-base">We are currently building this project.</span>
                   </div>
                 ) : (
                   <div 
                     className="absolute inset-0 w-full h-full" 
                     style={{ backgroundImage: `url(${selectedProject?.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                   />
                 )}
              </div>
              
              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-[var(--muted-foreground)] hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                
                <div className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider mb-3 bg-[var(--primary)]/10 inline-block px-3 py-1 rounded-full border border-[var(--primary)]/20 w-max">
                  {selectedProject?.category}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject?.title}</h2>
                <p className="text-[var(--muted-foreground)] text-lg mb-6 leading-relaxed">
                  {selectedProject?.extendedDescription}
                </p>
                
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[var(--muted-foreground)] block text-sm mb-1">Industry</span>
                    <span className="text-white font-medium">{selectedProject?.industry}</span>
                  </div>
                  <div>
                    <span className="text-[var(--muted-foreground)] block text-sm mb-1">Duration</span>
                    <span className="text-white font-medium">{selectedProject?.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-1">
                    {selectedProject?.features?.map((feature: string) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.technologies?.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] text-[var(--muted-foreground)] rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {selectedProject?.link && selectedProject?.link !== "#" && (
                    <Link href={selectedProject?.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[var(--primary)] text-white rounded-full font-semibold transition-transform hover:scale-105">
                      Visit Live Project
                    </Link>
                  )}
                  <button onClick={() => setSelectedProject(null)} className="px-6 py-3 bg-transparent border border-[var(--border)] text-[var(--muted-foreground)] hover:text-white rounded-full font-semibold transition-colors hover:bg-[var(--background)]">
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
