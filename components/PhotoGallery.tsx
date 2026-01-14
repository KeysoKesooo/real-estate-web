"use client";
import React, { useState, useEffect } from 'react';

// Define the shape of your image data
interface Photo {
  src: string;
  title: string;
}

interface GalleryItemProps {
  img: Photo;
  height: string;
}

const PhotoGallery: React.FC = () => {
  const baseImages: Photo[] = [
    { src: "house1.jpg", title: "Golden Hour Ridge" },
    { src: "house2.jpg", title: "The Painted Desert Villa" },
    { src: "house3.jpg", title: "High-Desert Zen" },
    { src: "house4.jpg", title: "Sun-Drenched Veranda" },
    { src: "house5.jpg", title: "Sage & Stone Modern" },
    { src: "house6.jpg", title: "Desert Bloom Manor" },
    { src: "house7.jpg", title: "Amber Horizon Estate" },
    { src: "house8.jpg", title: "The Obsidian Suite" },
    { src: "house9.jpg", title: "Canyon Light Gallery" },
    { src: "house10.jpg", title: "Pahrump Sands Oasis" },
    { src: "house11.jpg", title: "Dusty Rose Terrace" },
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

  const [shuffledImages, setShuffledImages] = useState<Photo[]>([]);
  
  // Responsive height classes for masonry effect
  const heights: string[] = [
    "h-48 md:h-64", 
    "h-64 md:h-96", 
    "h-56 md:h-72", 
    "h-60 md:h-80"
  ];

  useEffect(() => {
    const shuffle = [...baseImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffle);
  }, []);

  if (shuffledImages.length === 0) return null;

  return (
    <section id="gallery" className="scroll-mt-24 py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
          The Signature <span className="italic text-blue-600">Selection</span>
        </h2>
        <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">
          Curated for Pahrump Valley Living
        </p>
      </div>

      {/* MOBILE: h-auto (static grid) 
          DESKTOP: md:h-[800px] (scrolling stream) 
      */}
      <div className="relative h-auto md:h-[800px] w-full md:overflow-hidden bg-white px-4 md:px-0">
        
        {/* MOBILE: 2-column grid 
            DESKTOP: 4-column animated flex row 
        */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-6 md:animate-gallery-stream md:hover:[animation-play-state:paused] md:px-4">
          
          {[...Array(4)].map((_, colIndex) => {
            const colImages = shuffledImages.slice(colIndex * 5, (colIndex + 1) * 5);
            
            return (
              <div 
                key={colIndex} 
                className={`flex flex-col gap-4 md:gap-6 flex-1 ${colIndex > 1 ? 'hidden md:flex' : 'flex'}`}
              >
                {/* Standard image set */}
                {colImages.map((img, imgIndex) => (
                  <GalleryItem 
                    key={`${colIndex}-${imgIndex}`} 
                    img={img} 
                    height={heights[(colIndex + imgIndex) % heights.length]} 
                  />
                ))}

                {/* Duplicated set for infinite loop - hidden on mobile */}
                <div className="hidden md:flex flex-col gap-4 md:gap-6">
                   {colImages.map((img, imgIndex) => (
                    <GalleryItem 
                        key={`${colIndex}-${imgIndex}-dup`} 
                        img={img} 
                        height={heights[(colIndex + imgIndex) % heights.length]} 
                    />
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Masking gradients - tightened for less coverage */}
        <div className="absolute -top-px left-0 w-full h-12 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />

        <div className="absolute -bottom-px left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
};

const GalleryItem: React.FC<GalleryItemProps> = ({ img, height }) => (
    <div className={`group relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer shadow-sm ${height}`}>
      <img 
        src={`${img.src}?auto=format&fit=crop&w=600`} 
        alt={img.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
           <p className="text-white font-serif italic text-lg md:text-2xl mb-1 md:mb-2">{img.title}</p>
           <div className="w-8 h-px bg-blue-500 mx-auto mb-3"></div>
           <span className="text-white/80 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">View Portfolio</span>
        </div>
      </div>
    </div>
);

export default PhotoGallery;