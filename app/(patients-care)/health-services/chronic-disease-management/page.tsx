import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import { Stethoscope, Heart, Users } from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import Image from "next/image";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/health-services/chronic-disease-management (1).jpg",
            "/images/health-services/chronic-disease-management (2).jpg",
            "/images/health-services/chronic-disease-management (3).jpg",
            "/images/health-services/chronic-disease-management (4).jpg",
            "/images/health-services/chronic-disease-management (5).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Primary Care Services
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Chronic Disease Management
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Stethoscope className="w-8 h-8 text-primary" />
            <h2 className="text-center">Chronic Disease Management</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            As the first point of contact for your personal care, we focus on
            health promotion, disease prevention, health maintenance,
            counseling, education, diagnosis, and treatment of acute and chronic
            illnesses in our patient office. The role of our primary care
            providers is to expand your health education, screen and examine
            your body to detect medical illnesses, and if applicable, coordinate
            treatment to help you manage those illnesses.
          </p>
        </div>
      </section>

      {/* ─── Disease Management Section ─── */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-4">
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/health-services/chronic-disease-management (6).jpg"}
            alt={"Introduction Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-center">Disease Management</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Our providers will help you develop a plan designed to improve your
            quality of life while managing your chronic disease. Your provider
            will remain in contact with you and provide education and support
            during the process to enhance your capacity to manage your disease.
            One of the primary goals of your provider will be to motivate and
            empower you to remain in compliance, which in turn may positively
            affect the outcome of your treatment.
          </p>
        </div>
      </section>

      {/* ─── Health System Optimization Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-center">Health System Optimization</h2>
          </div>
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Quality of Life */}
              <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500 text-center">
                <h3 className="text-xl font-semibold !text-blue-900 mb-3">
                  Quality of Life
                </h3>
                <p className="!text-blue-700 text-base leading-relaxed">
                  {`Improving our patient’s experience`}
                </p>
              </div>

              {/* Community */}
              <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500 text-center">
                <h3 className="text-xl font-semibold !text-green-900 mb-3">
                  Community
                </h3>
                <p className="!text-green-700 text-base leading-relaxed">
                  Improving the health of our residents
                </p>
              </div>

              {/* Affordability */}
              <div className="bg-purple-50 p-6 rounded-xl border-t-4 border-purple-500 text-center">
                <h3 className="text-xl font-semibold !text-purple-900 mb-3">
                  Affordability
                </h3>
                <p className="!text-purple-700 text-base leading-relaxed">
                  Reducing the cost of health care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other related services:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Wellness Exams",
                href: "/health-services/wellness-exams",
              },
              {
                title: "Men's & Women's Health",
                href: "/health-services/mens-womens-health",
              },
              {
                title: "Medication Management",
                href: "/medication-management",
              },
              {
                title: "Adult Therapy",
                href: "https://wilmingtonmentalhealth.netlify.app/mental-health/adult-therapy",
              },
              {
                title: "Couples Therapy",
                href: "https://wilmingtonmentalhealth.netlify.app/mental-health/couples-therapy",
              },
              {
                title: "Clinical Hypnosis",
                href: "https://wilmingtonmentalhealth.netlify.app/other-services/clinical-hypnosis",
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
