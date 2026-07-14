"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/home/CTASection";

const allProjects = [
  {
    id: 1,
    title: "Arha Groups",
    category: "Business",
    description: "Corporate website for Arha the Billionaires Hereditary.",
    extendedDescription: "A luxurious corporate web presence designed for Arha the Billionaires Hereditary. The project focuses on a high-end visual aesthetic, utilizing gold accents, smooth scrolling, and elegant typography to convey prestige and heritage.",
    technologies: ["HTML", "CSS", "GitHub"],
    image: "/arha-group.png",
    link: "https://arhagroups.com/",
  },
  {
    id: 2,
    title: "Lohithaksha M Portfolio",
    category: "Portfolio",
    description: "Personal portfolio for Data Analyst – Power BI, SQL, Python.",
    extendedDescription: "A dynamic and data-driven personal portfolio showcasing expertise in Power BI, SQL, and Python. The interface is designed to highlight analytical skills, displaying complex data visualizations and case studies in a clean, accessible format.",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    image: "/portfolio-lm.png",
    link: "https://lohtihaksha-m-portfolio.netlify.app/",
  },
  {
    id: 3,
    title: "Finance Web Application",
    category: "Web Apps",
    description: "A comprehensive finance web application (Currently in progress).",
    extendedDescription: "An upcoming full-stack financial dashboard designed to handle complex data streams, user authentication, and real-time market tracking. It focuses on absolute security, fast rendering, and an intuitive user experience for financial planning.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "coming-soon",
    link: "#",
  }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-10">
      {/* Header */}
      <section className="bg-[var(--card)] py-20 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-gold)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-medium text-sm mb-6"
          >
            OUR WORK
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Digital Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto"
          >
            Explore our latest projects to see how we&apos;ve helped businesses transform their digital presence and achieve their goals.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-[var(--background)]">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["All", "Business", "Portfolio", "Web Apps"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  if (cat === "All") {
                    setSelectedProject(null);
                  } else {
                    const firstInCategory = allProjects.find(p => p.category === cat);
                    if (firstInCategory) setSelectedProject(firstInCategory);
                  }
                }}
                className={`px-6 py-2 rounded-full border transition-colors ${activeFilter === cat ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "bg-transparent text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--primary)] hover:text-white"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Layout Area */}
          <div className="flex flex-col lg:flex-row gap-8 items-start relative min-h-[600px]">
            {/* Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${selectedProject ? 'lg:w-1/2 lg:grid-cols-1 xl:grid-cols-2' : 'lg:w-full lg:grid-cols-3'} gap-8 transition-all duration-500 w-full`}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-2xl overflow-hidden bg-[var(--card)] border ${selectedProject?.id === project.id ? 'border-[var(--primary)] ring-2 ring-[var(--primary)]/50' : 'border-[var(--border)] hover:border-[var(--accent-gold)]'} transition-all duration-300 shadow-lg flex flex-col h-full`}
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
                    <div className="absolute inset-0 bg-[var(--background)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center backdrop-blur-sm gap-4">
                      <button
                        onClick={() => selectedProject?.id === project.id ? setSelectedProject(null) : setSelectedProject(project)}
                        className="px-6 py-2 bg-[var(--primary)] text-white rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        {selectedProject?.id === project.id ? "Close Details" : "View Details"}
                      </button>
                      {project.link && project.link !== "#" && (
                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[var(--primary)] hover:text-white">
                          Visit Live Site
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-30 flex-grow flex flex-col">
                    <div className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider mb-3 bg-[var(--primary)]/10 inline-block px-3 py-1 rounded-full border border-[var(--primary)]/20 w-max">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--accent-gold)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] text-sm mb-6 flex-grow">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Side Panel for Project Details */}
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject?.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
                  className="lg:w-1/2 lg:sticky lg:top-24 bg-[var(--card)] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)] flex flex-col h-max w-full"
                >
                  <div className="relative h-48 md:h-64 bg-[#0A0F1C]">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] to-transparent opacity-90 z-10 pointer-events-none"></div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 text-white hover:text-[var(--accent-gold)] transition-colors p-2 bg-black/40 hover:bg-black/70 rounded-full backdrop-blur-md z-30"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                  </div>
                  <div className="p-8 md:p-10 relative z-20 -mt-16">
                    <div className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider mb-3 bg-[var(--primary)]/10 inline-block px-3 py-1 rounded-full border border-[var(--primary)]/20 w-max">
                      {selectedProject?.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{selectedProject?.title}</h2>
                    <p className="text-[var(--muted-foreground)] text-lg mb-8 leading-relaxed">
                      {selectedProject?.extendedDescription}
                    </p>

                    <div className="mb-8 p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-gold)]"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject?.technologies?.map((tech: string) => (
                          <span key={tech} className="px-3 py-1.5 bg-[var(--card)] border border-[var(--border)] text-white font-medium rounded-md text-sm shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--border)]">
                      {selectedProject?.link && selectedProject?.link !== "#" && (
                        <Link href={selectedProject?.link} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[var(--primary)] text-white rounded-full font-semibold transition-transform hover:scale-105 flex items-center gap-2">
                          Visit Live Project
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
