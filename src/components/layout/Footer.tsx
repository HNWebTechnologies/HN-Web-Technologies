import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";


const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
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
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
              Beyond Code. Beyond Design. Beyond Expectations. We build digital solutions that drive real results.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/hnwebtechnologies?igsh=MTZ6cHlsMjd2dHVlMw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[var(--muted)] flex items-center justify-center text-white hover:bg-[var(--primary)] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--muted-foreground)] hover:text-[var(--accent-gold)] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--primary)]"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Business Websites', 'E-Commerce', 'Custom Web Apps', 'Landing Pages', 'Mobile App Solutions'].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-[var(--muted-foreground)] hover:text-[var(--accent-gold)] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--primary)]"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-[var(--muted-foreground)] text-sm">
                <a href="https://maps.google.com/?q=Mysore,Karnataka,India" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                  <MapPin className="text-[var(--accent-gold)] shrink-0 mt-0.5" size={20} />
                  <span>Mysore, Karnataka, India<br />(Available Worldwide)</span>
                </a>
              </li>
              <li className="flex items-center text-[var(--muted-foreground)] text-sm">
                <a href="tel:+918088738224" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="text-[var(--accent-gold)] shrink-0" size={20} />
                  <span>+91 8088738224</span>
                </a>
              </li>
              <li className="flex items-center text-[var(--muted-foreground)] text-sm">
                <a href="https://wa.me/918088738224?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <MessageCircle className="text-[var(--accent-gold)] shrink-0" size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li className="flex items-center text-[var(--muted-foreground)] text-sm">
                <a href="mailto:hello@hnwebtechnologies.com" className="flex items-center gap-3 hover:text-white transition-colors break-all">
                  <Mail className="text-[var(--accent-gold)] shrink-0" size={20} />
                  <span>hello@hnwebtechnologies.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[var(--muted-foreground)] text-sm pt-2 border-t border-[var(--border)]">
                <Clock className="text-[var(--accent-gold)] shrink-0 mt-0.5" size={20} />
                <div>
                  <span className="block text-white font-medium mb-1">Business Hours</span>
                  <span>Mon–Sat | 9:00 AM – 8:00 PM (IST)</span><br/>
                  <span className="text-[var(--primary)] font-medium text-xs">We usually reply within 30 minutes.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted-foreground)] text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} HN Web Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--muted-foreground)]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
