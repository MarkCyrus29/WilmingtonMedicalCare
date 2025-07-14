import Image from "next/image";
import { Heart, Users, Shield, Sparkles, Globe, UserCheck } from "lucide-react";
import CallBanner from "@/components/ui/CallBanner";
import HeroSlideshow from "@/components/ui/HeroSlideshow";

export default function page() {
  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <div className="h-full w-full relative">
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
            Who We Are
          </h1>
        </div>
      </div>
      {/* Main Who We Are Section */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-us/who-we-are.jpg"
                alt="Wilmington Mental Health Team"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Since 2017, Serving Our Community
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Since 2017, Wilmington Mental Health has provided easy access to
                quality care in a convenient location in the port city. Over the
                past decade Wilmington has experienced an influx and the need to
                serve the minority and underserved individuals has increased.
              </p>
              <p>
                In fact, one in four adults in the area experience a mental
                health condition each year but only few seek help. We want to
                offer genuine and compassionate support to those afflicted with
                mental and physical illness.
              </p>
              <p>
                Our treatment programs are person-centered specific. Our team
                includes likeminded providers whose personal experiences and
                worldviews align with the company&apos;s philosophy. We use
                evidence-based methods and follow individualized treatment plans
                to offer solutions to our patients, their families, and their
                significant others so that they can achieve life balance once
                again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Wilmington Mental Health stands as a place of connection, healing,
              and empowerment. We are proud to offer behavioral health services
              that bring together mental health therapy, psychiatry, and medical
              care under one roof.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              We serve individuals and families across all walks of life,
              backgrounds, and experiences—because we believe everyone deserves
              the opportunity to heal, grow, and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8 text-blue-600" />,
              bg: "bg-blue-100",
              title: "Whole-Person Care",
              text: `We treat the whole person, not just symptoms. Our integrated
              approach allows for seamless collaboration between therapists,
              psychiatrists, and medical professionals to ensure patients
              receive holistic and consistent care.`,
            },
            {
              icon: <Shield className="w-8 h-8 text-green-600" />,
              bg: "bg-green-100",
              title: "Mental Health is Health",
              text: `We normalize seeking mental health support by treating it with
              the same respect and urgency as any other health concern.
              Emotional wellness is essential to overall well-being.`,
            },
            {
              icon: <UserCheck className="w-8 h-8 text-purple-600" />,
              bg: "bg-purple-100",
              title: "Compassion in Every Encounter",
              text: `We recognize that emotional pain can present in many ways. We
              meet our patients where they are—with patience, empathy, and
              nonjudgmental support. Even the most difficult moments are an
              invitation to deeper healing.`,
            },
            {
              icon: <Globe className="w-8 h-8 text-orange-600" />,
              bg: "bg-orange-100",
              title: "Access for All",
              text: `We serve individuals from all socioeconomic, racial, cultural,
              gender, and faith backgrounds. We are committed to cultural
              humility, inclusive care, and reducing systemic barriers to
              treatment.`,
            },
            {
              icon: <Users className="w-8 h-8 text-pink-600" />,
              bg: "bg-pink-100",
              title: "Support That Extends to Families",
              text: `We understand that mental illness affects not just individuals,
              but entire families. We support the healing of relationships and
              offer tools for family members to be part of the recovery
              process.`,
            },
            {
              icon: <Sparkles className="w-8 h-8 text-yellow-600" />,
              bg: "bg-yellow-100",
              title: "Joy in the Work",
              text: `We do this work because we believe in it. Our team brings
              integrity, professionalism, and heartfelt joy to helping people
              reclaim their lives and futures.`,
            },
          ].map(({ icon, bg, title, text }, idx) => (
            <div
              key={idx}
              className="border-2 border-blue-100 hover:border-blue-300 transition-colors duration-300 h-full rounded-xl p-6 text-center"
            >
              <div
                className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                {icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Forward Section */}
      <section className="max-w-7xl mx-auto py-24 pt-0 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Vision Forward
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Wilmington Mental Health continues to evolve with our patients and
            our community. As we embrace a future where mental health care is
            seen as essential and accessible, we remain committed to breaking
            down barriers, strengthening relationships, and helping each
            individual become the best version of themselves.
          </p>
          <p>
            We reject the stigma around mental health, we embrace our humanity.
            We provide compassionate, unbiased support to all of our patients
            regardless of race, sex, age, national origin, religion, or
            disability. In the process, we challenge conventional beliefs and
            follow a collaborative approach to provide exceptional patient care
            in the communities we serve.
          </p>
          <div className="text-center pt-8">
            <p className="text-2xl font-bold text-blue-600 mb-6">
              We are Wilmington Mental Health + Medical Care.
            </p>
            <p className="text-xl text-gray-800">
              And we are here to help you heal, hope, and move forward—together.
            </p>
          </div>
        </div>
      </section>

      <CallBanner />
    </main>
  );
}
