import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const links = [
  { name: "Home", href: "/", description: "Back to our main landing page" },
  { name: "About Us", href: "/about", description: "Learn more about our company and mission" },
  { name: "Services", href: "/services", description: "Explore the digital solutions we offer" },
  { name: "Portfolio", href: "/portfolio", description: "View our recent projects and case studies" },
  { name: "Contact", href: "/contact", description: "Get in touch with us for a consultation" },
  { name: "Privacy Policy", href: "/privacy", description: "Read about how we handle your data" },
  { name: "Terms & Conditions", href: "/terms", description: "Our terms of service and rules" },
  { name: "Refund Policy", href: "/refund", description: "Information regarding refunds and cancellations" },
];

export default function SitemapPage() {
  return (
    <div className="pt-32 pb-24 bg-[var(--background)] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Sitemap</h1>
        <p className="text-[var(--muted-foreground)] text-lg mb-12">
          Navigate through the HN Web Technologies website easily using the links below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className="group p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl hover:border-[var(--primary)] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-white group-hover:text-[var(--accent-gold)] transition-colors">
                  {link.name}
                </h2>
                <ArrowRight className="text-[var(--muted-foreground)] group-hover:text-[var(--accent-gold)] group-hover:translate-x-1 transition-all" size={20} />
              </div>
              <p className="text-[var(--muted-foreground)] text-sm">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
