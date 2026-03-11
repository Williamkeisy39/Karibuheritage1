"use client";

import { motion } from "framer-motion";
import { ChevronRight, Clock, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    title: "Navigating Kenya's Immigration Process",
    excerpt: "A step-by-step guide to work permits, resident visas, and citizenship pathways for expatriates moving to Kenya.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    category: "Relocation",
    author: "David Ochieng",
    date: "February 28, 2026",
    readTime: "6 min read",
    slug: "kenya-immigration-process",
  },
  {
    id: 3,
    title: "Choosing the Right Neighborhood in Nairobi",
    excerpt: "From Karen to Westlands, explore the best neighborhoods in Nairobi for families, professionals, and retirees.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    category: "Relocation",
    author: "Jane Wanjiku",
    date: "February 20, 2026",
    readTime: "7 min read",
    slug: "nairobi-neighborhoods-guide",
  },
];

export default function RelocationCategoryPage() {
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
            src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80"
            alt="Relocation"
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
          <Link href="/blog">
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md shadow-lg"
            >
              <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Blog
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
            <Badge className="bg-emerald-500/80 text-white mb-4 backdrop-blur-sm">Category</Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
              Relocation
            </h1>
            
            <p className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed">
              Guides and tips for moving to Kenya, from visa requirements to settling into your new community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Relocation Articles</h2>
            <p className="text-slate-600 mt-1">{blogPosts.length} articles found</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
    </main>
  );
}
