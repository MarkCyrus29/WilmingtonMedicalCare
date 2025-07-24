import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import {
  Brain,
  Shield,
  AlertTriangle,
  FileText,
  Clock,
  Stethoscope,
} from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import Image from "next/image";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/health-services/spravato-treatment (1).jpg",
            "/images/health-services/spravato-treatment (2).jpg",
            "/images/health-services/spravato-treatment (3).jpg",
            "/images/health-services/spravato-treatment (4).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Medication Management
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Spravato Treatment
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center mt-26 mb-14">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-primary" />
            <h2 className="text-center">Spravato Treatment</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-6xl mx-auto">
            We provide consultative and treatment services for individuals
            diagnosed with major depressive disorder and acute suicidal
            thinking. Esketamine, also known as Spravato, is a NMDA receptor
            antagonist and FDA-approved drug for treatment-resistant depression
            (TRD) that offers instant relief for those affected by major
            depressive disorder and also those who experience suicide thoughts*
          </p>
          <div className="mt-8 bg-yellow-50 rounded-xl p-6 max-w-7xl mx-auto text-left border-l-4 border-yellow-500">
            <p className="text-yellow-800 text-sm">
              *It is not known if SPRAVATO® is safe and effective in children.
            </p>
            <p className="text-yellow-800 text-sm mt-2">
              **It is not known if SPRAVATO® is safe and effective for use in
              preventing suicide or in reducing suicidal thoughts or actions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Resources Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center pb-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="text-center">Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Referral Form",
                color: "blue",
                href: "https://wilmingtonmentalhealth.com/images/health_services/spravato/files/Patient%20Referral%20Form.pdf",
              },
              {
                title: "Patient Enrollment",
                color: "green",
                href: "https://wilmingtonmentalhealth.com/images/health_services/spravato/files/Patient%20Enrollment%20Form.pdf",
              },
              {
                title: "Referral Guide",
                color: "purple",
                href: "https://wilmingtonmentalhealth.com/images/health_services/spravato/files/Medication%20Guide.pdf",
              },
            ].map((resource, i) => {
              const colorClasses = {
                blue: "border-blue-500 bg-blue-50 hover:bg-blue-100",
                green: "border-green-500 bg-green-50 hover:bg-green-100",
                purple: "border-purple-500 bg-purple-50 hover:bg-purple-100",
              };
              return (
                <a
                  key={i}
                  href={resource.href}
                  className={`p-6 rounded-xl border-t-4 transition-colors cursor-pointer ${
                    colorClasses[resource.color as keyof typeof colorClasses]
                  }`}
                >
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800">
                      {resource.title}
                    </h4>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Certified Treatment Center Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-center">Certified Treatment Center</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="mt-6 text-lg leading-relaxed text-justify max-w-6xl mx-auto">
                If you have been prescribed at least two antidepressant in the
                past and still experience symptoms, including suicidal
                thoughts**, you probably have a condition known as
                treatment-resistant depression (TRD). Spravato is an
                FDA-approved nasal spray treatment for adults* who have not
                tried two or more oral antidepressants and have not achieved
                improvement.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-justify max-w-6xl mx-auto">
                Spravato is only available through a restricted distribution
                program called the Spravato® REMS. Wilmington Mental Health is a
                certified Spravato® treatment center that follows protocols for
                handling Schedule III medication in accordance with federal,
                state, and local regulations.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-justify max-w-6xl mx-auto">
                Referrals for Spravato must be coordinated with your primary
                care provider for psychiatric medications. Spravato® is
                dispensed by a healthcare provider and patients are required to
                be monitored for at least 2 hours in a REMS-certified setting.
              </p>
            </div>
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
          </div>
          <div></div>
        </div>
        <div className="mt-8 bg-red-100 rounded-xl p-6 max-w-7xl mx-auto text-center">
          <p>
            Spravato® is dispensed by a healthcare provider and patients are
            required to be monitored for at least 2 hours in a REMS-certified
            setting. We encourage referrals from outside providers and pledge to
            assist in the care of those patients by providing consultation,
            treatment, and referral back to their referring provider.{" "}
          </p>
        </div>
      </section>

      {/* ─── Treating Depression Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-primary" />
            <h2 className="text-center">Treating Depression</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Depression is a complicated condition that now involves only
            serotonin deficiency or environmental changes; but the way it
            manifests in people who do not respond well to antidepressants is
            more complicated.
          </p>
          <div className="mt-8 bg-green-50 rounded-xl p-6 max-w-5xl mx-auto text-center border-l-4 border-green-500">
            <h3 className="text-xl font-semibold !text-green-800 mb-4">
              How Spravato Works
            </h3>
            <p className="text-green-700">
              Spravato helps the brain by reversing the changes produced by
              depression. It increased glutamate production in the brain,
              exciting certain brain cells in charge of learning functions and
              memory, and making the brain become more comfortable with the new
              state.
            </p>
          </div>
        </div>
      </section>

      {/* ─── What to Expect Section ─── */}
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
              <Clock className="w-8 h-8 text-primary" />
              <h2>What to Expect?</h2>
            </div>

            <p className="mt-6 text-lg leading-relaxed max-w-5xl mx-auto">
              Spravato is self-administered. After your blood pressure and pulse
              are measured, one of our healthcare providers stays in the
              treatment room with you, assisting while you administer the nasal
              spray to yourself. You will be consistently monitored for next two
              hours for any side effects and will be assessed before you are let
              go.
            </p>
            <div className="mt-8 bg-orange-50 rounded-xl p-6 max-w-5xl mx-auto border-l-4 border-orange-500">
              <p className="text-orange-700">
                You may feel tired or slightly confused after the treatment,
                therefore, you will be provided with information on what you are
                not allowed to do until those feelings and side effects fade
                away entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Side Effects Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
            <h2 className="text-center ">Side Effects</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            The most common side effects when Spravato is being used along with
            oral antidepressant include:
          </p>
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Nausea",
                "Vomiting",
                "Numbness",
                "Dizziness",
                "Hypertension",
                "Feeling drunk",
                "Feeling anxious",
                "Difficulty thinking",
                "Fatigue or drowsiness",
                "Feeling detached from body",
              ].map((effect, i) => (
                <div
                  key={i}
                  className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500 text-center"
                >
                  <p className="!mb-0 text-orange-800">{effect}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Important Information Table ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6">Important Medical Information:</h2>
            <div className="grid grid-cols-1  gap-6">
              {/* Indications */}
              <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500">
                <h4 className="font-semibold !text-blue-900 mb-3">
                  Indications
                </h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Spravato CII Nasal Spray is indicated, in conjunction with an
                  oral antidepressant, for the treatment of depressive symptoms
                  in adults with major depressive disorder (MDD) and with acute
                  suicidal ideation or behavior.
                </p>
              </div>

              {/* Warning */}
              <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                <h4 className="font-semibold !text-red-900 mb-3">Warning</h4>
                <p className="text-red-700 text-sm leading-relaxed">
                  Spravato is a Schedule III controlled substance (CIII) and may
                  be subject to abuse and misuse. Spravato is now approved for
                  use in pediatric patients. In clinical trials, 48-61% of
                  Spravato-treated patients developed sedation and 0.3-0.4%
                  experienced loss of consciousness. In clinical trials, 61-84%
                  of Spravato-treated patients developed dissociative or
                  perceptual changes (including distortion of time, space, and
                  illusions), derealizations, and depersonalization.
                </p>
              </div>

              {/* Limitations */}
              <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500">
                <h4 className="font-semibold !text-yellow-900 mb-3">
                  Limitations
                </h4>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  Spravato has not been proven to prevent suivide or reduce
                  suicidal ideation or behaviors. Spravato does not eliminate
                  the need for hospitalization in some patients. Spravato is not
                  an anesthetic agent.
                </p>
              </div>

              {/* Contraindications */}
              <div className="bg-purple-50 p-6 rounded-xl border-t-4 border-purple-500">
                <h4 className="font-semibold !text-purple-900 mb-3">
                  Contraindications
                </h4>
                <p className="text-purple-700 text-sm leading-relaxed">
                  Spravato is contraindicated in patients with aneurysmal
                  vascular disease, including thoracic and abdominal aorta,
                  intracranial and peripheral arterial vessels, or arteriovenous
                  malformation, history of intracerebral hemorrhage,
                  hypersensitivity to esketamine, ketamine, or any of the
                  excipients.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-12 mb-6">
              <Stethoscope className="w-8 h-8 text-primary" />
              <h2 className="text-center">
                Risk Evaluation and Mitigation Strategy
              </h2>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
              Patients are enrolled in the program to receive treatment at
              Wilmington Mental Health. Administration requires direct
              observation by one of our healthcare providers at each treatment
              session, followed by at least 2 hours of monitoring, and
              pre-discharge assessment to determine stability.
            </p>
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
                title: "Medication Management",
                href: "/medication-management",
              },

              {
                title: "Vivitrol",
                href: "/medication-management/vivitrol",
              },
              {
                title: "Suboxone",
                href: "/medication-management/suboxone",
              },
              {
                title: "MAT Program",
                href: "/medication-management/mat-program",
              },
              {
                title: "Substance Use Disorders",
                href: "https://wilmingtonmentalhealth.vercel.app/substance-use",
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
