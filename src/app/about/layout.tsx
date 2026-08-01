import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about HN Web Technologies, a leading web development agency in Mysore dedicated to delivering premium digital solutions.",
  alternates: {
    canonical: "https://www.hnwebtechnologies.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
