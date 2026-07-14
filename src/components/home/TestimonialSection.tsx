"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arha Groups",
    role: "Corporate Client",
    link: "https://arhagroups.com/",
    content: "HN Web Technologies delivered exactly what we wanted. The luxury aesthetic and smooth performance of our new website perfectly capture our brand's prestige. Highly recommended.",
    rating: 5,
  },
  {
    id: 2,
    name: "Lohithaksha M",
    role: "Data Science & AI",
    link: "https://lohtihaksha-m-portfolio.netlify.app/",
    content: "HN Web Technologies built an incredible personal portfolio for me. It perfectly showcases my skills in Power BI, SQL, and Python. The design is sleek, professional, and exactly what I needed to stand out in my industry.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[var(--background)] border-b border-[var(--border)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[var(--card)]/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            CLIENT SUCCESS STORIES
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[var(--accent-gold)] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] shadow-lg hover:border-[var(--primary)]/50 transition-colors relative group flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 text-[var(--border)] opacity-30 group-hover:text-[var(--primary)] group-hover:opacity-20 transition-all duration-300" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[var(--accent-gold)] fill-[var(--accent-gold)]" size={18} />
                ))}
              </div>
              
              <p className="text-[var(--muted-foreground)] text-lg mb-8 flex-grow leading-relaxed relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/50 flex items-center justify-center text-[var(--primary)] font-bold text-xl uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.link ? (
                      <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">
                        {testimonial.name}
                      </a>
                    ) : (
                      testimonial.name
                    )}
                  </h4>
                  <p className="text-[var(--primary)] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
