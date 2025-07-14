import HeroSlideshow from "@/components/ui/HeroSlideshow";
import Image from "next/image";
import CallBanner from "@/components/ui/CallBanner";
import { Stethoscope } from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/health-services/minor-surgeries (1).jpg",
            "/images/health-services/minor-surgeries (2).jpg",
            "/images/health-services/minor-surgeries (3).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Health Service
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Minor Surgeries
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="max-w-7xl mx-auto py-26 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/health-services/minor-surgeries (4).jpg"
                alt="Wilmington Health Services"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-center md:text-left space-y-6">
            <h2>Minor Surgeries</h2>
            <p className="mt-6 leading-relaxed ">
              Minor surgical procedures can be performed safely and quickly with
              few or no complications without the need to apply general
              anaesthesia. We conduct a wide variety of minor surgical
              procedures at our outpatient office.
            </p>
            <p className="mt-4 leading-relaxed ">
              Our highly trained providers can treat minor conditions that
              require minimally invasive techniques, such as wound care, abscess
              drainage, laceration repair, skin tag removal, ingrown toenail
              removal, and wart removal. We will assess your needs and begin
              your treatment when appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Procedures We Offer Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center pt-0 py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Stethoscope className="w-8 h-8 text-primary" />
            <h2>What We Can Do</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            We can prescribe antibiotics and schedule a recheck visit to ensure
            that you are healing. Proper wound care is necessary to help prevent
            infection and promote healing of the skin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Wound Care",
                description:
                  "Proper wound care is necessary to help prevent infection and promote healing of the skin. ",
                icon: "🩹",
                color: "blue",
              },
              {
                title: "Abscess Drainage",
                description:
                  "Removing the infection of an abscess and draining the pus may need numbing and sterilizing the infected area. ",
                icon: "💧",
                color: "green",
              },
              {
                title: "Laceration Repair",
                description:
                  "A cut may require gluing or bonding the skin together to promote healing.",
                icon: "🧵",
                color: "purple",
              },
              {
                title: "Skin Tag Removal",
                description:
                  "We offer skin tag removal if you have a small piece of skin hanging off your skin that bothers you. ",
                icon: "✂️",
                color: "orange",
              },
              {
                title: "Ingrown Toenail Removal",
                description:
                  "Ingrown toenails produce inflammation, pain, and infection may need to be removed to restore the health of the area. ",
                icon: "🦶",
                color: "red",
              },
              {
                title: "Wart Removal",
                description:
                  "We will identify the type of wart you may have and recommend topical treatment or refer you to cryotherapy.",
                icon: "🔬",
                color: "teal",
              },
            ].map((procedure, i) => {
              const colorClasses = {
                blue: "border-blue-500 bg-blue-50 hover:bg-blue-100",
                green: "border-green-500 bg-green-50 hover:bg-green-100",
                purple: "border-purple-500 bg-purple-50 hover:bg-purple-100",
                orange: "border-orange-500 bg-orange-50 hover:bg-orange-100",
                red: "border-red-500 bg-red-50 hover:bg-red-100",
                teal: "border-teal-500 bg-teal-50 hover:bg-teal-100",
              };
              return (
                <div
                  key={i}
                  className={`p-6 rounded-xl border-t-4 transition-colors ${
                    colorClasses[procedure.color as keyof typeof colorClasses]
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{procedure.icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      {procedure.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {procedure.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
            <p className="text-blue-700 text-lg">
              Some procedures can be performed in our office and others can be
              done at home, such as applying topical antibiotics, cleaning, and
              dressing a wound. We will also schedule a follow-up visit or
              routine visits to check on your recovery.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other Services Offered at Wilmington Mental Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Wellness Exams",
                href: "/health-services/wellness-exams",
              },
              {
                title: "Medication Management",
                href: "/health-services/medication-management",
              },
              {
                title: "Men's & Women's Health",
                href: "/health-services/mens-womens-health",
              },
              {
                title: "Adult Therapy",
                href: "/mental-health/adult-therapy",
              },
              {
                title: "Couples Counseling",
                href: "/mental-health/couples-counseling",
              },
              {
                title: "Group Therapy",
                href: "/mental-health/group-therapy",
              },
            ].map((service, i) => (
              <RelatedServices
                href={service.href}
                title={service.title}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CallBanner />
    </main>
  );
}

export default page;
