import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with HN Web Technologies. We are ready to help you build your dream website or mobile application.",
  alternates: {
    canonical: "https://www.hnwebtechnologies.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
