"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between md:justify-center relative">
          
          {/* Mobile Menu Button - Left Aligned on Mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center gap-2 text-slate-900 z-[110]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Left Side Links (Desktop Only) */}
          <div className="hidden md:flex space-x-8 items-center justify-end flex-initial">
            <Link href="#home" className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-slate-600 hover:text-blue-600 transition whitespace-nowrap">
              Home
            </Link>
            <Link href="#listings" className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-slate-600 hover:text-blue-600 transition whitespace-nowrap">
              Listings
            </Link>
          </div>

          {/* Center Logo - Remains centered on all screens */}
          <div className="flex-none text-center mx-0 md:mx-16 lg:mx-24">
            <Link href="#letsmove" onClick={() => setIsOpen(false)} className="group inline-block">
              <h1 className="text-xl md:text-3xl font-serif tracking-tight text-slate-900 leading-none">
                MARCI METZGER
              </h1>
              <div className="flex items-center justify-center mt-1">
                <div className="h-[1px] bg-slate-900 flex-grow"></div>
                <span className="px-3 font-light italic text-lg md:text-xl lowercase font-serif leading-none">Homes</span>
                <div className="h-[1px] bg-slate-900 flex-grow"></div>
              </div>
            </Link>
          </div>

          {/* Right Side Links (Desktop Only) */}
          <div className="hidden md:flex space-x-8 items-center justify-start flex-initial">
            <Link href="#gallery" className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-slate-600 hover:text-blue-600 transition whitespace-nowrap">
              Showcase
            </Link>
            <Link href="#about" className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-slate-600 hover:text-blue-600 transition whitespace-nowrap">
              Contact
            </Link>
          </div>

          {/* Placeholder for Mobile Symmetry */}
          <div className="w-6 md:hidden"></div>
        </div>
      </nav>

      {/* New Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-white transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <p className="text-[10px] uppercase tracking-[0.4em] text-blue-600 font-bold mb-4">Explore</p>
          
          {[
            { name: "Home", href: "#home" },
            { name: "Listing", href: "#listings" },
            { name: "Showcase", href: "#gallery" },
            { name: "Contact", href: "#about" }
          ].map((link, i) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`text-4xl font-serif text-slate-900 hover:italic transition-all transform duration-700 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-12 text-center">
            <div className="w-12 h-px bg-slate-200 mx-auto mb-6"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Pahrump, Nevada</p>
            <p className="text-sm font-serif italic text-slate-900 mt-1">Broker since 1995</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;