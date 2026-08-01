"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag, Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "how-much-does-a-website-cost-in-mysore",
    title: "How Much Does a Website Cost in Mysore? (2026 Pricing Guide)",
    excerpt:
      "Planning to build a website for your business in Mysore? Here's a complete breakdown of website development costs — from basic business sites to full e-commerce stores.",
    category: "Pricing",
    date: "July 28, 2026",
    readTime: "5 min read",
    tags: ["Website Cost", "Mysore", "Web Development"],
    featured: true,
  },
  {
    id: 2,
    slug: "why-every-business-in-mysore-needs-a-website",
    title: "Why Every Business in Mysore Needs a Website in 2026",
    excerpt:
      "With over 500 million internet users in India, having no website means losing customers every day. Discover why going digital is no longer optional for Mysore businesses.",
    category: "Business Growth",
    date: "July 20, 2026",
    readTime: "6 min read",
    tags: ["Digital Presence", "Small Business", "Mysore"],
    featured: false,
  },
  {
    id: 3,
    slug: "top-seo-tips-for-small-businesses-in-karnataka",
    title: "Top 10 SEO Tips for Small Businesses in Karnataka",
    excerpt:
      "Want your business to appear at the top of Google search results? These 10 proven SEO strategies will help local businesses in Karnataka attract more customers online.",
    category: "SEO",
    date: "July 14, 2026",
    readTime: "8 min read",
    tags: ["SEO", "Local SEO", "Karnataka"],
    featured: false,
  },
  {
    id: 4,
    slug: "nextjs-vs-wordpress-which-is-better",
    title: "Next.js vs WordPress: Which Is Better for Your Business Website?",
    excerpt:
      "Choosing the right platform for your website is crucial. We compare Next.js and WordPress across speed, SEO, cost, and scalability to help you make the right decision.",
    category: "Technology",
    date: "July 7, 2026",
    readTime: "7 min read",
    tags: ["Next.js", "WordPress", "Web Technology"],
    featured: false,
  },
  {
    id: 5,
    slug: "ecommerce-website-tips-for-mysore-sellers",
    title: "5 Must-Have Features for Your E-Commerce Website in Mysore",
    excerpt:
      "Selling products online? Make sure your e-commerce website has these 5 essential features to increase conversions and deliver a great customer experience.",
    category: "E-Commerce",
    date: "June 30, 2026",
    readTime: "5 min read",
    tags: ["E-Commerce", "Online Store", "Mysore Business"],
    featured: false,
  },
  {
    id: 6,
    slug: "mobile-app-vs-mobile-website",
    title: "Mobile App vs Mobile Website: What Does Your Business Really Need?",
    excerpt:
      "Should you invest in a mobile app or a mobile-optimised website? We break down the pros and cons of each to help you choose the right path for your business.",
    category: "Mobile",
    date: "June 22, 2026",
    readTime: "6 min read",
    tags: ["Mobile App", "Mobile Website", "Business"],
    featured: false,
  },
];

const categories = ["All", "SEO", "Pricing", "Business Growth", "Technology", "E-Commerce", "Mobile"];

const categoryColors: Record<string, string> = {
  SEO: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Pricing: "bg-green-500/10 text-green-400 border-green-500/20",
  "Business Growth": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Technology: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "E-Commerce": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Mobile: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || selectedCategory !== "All" || searchQuery);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-screen filter blur-[160px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-gold)] rounded-full mix-blend-screen filter blur-[160px] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-medium text-sm mb-4">
            INSIGHTS & GUIDES
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Web Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-gold)]">
              Blog
            </span>
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10">
            Expert tips, pricing guides, and digital growth strategies for businesses
            in Mysore and Karnataka.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--card)] border border-[var(--border)] rounded-full pl-12 pr-6 py-3.5 text-white placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-[var(--border)] bg-[var(--card)]/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-[0_0_15px_rgba(0,71,179,0.4)]"
                    : "bg-transparent border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Featured Post */}
          {featuredPost && selectedCategory === "All" && !searchQuery && (
            <div className="mb-16">
              <p className="text-[var(--accent-gold)] text-sm font-semibold tracking-widest uppercase mb-6">
                ★ Featured Article
              </p>
              <div className="group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--card)] to-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,71,179,0.15)]">
                <div className="absolute top-6 right-6">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${categoryColors[featuredPost.category] || "bg-gray-500/10 text-gray-400 border-gray-500/20"}`}>
                    {featuredPost.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[var(--muted-foreground)] text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[var(--accent-gold)] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-[var(--muted-foreground)] text-lg mb-6 leading-relaxed max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs text-[var(--muted-foreground)] bg-[var(--background)] border border-[var(--border)] px-3 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-blue-700 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(0,71,179,0.5)] transition-all duration-300 group/btn"
                >
                  Read Article{" "}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,71,179,0.12)] hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[post.category] || "bg-gray-500/10 text-gray-400 border-gray-500/20"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)]">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--accent-gold)] transition-colors leading-snug flex-grow">
                    {post.title}
                  </h3>

                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[var(--muted-foreground)] bg-[var(--background)] border border-[var(--border)] px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                    <span className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent-gold)] transition-colors group/link"
                    >
                      Read more{" "}
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[var(--muted-foreground)] text-lg">
                No articles found. Try a different search or category.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 text-center p-10 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent-gold)]/5 border border-[var(--primary)]/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-[var(--muted-foreground)] mb-8 max-w-xl mx-auto">
              Get a free consultation with our team. We'll help you choose the right
              solution for your business in Mysore.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-blue-700 text-white rounded-full font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,71,179,0.5)] transition-all duration-300"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
