"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

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
      { name: "All Services", href: "/services" },
      { name: "Relocation", href: "/services/relocation" },
      { name: "Investment", href: "/services/investment" },
      { name: "Medical Tourism", href: "/services/medical" },
      { name: "Experiences", href: "/services/experiences" },
      { name: "Humanitarian", href: "/services/humanitarian" },
      { name: "Veteran Support", href: "/services/veteran" }
    ]
  },
  { name: "Journey back to Origin", href: "/journey", hasDropdown: false },
  { name: "KARIBU C.A.R.E.S", href: "/cares", hasDropdown: false },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

// Searchable content
const searchableContent = [
  { title: "Home", href: "/", description: "Welcome to Karibu Heritage" },
  { title: "Our Story", href: "/about/story", description: "Learn about our journey and mission" },
  { title: "Team", href: "/about/team", description: "Meet the people behind Karibu Heritage" },
  { title: "Mission", href: "/about/mission", description: "Our mission and values" },
  { title: "Services", href: "/services", description: "All our services" },
  { title: "Relocation", href: "/services/relocation", description: "International relocation to Kenya" },
  { title: "Investment", href: "/services/investment", description: "Investment opportunities in Kenya" },
  { title: "Medical Tourism", href: "/services/medical", description: "Medical tourism to Kenya" },
  { title: "Experiences", href: "/services/experiences", description: "Cultural experiences in Kenya" },
  { title: "Humanitarian", href: "/services/humanitarian", description: "Humanitarian support services" },
  { title: "Veteran Support", href: "/services/veteran", description: "Veteran transition services" },
  { title: "Journey back to Origin", href: "/journey", description: "Discover transformative experiences" },
  { title: "KARIBU C.A.R.E.S", href: "/cares", description: "Community Action for Relief, Empowerment & Sustainability" },
  { title: "Careers", href: "/careers", description: "Join our team" },
  { title: "Contact", href: "/contact", description: "Get in touch with us" },
  { title: "Blog", href: "/blog", description: "News and insights" },
  { title: "Privacy Policy", href: "/privacy-policy", description: "Our privacy policy" },
  { title: "Terms of Service", href: "/terms-of-service", description: "Our terms of service" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([]);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [searchQuery]);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/karf-.png" 
              alt="Karibu Heritage" 
              className="h-12 w-auto"
            />
          </Link>
          
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
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white/90 hover:text-emerald-400 font-medium transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
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
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-emerald-700 transition-colors"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button 
              className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={handleSearchClick}
            >
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
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-white/90 hover:text-emerald-400 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdownItems && (
                  <div className="pl-4 space-y-1">
                    {item.dropdownItems.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block text-white/70 hover:text-emerald-400 text-sm py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>

    {isSearchOpen && (
      <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4">
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeSearch}
        />
        <div className="relative w-full max-w-2xl bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 animate-in fade-in zoom-in-95 duration-200">
          {/* Search Header */}
          <div className="flex items-center gap-4 p-4 border-b border-white/10">
            <Search className="w-5 h-5 text-emerald-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for pages, services, or information..."
              className="flex-1 text-lg outline-none bg-transparent text-white placeholder:text-white/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") closeSearch();
              }}
            />
            <button
              onClick={closeSearch}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white/70" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {searchQuery.trim() === "" ? (
              <div className="p-8 text-center text-white/60">
                <Search className="w-12 h-12 mx-auto mb-4 text-emerald-400/50" />
                <p className="text-lg font-medium mb-2 text-white">Start typing to search</p>
                <p className="text-sm">Search for pages, services, or information on our website</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="py-2">
                <p className="px-4 py-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} found
                </p>
                {searchResults.map((result) => (
                  <Link
                    key={result.href}
                    href={result.href}
                    className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 transition-colors group"
                    onClick={closeSearch}
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                        {result.title}
                      </h4>
                      <p className="text-sm text-white/60">{result.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-emerald-400 transition-colors" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-white/60">
                <p className="text-lg font-medium mb-2 text-white">No results found</p>
                <p className="text-sm">Try searching with different keywords</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-white/5 border-t border-white/10 text-xs text-white/50 flex items-center justify-between">
            <span>Press ESC to close</span>
            <span>Karibu Heritage Search</span>
          </div>
        </div>
      </div>
    )}
  </>
);
}
