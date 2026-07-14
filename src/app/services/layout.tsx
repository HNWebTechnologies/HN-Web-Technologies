import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our professional web development, mobile app development, e-commerce, and UI/UX design services.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
