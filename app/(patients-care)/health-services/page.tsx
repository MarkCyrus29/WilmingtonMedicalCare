import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import CallBanner from "@/components/ui/CallBanner";
import Image from "next/image";
import {
  Heart,
  Stethoscope,
  Calendar,
  FileText,
  Activity,
  Shield,
  Users,
  AlertTriangle,
} from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import { ServicesCard } from "@/components/ui/ServicesCard";

function page() {
  const warningSignsSymptoms = [
    "Suffers from a chronic condition.",
    "Has a genetic disorder.",
    "Is experiencing a disease that may benefit from evaluation and treatment.",
    "Needs care from a licensed qualified medical provider.",
    "Daily functions have been impaired.",
  ];
  const noWorriesArray = [
    "Our nurse practitioners are able to see new patients within a week of current symptoms, provide a proper diagnosis, and write a prescription during your visit.",
    "One of our missions is to help you understand the importance of having routine checkups of your physical health and the risks associated with taking certain medication.",
    "We seek to provide education regarding the role patients play in managing their health and overall health to prevent surprises and increase the chance of achieving their expected relief.",
    "We recommend that patients schedule follow-up visits with the same medical provider to maintain their familiarity with your medical history and current health conditions.",
  ];

  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/health-services/health-services (3).jpg",
            "/images/health-services/health-services (4).jpg",
            "/images/health-services/health-services (2).jpg",
            "/images/health-services/health-services (5).jpg",
            "/images/health-services/health-services (6).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            COMPREHENSIVE CARE
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Health Services
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center mb-26 py-26">
        <div className="w-[85%]">
          <h2 className="text-center">Health Services</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Wilmington Mental Health follows a holistic and integrative care
            model. Our team has received extensive training in the field to
            promote and encourage stabilization and healing. Our priority is to
            offer tailored and trustworthy medical examinations to our patients
            and the community, as well as develop a long-lasting relationship
            with our patients and their families.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center">
            We have a dedicated team that collaborates with other healthcare
            professionals to address your healthcare needs. We assess the
            efficacy of medication and each patient&apos;s specificity regarding
            their response to medication by using a person-centered approach.
            This promotes communication and offers continuity in the
            patient-clinician partnership.
          </p>
        </div>
      </section>

      {/* ─── Primary Care Section ─── */}
      <section className="max-w-7xl mx-auto pb-26 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/health-services/health-services (1).jpg"
                alt="Wilmington Health Services"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <Stethoscope className="w-8 h-8 text-primary" />
              <h2 className=" ">Primary Care</h2>
            </div>
            <p className="mt-6 text-lg leading-relaxed ">
              In anticipation of the shortage of primary care physicians within
              the next decade, Wilmington Mental Health aims to establish a
              lasting relationship with its patients, offering whole-person
              support that considers their physical, emotional, social, and
              psychological well-being.
            </p>

            <div className="mt-8 max-w-4xl mx-auto">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Our patients have the option of consulting a nurse
                    practitioner about their primary care needs, making it a
                    convenient choice when it comes to quick access to
                    healthcare
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Our team is qualified and can perform many of the same tasks
                    conducted by medical doctors as they go through rigorous
                    medical training during their education
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>
                    Nurse practitioners can act as primary care providers,
                    perform diagnostic procedures, prescribe medications, and
                    order lab work or blood tests
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Annual Exam Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-center">Annual Exam</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Annual wellness visits offer you and your provider an opportunity to
            obtain up-to-date information about your overall health and update
            your treatment plan. During the follow-up encounters, the clinician
            may guide you in the process of making better health decisions and
            choices that promote better health and prevent possible future
            health problems.
          </p>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 w-full  text-center">
            <p className="text-blue-700 text-lg">
              <strong>Insurance Coverage:</strong> Wellness visits are generally
              covered by insurance plans, although they may not cover lab tests
              and other procedures. Do not hesitate to contact your insurance
              company to verify this and obtain prior authorization for medical
              care.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Annual Physical May Require
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Screenings",
                  icon: Shield,
                  color: "blue",
                },
                {
                  title: "Physical Examination",
                  icon: Stethoscope,
                  color: "pink",
                },
                {
                  title: "Checking Your Vitals",
                  icon: Activity,
                  color: "green",
                },
                {
                  title: "Measuring Your BMI",
                  icon: Activity,
                  color: "blue",
                },
                {
                  title: "Re-examining Your Medical History",
                  icon: FileText,
                  color: "pink",
                },
                {
                  title: "Discussing Your Current Lifestyle",
                  icon: Users,
                  color: "green",
                },
                {
                  title: "Shots and Immunizations",
                  icon: Shield,
                  color: "blue",
                },
                {
                  title: "Designing a New Health Plan",
                  icon: FileText,
                  color: "pink",
                },
              ].map((item, i) => {
                const IconComponent = item.icon;
                const colorClasses = {
                  blue: "border-blue-500 bg-blue-50 text-blue-600",
                  pink: "border-pink-500 bg-pink-50 text-pink-600",
                  green: "border-green-500 bg-green-50 text-green-600",
                };
                return (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border-l-4 ${
                      colorClasses[item.color as keyof typeof colorClasses]
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6 flex-shrink-0" />
                      <p className="font-medium text-sm">{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-center text-gray-600">
              Target questions can focus more on your current levels of stress,
              physical activity, diet, or drug use—such as tobacco and
              alcohol—in order to improve your overall health.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The Process Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <h2 className="text-center">The Process</h2>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            The first step of primary care is the initial evaluation, followed
            by the development of a partnership between you and your providers,
            the provision of medication to treat your symptoms, and the ongoing
            monitoring of that medication.
          </p>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary">
                <div className="flex items-center gap-2">
                  <FileText className="w-10 h-10 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-3">Medical Assessment</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  During the medical assessment, a thorough review of any
                  prescribed drugs you take may have experience to create a safe
                  and effective treatment plan.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
                <div className="flex items-center gap-2">
                  <Activity className="w-10 h-10 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold mb-3">Ongoing Monitoring</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Your prescriber will closely monitor the effects of any
                  prescribed medication to ensure safety and effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Preventative Care Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-center">Preventative Care</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            We are passionate about providing excellent care. Our team will help
            you prepare for your routine physical exam, treatment of minor
            illnesses, injuries, management of chronic conditions, screening of
            common health issues, management of acute health conditions, lab or
            genetic testing, and prescription of necessary medications.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Your Care May Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
              {[
                {
                  title: "Coordination of Care",
                  border: "border-blue-500",
                  textColor: "text-blue-500",
                  icon: 0,
                },
                {
                  title: "Treatment Management",
                  border: "border-green-500",
                  textColor: "text-green-500",
                  icon: 1,
                },
                {
                  title: "Electronic Prescription",
                  border: "border-purple-500",
                  textColor: "text-purple-500",
                  icon: 2,
                },
                {
                  title: "Referral to a Specialist",
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

      {/* ─── Healthier Lifestyles Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 my-26 bg-blue-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-center">Healthier Lifestyles</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Depending on your age, you may be required to complete diagnostic
            tests and discuss healthier lifestyle choices with your provider
            during your initial physical examination. Staying in touch with your
            provider is crucial for your health, therefore, it is highly
            unadvised to skip your annual wellness visits.
          </p>
        </div>
      </section>

      {/* ─── When to Seek Treatment Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <h2 className="mt-10 mb-5 text-left">
            When and Who{" "}
            <span className="font-normal">
              Should Consider Seeking Medication Treatment?
            </span>
          </h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <ul className="space-y-3">
              {warningSignsSymptoms.map((symptom, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-b-accent pb-3"
                >
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-red-800 font-medium">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 ">
            <h2 className="mb-6">No Worries!</h2>
            <ul className="space-y-4 text-lg">
              {noWorriesArray.map((text, i) => (
                <ServicesCard key={i} title={text} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other Services Offered at Wilmington Mental Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Adult Therapy",
                href: "/mental-health/adult-therapy",
              },
              {
                title: "Couples Counseling",
                href: "/mental-health/couples-counseling",
              },
              {
                title: "Wellness Exams",
                href: "/health-services/wellness-exams",
              },
              {
                title: "Medication Management",
                href: "/health-services/medication-management",
              },
              {
                title: "Lab Services",
                href: "/health-services/lab-services",
              },
              {
                title: "Men's & Women's Health",
                href: "/health-services/mens-womens-health",
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
