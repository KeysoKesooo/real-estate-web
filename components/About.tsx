"use client";
import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Clock,
  Calendar,
  ExternalLink
} from 'lucide-react';
import OfficeMap from './OfficeMap';

const About = () => {
  const socials = [
    { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/MarciHomes/' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/marciandlauren_nvrealtors/' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/marci-metzger-30642496/' },
    { name: 'Yelp', icon: <span className="font-bold text-sm">Y</span>, url: 'https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump' },
  ];

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=3190+HW-160+Suite+F+Pahrump+Nevada+89048";

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: Brand & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">Principal Realtor</h3>
              <h2 className="text-5xl font-serif text-slate-900 leading-tight">
                Marci Metzger <br />
                <span className="italic font-light text-slate-500 text-3xl">The Ridge Realty Group</span>
              </h2>
            </div>

            {/* Profile Photo */}
            <div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 border-8 border-white">
               {/* Replace this URL with Marci's actual photo */}
               <img 
                 src="marci.jpg" 
                 className="w-full h-full object-cover" 
                 alt="Marci Metzger" 
               />
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Contact Card & Map */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-serif text-slate-900 mb-8 flex items-center gap-3">
              Contact & Location
            </h3>
            
            <div className="space-y-6">
              {/* Clickable Phone Link */}
              <a 
                href="tel:2069196886"
                className="flex gap-5 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="text-blue-600 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone size={22} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Phone Number</p>
                  <p className="text-slate-500 text-sm">(206) 919-6886</p>
                </div>
              </a>

                 {/* Clickable Address Link */}
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-5 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="text-blue-600 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin size={22} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Our Office</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    3190 HW-160, Suite F, Pahrump, NV 89048
                  </p>
                </div>
              </a>

              {/* Map Component */}
              <OfficeMap />

              {/* Office Hours Info */}
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-slate-900">
                   <Clock size={20} className="text-blue-600" />
                   <h4 className="font-bold">Standard Office Hours</h4>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-slate-500 text-sm font-medium">Open Daily</span>
                    <span className="text-slate-900 text-sm font-bold">8:00 am – 7:00 pm</span>
                </div>
                <div className="mt-4 flex gap-3 text-slate-500 bg-slate-50 p-4 rounded-xl">
                    <Calendar size={18} className="flex-shrink-0" />
                    <p className="text-xs italic leading-relaxed">
                        Appointments outside office hours available upon request. Just call!
                    </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;