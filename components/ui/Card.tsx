import React from "react";
import Image from "next/image";

function Card({
  title,
  img,
  desc,
  customHeight = "clamp(160px, 18vw, 200px)",
  customWidth = "clamp(360px, 50vw, 600px)",
}: {
  customHeight?: string;
  customWidth?: string;
  title: string;
  img?: string;
  desc: string;
}) {
  return (
    <div
      className="bg-background border border-gray/50 p-8 rounded-2xl shadow-md flex flex-col justify-start items-center transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
      style={{ width: customWidth }}
    >
      {img ? (
        <div
          style={{
            width: "100%",
            height: customHeight,
            position: "relative",
          }}
          className="rounded-xl mb-4 overflow-hidden"
        >
          <Image
            src={img}
            alt={title + " Image"}
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 768px) 450px, 100vw"
            priority
          />
        </div>
      ) : (
        <></>
      )}

      <h3 className="mb-2 text-center">{title}</h3>
      <p className="text-xs text-center flex-grow">{desc}</p>
    </div>
  );
}

export default Card;
