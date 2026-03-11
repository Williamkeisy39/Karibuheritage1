"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Heart, HandHeart, GraduationCap, Leaf, Building, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/components/navigation";

export default function HumanitarianService() {
  const programs = [
    { icon: <GraduationCap className="w-6 h-6" />, title: "Education Support", description: "Scholarships, school infrastructure development, and educational resources for underserved communities." },
    { icon: <Heart className="w-6 h-6" />, title: "Healthcare Initiatives", description: "Mobile clinics, health education, and medical supply distribution in rural areas." },
    { icon: <Building className="w-6 h-6" />, title: "Community Development", description: "Clean water projects, infrastructure development, and sustainable resource management." },
    { icon: <HandHeart className="w-6 h-6" />, title: "Women Empowerment", description: "Skills training, microfinance support, and entrepreneurship programs for women." },
    { icon: <Leaf className="w-6 h-6" />, title: "Environmental Conservation", description: "Reforestation, wildlife protection, and sustainable farming education programs." },
    { icon: <Users className="w-6 h-6" />, title: "Diaspora Engagement", description: "Connecting Kenyans abroad with opportunities to give back to their homeland." },
  ];

  const impact = [
    { number: "10,000+", label: "Students Supported" },
    { number: "50+", label: "Communities Served" },
    { number: "25,000+", label: "Lives Impacted" },
    { number: "100+", label: "Projects Completed" },
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
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
            alt="Humanitarian Programs"
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
              Humanitarian & Impact Programs
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Making a meaningful difference through KARIBU C.A.R.E.S - our commitment to community development and sustainable impact in Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impact.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Impact Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Through KARIBU C.A.R.E.S, we implement targeted programs that address critical community needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                <p className="text-slate-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                How You Can Make a Difference
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Volunteer", desc: "Share your skills and time on the ground in Kenya" },
                  { title: "Donate", desc: "Financial contributions that directly fund our programs" },
                  { title: "Partner", desc: "Corporate partnerships for sustainable development" },
                  { title: "Advocate", desc: "Spread awareness about our initiatives" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                alt="Community development in Kenya"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Join Us in Creating Impact
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Whether you're an individual or organization, there are many ways to contribute to positive change in Kenya.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6 text-base rounded-full">
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
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
