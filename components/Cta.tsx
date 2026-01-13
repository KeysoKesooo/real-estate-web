"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
return (

<section 
  id="cta" 
  className="relative bg-[#1A1C1E] py-32 md:py-48 px-6 scroll-mt-24 -mt-10 z-10"
>
  <div className="max-w-4xl mx-auto text-center">
    
    <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">
      Let’s build your <br />
      <span className="text-blue-500 italic">next chapter</span> together.
    </h2>
    
    <p className="text-slate-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto">
      Expert guidance for the modern real estate market. 
      Start your conversation with Marci Metzger today.
    </p>

    <div className="flex justify-center">
      <button className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all flex items-center gap-4 shadow-2xl shadow-blue-900/20">
        Schedule a Consultation
        <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
      </button>
    </div>

  </div>
</section>
  );
};


export default Cta;