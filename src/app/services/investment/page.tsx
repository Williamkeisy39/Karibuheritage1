"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Building2, Home, Briefcase, Globe, Shield, DollarSign, Leaf, ChevronRight } from "lucide-react";
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

export default function InvestmentService() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const sectors = [
    { icon: <Home className="w-6 h-6" />, title: "Real Estate", description: "Residential, commercial, and agricultural property investments across Kenya's growing markets." },
    { icon: <Briefcase className="w-6 h-6" />, title: "Business Ventures", description: "Partnership opportunities in tourism, agriculture, technology, and manufacturing sectors." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Capital Markets", description: "Access to Nairobi Securities Exchange and private equity opportunities." },
    { icon: <Building2 className="w-6 h-6" />, title: "Infrastructure", description: "Investment in energy, transport, and telecommunications infrastructure projects." },
    { icon: <Leaf className="w-6 h-6" />, title: "Agribusiness", description: "Sustainable farming and agro-processing investment opportunities." },
    { icon: <Globe className="w-6 h-6" />, title: "Export Trade", description: "Connect with Kenya's growing export market in tea, coffee, flowers, and more." },
  ];

  const benefits = [
    "Strategic location as East African economic hub",
    "Growing middle class and consumer market",
    "Young, educated workforce",
    "Government incentives for investors",
    "Improved infrastructure and connectivity",
    "Strong regional trade agreements",
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Understand your investment goals and risk profile" },
    { step: "02", title: "Research", desc: "Market analysis and opportunity identification" },
    { step: "03", title: "Due Diligence", desc: "Comprehensive verification and legal compliance" },
    { step: "04", title: "Execution", desc: "Investment structuring and transaction support" },
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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Investment Opportunities"
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
              Investment Opportunities in Kenya
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Access Kenya's growing economy through strategic investments in real estate, business ventures, and emerging sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Invest in Kenya */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Modern Nairobi business district"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Invest in Kenya?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
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

      {/* Investment Sectors */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Investment Sectors
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Diversify your portfolio with opportunities across Kenya's key economic sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{sector.title}</h3>
                <p className="text-slate-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Investment Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured approach to identifying, evaluating, and executing investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
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
      <section className="py-24 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Explore Investment Opportunities?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Connect with our investment advisors to discuss opportunities aligned with your goals.
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
            <DialogTitle className="text-xl font-bold text-emerald-900">Book Your Investment Consultation</DialogTitle>
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
                <option value="investment" selected>Global Investment</option>
                <option value="relocation">International Relocation</option>
                <option value="medical">Medical Tourism</option>
                <option value="experiences">Cultural Experiences</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea 
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                placeholder="Tell us about your investment goals..."
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
