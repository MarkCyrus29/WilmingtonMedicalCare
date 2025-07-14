import React from "react";
import Button from "./Button";

interface CallBannerProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export default function CallBanner({
  title = (
    <>
      We offer <strong>In-Person or Virtual visits.</strong>
    </>
  ),
  subtitle = (
    <>
      Ready to make the first step in your mental health journey?{" "}
      <strong>Call us Today!</strong>
    </>
  ),
  className = "",
}: CallBannerProps) {
  return (
    <section
      className={`w-screen h-full py-14 text-center items-center flex flex-col justify-center bg-primary/65 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] border-t border-t-[rgba(255,255,255,0.18)] ${className}`}
    >
      <h2 className="!font-normal pb-2">{title}</h2>
      <h4 className="!font-normal pb-2">{subtitle}</h4>
      <h3 className="font-bold mt-4 flex md:inline flex-col">
        <a
          href={`tel:9107775575`}
          className="hover:underline transition-opacity hover:opacity-80 !text-background border-2 border-background/45 py-2 px-4 rounded shadow-sm bg-secondary"
        >
          910 - 777 - 5575
        </a>{" "}
        or{" "}
        <a
          target="_blank"
          href={
            "https://wmh.insynchcs.com/APIAppointmentRequest/Index?practiceID=v90n4IZfFGm2f9XLoBqmMg=="
          }
        >
          <Button
            title={"Request an Appointment"}
            className="!text-background border-2 border-background/45 !py-2 !px-4 !rounded !text-[clamp(1.25rem,3vw,2rem)] hover:underline  !shadow-sm "
          />
        </a>
      </h3>
    </section>
  );
}
