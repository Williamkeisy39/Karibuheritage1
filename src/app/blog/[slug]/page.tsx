"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";
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
    content: `
      <p>Relocating to Kenya is an exciting adventure that offers a unique blend of vibrant culture, stunning natural beauty, and warm hospitality. Whether you're moving for work, retirement, or a fresh start, proper preparation is key to a successful transition.</p>
      
      <h2>1. Understand the Visa Requirements</h2>
      <p>Before making any concrete plans, research the appropriate visa category for your situation. Kenya offers various options including work permits, dependent passes, and special passes. Each has specific requirements and processing times, so start your application early.</p>
      
      <h2>2. Choose Your Location Wisely</h2>
      <p>Kenya offers diverse living environments, from the bustling capital Nairobi to the coastal paradise of Mombasa and the serene highlands. Consider factors like proximity to work, schools, healthcare facilities, and your preferred lifestyle when selecting your new home.</p>
      
      <h2>3. Secure Accommodation Before Arrival</h2>
      <p>While it's possible to find housing after arriving, having temporary accommodation arranged gives you peace of mind and time to properly search for your permanent home. Many expats start with serviced apartments while getting familiar with different neighborhoods.</p>
      
      <h2>4. Set Up Banking and Finances</h2>
      <p>Research banking options in Kenya and understand the process for opening an account as a foreign resident. Consider maintaining accounts in your home country initially and understand the implications of international transfers.</p>
      
      <h2>5. Healthcare Planning</h2>
      <p>Kenya has excellent private healthcare facilities, particularly in major cities. Research health insurance options that provide comprehensive coverage locally and internationally. Identify hospitals and clinics near your intended residence.</p>
      
      <h2>6. School Research for Families</h2>
      <p>If you're moving with children, research international and local school options well in advance. Popular international schools often have waiting lists, so apply early. Consider visiting schools during a reconnaissance trip.</p>
      
      <h2>7. Cultural Preparation</h2>
      <p>Take time to learn about Kenyan culture, customs, and basic Swahili phrases. Understanding local etiquette and social norms will help you integrate faster and build meaningful relationships with your new community.</p>
      
      <h2>8. Shipping and Customs</h2>
      <p>If you're shipping household goods, understand customs regulations and duty exemptions for returning residents. Some items may be better purchased locally, while others are worth bringing from home.</p>
      
      <h2>9. Build Your Network</h2>
      <p>Connect with expat communities online before your move. Platforms like Facebook groups and LinkedIn can help you build connections and get practical advice from those who've already made the transition.</p>
      
      <h2>10. Partner with Professionals</h2>
      <p>Consider working with a relocation specialist like Karibu Heritage. Professional support can streamline your move, help navigate bureaucratic processes, and ensure nothing important is overlooked.</p>
      
      <p>Moving to Kenya is a significant life change, but with proper preparation and the right support, it can be the beginning of an incredible new chapter. Welcome to your Kenyan adventure!</p>
    `,
  },
  {
    id: 2,
    title: "Why Kenya is Becoming a Top Tourism Destination",
    excerpt: "Explore Kenya's world-renowned safaris, stunning wildlife parks, and the unique combination of adventure and relaxation in beautiful settings.",
    image: "/images/Kenya-Safari.webp",
    category: "Tourism",
    author: "Dr. James Otieno",
    date: "March 1, 2026",
    readTime: "6 min read",
    slug: "kenya-medical-tourism-destination",
    content: `
      <p>Kenya is rapidly emerging as a premier tourism destination, combining world-class safari experiences with stunning landscapes and rich cultural heritage. This growing sector is attracting visitors from across Africa, Europe, and beyond.</p>
      
      <h2>World-Renowned Safari Destinations</h2>
      <p>Kenya's national parks and reserves are among the finest in the world. The Maasai Mara, Amboseli, Tsavo, and Samburu offer unparalleled wildlife viewing opportunities, including the famous Big Five and the Great Migration.</p>
      
      <h2>Affordable Adventure</h2>
      <p>One of the primary drivers of tourism to Kenya is value. Safari packages in Kenya offer incredible experiences at competitive prices compared to other destinations, without compromising on quality. This affordability extends to beach holidays, cultural tours, and adventure activities.</p>
      
      <h2>Diverse Experiences</h2>
      <p>Kenya offers diverse tourism experiences from savannah safaris to tropical beaches, mountain trekking on Mount Kenya, cultural encounters with the Maasai, and vibrant city life in Nairobi. The country's coastline along the Indian Ocean is particularly renowned for its pristine beaches.</p>
      
      <h2>Natural Paradise</h2>
      <p>What sets Kenya apart is the incredible diversity of landscapes. Visitors can experience snow-capped mountains, vast savannahs, tropical forests, and pristine beaches all within one trip.</p>
      
      <h2>Seamless Tourism Services</h2>
      <p>Companies like Karibu Heritage specialize in coordinating every aspect of tourism, from safari planning to beach holidays. This includes travel arrangements, accommodation, guided tours, and culturally immersive experiences.</p>
      
      <h2>Growing International Recognition</h2>
      <p>Kenya's tourism sector continues to gain international recognition, with the government investing in conservation and infrastructure. The combination of English-speaking guides, modern lodges, and authentic African hospitality creates a unique value proposition.</p>
      
      <p>Whether you seek a wildlife safari or a beach retreat, Kenya offers an attractive combination of adventure, relaxation, and the chance to experience one of the world's most captivating countries.</p>
    `,
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
    content: `
      <p>Kenya stands as one of Africa's most dynamic economies, offering diverse investment opportunities across multiple sectors. As the economic hub of East Africa, the country presents attractive prospects for both local and international investors.</p>
      
      <h2>Real Estate Development</h2>
      <p>The Kenyan real estate market continues to show strong growth, driven by urbanization, a growing middle class, and infrastructure development. Opportunities exist in residential housing, commercial properties, industrial parks, and hospitality developments. Cities like Nairobi, Mombasa, and Kisumu are seeing particularly high demand.</p>
      
      <h2>Agriculture and Agribusiness</h2>
      <p>As an agricultural powerhouse, Kenya offers investment opportunities in commercial farming, agro-processing, and agricultural technology. The country's diverse climate allows for year-round production of various crops, while the growing organic and export markets present premium opportunities.</p>
      
      <h2>Technology and Innovation</h2>
      <p>Nairobi has earned the nickname "Silicon Savannah" due to its thriving tech ecosystem. Fintech, agritech, healthtech, and e-commerce are particularly promising sectors. The country's high mobile penetration rate and young, tech-savvy population create a fertile ground for digital innovation.</p>
      
      <h2>Renewable Energy</h2>
      <p>Kenya is a leader in renewable energy in Africa, with significant investments in geothermal, wind, and solar power. The government's commitment to clean energy and the country's natural resources make this an attractive sector for investors focused on sustainability.</p>
      
      <h2>Tourism and Hospitality</h2>
      <p>Despite recent challenges, Kenya's tourism sector continues to rebound and expand. Investment opportunities exist in luxury lodges, eco-tourism facilities, conference centers, and tourism-related services. The country's unique combination of wildlife, beaches, and culture ensures long-term appeal.</p>
      
      <h2>Manufacturing and Industry</h2>
      <p>Kenya's manufacturing sector is growing, supported by government initiatives and regional trade agreements. Opportunities exist in food processing, textiles, construction materials, and assembly operations serving both local and regional markets.</p>
      
      <h2>Support for Investors</h2>
      <p>Kenya has established various investment promotion agencies and free trade zones to support foreign investors. The Kenya Investment Authority provides guidance, while special economic zones offer tax incentives and simplified regulatory processes.</p>
      
      <p>With proper due diligence and local guidance, Kenya presents compelling opportunities for investors seeking exposure to one of Africa's most promising markets. Whether you're interested in real estate, technology, agriculture, or other sectors, professional support can help navigate the investment landscape effectively.</p>
    `,
  },
];

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return (
    <main className="min-h-screen bg-[#f5f3f0]">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="relative bg-white py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-slate-600 hover:text-emerald-600 font-medium transition-colors">
            <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img 
            src={post.image}
            alt={post.title}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            <Badge className="bg-emerald-500/80 text-white mb-4 backdrop-blur-sm">{post.category}</Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900">Share this article</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{post.author}</h3>
                <p className="text-slate-600">Expert contributor at Karibu Heritage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.filter((p) => p.id !== post.id).slice(0, 3).map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <Badge className="bg-emerald-100 text-emerald-700 text-xs mb-2">{relatedPost.category}</Badge>
                    <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Start Your Kenya Journey?
          </h2>
          <p className="text-slate-600 mb-6">
            Contact Karibu Heritage for personalized assistance with your relocation, investment, or travel plans.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="px-6 py-3 rounded-full">
                More Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
