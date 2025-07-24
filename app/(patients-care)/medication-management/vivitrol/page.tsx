import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import {
  Syringe,
  Shield,
  AlertTriangle,
  Heart,
  Clock,
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
            "/images/health-services/vivitrol-treatment (1).jpg",
            "/images/health-services/vivitrol-treatment (2).jpg",
            "/images/health-services/vivitrol-treatment (3).jpg",
            "/images/health-services/vivitrol-treatment (4).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Medication Management
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Vivitrol
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="max-w-7xl mx-auto py-26 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Syringe className="w-8 h-8 text-primary" />
              <h2>Vivitrol</h2>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-center  max-w-5xl mx-auto">
              We offer medication assisted treatment for alcohol and opioid
              dependence, combining medication and counseling services and
              monitoring usage over time as recommended by best-practice models.
              Vivitrol is an injectable medicine that can help you with alcohol
              and opioid dependence after you stop drinking alcohol or undergo
              detoxification. Treatment with Vivitrol makes your relapse
              prevention plan more effective.
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
      </section>

      {/* ─── What is Vivitrol Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-center">What is Vivitrol?</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Vivitrol is a prescription injectable medicine that can help block
            the effect of opioid, such as heroin or opioid pain medicines, and
            prevent relapse to opioid or alcohol dependence*. It is administered
            by deep gluteal injection every four weeks or once a month. Our
            healthcare providers can help you decide if Vivitrol is right for
            you.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            If you are trying to stop drinking or taking opioids, Vivitrol could
            be the right solution for you. Vivitrol must be used together with a
            recovery program, such as counseling, to be effective and it is
            required that you stop drinking or using opioids before you start
            receiving Vivitrol.
          </p>
          <div className="mt-8 bg-yellow-50 rounded-xl p-6 max-w-5xl mx-auto text-center border-l-4 border-yellow-500">
            <p className="text-yellow-800 text-sm">
              *It is not known if Vivitrol is safe and effective for children.
            </p>
          </div>
        </div>
      </section>

      {/* ─── How Does It Work Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-center">How Does It Work?</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Vivitrol contains an opioid antagonist called Naltrexone that blocks
            opioid receptors and decreases the euphoric effects of opioids and
            alcohol. The dosage of Vivitrol is administered once a month as
            intramuscular injection in the buttocks. Since Vivitrol is
            non-narcotic, there is no potential for misuse.
          </p>
          <div className="mt-8 bg-green-50 rounded-xl p-6 max-w-5xl mx-auto text-center border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Compliance Benefits
            </h3>
            <p className="text-green-700">
              Choosing the shot versus the pills has considerable benefits when
              it comes to compliance since there is no way to remove Vivitrol
              from the body after the shot is administered. Additionally, most
              people experience no side effects from Vivitrol and those who do
              only report mild to moderate symptoms, including nausea, headache,
              depression, anxiety, and fatigue.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Side Effects Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <h2 className="text-center text-red-600">Side Effects</h2>
          </div>
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Depressed mood",
                "Serious allergic reactions",
                "Dizziness",
                "Muscle cramps",
                "Nausea and vomiting",
                "Cold symptoms",
                "Sleepiness",
                "Decrease appetite",
                "Toothache",
                "Pneumonia",
                "Headache",
                "Painful joints",
                "Suicidal thoughts",
                "Suicidal behaviors",
              ].map((effect, i) => {
                const arr = [0, 2, 3, 5, 6, 8, 9, 11, 12];
                const isDark = arr.includes(i);
                const bgColor = isDark ? "bg-red-50" : "bg-red-100";
                const borderColor = isDark
                  ? "border-red-500"
                  : "border-red-600";
                const textColor = isDark ? "text-red-800" : "text-red-900";

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

      {/* ─── Dosage & Administration Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-center">Dosage & Administration</h2>
          </div>
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="!text-blue-900 mb-3">
                  Administration Requirements
                </h4>
                <ul className="space-y-2 text-blue-700">
                  {[
                    "Must be prepared and administered by a healthcare provider",
                    "Must only be administered as a deep intramuscular gluteal injection",
                    "The recommended dose of Vivitrol is 380mg",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h4 className="!text-orange-900 mb-3">
                  Pre-Treatment Requirements
                </h4>
                <p className="text-orange-700 text-base leading-relaxed">
                  A minimum of 7-10 days opioid-free prior the initiation of
                  Vivitrol is recommended to avoid precipitation of opioid
                  withdrawal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Important Facts Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center pt-26 mb-12 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="text-center">Important Facts</h2>
          </div>
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "The second peak is around 2-3 days later",
                "Concentration slowly declines around 14 days after dosing",
                "Peak naltrexone plasma concentration is around 2 hours after injection",
                "Total naltrexone exposure is three to four-fold higher in a single dose of Vivitrol 380mg compared to daily oral dosing of 50 mg",
              ].map((fact, i) => (
                <div
                  key={i}
                  className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500"
                >
                  <p className="text-orange-800 !mb-0">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Risks vs Benefits Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center mb-26">
        <div className="w-[85%]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Significant Risks */}
              <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                <h3 className="text-xl font-semibold !text-red-900 mb-4">
                  Significant Risks
                </h3>
                <ul className="space-y-2 text-red-700">
                  {[
                    "Risk of opioid overdose",
                    "Severe reaction at the injection site",
                    "Sudden opioid withdrawal",
                    "Liver damage",
                    "Hepatitis",
                  ].map((risk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-green-50 p-6 rounded-xl border-t-4 border-green-500">
                <h3 className="text-xl font-semibold !text-green-900 mb-4">
                  Benefits
                </h3>
                <ul className="space-y-2 text-green-700">
                  {[
                    "Easy to administer",
                    "Long acting",
                    "No risk of abuse",
                    "Little to no side effects",
                    "No addictive",
                    "Proven to be effective",
                    "Does not cause withdrawals",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Co-Pay Savings Program Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-primary" />
            <h2 className="text-center">Co-Pay Savings Program</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Some patients may qualify for a co-pay or deductible expense up to{" "}
            <strong>$500/month.</strong> The patient must be 18 years or older,
            have a prescription for Vivitrol, have commercial health insurance
            or pay with cash.
          </p>
          <div className="mt-8 bg-yellow-50 rounded-xl p-6 max-w-5xl mx-auto border-l-4 border-yellow-500">
            <h4 className="!text-yellow-900 mb-3">Exclusions</h4>
            <p className="text-yellow-700 text-sm leading-relaxed">
              Patients use federal or state healthcare programs, including
              Medicare Part D or Advantage plans, Medicaid Managed Care or
              Alternative Benefit Plans under the Affordable Care Act, Medigap,
              Veterans Administration, Department of Defense, TRICARE,
              State-funded programs are not eligible for saving programs. Other
              terms and conditions may apply.
            </p>
          </div>
          <p className="mt-4 text-center text-gray-600 italic">
            This is only a summary of the most important information about
            Vivitrol.
          </p>
        </div>
      </section>

      {/* ─── Medical Information Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h2>Important Medical Information:</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {/* Contraindication */}
              <div className="bg-red-50 p-6 rounded-xl border-t-4 border-red-500">
                <h4 className="font-semibold !text-red-900 mb-3">
                  Contraindication
                </h4>
                <p className="text-red-700 text-sm leading-relaxed">
                  If you are using or have a physical dependence on
                  opioid-containing medicines or opioid street drugs, such as
                  heroin, do not use Vivitrol. Tell your healthcare provider if
                  you have liver problems, hemophilia, kidney problems, or any
                  other medical conditions. Call 9-1-1 or get emergency medical
                  help right away in all cases of known or suspected opioid
                  overdose, even if naloxone is administered.
                </p>
              </div>

              {/* Indications */}
              <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500">
                <h4 className="font-semibold !text-blue-900 mb-3">
                  Indications
                </h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Vivitrol is recommended for patients who are unable to abstain
                  from alcohol or opioid use.
                </p>
              </div>

              {/* Contraindications */}
              <div className="bg-purple-50 p-6 rounded-xl border-t-4 border-purple-500">
                <h4 className="font-semibold !text-purple-900 mb-3">
                  Contraindications
                </h4>
                <p className="text-purple-700 text-sm leading-relaxed">
                  Vivitrol is not recommended if you are receiving opioid
                  analgesics, have current opioid dependence or experiencing
                  acute opioid withdrawal, have failed the naloxone challenge
                  test, have a positive urine screen for opioids, have exhibited
                  hypersensitivity to naltrexone or any other components of it
                  diluent.
                </p>
              </div>

              {/* Vulnerabilities */}
              <div className="bg-orange-50 p-6 rounded-xl border-t-4 border-orange-500">
                <h4 className="font-semibold !text-orange-900 mb-3">
                  Vulnerabilities
                </h4>
                <p className="text-orange-700 text-sm leading-relaxed">
                  After opioid detoxification, patients are likely to have a
                  reduced tolerance to opioids. Therefore, any use of previously
                  tolerated doses of opioids could result in the potentially
                  life-threatening opioid intoxication, such as respiratory
                  compromise or arrest, circulatory collapse, etc.
                </p>
              </div>
            </div>

            {/* Side Effects */}
            <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500">
              <h4 className="font-semibold !text-yellow-900 mb-3">
                Side Effects
              </h4>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Vivitrol injections may be followed by pain, tenderness,
                induration, swelling, erythema, bruising, pruritus; and severe
                reaction in some cases. The side effects seen most frequently in
                association with Vivitrol therapy for alcohol dependence include
                nausea, vomiting, injection site reactions, arthralgia,
                arthritis, joint stiffness, muscle cramps, dizziness or syncope,
                sedation, anorexia, decreased appetite or other appetite
                disorders. The side effects seen most frequently in association
                with Vivitrol in patients with opioid dependence include hepatic
                enzyme abnormalities, injection site pain, nasopharyngitis,
                insomnia, and toothache. Cases of hepatitis, clinically
                significant liver dysfunction, depression, suicidality,
                pneumonia, anaphylaxis, and interference with laboratory tests
                have been observed.
              </p>
            </div>

            {/* Precipitations */}
            <div className="bg-gray-100 p-6 rounded-xl border-t-4 border-gray-500">
              <h4 className="font-semibold !text-gray-900 mb-3">
                Precipitations
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Withdrawal may be participated abruptly by administration of an
                opioid antagonist to a patient with opioid dependence, which may
                require hospitalization. An opioid-free interval of 7-10 days is
                recommended. Patients transitioning from buprenorphine or
                methadone may be vulnerable to precipitated withdrawal for as
                long as 2 weeks.
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
                title: "Medication Management",
                href: "/medication-management",
              },
              {
                title: "Wellness Exam",
                href: "/health-services/wellness-exam",
              },
              {
                title: "Suboxone",
                href: "/medication-management/suboxone",
              },
              {
                title: "Spravato",
                href: "/health-services/spravato",
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
