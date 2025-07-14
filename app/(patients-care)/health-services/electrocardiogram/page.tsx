import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import CallBanner from "@/components/ui/CallBanner";
import { Heart, Activity, Clock, Shield, AlertTriangle } from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import Image from "next/image";

function page() {
  const colors = [
    { border: "border-blue-500", textColor: "text-blue-500" },
    { border: "border-red-500", textColor: "text-red-500" },
    { border: "border-green-500", textColor: "text-green-500" },
    { border: "border-purple-500", textColor: "text-purple-500" },
  ];
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/health-services/electrocardiogram (2).jpg",
            "/images/health-services/electrocardiogram (3).jpg",
            "/images/health-services/electrocardiogram (4).jpg",
            "/images/health-services/electrocardiogram (5).jpg",
            "/images/health-services/electrocardiogram (6).jpg",
            "/images/health-services/electrocardiogram (7).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Health Service
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Electrocardiogram
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Activity className="w-8 h-8 text-primary" />
            <h2 className="text-center">Electrocardiogram</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center">
            An <strong>Electrocardiogram (EKG or ECG)</strong> is a simple test
            used to evaluate the heart and measure its electrical activity. An
            electrocardiogram may be done on an outpatient basis. No electricity
            is sent into the body and the test usually takes about 5-10 minutes
            to complete.
          </p>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-blue-800">
                Quick & Safe
              </h3>
            </div>
            <p className="text-blue-700">
              <strong>Duration:</strong> 5-10 minutes | <strong>Safety:</strong>{" "}
              No electricity sent into body | <strong>Setting:</strong>{" "}
              Outpatient basis
            </p>
          </div>
        </div>
      </section>

      {/* ─── Why Use It Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-10">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/health-services/electrocardiogram (1).jpg"
                  alt="Wilmington Health Service: Electrocardiogram"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              {" "}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="">Why Use It?</h2>
              </div>
              <p className="mt-6 text-lg leading-relaxed">
                Research indicates that electrocardiograms can detect cardiac
                conditions that put people at risk. Physical exams that
                incorporate screenings with an electrocardiogram are six times
                more likely to detect a risky heart condition than screenings
                that involve only a patient&apos;s history and physical.
              </p>
              <div className="mt-8 bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
                <div className="text-center md:text-left mb-6">
                  <h3 className="text-2xl font-bold !text-blue-900 mb-2">
                    Detection Effectiveness
                  </h3>
                  <p className="!text-blue-700 ">
                    Physical exams with EKG are{" "}
                    <span className="font-bold text-2xl text-blue-800">6x</span>{" "}
                    more likely to detect risky heart conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">
              A 12-Lead EKG can help with:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
              {[
                "Assessing overall heart health before treatment or surgery",
                "Detecting irregular heartbeats",
                "Monitoring the effects of medication",
                "Identifying the cause of an arrhythmia",
                "Getting a baseline tracing of the heart's function",
                "Finding the cause of heart disease symptoms",
                "Investigating a history of fainting or palpitations",
                "Checking if the heart's walls are too thick",
                "Determining if there is evidence of a heart attack",
                "Finding the cause of unexplained chest pain",
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
        </div>
      </section>

      {/* ─── EKG Facts Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <h2 className="text-center">Electrocardiogram Facts</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "How It Works",
                description:
                  "An electrocardiogram records the electrical signals in the heart.",
                icon: "⚡",
                color: "blue",
              },
              {
                title: "Patient Experience",
                description:
                  "An electrocardiogram is a quick, painless, and harmless procedure.",
                icon: "😌",
                color: "pink",
              },
              {
                title: "Historical Development",
                description:
                  "Willem Einthoven developed the modern electrocardiogram in 1902.",
                icon: "📅",
                color: "green",
              },
            ].map((fact, i) => {
              const colorClasses = {
                blue: "border-blue-500 bg-blue-50",
                pink: "border-pink-500 bg-pink-50",
                green: "border-green-500 bg-green-50",
              };
              return (
                <div
                  key={i}
                  className={`p-6 rounded-xl border-t-4 ${
                    colorClasses[fact.color as keyof typeof colorClasses]
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{fact.icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      {fact.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Conditions EKGs Can Detect
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Pregnancy",
                "Arrhythmia",
                "Coronary Heart Disease",
                "Heart Attacks",
                "Cardiomyopathy",
                "Heart Failure",
                "Heart Valve Diseases",
                "Congenital Heart Defects",
              ].map((condition, i) => (
                <div
                  key={i}
                  className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 text-center flex items-center justify-start pl-8"
                >
                  <p className="!mb-0">{condition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── What to Expect Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-center">What to Expect?</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            During an electrocardiogram test, your provider will ask you to lie
            on an exam table while you continue to breathe normally. It takes
            about 10 minutes for the twelve electrodes or patches to be attached
            to certain spots of your chest, arms, and legs.
          </p>

          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className=" !text-green-900 mb-3">During the Test</h4>
                <ul className="space-y-2 text-green-700">
                  {[
                    "Lie on exam table and breathe normally",
                    "12 electrodes attached to chest, arms, and legs",
                    "Electrodes detect heart's electrical signals",
                    "Technician available for questions",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className=" !text-blue-900 mb-3">Test Requirements</h4>
                <ul className="space-y-2 text-blue-700">
                  {[
                    "No fasting required before the test",
                    "No special care needed after test",
                    "Results available same day",
                    "Signals displayed on monitor for analysis",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Potential Considerations Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 pb-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
            <h2 className="text-center text-orange-600">
              Potential Considerations
            </h2>
          </div>

          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h4 className="font-semibold !text-orange-900 mb-3">
                  Factors That May Affect Results
                </h4>
                <ul className="space-y-2 text-orange-700">
                  {[
                    "Obesity",
                    "Size of chest or heart location",
                    "Movement during test",
                    "Smoking before test",
                    "Certain medications",
                    "Electrolyte imbalances (potassium, magnesium, calcium)",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h4 className="font-semibold !text-yellow-900 mb-3">
                  Possible Discomfort
                </h4>
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-base">
                      Some discomfort when sticky electrodes are removed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-base">
                      Possible skin irritation if patches left on too long
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto text-center">
            <p className="text-blue-700">
              <strong>Important:</strong> Depending on your medical condition,
              there may be a risk associated with an electrocardiogram test. We
              recommend that you discuss any concerns with your provider before
              the test.
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
                title: "Men's & Women's Health",
                href: "/health-services/mens-womens-health",
              },
              {
                title: "Medication Management",
                href: "/health-services/medication-management",
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
                title: "Lab Services",
                href: "/lab-services",
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
