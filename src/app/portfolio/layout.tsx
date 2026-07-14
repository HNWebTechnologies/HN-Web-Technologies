import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Check out our recent projects and success stories. See how HN Web Technologies helps businesses grow online.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
