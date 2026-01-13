"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';

const OfficeMap = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=3190+HW-160+Suite+F+Pahrump+Nevada+89048";
  
  return (
    <div className="w-full h-[300px] rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner">
      <iframe
        title="Marci Metzger Office Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.2255734268684!2d-115.986872!3d36.210609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c939a26798030f%3A0x5c735165e0f9b39a!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
      ></iframe>
      
      <div className="absolute bottom-4 right-4 z-10">
        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-xs font-bold shadow-xl border border-slate-100 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 group"
        >
          Open in Maps
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default OfficeMap;