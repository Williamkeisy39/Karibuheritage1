"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronRight, Globe, Shield, Users, CheckCircle, Clock, MapPin, Heart, Building2, Plane, Stethoscope, Mountain, HandHeart, TrendingUp, BadgeCheck, ChevronDown, Search, ArrowRight, ArrowLeft, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasCounted, setHasCounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted) {
            setHasCounted(true);
            let start = 0;
            const end = 500;
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Set current year after mount (fixes hydration)
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Hide loading after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const heroSlides = [
    {
      title: "Relocate to Kenya",
      subtitle: "With Confidence.",
      description: "Trusted Support",
      image: "/images/745804416.jpeg"
    },
    {
      title: "Discover Kenya",
      subtitle: "Live & Invest",
      description: "In East Africa",
      image: "/images/giraffes-nairobi-skyline-city-national-park.jpeg"
    },
    {
      title: "Trusted Kenya",
      subtitle: "Relocation Experts",
      description: "Personalized Support",
      image: "/images/Luxe-tribes-Kenya-2023-4186.jpeg"
    },
    {
      title: "Experience Kenya",
      subtitle: "Safari & Beach",
      description: "Unforgettable Moments",
      image: "/images/Diani-Hotels-1-scaled.webp"
    }
  ];

  const navItems = [
    { name: "Home", href: "/", hasDropdown: false },
    { 
      name: "About Us", 
      href: "/about/story", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", href: "/about/story" },
        { name: "Team", href: "/about/team" },
        { name: "Mission", href: "/about/mission" }
      ]
    },
    { 
      name: "Our Services", 
      href: "/services", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Relocation", href: "/services/relocation" },
        { name: "Investment", href: "/services/investment" },
        { name: "Tourism", href: "/services/medical" },
        { name: "Experiences", href: "/services/experiences" },
        { name: "Humanitarian", href: "/services/humanitarian" },
        { name: "Veteran Support", href: "/services/veteran" }
      ]
    },
    { name: "Journey back to Origin", href: "/journey", hasDropdown: false },
    { name: "KARIBU C.A.R.E.S", href: "/cares", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  const services = [
    {
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      title: "International Relocation",
      description: "Comprehensive support for individuals, families, and veterans relocating across borders with personalized guidance.",
      features: ["Visa & Immigration Support", "Housing Assistance", "Cultural Integration", "Local Network Access"],
      link: "/services/relocation"
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      title: "Global Investment",
      description: "Strategic investment opportunities in real estate, businesses, and sustainable projects worldwide.",
      features: ["Real Estate Ventures", "Business Partnerships", "Due Diligence", "Portfolio Management"],
      link: "/services/investment"
    },
    {
      image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&q=80",
      title: "Cultural Experiences",
      description: "Authentic, culturally grounded travel experiences that connect you deeply with local communities.",
      features: ["Heritage Tours", "Wellness Retreats", "Community Immersion", "Adventure Travel"],
      link: "/services/experiences"
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      title: "Humanitarian Impact",
      description: "Purpose-driven initiatives creating positive change through KARIBU C.A.R.E.S programs.",
      features: ["Community Development", "Education Support", "Health Initiatives", "Diaspora Engagement"],
      link: "/services/cares"
    },
    {
      image: "/images/Kenya-Safari.webp",
      title: "Tourism",
      description: "Experience Kenya's breathtaking safaris, wildlife, and cultural heritage through our curated tourism programs.",
      features: ["Safari Packages", "Wildlife Tours", "Cultural Experiences", "Travel Assistance"],
      link: "/services/medical"
    },
    {
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
      title: "Veteran Support",
      description: "Dedicated pathways for service-connected veterans seeking stability and new opportunities.",
      features: ["Settlement Support", "Career Transition", "Healthcare Access", "Community Building"],
      link: "/services/veterans"
    },
  ];

  const differentiators = [
    { icon: <Globe className="w-6 h-6" />, title: "Global Reach", description: "Worldwide network of partners" },
    { icon: <Shield className="w-6 h-6" />, title: "Trusted Process", description: "Secure, proven methodologies" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Team", description: "Years of relocation experience" },
    { icon: <Heart className="w-6 h-6" />, title: "Personal Care", description: "Tailored to your unique needs" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "End-to-End", description: "Complete support throughout" },
  ];

  const processSteps = [
    { number: "01", title: "Discovery", description: "We understand your goals, timeline, and requirements through comprehensive consultation." },
    { number: "02", title: "Planning", description: "Our experts create a customized roadmap tailored to your specific relocation or investment needs." },
    { number: "03", title: "Execution", description: "We handle all logistics while you focus on your transition, ensuring seamless delivery." },
  ];

  const clientTypes = [
    { icon: <Building2 className="w-8 h-8" />, title: "Corporate Clients", description: "Employer-sponsored relocations" },
    { icon: <Globe className="w-8 h-8" />, title: "Global Diaspora", description: "Returning to Kenya or relocating from abroad" },
    { icon: <Heart className="w-8 h-8" />, title: "Families", description: "Seeking better opportunities" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Investors", description: "Global investment opportunities" },
    { icon: <Plane className="w-8 h-8" />, title: "Travelers", description: "Cultural experiences seekers" },
    { icon: <BadgeCheck className="w-8 h-8" />, title: "Veterans", description: "Service-connected individuals" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael K.",
      location: "Toronto to Nairobi",
      rating: 5,
      text: "Karibu Heritage delivered one of the best relocation experiences we've ever had. From the initial inquiry to the final day of our move to Kenya, their professionalism, attention to detail, and genuine passion for helping families were clear. The process felt thoughtfully curated.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
    },
    {
      id: 2,
      name: "James Mwangi",
      location: "London to Mombasa",
      rating: 5,
      text: "Outstanding service! The team handled every aspect of my relocation to Kenya with precision. From visa processing to finding accommodation in Mombasa, they made what seemed impossible absolutely seamless. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
      id: 3,
      name: "The Ochieng Family",
      location: "Sydney to Kisumu",
      rating: 5,
      text: "Moving our entire family to Kenya felt overwhelming until we found Karibu Heritage. They guided us through every step with patience and expertise. The cultural integration support was invaluable for our children settling in Kisumu.",
      image: "https://images.unsplash.com/photo-1542596594-649edbc13630?w=200&q=80"
    },
    {
      id: 4,
      name: "Dr. Amina Hassan",
      location: "Tourism in Kenya",
      rating: 5,
      text: "The tourism program to Kenya exceeded my expectations. From safari planning to wildlife encounters, everything was handled with utmost care. Karibu Heritage truly understands tourism in Kenya.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <>
      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-slate-900 flex items-center justify-center transition-opacity duration-500">
          <div className="flex items-center gap-1">
            <div className="w-2 h-8 bg-emerald-500 animate-[bounce_1s_infinite_0ms]" />
            <div className="w-2 h-8 bg-emerald-500 animate-[bounce_1s_infinite_200ms]" />
            <div className="w-2 h-8 bg-emerald-500 animate-[bounce_1s_infinite_400ms]" />
          </div>
        </div>
      )}
      <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img 
                src="/images/karf-.png" 
                alt="Karibu Heritage" 
                className="h-12 w-auto"
              />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                    if (item.hasDropdown) {
                      setActiveDropdown(item.name);
                    }
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 600);
                  }}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-white/90 hover:text-emerald-400 font-medium transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {/* Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-56 bg-emerald-800 rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 border border-emerald-700"
                      onMouseEnter={() => {
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current);
                          dropdownTimeoutRef.current = null;
                        }
                      }}
                      onMouseLeave={() => {
                        setActiveDropdown(null);
                      }}
                    >
                      {item.dropdownItems?.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-emerald-700 transition-colors"
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              
              <button
                className="lg:hidden p-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/90 hover:text-emerald-400 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        {/* Background Slideshow with Ken Burns Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 animate-kenBurns">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
              </div>
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Animated Title */}
              <div className="space-y-3">
                <div className="overflow-hidden">
                  <h1 
                    key={`title-${currentSlide}`}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-in slide-in-from-bottom-4 duration-700 font-[family-name:var(--font-libre)] leading-tight"
                  >
                    {heroSlides[currentSlide].title}
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h2 
                    key={`subtitle-${currentSlide}`}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-in slide-in-from-bottom-4 duration-700 delay-100 font-[family-name:var(--font-libre)] leading-tight"
                  >
                    {heroSlides[currentSlide].subtitle}
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <h2 
                    key={`desc-${currentSlide}`}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-400 animate-in slide-in-from-bottom-4 duration-700 delay-200 font-[family-name:var(--font-libre)] leading-tight"
                  >
                    {heroSlides[currentSlide].description}
                  </h2>
                </div>
              </div>

              {/* Divider */}
              <div className="w-24 h-1 bg-emerald-500 rounded-full" />

              {/* Description */}
              <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
                Trusted relocation and investment support for Americans and Europeans moving to Kenya.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <Button 
                    size="lg" 
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-emerald-900/25 transition-all hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5"
                  >
                    Start Your Relocation Plan
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300 px-8 py-6 text-base rounded-full backdrop-blur-sm font-semibold"
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Book a Free Consultation
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-libre)]">500+</div>
                  <div className="text-sm text-white/60">Families Relocated</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-libre)]">15+</div>
                  <div className="text-sm text-white/60">Countries</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-libre)]">98%</div>
                  <div className="text-sm text-white/60">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Slider Navigation */}
            <div className="hidden lg:flex flex-col items-end gap-4">
              {/* Slide Indicators */}
              <div className="flex flex-col gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-emerald-500 w-8" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side Navigation Arrows */}
        <div className="absolute right-4 md:right-8 bottom-24 flex flex-row gap-3 z-20">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section - Simplified Split Layout */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="/images/zebra.jpg"
                alt="African family at airport with luggage"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-emerald-600 leading-tight"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.12
                    }
                  }
                }}
              >
                {"Investigate. Relocate to Kenya. Invest & Tourism".split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20, rotateX: -90 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        rotateX: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.2, 0.65, 0.3, 0.9]
                        }
                      }
                    }}
                    className="inline-block mr-2 origin-bottom"
                    style={{ perspective: "1000px" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
              
              <p className="text-slate-600 leading-relaxed">
                Karibu Heritage is a relocation, tourism, and global services company specializing in helping individuals, families, veterans, and global clients relocate to Kenya. We provide comprehensive support for navigating life in Kenya, safari experiences, investment opportunities, and culturally grounded experiences.
              </p>
              
              <p className="font-medium text-slate-900">We coordinate:</p>
              
              <div className="border-t border-slate-200 pt-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/services/relocation" className="group flex items-center gap-2 cursor-pointer">
                    <ChevronRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
                    <span className="text-slate-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all group-hover:after:w-full">Relocation to Kenya & Integration</span>
                  </Link>
                  <Link href="/services/medical" className="group flex items-center gap-2 cursor-pointer">
                    <ChevronRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
                    <span className="text-slate-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all group-hover:after:w-full">Tourism</span>
                  </Link>
                  <Link href="/services/experiences" className="group flex items-center gap-2 cursor-pointer">
                    <ChevronRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
                    <span className="text-slate-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all group-hover:after:w-full">Customized Experiences</span>
                  </Link>
                  <Link href="/services/humanitarian" className="group flex items-center gap-2 cursor-pointer">
                    <ChevronRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
                    <span className="text-slate-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all group-hover:after:w-full">Humanitarian & Impact</span>
                  </Link>
                  <Link href="/services/investment" className="group flex items-center gap-2 cursor-pointer">
                    <ChevronRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
                    <span className="text-slate-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all group-hover:after:w-full">Investment Opportunities</span>
                  </Link>
                  <Link href="/services/veteran" className="group flex items-center gap-2 cursor-pointer">
                    <ChevronRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
                    <span className="text-slate-700 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all group-hover:after:w-full">Veteran Transition</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Karibu Heritage Section */}
      <section id="about" className="py-24 mb-12 bg-slate-50 relative overflow-hidden">
        {/* Background for glassmorphism effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Karibu Heritage for Kenya Relocation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional guidance backed by global expertise and deep local Kenyan knowledge for your successful relocation to Kenya.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {differentiators.map((item, index) => (
              <Card 
                key={index} 
                className="text-center border-white/50 bg-white/60 backdrop-blur-md hover:bg-white/80 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-100/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Counter with Split Layout */}
      <section id="process" className="relative">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left - Image */}
          <div className="relative h-[400px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&q=80"
              alt="Tourists enjoying Kenya safari experience"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right - Content with Emerald Background */}
          <div className="bg-emerald-900 text-white flex items-center">
            <div className="px-8 py-16 lg:px-16 lg:py-24 max-w-xl">
              {/* Animated Counter */}
              <div ref={countRef} className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl font-bold text-white">{count}</span>
                  <span className="text-4xl md:text-5xl font-bold text-emerald-400">+</span>
                  <span className="text-sm uppercase tracking-widest text-emerald-300 ml-4 font-medium">Happy<br/>Traveler</span>
                </div>
                <div className="w-full h-px bg-emerald-700/50 mt-6" />
              </div>
              
              {/* Label */}
              <p className="text-emerald-400 text-xs uppercase tracking-[0.3em] mb-4 font-medium">
                Welcome to Karibu Heritage
              </p>
              
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Supporting individuals, families, veterans, and global clients relocating to Kenya for life, healthcare, and investment
              </h2>
              
              {/* Description */}
              <p className="text-emerald-100/80 text-base mb-8 leading-relaxed">
                Through structured travel programs, relocation guidance to Kenya, investment insight, and tourism support. Karibu Heritage helps individuals and families make informed, confident decisions when relocating to Kenya.
              </p>
              
              {/* Button */}
              <Link href="/contact">
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 rounded-full text-base font-medium transition-all"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Help Relocate to Kenya</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We support diverse clients navigating their relocation to Kenya with professionalism and cultural understanding.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-emerald-600/20 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                  {client.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{client.title}</h3>
                  <p className="text-slate-400 text-sm">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Auto-scrolling Carousel */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                What Our Customers Say?
              </h2>
              <p className="text-sm text-slate-600 font-medium">
                More than 99% customer satisfaction is our success.
              </p>
              <div className="w-16 h-0.5 bg-emerald-500" />
              
              {/* Auto-rotating Testimonial Text */}
              <div className="relative min-h-[200px]">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`transition-all duration-700 ${
                      index === currentTestimonial 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 absolute top-0 left-0 translate-x-4'
                    }`}
                  >
                    <div className="text-5xl text-emerald-300 font-serif mb-4">"</div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-slate-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"
                alt="Happy travelers enjoying Kenya resort"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Slide indicators at bottom - for text rotation reference */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-emerald-500 w-6' 
                        : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Contact Karibu Heritage
              </h2>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-slate-900 mb-4">Ready to Relocate to Kenya?</h3>
                <p className="text-slate-600 mb-4">
                  Karibu Heritage is your trusted partner for relocation to Kenya, investment, and travel experiences.
                </p>
                <p className="text-sm text-slate-600">
                  Schedule a consultation to discuss your move to Kenya and your unique needs.
                </p>
              </div>

              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Us</p>
                    <p className="font-bold text-slate-900">+254141119444</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email Us</p>
                    <p className="font-bold text-slate-900">info@karibuheritage.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-bold text-slate-900">Westlands, Nairobi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Schedule Your Consultation</h3>
              <p className="text-slate-600 mb-6">
                Start your journey to Kenya. Book a personalized consultation with our experts for your relocation to Kenya.
              </p>
              
              {/* Consultation Dialog */}
              <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
                <Button 
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-6 text-lg"
                >
                  Book Consultation
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <DialogContent className="sm:max-w-md bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-emerald-900">Book Your Consultation</DialogTitle>
                    <DialogDescription className="text-slate-600">
                      Fill in your details and we'll get back to you within 24 hours.
                    </DialogDescription>
                  </DialogHeader>
                  <form action="https://formspree.io/f/xlgpbgqv" method="POST" className="space-y-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="+254..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Service Interest</label>
                      <select className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white">
                        <option value="">Select a service...</option>
                        <option value="relocation">International Relocation</option>
                        <option value="investment">Global Investment</option>
                        <option value="experiences">Cultural Experiences</option>
                        <option value="medical">Tourism</option>
                        <option value="veteran">Veteran Support</option>
                        <option value="cares">KARIBU C.A.R.E.S</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Message</label>
                      <textarea 
                        rows={3}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                    <DialogFooter>
                      <Button 
                        type="submit" 
                        className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3"
                      >
                        Submit Request
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              
              <p className="text-sm text-slate-500 mt-4 text-center">
                Free initial consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/News Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">READ OUR BLOG</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              News & Insights
            </h2>
            <p className="text-lg text-slate-600">
              Stay updated with the latest in global living and relocation to Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/essential-tips-relocating-kenya">
              <Card className="overflow-hidden border-slate-200 group cursor-pointer h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80" 
                    alt="Kenya relocation tips"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 border-emerald-200 text-emerald-700">Relocation</Badge>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    10 Essential Tips for Relocating to Kenya
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    From visa requirements to finding the perfect neighborhood, discover everything you need to know.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog/kenya-tourism-destination">
              <Card className="overflow-hidden border-slate-200 group cursor-pointer h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/Kenya-Safari.webp" 
                    alt="Tourism in Kenya"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 border-emerald-200 text-emerald-700">Tourism</Badge>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Why Kenya is Becoming a Top Tourism Destination
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Discover Kenya's stunning wildlife, national parks, and safari experiences in breathtaking settings.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>6 min read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog/investment-opportunities-kenya">
              <Card className="overflow-hidden border-slate-200 group cursor-pointer h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80" 
                    alt="Investment opportunities in Kenya"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 border-emerald-200 text-emerald-700">Investment</Badge>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Investment Opportunities in Kenya's Growing Economy
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Discover the sectors driving Kenya's economic growth and investment potential.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>10 min read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="px-8 py-3 rounded-full border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowSuccessPopup(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform animate-in zoom-in-95 fade-in duration-300">
            {/* Animated Checkmark Circle */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
                    <svg 
                      className="w-10 h-10 text-white animate-in slide-in-from-bottom-2 duration-500 delay-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={3} 
                        d="M5 13l4 4L19 7" 
                        className="animate-in stroke-in duration-700 delay-300"
                        style={{
                          strokeDasharray: 24,
                          strokeDashoffset: 0,
                          animation: 'checkmark 0.5s ease-in-out 0.3s forwards'
                        }}
                      />
                    </svg>
                  </div>
                </div>
                {/* Sparkle decorations */}
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
                <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-emerald-400 animate-pulse delay-150" />
              </div>
            </div>
            
            {/* Success Message */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 animate-in slide-in-from-bottom duration-500 delay-100">
                Request Submitted!
              </h3>
              <p className="text-slate-600 mb-6 animate-in slide-in-from-bottom duration-500 delay-200">
                Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
              </p>
              
              {/* Progress Bar */}
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-5000 ease-linear"
                  style={{ 
                    width: '100%',
                    animation: 'progress 5s linear forwards'
                  }}
                />
              </div>
              
              {/* Close Button */}
              <Button 
                onClick={() => setShowSuccessPopup(false)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full transition-all duration-300 animate-in slide-in-from-bottom duration-500 delay-300"
              >
                Got it, thanks!
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
    </>
  );
}
