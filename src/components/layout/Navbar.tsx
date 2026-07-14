"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--card)]/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 bg-[#0A0F1C]">
            <Image src="/logo.png" alt="HN Web Technologies Logo" width={48} height={48} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-[var(--accent-gold)] font-bold text-xl tracking-wide leading-none">
              HN WEB
            </span>
            <span className="text-white text-xs tracking-[0.2em] font-light leading-tight">
              TECHNOLOGIES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-[var(--accent-gold)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-gold)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 bg-[var(--primary)] text-white rounded-full font-medium text-sm hover:bg-[var(--accent-gold)] hover:text-black transition-colors shadow-lg hover:shadow-[var(--accent-gold)]/20"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white hover:text-[var(--accent-gold)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--card)] shadow-xl flex flex-col p-6 gap-6 md:hidden border-t border-[var(--border)]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-medium text-lg hover:text-[var(--accent-gold)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 bg-[var(--primary)] text-center text-white rounded font-medium hover:bg-[var(--accent-gold)] hover:text-black transition-colors"
            >
              Get Started
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
