"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, TreePine, TrendingUp, Sun, Users, Target, Award, Sparkles, ChevronRight, Compass, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function JourneyPage() {
  const [mounted, setMounted] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80"
            alt="Peaceful African landscape"
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
            className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-20 w-48 h-48 bg-emerald-500/10 backdrop-blur-sm rounded-full"
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* Content with Glassmorphism Card */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={mounted ? "animate" : "initial"}
            suppressHydrationWarning
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <motion.span 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-emerald-300 text-sm font-medium border border-white/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Find Your Roots</span>
              </motion.span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {"Journey back to".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                  animate={mounted ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                    ease: "easeOut"
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span 
                className="block text-emerald-400 mt-2"
                initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
                animate={mounted ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.2, 0.65, 0.3, 0.9]
                }}
                style={{ perspective: "1000px" }}
              >
                Origin
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            >
              Discover transformative experiences that reconnect you with yourself, 
              your heritage, and the roots of East Africa.
            </motion.p>

          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <div className="relative">
              <motion.div 
                className="relative h-[500px] rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80"
                  alt="Meditation in nature"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </motion.div>
              
              {/* Floating Card */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl max-w-xs"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-semibold text-slate-900">Mindfulness</span>
                </div>
                <p className="text-sm text-slate-600">Reconnect with your inner self through guided meditation practices.</p>
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <motion.span 
                className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-4 block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Our Philosophy
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Why Relocate or Invest in Kenya?
              </motion.h2>
              
              <motion.p 
                className="text-slate-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Kenya offers unparalleled opportunities for those seeking a fresh start, 
                investment growth, or a meaningful connection to their heritage. With a 
                thriving economy, strategic location in East Africa, and welcoming communities, 
                Kenya is the ideal destination for relocation and investment.
              </motion.p>
              
              <motion.p 
                className="text-slate-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                From affordable real estate and business-friendly policies to world-class 
                healthcare facilities and stunning natural beauty, Kenya provides everything 
                you need to build a prosperous future while reconnecting with your roots.
              </motion.p>

              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Compass className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Business Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Investment Returns</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Three Pillars of Peace</h2>
            <p className="text-emerald-200 max-w-2xl mx-auto">
              Our holistic approach addresses every aspect of your well-being
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <TreePine className="w-7 h-7" />,
                title: "Heritage Connection",
                description: "Reconnect with your ancestral roots and discover the rich cultural tapestry that defines Kenya's diverse communities.",
                color: "from-rose-500 to-pink-600"
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Investment Potential",
                description: "Explore lucrative opportunities in real estate, agriculture, technology, and tourism in one of Africa's fastest-growing economies.",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: <Sun className="w-7 h-7" />,
                title: "Quality of Life",
                description: "Enjoy affordable living, modern infrastructure, excellent climate, and access to world-class healthcare and education facilities.",
                color: "from-amber-500 to-orange-600"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-white/70 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Explore Kenya
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Discover the Beauty of Kenya
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { src: "/images/Diani.webp", title: "Coast Activities - Diani Beach" },
              { src: "/images/Maasais.webp", title: "Maasai Cultural Experience" },
              { src: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80", title: "Affordable Coastal Stays" },
              { src: "/images/Nairoobi City.jpg", title: "Nairobi City Life" },
              { src: "/images/Amboseli.webp", title: "Amboseli National Park" },
              { src: "/images/Flamingo.webp", title: "Lake Nakuru Safari" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 mb-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Begin Your Journey Today
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Take the first step towards a more peaceful, purposeful life. 
              Our team is ready to guide you on this transformative journey.
            </p>
            <Link href="/contact">
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full text-lg"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-emerald-900">Book Your Consultation</DialogTitle>
            <DialogDescription className="text-slate-600">
              Fill in your details and we&apos;ll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form action="https://formspree.io/f/xlgpbgqv" method="POST" className="space-y-4 mt-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Full Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Service Interest</label>
              <select className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                <option value="">Select a service...</option>
                <option value="relocation">International Relocation</option>
                <option value="investment">Global Investment</option>
                <option value="medical">Tourism</option>
                <option value="experiences">Cultural Experiences</option>
                <option value="veteran">Veteran Support</option>
                <option value="humanitarian">Humanitarian Support</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea 
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3"
            >
              Submit Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
