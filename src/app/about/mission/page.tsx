"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Heart, Globe, Users, Zap, Award, ArrowRight, Sparkles, ChevronRight, Home, Network, HandHelping, Compass, Lightbulb, Handshake } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function MissionPage() {
  const [mounted, setMounted] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80"
            alt="Our Mission"
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
          <motion.div 
            className="absolute bottom-1/3 left-20 w-48 h-48 bg-emerald-500/10 backdrop-blur-sm rounded-full"
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
              Our Mission & Vision
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-2xl"
            >
              To be the bridge that transforms the daunting journey of relocation 
              into an opportunity for growth, connection, and new beginnings.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-4 bg-emerald-100 rounded-full mb-8">
              <Target className="w-12 h-12 text-emerald-600" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Our Mission
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
              &quot;To empower individuals and families from around the world to 
              successfully relocate to Kenya, providing comprehensive support that 
              goes beyond logistics to foster genuine cultural integration, 
              personal growth, and lasting community connections.&quot;
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "500+", label: "Families Relocated" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "15", label: "Countries Served" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.number}</p>
                  <p className="text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.span 
                className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-4 block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Our Vision
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                A World Without Borders
              </motion.h2>
              
              <motion.p 
                className="text-white/70 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                We envision a world where relocating to a new country is not a 
                source of anxiety but an exciting journey of discovery. Where 
                every individual, regardless of background, can find their 
                place and thrive in the vibrant, diverse communities of Kenya.
              </motion.p>
              
              <motion.p 
                className="text-white/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                By 2030, we aim to have helped 10,000 families successfully 
                relocate, creating a global network of individuals who have 
                found their home in Kenya while contributing to the country&apos;s 
                growth and development.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 text-emerald-300">
                  <Globe className="w-5 h-5" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <Heart className="w-5 h-5" />
                  <span>Community First</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <Zap className="w-5 h-5" />
                  <span>Innovation Driven</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div 
                    className="h-48 rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80"
                      alt="Community"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="h-64 rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&q=80"
                      alt="Teamwork"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div 
                    className="h-64 rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=400&q=80"
                      alt="Diversity"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="h-48 rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80"
                      alt="Future"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every interaction we have.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: <Handshake className="w-7 h-7" />, 
                title: "Empathy", 
                description: "We understand the emotional journey of relocation and approach every client with genuine care.",
                color: "bg-rose-100 text-rose-600"
              },
              { 
                icon: <Award className="w-7 h-7" />, 
                title: "Excellence", 
                description: "We hold ourselves to the highest standards, continuously improving our services.",
                color: "bg-amber-100 text-amber-600"
              },
              { 
                icon: <Network className="w-7 h-7" />, 
                title: "Community", 
                description: "We believe in building bridges between cultures and fostering meaningful connections.",
                color: "bg-emerald-100 text-emerald-600"
              },
              { 
                icon: <Lightbulb className="w-7 h-7" />, 
                title: "Innovation", 
                description: "We embrace new ideas and technologies to improve the relocation experience.",
                color: "bg-blue-100 text-blue-600"
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 2030 Impact Goals</h2>
            <p className="text-emerald-200 max-w-2xl mx-auto">
              Ambitious targets that drive our daily work
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
                icon: <Home className="w-10 h-10" />, 
                title: "10,000 Families", 
                description: "Help 10,000 families from 50+ countries successfully relocate to Kenya."
              },
              { 
                icon: <Compass className="w-10 h-10" />, 
                title: "Global Network", 
                description: "Establish partnerships with relocation services in 100+ cities worldwide."
              },
              { 
                icon: <HandHelping className="w-10 h-10" />, 
                title: "Community Impact", 
                description: "Invest $5M+ in community development through KARIBU C.A.R.E.S."
              },
            ].map((goal, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {goal.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{goal.title}</h3>
                <p className="text-white/70">{goal.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Be Part of Our Mission
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Whether you&apos;re relocating, partnering, or joining our team, 
            you can contribute to our vision of a more connected world.
          </p>
          <Button 
            onClick={() => setIsConsultationOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full text-lg"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
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
          <form action="https://formspree.io/f/xreypjkq" method="POST" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Interest</Label>
              <Select id="service" placeholder="Select a service">
                <option value="relocation">International Relocation</option>
                <option value="investment">Global Investment</option>
                <option value="medical">Medical Tourism</option>
                <option value="experiences">Cultural Experiences</option>
                <option value="veteran">Veteran Support</option>
                <option value="humanitarian">Humanitarian Support</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your needs..." />
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
