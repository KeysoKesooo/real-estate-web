"use client";
import React from 'react';

const SponsorBar = () => {
  const logos = [
    { id: 1, src: "/ridge-realty.jpg", alt: "Ridge Realty Group" },
    { id: 2, src: "/eho.jpg", alt: "Equal Housing Opportunity" },
    { id: 3, src: "/realtor.jpg", alt: "Realtor Logo" },
    { id: 4, src: "/pahrump-valley.jpg", alt: "Pahrump Valley" },
  ];

  return (
    <section className="w-full bg-white py-16 border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Subtle Label */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-[1px] bg-slate-100 flex-grow"></div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-semibold whitespace-nowrap">
            Professional Affiliations
          </span>
          <div className="h-[1px] bg-slate-100 flex-grow"></div>
        </div>

        {/* Improved Logo Container */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:gap-x-24 lg:gap-x-32">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.alt}
                // increased height slightly for better visibility
                className="h-10 md:h-14 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SponsorBar;