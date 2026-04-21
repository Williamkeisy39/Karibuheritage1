"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="/" className="flex items-center mb-4">
              <img 
                src="/images/karf-.png" 
                alt="Karibu Heritage" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-slate-400 text-sm">
              Your trusted partner for relocation to Kenya, investment, and culturally grounded travel experiences in East Africa.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/relocation" className="hover:text-emerald-400 transition-colors">International Relocation</a></li>
              <li><a href="/services/investment" className="hover:text-emerald-400 transition-colors">Global Investment</a></li>
              <li><a href="/services/experiences" className="hover:text-emerald-400 transition-colors">Cultural Experiences</a></li>
              <li><a href="/services/veteran" className="hover:text-emerald-400 transition-colors">Veteran Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about/story" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-emerald-400 transition-colors">Our Process</a></li>
              <li><a href="/blog" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>+254141119444</li>
              <li>info@karibuheritage.com</li>
              <li>Westlands, Nairobi</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Karibu Heritage. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
