"use client";

import React, { useState, useEffect } from 'react';

export default function MasonryBackground() {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    "https://images.unsplash.com/photo-1416331108676-a22ccb276e35"
  ];

  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffle = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffle);
  }, []);

  if (shuffledImages.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden z-0 opacity-[0.15] pointer-events-none bg-white">
      {/* Container is now static, animation happens on children */}
      <div className="flex gap-6 h-full px-4">
        {[...Array(6)].map((_, colIdx) => {
          const colImages = shuffledImages.slice(colIdx * 3, (colIdx + 1) * 3);
          
          // Determine direction: Even columns move up, Odd columns move down
          const isEven = colIdx % 2 === 0;
          const animationClass = isEven ? "animate-marquee-vertical" : "animate-marquee-vertical-reverse";
          
          return (
            <div 
              key={colIdx} 
              // Animation applied here individually
              className={`flex flex-col gap-6 flex-1 ${animationClass}`}
              style={{ 
                // We add a custom duration so they don't move at the exact same speed
                animationDuration: `${30 + colIdx * 5}s` 
              }}
            >
              {[...colImages, ...colImages, ...colImages].map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  className="w-full aspect-square rounded-[2rem] bg-slate-100 shadow-sm border border-slate-200/50"
                  style={{
                    backgroundImage: `url(${img}?auto=format&fit=crop&w=400)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white" />
    </div>
  );
}