import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Web Development Tips & Insights",
  description: "Expert tips, guides, and insights on website development, SEO, e-commerce, and digital marketing for businesses in Mysore and Karnataka.",
  alternates: {
    canonical: "https://www.hnwebtechnologies.com/blog",
  },
  openGraph: {
    title: "Blog — Web Development Tips & Insights | HN Web Technologies",
    description: "Expert tips, guides, and insights on website development, SEO, e-commerce, and digital marketing for businesses in Mysore and Karnataka.",
    url: "https://www.hnwebtechnologies.com/blog",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
