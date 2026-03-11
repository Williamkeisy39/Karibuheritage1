"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Building, Home, Users, Plane, FileText, GraduationCap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/components/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function RelocationService() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const features = [
    { icon: <FileText className="w-6 h-6" />, title: "Visa & Immigration Support", description: "Complete assistance with visa applications, work permits, and residency documentation for Kenya." },
    { icon: <Home className="w-6 h-6" />, title: "Housing Assistance", description: "Find your perfect home in Kenya with our network of trusted real estate partners." },
    { icon: <Users className="w-6 h-6" />, title: "Cultural Integration", description: "Comprehensive orientation programs to help you adapt to Kenyan culture and lifestyle." },
    { icon: <GraduationCap className="w-6 h-6" />, title: "School Placement", description: "Assistance finding and enrolling in quality schools for your children in Kenya." },
    { icon: <Building className="w-6 h-6" />, title: "Business Setup", description: "Support for entrepreneurs looking to establish businesses in Kenya." },
    { icon: <Plane className="w-6 h-6" />, title: "Airport Transfers", description: "Seamless arrival and departure logistics with premium transportation services." },
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
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Relocation & Integration
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Your complete guide to making Kenya your new home. We handle every detail so you can focus on starting your new chapter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Relocation Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From paperwork to settling in, we provide end-to-end support for your move to Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Relocation Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured approach to ensure your smooth transition to life in Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Initial assessment of your needs and timeline" },
              { step: "02", title: "Planning", desc: "Customized relocation strategy and documentation" },
              { step: "03", title: "Execution", desc: "Hands-on support for move and settlement" },
              { step: "04", title: "Integration", desc: "Ongoing support as you settle into Kenyan life" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Start Your Journey to Kenya?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let our experts guide you through every step of your relocation process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6 text-base rounded-full"
              >
                Get in Touch
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

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-emerald-900">Book Your Relocation Consultation</DialogTitle>
            <DialogDescription className="text-slate-600">
              Fill in your details and we&apos;ll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form action="https://formspree.io/f/xreypjkq" method="POST" className="space-y-4 mt-4">
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
                <option value="relocation" selected>International Relocation</option>
                <option value="investment">Global Investment</option>
                <option value="medical">Medical Tourism</option>
                <option value="experiences">Cultural Experiences</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea 
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                placeholder="Tell us about your relocation plans..."
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
