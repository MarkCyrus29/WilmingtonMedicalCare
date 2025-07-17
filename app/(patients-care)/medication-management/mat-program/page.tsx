import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import CallBanner from "@/components/ui/CallBanner";
import {
  Pill,
  Shield,
  Heart,
  Users,
  CheckCircle,
  Stethoscope,
} from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import Image from "next/image";

function page() {
  const colors = [
    { border: "border-blue-500", textColor: "text-blue-500" },
    { border: "border-green-500", textColor: "text-green-500" },
    { border: "border-purple-500", textColor: "text-purple-500" },
    { border: "border-orange-500", textColor: "text-orange-500" },
    { border: "border-red-500", textColor: "text-red-500" },
  ];

  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/medication-management/mat-program (1).jpg",
            "/images/medication-management/mat-program (2).jpg",
            "/images/medication-management/mat-program (3).jpg",
            "/images/medication-management/mat-program (4).jpg",
            "/images/medication-management/mat-program (6).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Medication Management
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Medication-Assisted Treatment
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Pill className="w-8 h-8 text-primary" />
            <h2 className="text-center">Medication-Assisted Treatment</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
           {` Substance abuse is one of our nation's major health problems and
            demands effective treatment. We offer both individual and group
            therapy to engage anyone affected with a substance abuse disorder.
            Substance abuse treatment is effective in treating co-curring
            disorders. Sometimes the use of pharmacological medication, combined
            with behavioral therapies, is necessary to treat substance use
            disorders.`}
          </p>
          <div className="mt-8 bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-blue-800">
                Comprehensive Treatment Approach
              </h3>
            </div>
            <p className="text-blue-700">
              {`Medications prescribed as part of Medication-Assisted Treatment
              models are part of the comprehensive treatment approach that
              focuses on the "whole patient."`}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Therapy Approach Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Stethoscope className="w-8 h-8 text-primary" />
            <h2 className="text-center">Our Treatment Approach</h2>
          </div>
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="!text-green-900 mb-3">Individual Therapy</h4>
                <p className="text-green-700 text-base leading-relaxed">
                  Individual therapy provides an opportunity to become educated
                  about alcohol and drugs, learn skills that are essential to
                  recovery, and develop strategies to prevent relapse.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="!text-blue-900 mb-3">Group Therapy</h4>
                <p className="text-blue-700 text-base leading-relaxed">
                  Group therapy works well for those needing affiliation and
                  connection with others experiencing similar issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why MAT Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-center">Why Medication-Assisted Treatment?</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            There are several benefits to choosing Medication-Assisted
            Treatment:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full mt-10">
            {[
              "Detoxing from opioids or alcohol takes time and relies on the body's natural processes.",
              "Minimizes the presence of cravings.",
              "Natural detox makes withdrawal symptoms and cravings more likely.",
              "May prevent pain, fatigue, headaches, and feeling unwell.",
              "Eases emotional symptoms like anxiety, paranoia, and depression.",
              "Clinically managed detox reduces risk of seizures and heart or breathing issues.",
              "Supports healing and helps prevent relapse.",
            ].map((title, i) => {
              const { border, textColor } = colors[i % colors.length];
              return (
                <HorizontalCard
                  key={i}
                  kind="cardio"
                  border={border}
                  textColor={textColor}
                  icon={i}
                  title={title}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Who Is It For Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-center">
              Who is Medication-Assisted Treatment for?
            </h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Detoxing without the use of medication may cause pain and
            discomfort, increasing the risk of relapse. Anyone who may be
            experiencing pain and discomfort from opioid or alcohol withdrawal
            can be a good candidate for Medication-Assisted Treatment.
          </p>
          <div className="mt-8 bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto text-center">
            <p className="text-blue-700 text-lg">
              Medication-Assisted Treatment increases the chance of remaining
              drug-free long term as it works as a tool to chemically trick the
              brain into believing that the substance is still present.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Our Program Section ─── */}
      <section className="max-w-7xl mx-auto py-26 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/medication-management/mat-program (5).jpg"
                alt="Wilmington Mat Program"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h2>Our Program</h2>
            </div>

            <p className="mt-6 text-lg leading-relaxed  max-w-4xl mx-auto">
              {`Wilmington Mental Health provides in-person drug and alcohol
              addiction treatment and complies with LegitScript's certification
              standards, which helps ensure transparency and compliance with
              applicable laws and regulations.`}
            </p>
            <p className="mt-4 text-lg leading-relaxed  max-w-4xl mx-auto">
              Our outpatient substance abuse program is suitable for people with
              jobs or extensive social supports, is low-intensity, and offers
              more than just drug education or relapse prevention. Our program
              is comparable to residential programs in services and
              effectiveness and adapts to your individual characteristics and
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Wellness Exam",
                href: "/health-services/wellness-exams",
              },
              {
                title: "Substance Use Disorders",
                href: "https://wilmingtonmentalhealth.vercel.app/substance-use",
              },
              {
                title: "Medication Management",
                href: "/medication-management",
              },
              {
                title: "Spravato",
                href: "/medication-management/spravato",
              },
              {
                title: "Suboxone",
                href: "/medication-management/suboxone",
              },
              {
                title: "Adult Therapy",
                href: "https://wilmingtonmentalhealth.vercel.app/mental-health/adult-therapy",
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
