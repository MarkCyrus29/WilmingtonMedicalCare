import React from "react";
import Image from "next/image";

function SectionWithImage({
  src,
  alt,
  Sideblock,
  pictureInRightSide = false,
}: {
  src: string;
  alt: string;
  Sideblock: React.ReactNode;
  pictureInRightSide?: boolean;
}) {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {pictureInRightSide ? (
          <>
            <div className="w-full lg:w-1/2 space-y-6">{Sideblock}</div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">{Sideblock}</div>
          </>
        )}
      </div>
    </section>
  );
}

export default SectionWithImage;
