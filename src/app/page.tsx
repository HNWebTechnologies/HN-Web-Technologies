import HeroSection from "@/components/home/HeroSection";
import dynamic from "next/dynamic";

// Lazy-load below-fold components to reduce initial JS bundle
const FeaturesSection = dynamic(() => import("@/components/home/FeaturesSection"));
const WhyChooseUsSection = dynamic(() => import("@/components/home/WhyChooseUsSection"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const TechStackSection = dynamic(() => import("@/components/home/TechStackSection"));
const ProcessSection = dynamic(() => import("@/components/home/ProcessSection"));
const PortfolioSection = dynamic(() => import("@/components/home/PortfolioSection"));
const TestimonialSection = dynamic(() => import("@/components/home/TestimonialSection"));
const PricingSection = dynamic(() => import("@/components/home/PricingSection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const CTASection = dynamic(() => import("@/components/home/CTASection"));

export default function Home() {
  return (
    <>
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