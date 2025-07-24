import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import { FileText, Search, ClipboardCheck, Clock } from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import Image from "next/image";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/medication-management/intake-evaluation (1).jpg",
            "/images/medication-management/intake-evaluation (2).jpg",
            "/images/medication-management/intake-evaluation (3).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Mental Health Services
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Intake Evaluation
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-10">
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/medication-management/intake-evaluation (4).jpg"}
            alt={"Introduction Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className=" text-center md:text-left">Intake Evaluation</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed  text-center md:text-left max-w-5xl mx-auto">
            In the first stage of your treatment, you and your provider will sit
            down to complete an hour-long assessment. This initial review of
            your medical and psychosocial background is essential to understand
            how your mental health symptoms have affected you and what has or
            has not worked for you. You will be able to learn and discuss with
            your prescriber what treatment approach(es) may work best for you
            and develop a treatment plan you both can follow to track your
            progress.
          </p>
          <p className="mt-4 text-lg leading-relaxed  text-center md:text-left max-w-5xl mx-auto">
            During the assessment, expect to answer questions about your medical
            conditions, current and past use of medication, and history of
            mental illness. Previous psychiatric assessments, treatments, and
            degree of adherence to past treatment are also reviewed, and records
            from the places that hold your records will be obtained. The
            assessment method depends on your presenting problem during a
            routine or crisis visit.
          </p>
        </div>
      </section>

      {/* ─── Identifying Diagnoses Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Search className="w-8 h-8 text-primary" />
            <h2 className="text-center">Identifying Diagnoses</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            During your assessment, your provider will follow multiple steps to
            identify the cause of your illness. The process involves the
            following:
          </p>
          <div className="mt-8 max-w-5xl mx-auto">
            <ul className="space-y-4 text-lg text-gray-700">
              {[
                "Assessing whether your condition requires psychiatric treatment.",
                "Identifying any long-term issues that can emerge during your treatment.",
                "Help making educated decisions about your treatment.",
                "Ruling out psychiatric conditions that may not explain your problem.",
                "Making recommendations regarding changes you may need to make.",
                "Adjusting an existing treatment plan that is no longer being effective.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Treatment Planning Section ─── */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ClipboardCheck className="w-8 h-8 text-primary" />
            <h2 className="text-center">Treatment Planning</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center md:text-justify max-w-5xl mx-auto">
            The goal of any multidimensional assessment is to evaluate the
            applicability of available treatment methods and resources and to
            ensure the benefits of your treatment to outweigh the risk of
            engaging in such treatment. Your provider wants to certify that the
            most appropriate treatment course will be followed and that you
            understand and will be involved in the decision-making process to
            increase the effectiveness and adherence. Your treatment plan is
            meant to be specific and personal. It should be designed with your
            needs and goals in mind, and outline the plan to be followed moving
            forward.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/medication-management/intake-evaluation (5).jpg"}
            alt={"Introduction Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
      </section>

      {/* ─── What to Expect Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-center">What to Expect?</h2>
          </div>
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Mental Evaluation",
                  description:
                    "A behavioral assessment that includes detailed questions about thought processes, feelings, behaviors, and symptoms, as well as appearance, demeanor, and current mental status will be required before you can get started with psychiatric care.",
                },
                {
                  title: "Physical Exam",
                  description:
                    "A physical exam can help determine whether a physical illness is correlated with your mental illness.",
                },
                {
                  title: "Lab Tests",
                  description:
                    "Bloodwork, urine tests, brain scan, or other tests may be ordered by your provider to rule out any physical condition.",
                },
                {
                  title: "Mental Health History",
                  description:
                    "Questions about your personal or family history, length of symptoms, and past psychiatric treatment may be asked.",
                },
                {
                  title: "Personal History",
                  description:
                    "Questions about your lifestyle, personal history, martial status, work history, etc. may be also asked.",
                },
                {
                  title: "Cognitive Evaluation",
                  description:
                    "A test that assesses focus, attention, memory, mental reasoning, and other mental abilities may be conducted.",
                },
                {
                  title: "Activities of Daily Life",
                  description:
                    "Questions about your ability to complete daily responsesibilities may be asked.",
                },
                {
                  title: "Diagnosis",
                  description:
                    "Your prescriber will examine your symptoms and illnesses to determine their nature and origin.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-primary/10 p-6 rounded-xl shadow-sm border-l-4 border-primary"
                >
                  <h3 className="text-xl font-semibold  mb-2">{item.title}</h3>
                  <p className=" text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
              <h3 className="text-xl font-semibold !text-red-800 mb-3">
                Follow-up
              </h3>
              <p className="!text-red-700 text-base leading-relaxed">
                Most patients return within two to four weeks if treatment with
                medication was initiated or altered. Following the intake
                assessment, a follow-up appointment will be scheduled. Follow-up
                appointments are typically 15-20 minutes in duration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>Other Offered Services:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Wellness Exams",
                href: "/health-services/wellness-exams",
              },
              {
                title: "Medication Management",
                href: "/medication-management",
              },
              {
                title: "Lab Services",
                href: "/lab-services",
              },
              {
                title: "MAT Program",
                href: "/medication-management/mat-program",
              },
              {
                title: "Substance Use Disorders",
                href: "https://wilmingtonmentalhealth.netlify.app/substance-use",
              },
              {
                title: "Adult Therapy",
                href: "https://wilmingtonmentalhealth.netlify.app/mental-health/adult-therapy",
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
