import { Users, Shield, Calendar, Phone, FileText } from "lucide-react";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";

export default function WhoWeServe() {
  const vulnerablePopulations = [
    "Black/African-Americans",
    "Latinos",
    "Indigenous people",
    "Religious minorities",
    "LGBTQ+ individuals",
    "Individuals with disabilities",
    "People impacted by persistent poverty",
  ];

  const keyPopulations = [
    "Survivors of Domestic Violence",
    "Adults 18+ with substance use disorders",
    "Same-sex couples experiencing marital conflict",
    "Adults with mental illness affecting daily functioning",
    "Military personnel, veterans, and their families",
    "Children with behavioral health challenges",
    "Children with serious emotional disturbances (ages 5-6)",
    "Children and adolescents with substance use disorders",
  ];

  const statistics = [
    { stat: "1 in 5", description: "U.S. adults live with a mental illness" },
    {
      stat: "41%",
      description:
        "of U.S. Veterans experience a mental health condition in 2024",
    },
    {
      stat: "80-90%",
      description:
        "of older adults receive appropriate treatment for depression",
    },
    {
      stat: "7-42%",
      description:
        "of women are diagnosed with serious mental health concerns vs. men",
    },
    {
      stat: "2nd",
      description:
        "leading cause of death among adolescents ages 10-14 is suicide",
    },
    {
      stat: "2.5x",
      description:
        "more likely for LGB adults to experience depression/anxiety",
    },
    {
      stat: "67%",
      description: "of homeless individuals experience mental health disorders",
    },
    { stat: "50%", description: "of lifetime mental illness begins by age 14" },
  ];

  return (
    <main className="w-screen h-full">
      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="h-full w-full relative">
          <HeroSlideshow
            images={[
              "/images/home/slideshow-images/hero5.JPG",
              "/images/home/slideshow-images/hero4.JPG",
              "/images/home/slideshow-images/hero3.JPG",
              "/images/home/slideshow-images/hero2.JPG",
              "/images/home/slideshow-images/hero1.JPG",
            ]}
          />
          <div className="absolute top-30 w-screen flex flex-col items-center text-center pt-16 z-30">
            <h4 className="!text-background text-lg drop-shadow-2xl">
              Wilmington Mental Health + Medical Care
            </h4>
            <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
              Who We Serve
            </h1>
          </div>
        </section>

        <section className="text-center my-24">
          <h1 className=" mb-6">Who We Serve</h1>
          <p className="max-w-4xl mx-auto leading-relaxed">
            At Wilmington Mental Health, we provide accessible treatment and
            care for patients ranging from children to seniors. Our
            comprehensive services support individuals, couples, families, and
            specialized populations with personalized, culturally-sensitive
            mental health care.
          </p>
        </section>

        {/* Process Overview */}
        <section className="mb-12 border-l-4 border-primary w-full p-10 bg-primary/5 flex justify-center">
          <div className="md:w-[85%] sm:w-[95%] w-full ">
            <div className="mb-4">
              <h3 className="flex items-center gap-4">
                <Calendar className="ml-2 h-5 w-5 text-secondary" />
                Our Process
              </h3>
            </div>
            <div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Phone className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">1. Contact Us</h4>
                    <p className="text-sm text-gray-600">
                      Call or text to schedule an appointment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">2. Matching</h4>
                    <p className="text-sm text-gray-600">
                      We match you with a therapist based on your needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">3. Preparation</h4>
                    <p className="text-sm text-gray-600">
                      Complete forms and arrive early for your appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vulnerable Populations */}
        <section className="w-full h-full flex flex-col justify-center items-center py-24">
          <div className="md:w-[85%] sm:w-[95%] w-full ">
            <div className="mb-12">
              <h2 className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-emerald-600" />
                Serving Vulnerable and Underserved Populations
              </h2>
              <p>
                We prioritize care for populations that have been denied
                opportunities to participate and face systemic barriers to
                healthcare access.
              </p>
            </div>
            <div>
              <div className="grid md:grid-cols-2 gap-14">
                <div>
                  <h3 className="font-semibold mb-4 text-emerald-700">
                    Priority Populations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {vulnerablePopulations.map((population, index) => (
                      <div
                        key={index}
                        className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-base py-1.5 p-3 rounded-full transition-all hover:border-emerald-400"
                      >
                        {population}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-emerald-700">
                    Common Barriers We Address
                  </h3>
                  <ul className="space-y-2 text-lg text-gray-600">
                    <li>• Financial, educational, or housing limitations</li>
                    <li>• Transportation and mobility challenges</li>
                    <li>• Communication barriers</li>
                    <li>• Fear and distrust of healthcare systems</li>
                    <li>• Discrimination and systemic inequities</li>
                    <li>• Limited knowledge of healthcare navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Life Stages */}
        <section className="w-full h-full flex flex-col justify-center items-center py-24 ">
          <div className="md:w-[85%] sm:w-[95%] w-full ">
            <div>
              <h2>Mental Health Across Life Stages</h2>
              <p>
                Mental health needs evolve throughout our lives, and we provide
                specialized care for each stage.
              </p>
            </div>
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 transition-all hover:border-purple-300">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    Childhood
                  </h4>
                  <p className="text-sm text-purple-700">
                    Early detection and intervention for mental health
                    conditions that may go unnoticed.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 transition-all hover:border-blue-300">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Young Adults
                  </h4>
                  <p className="text-sm text-blue-700">
                    Support during life transitions, relationships, and early
                    parenthood challenges.
                  </p>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg border border-rose-100 transition-all hover:border-rose-300">
                  <h4 className="font-semibold text-rose-800 mb-2">
                    Families & Women
                  </h4>
                  <p className="text-sm text-rose-700">
                    Comprehensive care for family dynamics and women&apos;s
                    mental health across life phases.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 transition-all hover:border-amber-300">
                  <h4 className="font-semibold text-amber-800 mb-2">
                    Older Adults
                  </h4>
                  <p className="text-sm text-amber-700">
                    Specialized care for age-related mental health challenges
                    and cognitive concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Populations */}
        <section className="w-full h-full flex flex-col justify-center items-center py-24">
          <div className="md:w-[85%] sm:w-[95%] w-full ">
            <div className="mb-10">
              <h2>Specialized Services for Key Populations</h2>
            </div>
            <div>
              <div className="grid md:grid-cols-2 gap-4">
                {keyPopulations.map((population, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">
                      {population}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="w-full h-full flex justify-center py-24">
          <div className="md:w-[85%] sm:w-[95%] w-full ">
            <div>
              <h2>Mental Health by the Numbers</h2>
              <p>
                Understanding the scope and impact of mental health in our
                communities.
              </p>
            </div>
            <div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {statistics.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 transition-all hover:border-blue-300"
                  >
                    <h3 className=" font-bold !text-primary mb-2">
                      {item.stat}
                    </h3>
                    <p className="!text-base !text-secondary leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CallBanner />
      </div>
    </main>
  );
}
