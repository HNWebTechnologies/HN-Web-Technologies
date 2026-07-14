import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechStackSection from "@/components/home/TechStackSection";
import ProcessSection from "@/components/home/ProcessSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HN Web Technologies",
    "image": "https://hnwebtechnologies.com/twitter-image.jpg",
    "description": "Premium website development, e-commerce solutions, and custom web applications. We build digital solutions that drive real results. Based in Mysore.",
    "url": "https://hnwebtechnologies.com",
    "telephone": "+918088738224",
    "email": "hello@hnwebtechnologies.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mysore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/hnwebtechnologies"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
