"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo / Brand Name */}
          <div className="mb-8">
            <h2 className="text-2xl font-serif tracking-tighter text-slate-900 leading-none">
              MARCI METZGER
            </h2>
            <div className="flex items-center justify-center">
              <div className="h-[1px] bg-slate-900 w-12"></div>
              <span className="px-2 font-light italic text-xl lowercase font-serif">Homes</span>
              <div className="h-[1px] bg-slate-900 w-12"></div>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            {['Home', 'Listings', 'Services', 'About', 'Let\'s Move'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace("'", "").replace(" ", "")}`}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Small Social Row */}
          <div className="flex gap-6 mb-12 text-slate-400">
            <a href="https://www.facebook.com/MarciHomes/" className="hover:text-blue-600 transition-colors"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/marciandlauren_nvrealtors/" className="hover:text-blue-600 transition-colors"><Instagram size={18} /></a>
            <a href="https://www.linkedin.com/in/marci-metzger-30642496/" className="hover:text-blue-600 transition-colors"><Linkedin size={18} /></a>
            <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" className="hover:text-blue-600 transition-colors"><Search size={18} /></a>
          </div>

          {/* Copyright */}
          <div className="w-full pt-8 border-t border-slate-50">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-slate-400 font-medium">
              Copyright © 2026 <span className="text-slate-900 font-bold">Marci METZGER Homes</span> - All Rights Reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;