import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import CallBanner from "@/components/ui/CallBanner";
import Image from "next/image";
import {
  Heart,
  Stethoscope,
  Calendar,
  Shield,
  Activity,
  Users,
  Brain,
} from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";

function page() {
  const ourModels = [
    "By developing long-lasting partnership with our patients, our collaborative approach to wellness is a fundamental piece to help address the personal health care needs of our patients.",
    "We believe in a model of care that evaluates the whole person, not just the brain or the body independently.",
    "We are constantly evolving to address our patient's needs in one location.",
    "We attack diseases before they even start and challenge mental illnesses and maladaptive lifestyles aggressively to restore harmony and wellbeing.",
  ];

  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/health-services/wellness-exams (4).jpg",
            "/images/health-services/wellness-exams (3).jpg",
            "/images/health-services/wellness-exams (2).jpg",
            "/images/health-services/wellness-exams (5).jpg",
            "/images/health-services/wellness-exams (6).jpg",
            "/images/health-services/wellness-exams (7).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Health Service
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Wellness Exams
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">Wellness Exams</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Here at Wilmington Mental Health, we create an alliance with our
            patients to help them develop a positive approach to living, not
            only from a socioeconomic standpoint but also from the physical,
            mental, and emotional position. We actively put into practice
            evidence-based approaches and offer reliable and dependable services
            to families in our community.
          </p>
        </div>
      </section>

      {/* ─── Our Model Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center pt-0 py-26 bg-gray-50">
        <div className="w-[85%]">
          <h2 className="text-center">Our Holistic Model of Care</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Our model of care is holistic and integrative in nature, based on
            the World Health Organization&apos;s definition that health is &quot;a state
            of complete physical, mental, and social wellbeing&quot; and wellness
            &quot;the optimal state of health of individuals.&quot;
          </p>
          <div className="mt-8 bg-blue-50 rounded-xl p-8 mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                WHO Definition of Health
              </h3>
              <blockquote className="text-blue-700 text-lg italic mb-4">
                &quot;A state of complete physical, mental, and social wellbeing&quot;
              </blockquote>
              <p className="text-blue-600">
                <strong>Wellness:</strong> &quot;The optimal state of health of
                individuals&quot;
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-10">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/health-services/wellness-exams (1).jpg"
                  alt="Wilmington Health Services"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <ul className="space-y-5 text-xl flex-1/2">
                {ourModels.map((model, i) => (
                  <li className="flex items-start gap-3" key={i}>
                    <div className="w-3 h-3 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span>{model}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Annual Physical Exam Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-center">Annual Physical Exam</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-6xl mx-auto">
            A yearly wellness checkup with your primary care provider is an
            opportunity to update your personalized prevention plan. We can
            establish you with our primary care provider who will help you
            develop that plan. Over time, your interaction with your primary
            care provider will allow for them to keep up with your progress in
            your overall health, receive proper education about health
            decisions, choices that can help promote better health, and prevent
            future health problems.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-8 text-center">
              An Annual Visit May Include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Full-body physical examinations",
                  icon: Stethoscope,
                  color: "blue",
                },
                {
                  title: "Checking your vitals",
                  icon: Activity,
                  color: "purple",
                },
                {
                  title: "BMI measurement",
                  icon: Activity,
                  color: "orange",
                },
                {
                  title: "Reviewing your medical history",
                  icon: Calendar,
                  color: "blue",
                },
                {
                  title: "Discussing current lifestyle and health choices",
                  icon: Users,
                  color: "purple",
                },
                {
                  title: "Health screening",
                  icon: Shield,
                  color: "orange",
                },
                {
                  title: "Shots and immunizations",
                  icon: Shield,
                  color: "blue",
                },
                {
                  title: "Establishing a health plan",
                  icon: Heart,
                  color: "purple",
                },
              ].map((item, i) => {
                const IconComponent = item.icon;
                const colorClasses = {
                  blue: "border-blue-500 bg-blue-50 text-blue-600",
                  purple: "border-purple-500 bg-purple-50 text-purple-600",
                  orange: "border-orange-500 bg-orange-50 text-orange-600",
                };
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border-l-4 ${
                      colorClasses[item.color as keyof typeof colorClasses]
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <IconComponent className="w-6 h-6 flex-shrink-0 mt-1" />
                      <p className="font-medium text-sm leading-relaxed">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Prevention vs Treatment Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-center">Prevention vs. Treatment</h2>
          </div>
          <p className="my-6 text-lg leading-relaxed text-center max-w-6xl mx-auto">
            Our goal is to offer preventive healthcare to keep you healthy in
            general, which contrasts with traditional models that focus on
            treating disease or problems. Disease prevention is cost effective
            and reduces the risk of suffering, death, or expensive health care,
            particularly chronic-stage disease treatment.
          </p>

          <div className="pt-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Breaking Down Barriers to Healthcare
            </h3>
            <p className="text-center text-gray-600 mb-6">
              The cost of healthcare, in addition to lacking time, knowledge,
              transportation, or stigma, can prevent people from seeking the
              proper help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
              {[
                {
                  title: "Make access to health care and lab tests much easier",
                  border: "border-blue-500",
                  textColor: "text-blue-500",
                  icon: 0,
                },
                {
                  title: "Offer health screenings",
                  border: "border-green-500",
                  textColor: "text-green-500",
                  icon: 1,
                },
                {
                  title: "Integrate physical and behavioral health",
                  border: "border-purple-500",
                  textColor: "text-purple-500",
                  icon: 2,
                },
                {
                  title: "Bridge the gap between therapy and primary care",
                  border: "border-orange-500",
                  textColor: "text-orange-500",
                  icon: 3,
                },
              ].map(({ title, border, textColor, icon }, i) => (
                <HorizontalCard
                  key={i}
                  kind="benefit"
                  border={border}
                  textColor={textColor}
                  icon={icon}
                  title={title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mind & Body Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-primary" />
            <h2 className="text-center">Mind & Body</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            In assessing the cause of illness, we consider the mind-body
            interaction and dynamic. We want to develop a long-lasting
            relationship with our patients, therefore; it is important that you
            feel comfortable with your treatment team.
          </p>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-3">
                  Your Comfort Matters
                </h4>
                <p className="text-green-700">
                  If you are not comfortable with your current provider, please
                  ask us to switch to someone else. Your wellness exam is an
                  opportunity for you to learn more about your own body.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-3">
                  Ask Questions
                </h4>
                <p className="text-blue-700">
                  Feel free to ask questions during your exam. If you need any
                  test, ask our team as we may be able to do it on one site. If
                  we do not, we will refer you to a local specialist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other Related Services Offered at Wilmington Mental Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Men's & Women's Health",
                href: "/health-services/mens-womens-health",
              },
              {
                title: "Medication Management",
                href: "/health-services/medication-management",
              },
              {
                title: "Assessments",
                href: "/health-services/assessments",
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
                title: "Salud Latina",
                href: "/other-services/salud-latina",
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
