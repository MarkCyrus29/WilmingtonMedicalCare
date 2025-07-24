import Card from "@/components/ui/Card";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import Image from "next/image";
import CallBanner from "@/components/ui/CallBanner";
import HeroButtons from "@/components/ui/HeroButtons";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className=" overflow-hidden h-[calc(100vh-100px)] w-screen flex items-center justify-center">
        <div className="h-full w-full relative">
          <HeroSlideshow
            images={[
              "/images/home/slideshow-images/hero1.jpg",
              "/images/home/slideshow-images/hero2.jpg",
              "/images/home/slideshow-images/hero3.jpg",
              "/images/home/slideshow-images/hero4.jpg",
              "/images/home/slideshow-images/hero5.jpg",
            ]}
          />

          {/* Text */}
          <div className="absolute z-30 max-w-2xl text-white left-6 right-6 top-1/2 -translate-y-1/2 md:left-24 md:right-auto text-center md:text-left">
            <h1 className="!text-white text-3xl sm:text-4xl md:text-5xl mb-4">
              Welcome to Wilmington
            </h1>
            <p className="!text-white/80 text-base sm:text-lg">
              Compassionate medical care designed for you.
            </p>
          </div>

          {/* <div className="absolute z-30 bottom-16 w-full px-6 flex flex-col items-center gap-4 md:flex-row md:left-18 md:bottom-32 md:gap-8 md:items-start">
            <FormModalButton
              buttonText="Pre-register"
              title="Pre-register"
              src="https://wmh.insynchcs.com/PatientRegistration/APIPatientRegistration?practiceID=v90n4IZfFGm2f9XLoBqmMg=="
            />
            <FormModalButton
              buttonText="Request an Appointment"
              title="Request an Appointment"
              src="https://wmh.insynchcs.com/APIAppointmentRequest/Index?practiceID=v90n4IZfFGm2f9XLoBqmMg=="
            />
          </div> */}
          <HeroButtons />
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-10">
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/home/slideshow-images/hero1.jpg"}
            alt={"Introduction Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="max-w-3xl mx-auto md:mx-0 text-lg leading-relaxed text-gray-700">
            Wilmington Medical Care’s mission is to create more access to care
            to help you and your community. We offer health and behavioral
            health services to help care for those who are struggling with
            chronic illnesses, wellness checks, medical conditions, and mental
            health illnesses.
          </p>
          <p className="max-w-3xl mx-auto md:mx-0 mt-6 text-lg leading-relaxed text-gray-700">
            Our goal is to achieve both physical and mental stability to enhance
            the overall quality of your life. With our diverse team of
            providers, we work to address your concerns and help ensure that you
            are provided with the proper care and resources to reach your goals.
          </p>
        </div>
      </section>

      <section className="w-full py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          Our Approach to Medical Care
        </h2>
        <div className="flex flex-col md:flex-row md:items-stretch justify-center items-center gap-10 px-4 sm:px-6 md:px-12 lg:px-24">
          <Card
            title="Medical Care"
            img="/images/home/mental-health.jpg"
            desc="Primary care is the first point of contact for your general healthcare needs. We provide you with basic medical services, preventative care, managing common illnesses, and chronic conditions. "
          />
          <Card
            title="Behavioral Medicine"
            img="/images/home/integrated-care.jpg"
            desc="Behavioral medicine is a branch of medicine that specializes in diagnosing, treating, and managing mental health disorders through medication and other interventions."
          />
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="w-screen h-auto flex flex-col pt-12 pb-24 items-center">
        <h2 className="pb-8">Why Choose Us?</h2>
        <video
          src="/videos/introductionVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-[75%] h-auto rounded-lg shadow-lg border border-primary/80"
        ></video>
      </section>

      {/* CTA SECTION */}
      <CallBanner />
    </>
  );
}
