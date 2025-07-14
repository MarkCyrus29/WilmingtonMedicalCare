import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import Image from "next/image";
import { Heart, Activity, Shield, Stethoscope } from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import { ServicesCard } from "@/components/ui/ServicesCard";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/health-services/mens-womens-health (1).jpg",
            "/images/health-services/mens-womens-health (4).jpg",
            "/images/health-services/mens-womens-health (2).jpg",
            "/images/health-services/mens-womens-health (6).jpg",
            "/images/health-services/mens-womens-health (3).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Health Service
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Men&apos;s & Women&apos;s Health
          </h1>
        </div>
      </div>

      {/* ─── Women&apos;s Health Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-pink-500" />
            <h2 className="text-center ">Women&apos;s Health Screenings</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Many women struggle with addressing their mental and emotional needs
            and finding balance between their career, homelife, marriage,
            children, finances, and friendships. Here at Wilmington Mental
            Health, we want you to be proactive and conscious by connecting with
            your body and to discuss with our primary care provider to offer
            education and feedback about your health.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center">
            Your health expands beyond eating a balanced diet, a healthy sex
            life, managing stress, preventing disease, maintaining interpersonal
            relationships, staying active, and balancing your daily activities.
          </p>

          <div className="mt-8 bg-pink-50 rounded-xl p-6 ">
            <h3 className="text-xl font-semibold text-pink-800 mb-4 text-center">
              Key Health Concerns for Women
            </h3>
            <p className="text-pink-700 text-center">
              Some of the main concerns among women that have been highlighted
              by researchers in the field include the need to maintain a healthy
              heart, pay attention to risk factors such as smoking, high blood
              pressure, obesity, and physical inactivity. Women are often
              evaluated for breast cancer, ovarian cancer, cervical cancer,
              depression, anxiety, and reproductive health issues.
            </p>
          </div>

          <div className="mt-26">
            <h3 className="text-xl font-semibold mb-6 text-center ">
              Your Medical Annual Exam May Include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Measurements of Weight Classification",
                "Vital Signs",
                "Head-to-Toes Examination",
                "Screening Questions",
                "Stool Tests",
                "Immunization",
                "Cancer Screening Tests",
                "Evaluation of Pertinent Risk Factors",
                "Pap Test (ages 21-24) or Every Five Years (25-65)",
              ].map((item, i) => (
                <ServicesCard
                  title={item}
                  key={i}
                  textColor="text-pink-600"
                  bgColor={"bg-pink-50"}
                />
              ))}
            </div>
          </div>

          {/* Women&apos;s Personalized Care Grid */}
          <div className="mt-26">
            <h3 className="text-xl font-semibold mb-6 text-center ">
              Personalized Care Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "e-Prescribing",
                  description:
                    "Prescription accuracy, streamlined, delivered directly to your pharmacy.",
                  icon: "💊",
                },
                {
                  title: "Pregnancy",
                  description:
                    "Family planning and advice regarding factors influencing health status.",
                  icon: "🤱",
                },
                {
                  title: "Healthy Eating Habits",
                  description:
                    "Education to help you implement healthy eating habits.",
                  icon: "🥗",
                },
                {
                  title: "Primary Care",
                  description:
                    "Efficient and effective primary care services at affordable prices.",
                  icon: "🏥",
                },
                {
                  title: "Epidemics",
                  description:
                    "Treatment during sudden or rapid outbreaks and disease.",
                  icon: "🦠",
                },
                {
                  title: "Low-Cost Health",
                  description:
                    "Affordable membership model for accessing direct primary care.",
                  icon: "💰",
                },
                {
                  title: "Behavior Medicine",
                  description:
                    "Interdisciplinary treatment by mental health and medical providers.",
                  icon: "🧠",
                },
                {
                  title: "Mindfulness",
                  description:
                    "Safe atmosphere to foster stronger connections between you and others.",
                  icon: "🧘",
                },
                {
                  title: "Common Illness",
                  description:
                    "Convenient access and personalized care to address ordinary ailments.",
                  icon: "🩺",
                },
                {
                  title: "Breast and Pelvic Exams",
                  description: "Exam to help detect potential health issues.",
                  icon: "🔍",
                },
                {
                  title: "Menopausal Counseling",
                  description:
                    "Providing support and guidance for women experiencing physical and emotional changes.",
                  icon: "🌸",
                },
                {
                  title: "Pap Smears & HPV Screening",
                  description: "Cervical cancer screenings for women.",
                  icon: "🔬",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-pink-50 p-6 rounded-xl border border-pink-200 hover:border-pink-400 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-pink-600 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Men&apos;s Health Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-blue-500" />
            <h2 className="text-center">Men&apos;s Health Screenings</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Due to the nature of their work, men often find themselves exposed
            to situations that put their physical health in danger. Sometimes
            the threat comes from their engagement in risky behaviors and aging.
            Men experience health problems related to cardiovascular disease,
            respiratory disease, prostate cancer, diabetes, erectile
            dysfunction, sexually transmitted infections, alcohol use,
            depression, suicide, low testosterone, influenza, and unintentional
            injuries, among others.
          </p>

          <div className="mt-26">
            <h3 className="text-xl font-semibold mb-6 text-center ">
              Your Medical Annual Exam May Include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Measurements of Weight Classification",
                "Vital Signs",
                "Head-to-Toes Examination",
                "Screening Questions",
                "Cancer Screening Tests",
                "Hernia Exam",
                "Diabetes Screening",
                "Cholesterol Screening",
                "Stool Tests",
                "Infectious Disease Screenings",
                "Immunizations",
              ].map((item, i) => (
                <ServicesCard title={item} key={i} bgColor="bg-blue-50" />
              ))}
            </div>
          </div>

          {/* Men&apos;s Personalized Care Grid */}
          <div className="mt-26">
            <h3 className=" mb-6 text-center ">Personalized Care Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Duration",
                  description: "Take no more than 30 minutes to 1 hour.",
                  icon: "⏰",
                },
                {
                  title: "Activity",
                  description: "Exercise, nutrition, sleep, and stress.",
                  icon: "🏃",
                },
                {
                  title: "Hernia",
                  description: "Quick test to detect sacs in bellow/groin.",
                  icon: "🔍",
                },
                {
                  title: "Frequency",
                  description:
                    "Every 3-5 years for younger men and every year for men 50 and older.",
                  icon: "📅",
                },
                {
                  title: "Observation",
                  description:
                    "Use of instruments to look into your eyes, ears, nose, and throat.",
                  icon: "👁️",
                },
                {
                  title: "Prostate",
                  description:
                    "Screening method to look for early signs for prostate cancer.",
                  icon: "🩺",
                },
                {
                  title: "Tests",
                  description:
                    "Blood pressure, height, weight, and waist circumference.",
                  icon: "📊",
                },
                {
                  title: "Genitalia",
                  description:
                    "Visual check-up to detect lumps, swelling, and skin discoloration.",
                  icon: "🔬",
                },
                {
                  title: "Blood Tests",
                  description:
                    "Laboratory analysis of blood samples to help diagnose medical conditions.",
                  icon: "🩸",
                },
                {
                  title: "Diet",
                  description: "Nutrition and eating habits.",
                  icon: "🥙",
                },
                {
                  title: "Testosterone",
                  description:
                    "Screening to levels of testosterone and hormonal imbalances.",
                  icon: "💪",
                },
                {
                  title: "Sexuality",
                  description:
                    "Screenings and exams to help with sex drive and sexual behaviors.",
                  icon: "❤️",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-blue-50 p-6 rounded-xl border border-blue-200 hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Wellness Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <h2 className="text-center">Wellness Services</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            An annual wellness exam is an essential service recommended for
            women and men of all ages. During these visits, your medical
            provider will evaluate changes in your health and provide counseling
            for a range of issues related to your body and well-being. Make sure
            to ask questions if you have any and develop a relationship with
            your provider.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-10">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/health-services/mens-womens-health (5).jpg"
                  alt="Wilmington Health Services"
                  fill
                  className="object-cover"
                  sizes="(min-width: 500px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-xl font-semibold mb-6 ">
                Patients Should Expect
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Temperature",
                    icon: Activity,
                    color: "red",
                  },
                  {
                    title: "Blood Pressure",
                    icon: Heart,
                    color: "blue",
                  },
                  {
                    title: "Heart Rate",
                    icon: Activity,
                    color: "green",
                  },
                  {
                    title:
                      "Observation instruments to look into your eyes, ears, nose, and throat",
                    icon: Stethoscope,
                    color: "purple",
                  },
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  const colorClasses = {
                    red: "border-red-500 bg-red-50 text-red-600",
                    blue: "border-blue-500 bg-blue-50 text-blue-600",
                    green: "border-green-500 bg-green-50 text-green-600",
                    purple: "border-purple-500 bg-purple-50 text-purple-600",
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
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>
            Other Related Services Offered at Wilmington Mental Health + Medical
            Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Wellness Exams",
                href: "/health-services/wellness-exams",
              },
              {
                title: "Chronic Disease Management",
                href: "/health-services/chronic-disease-management",
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
                title: "Laboratory Services",
                href: "/health-services/laboratory-services",
              },
              {
                title: "Assessments",
                href: "/health-services/assessments",
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
