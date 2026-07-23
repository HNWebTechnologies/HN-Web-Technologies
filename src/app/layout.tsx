import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hnwebtechnologies.com"),
  title: {
    default: "HN Web Technologies | Professional Website & Mobile App Development",
    template: "%s | HN Web Technologies",
  },
  description: "Premium website development, e-commerce solutions, and custom web applications. We build digital solutions that drive real results. Based in Mysore.",
  keywords: [
    "Website Development Company in Mysore",
    "Web Design Company in Mysore",
    "Website Developer in Karnataka",
    "E-commerce Website Development",
    "Responsive Website Design",
    "Custom Web Application Development",
    "Mobile App Development",
    "HN Web Technologies",
  ],
  authors: [{ name: "HN Web Technologies" }],
  creator: "HN Web Technologies",
  publisher: "HN Web Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HN Web Technologies | Professional Website & Mobile App Development",
    description: "Premium website development, e-commerce solutions, and custom web applications. We build digital solutions that drive real results. Based in Mysore.",
    url: "https://hnwebtechnologies.com",
    siteName: "HN Web Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HN Web Technologies | Professional Website & Mobile App Development",
    description: "Premium website development, e-commerce solutions, and custom web applications. We build digital solutions that drive real results.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema definition for Google's AI Knowledge Graph
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HN Web Technologies",
    "alternateName": "HN Web Tech",
    "url": "https://hnwebtechnologies.com",
    "logo": "https://hnwebtechnologies.com/logo.png", // Update if your logo filename/path is different
    "description": "Premium website development, e-commerce solutions, and custom web applications based in Mysore, Karnataka.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mysore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hn-web-technologies" // Add your social links here when available
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent-gold)] selection:text-black">
        {/* Injects schema data directly into the DOM */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
