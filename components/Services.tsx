"use client";
import React from 'react';
import { ShieldCheck, Home, BadgeCheck, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Real Estate Done Right",
      desc: "Navigating a property adventure shouldn't be stressful. Whether you're listing a residence or hunting for a new home, our team ensures a seamless, world-class experience from start to finish.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
      icon: <ShieldCheck className="text-blue-600" size={24} />
    },
    {
      title: "Commercial & Residential",
      desc: "From modern mansions to strategic investment properties, we find the right fit at the right price. We live and work in this community—we know exactly where to put your hard-earned dollars.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
      icon: <Home className="text-blue-600" size={24} />
    },
    {
      title: "Rely on Expertise",
      desc: "Affordability, credit, and loan options can be complex. We connect you with elite financial partners to ensure you feel confident, educated, and ready to move every single step of the way.",
      img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800",
      icon: <BadgeCheck className="text-blue-600" size={24} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            Our Professional <span className="italic text-blue-600">Services</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-sm">
                  {service.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
                
                <button className="mt-8 text-xs font-bold uppercase tracking-widest text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all pb-1">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;