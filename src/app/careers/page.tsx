"use client";

import { motion } from "framer-motion";
import { ChevronRight, MapPin, Briefcase, Clock, ArrowRight, Users, Heart, Globe, Award, CheckCircle } from "lucide-react";
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

const jobs = [
  {
    id: 1,
    title: "Tourism Coordinator",
    department: "Tourism",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Coordinate tourism experiences for international visitors. Manage safari partnerships, travel logistics, and guest experience coordination.",
    requirements: [
      "2+ years experience in tourism or hospitality",
      "Knowledge of Kenya's healthcare system",
      "Strong organizational and multitasking abilities",
      "Empathy and excellent patient care skills",
      "Bachelor's degree in Healthcare Administration or related field"
    ]
  }
];

const benefits = [
  { icon: <Globe className="w-6 h-6" />, title: "Global Exposure", description: "Work with clients from around the world" },
  { icon: <Heart className="w-6 h-6" />, title: "Meaningful Impact", description: "Help people start new chapters in their lives" },
  { icon: <Users className="w-6 h-6" />, title: "Collaborative Team", description: "Join a passionate, supportive team" },
  { icon: <Award className="w-6 h-6" />, title: "Growth Opportunities", description: "Continuous learning and career development" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="Careers at Karibu Heritage"
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
          <Link href="/about/team">
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-md shadow-lg"
            >
              <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Team
            </Button>
          </Link>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-emerald-300 text-sm font-medium mb-6"
            >
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team</span>
            </motion.span>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Careers at Karibu Heritage
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 max-w-2xl"
            >
              Be part of a mission-driven team helping people from around the world 
              make Kenya their home. Find your purpose with us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Join Karibu Heritage?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer more than just a job. Join a team where your work makes a real difference in people&apos;s lives.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-emerald-200 max-w-2xl mx-auto">
              Explore our current opportunities and find your perfect role
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-emerald-200 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                    <p className="text-white/70 mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-emerald-300">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <a href="mailto:info@karibuheritage.com?subject=Application%20for%20Medical%20Tourism%20Coordinator">
                      <Button 
                        className="bg-white text-emerald-900 hover:bg-emerald-100 px-6 py-3 rounded-full font-medium whitespace-nowrap"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Don&apos;t See the Right Fit?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              We&apos;re always looking for talented individuals who are passionate about 
              helping people. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full text-lg">
                Send General Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
