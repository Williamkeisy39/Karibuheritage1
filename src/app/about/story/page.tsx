"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Quote, Heart, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

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

export default function StoryPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Karibu Heritage was founded with a vision to help individuals and families navigate the complexities of relocating to Kenya.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80"
    },
    {
      year: "2019",
      title: "First 100 Families",
      description: "We successfully helped our first 100 families settle into their new homes in Kenya, building our reputation for excellence.",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80"
    },
    {
      year: "2021",
      title: "Expanding Services",
      description: "Added tourism and investment consulting to our portfolio, becoming a full-service relocation company.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"
    },
    {
      year: "2023",
      title: "KARIBU C.A.R.E.S Launch",
      description: "Launched our community impact program, committing 10% of profits to local development projects.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80"
    },
    {
      year: "2025",
      title: "500+ Families",
      description: "Celebrated helping over 500 families from 15+ countries make Kenya their home.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&q=80"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
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
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=80"
            alt="Our Story"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={mounted ? "animate" : "initial"}
            suppressHydrationWarning
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-emerald-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>About Us</span>
            </motion.span>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {"Our Story".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={mounted ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.08,
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }}
                  className="inline-block origin-bottom"
                  style={{ perspective: "1000px" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-2xl"
            >
              From a simple idea to a trusted partner for hundreds of families 
              relocating to Kenya. This is how Karibu Heritage came to be.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="relative h-[500px] rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src="/images/john-tugai.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-emerald-600 text-white rounded-xl p-6 shadow-xl max-w-xs"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Quote className="w-8 h-8 mb-2 opacity-50" />
                <p className="text-sm italic">
                  &quot;Every family deserves a smooth transition to their new home.&quot;
                </p>
              </motion.div>
            </div>

            <div>
              <motion.span 
                className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-4 block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                The Founder&apos;s Vision
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Born from Personal Experience
              </motion.h2>
              
              <motion.div 
                className="space-y-4 text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p>
                  Karibu Heritage began with a simple realization: relocating to a new country 
                  is one of life&apos;s most challenging transitions, yet it&apos;s also one of the most 
                  rewarding. Our founder experienced this firsthand when helping family members 
                  navigate their move to Kenya.
                </p>
                <p>
                  What started as helping a few friends quickly grew into something bigger. 
                  We saw a gap in the market for truly personalized, culturally-grounded 
                  relocation services that went beyond logistics to address the emotional 
                  and practical needs of families making Kenya their home.
                </p>
                <p>
                  Today, Karibu Heritage has evolved into a comprehensive relocation and 
                  integration service provider, but our core mission remains unchanged: 
                  to make every family feel truly welcome in their new home.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Key milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-emerald-500/30 hidden lg:block" />

            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                        <Calendar className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold text-xl">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center lg:text-left">{milestone.title}</h3>
                      <p className="text-white/70 text-center lg:text-left">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Point */}
                  <div className="hidden lg:flex w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-emerald-500/50" />

                  {/* Image */}
                  <div className="flex-1">
                    <motion.div 
                      className="h-48 rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Drives Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The core values that guide every decision we make
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
              { icon: <Heart className="w-8 h-8" />, title: "Compassion", description: "We understand the emotional journey of relocation and approach every client with empathy and care." },
              { icon: <MapPin className="w-8 h-8" />, title: "Authenticity", description: "We believe in genuine connections and culturally-grounded experiences that honor local traditions." },
              { icon: <Sparkles className="w-8 h-8" />, title: "Excellence", description: "We continuously strive to exceed expectations and improve our services." },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
