"use client";
import { useEffect, useState } from "react";
import ImageParallax from "./Parallax";
import { memo } from "react";

function HeroSlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden h-[calc(100vh-100px)] w-screen">
      {images.map((src, index) => (
        <ImageParallax
          key={index}
          src={src}
          index={index}
          currentIndex={currentIndex}
          alt={`Slideshow Image ${index ? index + 1 : ""}`}
        />
      ))}
    </section>
  );
}

export default memo(HeroSlideshow);
