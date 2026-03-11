"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Navigation from "@/components/navigation";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Relocating to Kenya: A Complete Guide",
    excerpt: "From visa requirements to finding the perfect neighborhood, discover everything you need to know for a smooth transition to your new life in Kenya.",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80",
    category: "Relocation",
    author: "Sarah Kimani",
    date: "March 5, 2026",
    readTime: "8 min read",
    slug: "essential-tips-relocating-kenya",
  },
  {
    id: 2,
    title: "Why Kenya is Becoming a Top Destination for Medical Tourism",
    excerpt: "Explore the world-class healthcare facilities, affordable treatments, and the unique combination of quality care and recovery in beautiful settings.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    category: "Medical Tourism",
    author: "Dr. James Otieno",
    date: "March 1, 2026",
    readTime: "6 min read",
    slug: "kenya-medical-tourism-destination",
  },
  {
    id: 3,
    title: "Investment Opportunities in Kenya's Growing Economy",
    excerpt: "From real estate to agriculture, discover the sectors driving Kenya's economic growth and how you can be part of this exciting expansion.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    category: "Investment",
    author: "Michael Njoroge",
    date: "February 25, 2026",
    readTime: "10 min read",
    slug: "investment-opportunities-kenya",
  },
  {
    id: 4,
    title: "Experiencing the Great Migration: A Safari Guide",
    excerpt: "Witness one of nature's greatest spectacles. Learn about the best times, locations, and tips for experiencing the Great Migration in Kenya.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    category: "Travel",
    author: "Amina Hassan",
    date: "February 20, 2026",
    readTime: "7 min read",
    slug: "great-migration-safari-guide",
  },
  {
    id: 5,
    title: "Settling In: Finding Your Community in Kenya",
    excerpt: "Building a social network and feeling at home. Tips for connecting with locals, expat communities, and making Kenya truly feel like home.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    category: "Lifestyle",
    author: "Grace Muthoni",
    date: "February 15, 2026",
    readTime: "5 min read",
    slug: "finding-community-kenya",
  },
  {
    id: 6,
    title: "Understanding Kenya's Real Estate Market",
    excerpt: "A comprehensive overview of property trends, popular neighborhoods, and key considerations for buying or renting in Kenya's dynamic market.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    category: "Real Estate",
    author: "Peter Kamau",
    date: "February 10, 2026",
    readTime: "9 min read",
    slug: "kenya-real-estate-market",
  },
];

const categories = [
  { name: "All", slug: "all" },
  { name: "Relocation", slug: "relocation" },
  { name: "Medical Tourism", slug: "medical-tourism" },
  { name: "Investment", slug: "investment" },
  { name: "Travel", slug: "travel" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Real Estate", slug: "real-estate" },
];

const categoryLinks: Record<string, string> = {
  "All": "/blog",
  "Relocation": "/blog/category/relocation",
  "Medical Tourism": "/blog/category/medical-tourism",
  "Investment": "/blog/category/investment",
  "Travel": "/blog/category/travel",
  "Lifestyle": "/blog/category/lifestyle",
  "Real Estate": "/blog/category/real-estate",
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f5f3f0]">
      <Navigation />
      
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-emerald-900/60" />
        </motion.div>

        {/* Back Link */}
        <motion.div 
          className="absolute top-24 left-4 sm:left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/">
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md shadow-lg"
            >
              <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Floating Glass Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 right-20 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            <span className="inline-block text-emerald-300 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Insights & Stories
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
              Karibu Heritage Blog
            </h1>
            
            <p className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed">
              Insights, guides, and stories about relocating to Kenya, investment opportunities, travel experiences, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={categoryLinks[category.name]}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.name === selectedCategory
                      ? "bg-emerald-600 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-slate-600 mt-1">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-600 text-white">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Subscribe to our newsletter for the latest insights on relocating to Kenya, investment opportunities, and travel tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
            <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
