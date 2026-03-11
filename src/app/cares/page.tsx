"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Users, Leaf, ArrowRight, HandHeart, ChevronRight, BookOpen, Stethoscope, Briefcase } from "lucide-react";
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

export default function CaresPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
            alt="Community support"
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
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl text-center"
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-emerald-300 text-sm font-medium border border-white/20">
                <Heart className="w-4 h-4" />
                <span>Community Impact</span>
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={mounted ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.2, 0.65, 0.3, 0.9]
                }}
                className="inline-block"
                style={{ perspective: "1000px" }}
              >
                KARIBU
              </motion.span>
              <motion.span 
                className="block text-emerald-400 mt-2"
                initial={{ opacity: 0, y: 30, scale: 0.5 }}
                animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: "easeOut"
                }}
              >
                C.A.R.E.S
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4"
            >
              Community Action for Relief, Empowerment & Sustainability
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-white/60 max-w-xl mx-auto mb-8"
            >
              Making a lasting difference in the lives of communities across East Africa 
              through sustainable development and humanitarian initiatives.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link href="/">
                <Button 
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full shadow-lg font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.span 
                className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-4 block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Empowering Communities, Transforming Lives
              </motion.h2>
              
              <motion.p 
                className="text-slate-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                KARIBU C.A.R.E.S is our commitment to giving back to the communities 
                that make our work possible. Through strategic partnerships and grassroots 
                initiatives, we address critical needs in education, healthcare, and 
                environmental sustainability.
              </motion.p>
              
              <motion.p 
                className="text-slate-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Every relocation we facilitate contributes directly to community 
                development projects, creating a ripple effect of positive change 
                across East Africa.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span className="text-slate-700 text-sm font-medium">Sustainable Impact</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span className="text-slate-700 text-sm font-medium">Community Led</span>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { number: "10,000+", label: "Lives Impacted" },
                { number: "50+", label: "Community Projects" },
                { number: "25", label: "Partner Organizations" },
                { number: "5", label: "Countries Served" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{stat.number}</p>
                  <p className="text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Focus Areas</h2>
            <p className="text-emerald-200 max-w-2xl mx-auto">
              Strategic initiatives designed for maximum community impact
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
                icon: <BookOpen className="w-5 h-5" />,
                title: "Education Access",
                description: "Building schools, providing scholarships, and supporting educational infrastructure in underserved communities.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: <Stethoscope className="w-5 h-5" />,
                title: "Healthcare Support",
                description: "Partnering with local clinics to provide essential medical care, supplies, and health education programs.",
                color: "from-rose-500 to-pink-600"
              },
              {
                icon: <Briefcase className="w-5 h-5" />,
                title: "Economic Empowerment",
                description: "Creating sustainable livelihood opportunities through skills training and microenterprise support.",
                color: "from-emerald-500 to-teal-600"
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-6">{area.description}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <HandHeart className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Whether through volunteering, donations, or partnership, there are many 
                ways to contribute to our mission of creating lasting positive change.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-full text-lg shadow-lg">
                    Get Involved
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="bg-white text-slate-900 hover:bg-slate-100 border-white px-8 py-6 rounded-full text-lg shadow-lg font-medium"
                  >
                    Download Impact Report
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
