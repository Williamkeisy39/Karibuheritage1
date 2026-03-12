"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Twitter, Mail, Sparkles, ChevronRight } from "lucide-react";
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
      staggerChildren: 0.1
    }
  }
};

export default function TeamPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const team = [
    {
      name: "John Tugai",
      role: "Managing Director - Kenya, Head Quarter",
      image: "/images/john-tugai.jpeg"
    },
    {
      name: "Fernand Tchikounzi",
      role: "Director - New York, USA",
      image: "/images/ceotwo.jpg"
    },
    {
      name: "Tony Awe",
      role: "Director - Europe",
      image: "/images/Tony Awe - Director- Europe.jpeg"
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
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80"
            alt="Team"
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
              Meet Our Team
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-2xl"
            >
              Dedicated professionals passionate about helping you find your place in Kenya.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid with Join Our Team */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-300 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Guided by Experience</h2>
            <p className="text-emerald-200 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in relocation, healthcare, and international business.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  {member.image ? (
                    <motion.img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  ) : (
                    <div className="w-full h-full bg-emerald-800/50 flex items-center justify-center">
                      <svg className="w-24 h-24 text-emerald-300/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-emerald-300 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Join Our Team Card */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center p-6 min-h-[360px]"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-8 h-8 text-emerald-300" />
                </div>
                <h3 className="text-lg font-bold mb-2">Join Our Team</h3>
                <p className="text-emerald-200 text-sm mb-6">
                  We&apos;re always looking for passionate individuals.
                </p>
                <Link href="/careers">
                  <Button 
                    className="bg-white text-emerald-900 hover:bg-emerald-100 px-6 py-3 rounded-full font-medium"
                  >
                    View Open Positions
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
