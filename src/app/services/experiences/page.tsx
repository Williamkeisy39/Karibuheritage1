"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Mountain, Utensils, Camera, Music, Palmtree, Heart, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/components/navigation";

export default function ExperiencesService() {
  const experiences = [
    { icon: <Mountain className="w-6 h-6" />, title: "Safari Adventures", description: "Witness the Big Five in their natural habitat across Kenya's world-renowned national parks and reserves." },
    { icon: <Utensils className="w-6 h-6" />, title: "Culinary Journeys", description: "Experience authentic Kenyan cuisine through guided food tours and cooking classes with local chefs." },
    { icon: <Music className="w-6 h-6" />, title: "Cultural Immersion", description: "Engage with local communities, learn traditional dances, and participate in cultural ceremonies." },
    { icon: <Heart className="w-6 h-6" />, title: "Wellness Retreats", description: "Rejuvenate with yoga, meditation, and spa treatments in serene Kenyan landscapes." },
    { icon: <Palmtree className="w-6 h-6" />, title: "Coastal Escapes", description: "Relax on pristine beaches and explore the Swahili culture along Kenya's stunning coastline." },
    { icon: <Camera className="w-6 h-6" />, title: "Photography Tours", description: "Capture Kenya's breathtaking landscapes and wildlife with expert photography guides." },
  ];

  const destinations = [
    { name: "Masai Mara", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80", description: "World-famous for the Great Migration" },
    { name: "Diani Beach", image: "/images/Diani.webp", description: "Pristine white sands and turquoise waters" },
    { name: "Mount Kenya", image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&q=80", description: "Africa's second highest peak" },
    { name: "Lamu Island", image: "https://images.unsplash.com/photo-1544144433-d50aff500b91?w=600&q=80", description: "Ancient Swahili settlement and culture" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
            alt="Kenya Experiences"
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
          <Link href="/services">
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md shadow-lg"
            >
              <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Services
            </Button>
          </Link>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Customized Kenya Experiences
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Discover Kenya through authentic, immersive experiences that connect you deeply with the land, wildlife, and people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Curated Experience Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each experience is thoughtfully designed to provide authentic connections with Kenya's diverse offerings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                <p className="text-slate-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore Kenya's most iconic locations, each offering unique experiences and memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{dest.name}</h3>
                  <p className="text-white/80 text-sm">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80"
                alt="Tourists enjoying Kenya safari"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Our Experiences?
              </h2>
              <div className="space-y-4">
                {[
                  "Local expert guides with deep knowledge",
                  "Small group sizes for personalized attention",
                  "Sustainable and responsible tourism practices",
                  "Authentic community interactions",
                  "Flexible itineraries tailored to your interests",
                  "24/7 support throughout your journey",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Experience Kenya?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let us craft your perfect Kenyan adventure, tailored to your interests and preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6 text-base rounded-full">
                Plan Your Experience
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="px-8 py-6 text-base rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
