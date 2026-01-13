"use client";
import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {
const baseImages = [
  { src: "house1.jpg", title: "Golden Hour Ridge" },
  { src: "house2.jpg", title: "The Painted Desert Villa" },
  { src: "house3.jpg", title: "High-Desert Zen" },
  { src: "house4.jpg", title: "Sun-Drenched Veranda" },
  { src: "house5.jpg", title: "Sage & Stone Modern" },
  { src: "house6.jpg", title: "Desert Bloom Manor" },
  { src: "house7.jpg", title: "Amber Horizon Estate" },
  { src: "house8.jpg", title: "The Obsidian Suite" }, // Great for a dark/modern room
  { src: "house9.jpg", title: "Canyon Light Gallery" },
  { src: "house10.jpg", title: "Pahrump Sands Oasis" },
  { src: "house11.jpg", title: "Dusty Rose Terrace" }, // Referencing Nevada sunsets
  { src: "house12.jpg", title: "Basin & Range View" },
  { src: "house13.jpg", title: "The Copper Veranda" },
  { src: "house14.jpg", title: "Mesa Edge Retreat" },
  { src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09", title: "Cottage Charm" },
  { src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6", title: "Minimalist Loft" },
  { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", title: "Contemporary Zenith" },
  { src: "https://images.unsplash.com/photo-1613977257363-707ba9348227", title: "Architectural Marvel" },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea", title: "Mountain View Terrace" },
  { src: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35", title: "Desert Manor" }
];

  const [shuffledImages, setShuffledImages] = useState<{ src: string; title: string; }[]>([]);
  const heights = ["h-64", "h-96", "h-72", "h-80"];

  useEffect(() => {
    const shuffle = [...baseImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffle);
  }, []);

  if (shuffledImages.length === 0) return null;

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
          The Signature <span className="italic text-blue-600">Selection</span>
        </h2>
        <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">
          Curated for Pahrump Valley Living
        </p>
      </div>
      <div className="relative h-[800px] w-full overflow-hidden border-y border-slate-50">
        <div className="flex gap-6 animate-gallery-stream hover:[animation-play-state:paused] px-4">
          
          {[...Array(4)].map((_, colIndex) => {
            // STEP 1: Give each column its own unique starting point in the array
            // Col 0 gets images 0-5, Col 1 gets 5-10, etc.
            const colImages = shuffledImages.slice(colIndex * 5, (colIndex + 1) * 5);
            
            return (
              <div key={colIndex} className="flex flex-col gap-6 flex-1">
                {/* Double the sliced images for the seamless loop */}
                {[...colImages, ...colImages].map((img, imgIndex) => (
                  <div 
                    key={`${colIndex}-${imgIndex}`} 
                    className={`group relative w-full rounded-[2rem] overflow-hidden cursor-pointer shadow-sm ${heights[(colIndex + imgIndex) % heights.length]}`}
                  >
                    <img 
                      src={`${img.src}?auto=format&fit=crop&w=600`} 
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <p className="text-white font-serif italic text-2xl mb-2">{img.title}</p>
                         <div className="w-8 h-px bg-blue-500 mx-auto mb-3"></div>
                         <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold">View Portfolio</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default PhotoGallery;