"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Stethoscope, Hospital, Plane, Shield, Users, Clock, ChevronRight, Mountain } from "lucide-react";
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

export default function MedicalService() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const features = [
    { icon: <Stethoscope className="w-6 h-6" />, title: "Safari Planning", description: "Access to Kenya's top safari destinations and wildlife reserves with expert-curated itineraries." },
    { icon: <Hospital className="w-6 h-6" />, title: "Lodge & Camp Coordination", description: "Seamless booking and coordination with Kenya's finest safari lodges and tented camps." },
    { icon: <Plane className="w-6 h-6" />, title: "Travel Logistics", description: "Complete travel arrangements including flights, accommodation, and local transportation." },
    { icon: <Shield className="w-6 h-6" />, title: "Travel Insurance", description: "Assistance with travel insurance verification and coverage for your safari adventure." },
    { icon: <Users className="w-6 h-6" />, title: "Group & Family Safaris", description: "Tailored safari experiences for families, groups, and solo travelers exploring Kenya." },
    { icon: <Clock className="w-6 h-6" />, title: "Custom Itineraries", description: "Personalized tour planning and multi-destination safari route arrangements." },
  ];

  const destinations = [
    { name: "Maasai Mara", location: "Narok County", specialty: "Big Five Safari" },
    { name: "Amboseli National Park", location: "Kajiado", specialty: "Elephant Herds & Kilimanjaro Views" },
    { name: "Diani Beach", location: "South Coast", specialty: "Beach & Marine Life" },
    { name: "Lake Nakuru", location: "Nakuru", specialty: "Flamingos & Wildlife" },
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
            src="/images/Kenya-Safari.webp"
            alt="Tourism in Kenya"
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
              Tourism in Kenya
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              World-class safari experiences meet Kenyan hospitality. Discover breathtaking wildlife and landscapes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Tourism Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From planning to departure, we coordinate every aspect of your safari and tourism journey in Kenya.
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

      {/* Partner Hospitals */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Top Safari Destinations
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We connect you with Kenya's most iconic safari destinations and wildlife experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-4">
                  <Mountain className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{dest.name}</h3>
                <p className="text-emerald-600 text-sm mb-1">{dest.location}</p>
                <p className="text-slate-500 text-sm">{dest.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Tourism in Kenya?
              </h2>
              <div className="space-y-4">
                {[
                  "World-renowned safari destinations and wildlife reserves",
                  "Diverse landscapes from savannahs to tropical beaches",
                  "Rich cultural heritage and Maasai experiences",
                  "Year-round wildlife viewing opportunities",
                  "Combine safari adventures with beach relaxation",
                  "English-speaking professional guides",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/images/Amboseli.webp"
                alt="Safari in Kenya"
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
            Begin Your Safari Journey in Kenya
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact our tourism specialists to discuss your safari plans and start planning your trip.
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
            <DialogTitle className="text-xl font-bold text-emerald-900">Book Your Tourism Consultation</DialogTitle>
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
                <option value="medical" selected>Tourism</option>
                <option value="relocation">International Relocation</option>
                <option value="investment">Global Investment</option>
                <option value="experiences">Cultural Experiences</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea 
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                placeholder="Tell us about your safari plans..."
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
