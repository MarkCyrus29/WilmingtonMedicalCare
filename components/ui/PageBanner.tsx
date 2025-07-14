import React from "react";
import ImageParallax from "./Parallax";

interface PageBannerProps {
  imageSrc: string;
  alt?: string;
  title: string;
  subtitle?: string;
  height?: string;
  tag?: React.ReactNode;
}

export default function PageBanner({
  imageSrc,
  alt = "",
  title,
  subtitle,
  height = "h-[calc(100vh-100px)]",
  tag,
}: PageBannerProps) {
  return (
    <section className={`relative overflow-hidden w-screen ${height} `}>
      <div className="h-full w-screen relative">
        <ImageParallax src={imageSrc} alt={alt} />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-10">
          <h4 className="!text-background text-lg drop-shadow-2xl">{title}</h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            {subtitle}
          </h1>
          {tag ? tag : <></>}
        </div>
      </div>
    </section>
  );
}
