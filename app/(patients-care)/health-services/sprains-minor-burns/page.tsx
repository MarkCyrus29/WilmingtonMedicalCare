import HeroSlideshow from "@/components/ui/HeroSlideshow";
import HorizontalCard from "@/components/ui/HorizontalCard";
import CallBanner from "@/components/ui/CallBanner";
import Image from "next/image";
import { AlertTriangle, Bandage, Shield, Heart } from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/health-services/sprains-minor-burns (4).jpg",
            "/images/health-services/sprains-minor-burns (3).jpg",
            "/images/health-services/sprains-minor-burns (2).jpg",
            "/images/health-services/sprains-minor-burns (5).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Health Service
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Sprains & Minor Burns
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2 className="text-center">Sprains & Minor Burns</h2>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Sprains, burns, and lacerations are common events that may need
            medical attention but may not need a visit to the emergency room.
            There are times when a minor strain or burn can be self-treated at
            home by simply taking over-the-counter medications and resting the
            injured body part.
          </p>
          <div className="max-w-7xl mx-auto pb-26 px-6">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="mt-8 w-full lg:w-1/2">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/health-services/sprains-minor-burns (1).jpg"
                    alt="Wilmington Health Services"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="mt-8 max-w-4xl mx-auto">
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span>
                        Other times, you may need to apply ice or a compress to
                        the area
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span>
                        First-degree burns may need wet compresses, petroleum
                        jelly, and be covered by a nonstick bandage to protect
                        the area from infection
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span>
                        There are times when applying a bandage can do more harm
                        than good if it is not done properly
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 bg-green-50 rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">
                    When to Treat at Home
                  </h3>
                  <p className="text-green-700 text-center">
                    The rule of thumb is that if you are only swelling or
                    bruising, your pain is manageable and when you can move a
                    little, you can treat the sprain at home. Nevertheless, it
                    is always recommended that you visit your primary care
                    provider if you need a professional to take a look at it,
                    especially if several days have passed and your injury does
                    not seem to improve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sprain Treatment Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center pt-0 py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center text-center justify-center gap-3 mb-6">
            <Bandage className="w-8 h-8 text-primary" />
            <h2 className="text-center">Sprain Treatment</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            We treat mild-to-moderate ankle sprains and strains in our office to
            provide support and prevent subsequent sprains during your daily
            activities. A sprain is an injury to the tendons, often around your
            ankle, foot, wrist, thumb, knee, leg, or back, while a strain occurs
            when a ligament is overstretched.
          </p>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-3">
                  When to See Our Provider
                </h4>
                <p className="text-blue-700">
                  If you feel numbness or tingling and your injury needs medical
                  attention, you may want to seek one of our primary care
                  providers.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-3">
                  When to Go to Urgent Care
                </h4>
                <p className="text-red-700">
                  If the injured area looks bent, swollen, discolored, and you
                  cannot put weight on it, please go to urgent care immediately
                  as you may have a fracture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fracture Treatment Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-center">Fracture Treatment</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center">
            We treat wounds and minor injuries to prevent infections. Please
            visit our office if you have a wound that does not stop bleeding,
            with a foreign object inside, are experiencing swelling or bruising,
            or are unable to bear weight on it.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6 text-center">
              We Can Treat:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
              {[
                {
                  title: "Minor broken bone in your fingers or toes",
                  border: "border-blue-500",
                  textColor: "text-blue-500",
                  icon: 0,
                },
                {
                  title: "Mild to moderate back pain",
                  border: "border-green-500",
                  textColor: "text-green-500",
                  icon: 1,
                },
                {
                  title: "Small cuts or lacerations",
                  border: "border-purple-500",
                  textColor: "text-purple-500",
                  icon: 2,
                },
                {
                  title: "Sprains or strains",
                  border: "border-yellow-500",
                  textColor: "text-yellow-500",
                  icon: 3,
                },
                {
                  title: "Minor burns",
                  border: "border-red-500",
                  textColor: "text-red-500",
                  icon: 4,
                },
                {
                  title: "Black eyes",
                  border: "border-indigo-500",
                  textColor: "text-indigo-500",
                  icon: 5,
                },
              ].map(({ title, border, textColor, icon }, i) => {
                return (
                  <HorizontalCard
                    key={i}
                    kind="injury"
                    border={border}
                    textColor={textColor}
                    icon={icon}
                    title={title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Burn Treatment Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center mt-26 py-26 bg-orange-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
            <h2 className="text-center !text-orange-600">Burn Treatment</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Minor burns can be safely managed by our primary care providers and
            considerably influence your healing. Burns can produce inflammation,
            pain, tenderness, and infection, making your body susceptible to the
            other presence of harmful microorganisms in the blood or other
            tissues, which can lead to malfunction of organs and even death.
          </p>

          <div className="mt-8 max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">
              During Your Visit
            </h3>
            <ul className="space-y-4 text-lg flex flex-col items-center">
              {[
                "We will assess for infection, healing, and provide proper wound care",
                "We will update your tetanus immunization if your wound is deeper than a superficial burn",
                "We may also refer you for surgery to help prevent or lessen scarring and contractures",
              ].map((text, i) => (
                <li key={i} className="text-xl flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Minor Injuries Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-center">Minor Injuries</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center">
            Minor injuries happen to people of all ages and can include scrapes,
            cuts, bruises, sprains, and strains. We routinely take care of minor
            injuries in our office and clean and bandage scrapes and burns,
            evaluate, and treat strains, sprains, insect and animal bites, and
            remove stitches.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Common Minor Injuries We Treat:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Burns",
                  icon: "🔥",
                  color: "red",
                },
                {
                  title: "Cuts and Bruises",
                  icon: "🩹",
                  color: "blue",
                },
                {
                  title: "Insect Bites",
                  icon: "🐛",
                  color: "green",
                },
                {
                  title: "Animal Bites",
                  icon: "🐶",
                  color: "yellow",
                },
                {
                  title: "Lacerations",
                  icon: "✂️",
                  color: "purple",
                },
                {
                  title: "Sprains and Strains",
                  icon: "🦵",
                  color: "orange",
                },
              ].map((injury, i) => {
                const colorClasses = {
                  red: "border-red-500 bg-red-50",
                  blue: "border-blue-500 bg-blue-50",
                  green: "border-green-500 bg-green-50",
                  yellow: "border-yellow-500 bg-yellow-50",
                  purple: "border-purple-500 bg-purple-50",
                  orange: "border-orange-500 bg-orange-50",
                };
                return (
                  <div
                    key={i}
                    className={`p-6 rounded-xl border-t-4 ${
                      colorClasses[injury.color as keyof typeof colorClasses]
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{injury.icon}</div>
                      <h4 className="font-semibold text-gray-800">
                        {injury.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Emergency Room Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-red-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-center text-red-600">
              Reasons to Visit the ER
            </h2>
          </div>
          <p className="text-center text-red-700 mb-8">
            These conditions require immediate emergency room attention and
            should not be treated in our office:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Broken Bones",
                icon: "🦴",
              },
              {
                title: "Severe Pain",
                icon: "😣",
              },
              {
                title: "Bone Protrusion",
                icon: "⚠️",
              },
              {
                title: "Uncontrollable Bleeding",
                icon: "🩸",
              },
              {
                title: "Loss of Consciousness",
                icon: "😵",
              },
            ].map((emergency, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border-l-4 border-red-500 text-center"
              >
                <div className="text-4xl mb-3">{emergency.icon}</div>
                <h4 className="font-semibold text-red-800">
                  {emergency.title}
                </h4>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-100 rounded-xl p-6 max-w-4xl mx-auto text-center">
            <p className="!text-red-800 ">
              If you experience any of these symptoms, please go to the
              emergency room immediately or call <strong>911.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ─── Other Services Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 bg-gray-50">
        <div className="w-[85%]">
          <h2>
            Other Services Offered at Wilmington Mental Health + Medical Care
          </h2>
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
