"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  {
    number: "01.",
    title: "Investigative Tour",
    description: "Diaspora engagement and reconnection services supporting intentional cultural exploration and long-term connection with Kenya.",
    href: "/services/experiences"
  },
  {
    number: "02.",
    title: "Relocation & Integration Service",
    description: "Professional global relocation and integration services for individuals and families relocating to Kenya. Structured planning, cultural orientation, and on-ground support.",
    href: "/services/relocation"
  },
  {
    number: "03.",
    title: "Veteran Transition & Wellness Pathway",
    description: "Veteran relocation and transition services supporting lifestyle change, integration, and long-term stability in Kenya through a structured, non-clinical approach.",
    href: "/services/veteran"
  },
  {
    number: "04.",
    title: "Corporate & Executive Relocation Services",
    description: "Corporate and executive relocation services supporting organizations relocating talent to Kenya with structured integration and risk-based planning.",
    href: "/services/relocation"
  },
  {
    number: "05.",
    title: "Medical Tourism",
    description: "Certified medical tourism facilitation connecting international patients with accredited hospitals in Kenya through safe, structured, and confidential coordination.",
    href: "/services/medical"
  },
  {
    number: "06.",
    title: "Customized Travel Experiences",
    description: "Customized travel experiences in Kenya designed for cultural immersion, purposeful exploration, and professionally curated itineraries.",
    href: "/services/experiences"
  },
  {
    number: "07.",
    title: "Investment & Real Estate Guidance",
    description: "Investment advisory and real estate guidance for diaspora clients exploring property, land, and business opportunities in Kenya with due diligence support.",
    href: "/services/investment"
  },
  {
    number: "08.",
    title: "Humanitarian & Community Support",
    description: "Humanitarian coordination and community-based support services facilitating volunteer missions, NGO partnerships, and sustainable impact projects.",
    href: "/services/humanitarian"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f3f0]">
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
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Our Services"
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
              Our Services
            </span>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.03
                  }
                }
              }}
            >
              {"Structured global services designed for clarity, integration, and long-term success.".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <p className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed">
              Karibu Heritage Limited delivers professional relocation, transition, medical tourism, cultural, and global client services through a structured, assessment-led approach. Each service is designed to support informed decision-making, responsible engagement, and sustainable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white border border-slate-200 rounded-sm p-8 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <span className="text-slate-400 text-sm font-medium mb-8 block text-right">
                  {service.number}
                </span>
                
                <h3 className="text-emerald-600 text-lg font-medium mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-slate-200">
                  <Link 
                    href={service.href}
                    className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
