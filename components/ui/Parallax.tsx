"use client";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { memo } from "react";

function ImageParallax({
  src,
  index,
  currentIndex,
  alt,
}: {
  src: string;
  index?: number;
  currentIndex?: number;
  alt: string;
}) {
  return (
    <Parallax speed={-30} className="absolute inset-0 top-7 -z-10" key={index}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="eager"
        className={`object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
          index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-20 " />
    </Parallax>
  );
}

export default memo(ImageParallax);
