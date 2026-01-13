"use client";
import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import Counter from "./Counter";

const HeritageStats = () => {
  return (
    <section className="bg-[#1A1C1E] py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Numbers Side - Taking up more space */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-blue-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Broker Since</p>
              <div className="text-6xl md:text-7xl font-serif text-white tracking-tighter">1995</div>
            </div>
            <div>
              <p className="text-blue-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Closed Sales</p>
              <div className="text-6xl md:text-7xl font-serif text-white tracking-tighter">
                $<Counter end={28} />.<Counter end={5} />M
              </div>
            </div>
            <div>
              <p className="text-blue-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Clients Served</p>
              <div className="text-6xl md:text-7xl font-serif text-white tracking-tighter">
                <Counter end={90} suffix="+" />
              </div>
            </div>
          </div>

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden lg:block w-px h-24 bg-white/10"></div>

          {/* Badges Side - Compact & Credible */}
          <div className="flex flex-row lg:flex-col gap-6 lg:w-64">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 transition-colors duration-500">
                <ShieldCheck className="text-blue-500 group-hover:text-white" size={24} />
              </div>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest leading-tight">
                Veteran-Friendly <br />Certified
              </span>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 transition-colors duration-500">
                <Award className="text-blue-500 group-hover:text-white" size={24} />
              </div>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest leading-tight">
                Top Sales <br />Residential Leader
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeritageStats;