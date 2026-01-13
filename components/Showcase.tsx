"use client";
import React from 'react';
import { ArrowRight } from "lucide-react";

export default function Showcase() {
  return (
    <section id="showcase" className="bg-[#F8F9FA] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4">
            The <span className="text-blue-600 italic">Expertise</span> You Deserve.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            Decades of local Pahrump knowledge tailored for your unique real estate journey.
          </p>
        </div>

        {/* Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Sellers Card */}
          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-between min-h-[500px] group transition-all hover:shadow-xl">
            <div>
              <span className="text-blue-600 text-[10px] uppercase font-bold tracking-widest mb-6 block">For Sellers</span>
              <h3 className="text-4xl font-serif text-slate-900 mb-6">
                Don't Just List it... <br />
                <span className="text-blue-600 italic">Get it SOLD.</span>
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                We exhaust every avenue to ensure your property is at the fingertips of every serious buyer.
              </p>
            </div>
            <button className="bg-[#1A1C1E] text-white w-fit px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-blue-600 transition-all">
              List your property <ArrowRight size={20} />
            </button>
          </div>

          {/* Buyers Card */}
          <div className="bg-[#0A5EB0] p-12 md:p-16 rounded-[3rem] text-white flex flex-col justify-between min-h-[500px] group transition-all hover:shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-6 block">For Buyers</span>
              <h3 className="text-4xl font-serif mb-6">
                Your Expert Guide <br />to <span className="italic">Buying.</span>
              </h3>
              <p className="text-blue-50 text-lg leading-relaxed mb-8">
                Market analysis, lifestyle matching, and local contractors on speed dial for your new home.
              </p>
            </div>
            <button className="bg-white text-[#0A5EB0] w-fit px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-blue-50 transition-all relative z-10">
              Start your search <ArrowRight size={20} />
            </button>
            {/* Subtle Design Element */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}