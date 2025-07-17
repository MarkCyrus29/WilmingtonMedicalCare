import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import {
  Pill,
  Shield,
  AlertTriangle,
  Heart,
  DollarSign,
  FileText,
} from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import Image from "next/image";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/health-services/suboxone-treatment (1).jpg",
            "/images/health-services/suboxone-treatment (2).jpg",
            "/images/health-services/suboxone-treatment (3).jpg",
            "/images/health-services/suboxone-treatment (4).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
           Medication Management
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Suboxone
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Pill className="w-8 h-8 text-primary" />
            <h2 className="text-center">Suboxone</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            {`Suboxone is a prescription medication containing buprenorphine and
            naloxone. Suboxone comes in both tablets and sublingual film, which
            is placed under the tongue and dissolves quickly to enter the
            bloodstream rapidly. Suboxone eliminates the "high" or intense
            feeling of euphoria experienced by patients who abuse opioids.
            Suboxone treatment is a program that also includes behavioral
            therapy.`}
          </p>
        </div>
      </section>

      {/* ─── What is Suboxone Section ─── */}
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
              <Shield className="w-8 h-8 text-primary" />
              <h2>What is Suboxone?</h2>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-center md:text-left max-w-5xl mx-auto">
              Suboxone combines buprenorphine and naloxone to chemically
              decrease the severity of withdrawal symptoms in patients with
              opioid dependence. Buprenorphine binds to brain receptors that are
              activated by opioids and block the receptors so that opioid-type
              drugs cannot stimulate them and create euphoria.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-center md:text-left max-w-5xl mx-auto">
              {`Naloxone blocks the effects of opioids in patients who use opioids
              while taking buprenorphine and prevents the "high" that would come
              from relapse. Suboxone is FDA-approved for the treatment of opioid
              use disorder.`}
            </p>
          </div>
        </div>
      </section>

      {/* ─── How Does It Work Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center mt-26 mb-12">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-center">How Does It Work?</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Suboxone comes in both tablets and sublingual film, which is placed
            under the tongue and dissolves quickly. This allows for the
            medication to enter the bloodstream rapidly. Suboxone tricks the
            brain into thinking that it is receiving a full dose of an opioid,
            while naloxone blocks the activation of opioid receptors, thereby
            reversing the euphoria effects of buprenorphine.
          </p>
        </div>
      </section>

      {/* ─── Side Effects Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center pb-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
            <h2 className="text-center text-orange-600">Side Effects</h2>
          </div>
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Numb mouth",
                "Painful Tongue",
                "Insomnia",
                "Nausea",
                "Dizziness",
                "Blurry Vision",
                "Anxiety",
                "Vomiting",
                "Fainting",
                "Backpain",
                "Depression",
                "Sweating",
                "Irregular heartbeat",
                "Drowsiness",
                "Difficulty Concentrating",
              ].map((effect, i) => {
                const arr = [0, 2, 3, 5, 6, 8, 9, 11, 12, 14];
                const isDark = arr.includes(i);
                const bgColor = isDark ? "bg-orange-50" : "bg-orange-100";
                const borderColor = isDark
                  ? "border-orange-500"
                  : "border-orange-600";
                const textColor = isDark
                  ? "text-orange-800"
                  : "text-orange-900";

                return (
                  <div
                    key={i}
                    className={`${bgColor} p-4 rounded-xl border-l-4 ${borderColor} text-center`}
                  >
                    <p className={`!mb-0 ${textColor}`}>{effect}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Advantages and Disadvantages Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">Advantages and Disadvantages</h2>
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Advantages */}
              <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500">
                <h3 className="text-xl font-semibold !text-green-900 mb-4">
                  Advantages
                </h3>
                <p className="!text-green-700 text-base leading-relaxed">
                  Suboxone treatment lowers the urge to use opioids, drug
                  cravings, chances of relapse, and opioid withdrawal symptoms.
                </p>
              </div>

              {/* Disadvantages */}
              <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                <h3 className="text-xl font-semibold !text-red-900 mb-4">
                  Disadvantages
                </h3>
                <p className="!text-red-900 !text-base leading-relaxed !mb-2">
                  There are small risks associated with Suboxone treatment:
                </p>
                <ul className="space-y-2 text-red-700">
                  {[
                    "Suboxone can interact dangerously with alcohol",
                    "Suboxone must be taken daily and requires participation in a comprehensive addiction treatment program",
                  ].map((risk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Co-Pay Assistance Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-primary" />
            <h2 className="text-center">Co-Pay Assistance</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Copy assistance is valid only for patients with private insurance
            who are prescribed Suboxone for on-label use.
          </p>
          <div className="mt-8 bg-yellow-50 rounded-xl p-6 max-w-5xl mx-auto border-l-4 border-yellow-500">
            <h4 className="!text-yellow-900 mb-3">Exclusions</h4>
            <p className="text-yellow-700 text-sm leading-relaxed">
              Patients with government insurance are not eligible for the
              Assistance Program, including, but not limited to, Medicare,
              Medicaid, Medigap, VA, DOD, TriCare, CHAMPVA, or any other
              federally or state funded government-assisted program.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Medical Information Table Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="text-center">Important Medical Information:</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {/* Indications */}
              <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500">
                <h4 className="font-semibold !text-blue-900 mb-3">
                  Indications
                </h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Suboxone is used to treat opioid addiction in adults.
                </p>
              </div>

              {/* Contraindications */}
              <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                <h4 className="font-semibold !text-red-900 mb-3">
                  Contraindications
                </h4>
                <p className="text-red-700 text-sm leading-relaxed">
                  {`Do not take Suboxone with other opioid medicines,
                  benzodiazepines, alcohol, or street drugs. Do not inject
                  Suboxone sublingual film, stop it suddenly, or switch to other
                  medicines that contain buprenorphine without talking to your
                  healthcare provider. Tell your healthcare provider if you have
                  trouble breathing or lung problems, Addison's disease, an
                  enlarged prostate gland, problems urinating, liver, kidney or
                  gallbladder problems, alcoholism, a head injury or brain
                  problem, mental health problems, adrenal gland or thyroid
                  gland problems, tooth problems, or are pregnant or plan to
                  become pregnant, are breastfeeding or plan to breastfeed.`}
                </p>
              </div>
            </div>

            {/* Side Effects - Full Medical Information */}
            <div className="mt-6">
              <div className="bg-orange-50 p-6 rounded-xl border-t-4 border-orange-500">
                <h4 className="font-semibold !text-orange-900 mb-3">
                  Side Effects
                </h4>
                <p className="text-orange-700 text-sm leading-relaxed">
                  Suboxone can have serious side effects, including trouble
                  breathing, sleepiness, dizziness, problems with coordination,
                  physical dependence or abuse, liver problems, allergic
                  reactions, opioid withdrawal, decrease in blood pressure,
                  infertility, headache, nausea, vomiting, constipation, pain,
                  increased sweating, and insomnia.
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
                title: "Medication Management",
                href: "/medication-management",
              },
              {
                title: "Vivitrol",
                href: "/medication-management/vivitrol",
              },
              {
                title: "Wellness Exams",
                href: "/health-services/wellness-exams",
              },
              {
                title: "Substance Use Disorders",
                href: "https://wilmingtonmentalhealth.vercel.app/substance-use",
              },
              {
                title: "Adult Therapy",
                href: "https://wilmingtonmentalhealth.vercel.app/mental-health/adult-therapy",
              },
              {
                title: "MAT Program",
                href: "/medication-management/mat-program",
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
