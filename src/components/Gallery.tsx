"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 1, src: "/images/images (1).jpg", caption: "Field Operations" },
  { id: 2, src: "/images/images.jpg", caption: "Site Inspection" },
  { id: 3, src: "/images/images (1).jpg", caption: "Engineering Works" },
  { id: 4, src: "/images/images.jpg", caption: "Offshore Installation" },
  { id: 5, src: "/images/images (1).jpg", caption: "Technical Survey" },
  { id: 6, src: "/images/images.jpg", caption: "Pipeline Assessment" },
  { id: 7, src: "/images/images (1).jpg", caption: "Equipment Deployment" },
  { id: 8, src: "/images/images.jpg", caption: "Maritime Operations" },
  { id: 9, src: "/images/images (1).jpg", caption: "Safety Inspection" },
  { id: 10, src: "/images/images.jpg", caption: "Project Execution" },
];

const VISIBLE_COUNT = 4;
const AUTO_PLAY_MS = 3000;

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = GALLERY_IMAGES.length;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(goNext, AUTO_PLAY_MS);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isHovered, goNext]);

  const visibleImages = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    const idx = (currentIndex + i) % total;
    return { ...GALLERY_IMAGES[idx], slot: i };
  });

  return (
    <section id="gallery" className="py-20 bg-[#071F3D] overflow-hidden relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #F26A21 0, #F26A21 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F26A21]/20 text-[#F26A21] text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>On-Site Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Works In <span className="text-[#F26A21]">The Field</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            A visual record of our engineering excellence across project sites.
          </p>
        </div>
        <div className="relative px-8" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {visibleImages.map((image, i) => (
              <div key={`${currentIndex}-${i}`} className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-xl cursor-pointer" style={{ animation: "fadeInUp 0.5s ease forwards", animationDelay: `${i * 80}ms`, opacity: 0 }}>
                <Image src={image.src} alt={image.caption} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071F3D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold tracking-wide">{image.caption}</p>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[32px] border-l-[#F26A21] border-b-[32px] border-b-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          <button onClick={goPrev} aria-label="Previous images" className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-[#F26A21] hover:bg-[#D85611] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={goNext} aria-label="Next images" className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-[#F26A21] hover:bg-[#D85611] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          {GALLERY_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} aria-label={`Slide ${i + 1}`} className={`transition-all duration-300 rounded-full ${i === currentIndex ? "w-7 h-2.5 bg-[#F26A21]" : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400"}`} />
          ))}
        </div>
        <div className="mt-4 max-w-xs mx-auto h-0.5 bg-slate-700 rounded-full overflow-hidden">
          {!isHovered && <div className="h-full bg-[#F26A21] rounded-full" style={{ animation: `galleryProgress ${AUTO_PLAY_MS}ms linear infinite` }} />}
        </div>
        <p className="text-center text-[11px] text-slate-500 mt-2 uppercase tracking-wider">
          {isHovered ? "Paused" : "Auto-advancing - Hover to pause"}
        </p>
      </div>
    </section>
  );
}
