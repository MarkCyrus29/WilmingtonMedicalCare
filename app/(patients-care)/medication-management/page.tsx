import HeroSlideshow from "@/components/ui/HeroSlideshow";
import CallBanner from "@/components/ui/CallBanner";
import { Stethoscope, Users, Monitor, Phone } from "lucide-react";
import RelatedServices from "@/components/ui/RelatedServices";
import Accordion from "@/components/ui/FAQAccordion";
import Image from "next/image";

function page() {
  return (
    <main className="scroll-smooth">
      <div className="h-full w-full relative">
        <HeroSlideshow
          images={[
            "/images/medication-management/medication-management (1).jpg",
            "/images/medication-management/medication-management (2).jpg",
            "/images/medication-management/medication-management (3).jpg",
            "/images/medication-management/medication-management (4).jpg",
            "/images/medication-management/medication-management (5).jpg",
          ]}
        />
        <div className="absolute top-[40%] transform -translate-y-[40%] w-screen flex flex-col items-center text-center pt-16 z-30">
          <h4 className="!text-background text-lg drop-shadow-2xl">
            Mental Health Services
          </h4>
          <h1 className="!text-background text-3xl font-bold mt-2 drop-shadow-2xl">
            Medication Management
          </h1>
        </div>
      </div>

      {/* ─── Introduction Section ─── */}
      <section className="max-w-[90rem] mx-auto py-24 px-6 flex flex-col md:flex-row items-stretch md:items-center gap-8">
        <div className="relative w-full md:w-1/2 h-64 md:h-[450px] flex-shrink-0">
          <Image
            src={"/images/medication-management/medication-management (6).jpg"}
            alt={"Introduction Picture"}
            fill
            className="object-cover rounded-lg shadow-lg transition-all hover:shadow-xl "
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Stethoscope className="w-8 h-8 text-primary" />
            <h2 className="text-left">Medication Management</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Our care model is preventative and therapeutic in nature, consisting
            of direct supervision of various mental health issues to ensure the
            right medication is being used and to help reduce or eliminate
            symptoms effectively. Our team is deeply aware of your unique needs
            and works to increase the efficacy of your medication treatment.
          </p>
        </div>
      </section>

      {/* ─── Who Should Consider Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-center">
              Who Should Consider Medication Treatment?
            </h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Every individual and psychiatric medications react differently
            within their bodies brain chemistry. Our healthcare providers
            empower patients in understanding the risks medication can pose to
            their health, knowing what medication should be taken, and what
            dosage may benefit an individual the most while thoroughly
            addressing issues and offering a medication management plan.
          </p>
          <div className="mt-8 bg-blue-50 rounded-xl p-6 max-w-5xl mx-auto text-center border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Prescriber Details
            </h3>
            <p className="text-blue-700">
              Prescribers can offer details about your prescribed medications,
              including interactions with other medications, potential side
              effects, and other considerations that may affect recovery.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Ongoing Monitoring Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-26 mb-0">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Monitor className="w-8 h-8 text-primary" />
            <h2 className="text-center">Ongoing Monitoring</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Our medication management program involves evaluating your needs for
            psychotropic medications, followed by the provision of a
            prescription, and ongoing medical monitoring of the use of those
            medications.
          </p>
          <div className="mt-8 bg-green-50 rounded-xl p-6 max-w-5xl mx-auto text-center border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Our Approach
            </h3>
            <p className="text-green-700">
              We are conservative with the use of psychotropic medications and
              will conduct a thorough review of the possible side effects
              medication may have and which medication may fit your needs. We
              will closely monitor the effect the medication is having to help
              you achieve your desired outcome.
            </p>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            These appointments as well help understand the potential risks from
            mixing medications with foods or supplements for your personal
            safety but also to increase the effectiveness of the medication you
            have been prescribed. In addition, these appointments help you
            understand the role in managing your medications and how crucial it
            is for your recovery and overall mental health.
          </p>
        </div>
      </section>

      {/* ─── Telepsychiatry Section ─── */}
      <section className="h-full w-screen flex flex-col items-center justify-center py-26 bg-gray-50">
        <div className="w-[85%]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Phone className="w-8 h-8 text-primary" />
            <h2 className="text-center">Telepsychiatry</h2>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            We offer telepsychiatry for those who cannot come into the office.
            You can conveniently access your follow-up sessions virtually. Let
            your provider know if you are interested in engaging in
            telepsychiatry or contact us if you need more information. You can
            also email or text our front desk if you experience any technical
            issues.
          </p>
        </div>
      </section>

      <section className="h-full w-screen flex flex-col gap-10 items-center justify-center my-20">
        <div className="w-[85%]">
          <h2>Common Medication Management Questions:</h2>
          <Accordion
            questions={[
              {
                question: "Who provides medication management services?",
                answer: (
                  <>
                    <strong>
                      Medication management works best with a team approach.
                    </strong>{" "}
                    Every member of our healthcare team, including you, our
                    nurse practitioners, and any specialist you routinely see
                    should help make decisions about your treatment. This can
                    help you manage your medication use, stay healthy, be
                    hospitalized less often, and spend less money on healthcare
                    over time.
                  </>
                ),
              },
              {
                question: "How do I get a prescription refilled?",
                answer: (
                  <>
                    <strong>
                      Please inform your provider during your scheduled
                      appointment if you need a prescription refilled.
                    </strong>{" "}
                    We recommend that you check your bottle for any refills
                    remaining between appointments. Please ask your pharmacist
                    to fax or electronically transmit any refill request to your
                    provider and allow 48 hours for an authorization.{" "}
                    <strong>Our fax number is 910-777-5273.</strong>
                  </>
                ),
              },
              {
                question: "When is payment due?",
                answer: (
                  <>
                    <strong>
                      All payments are expected at time of service, unless a
                      payment schedule has been set up with the administrative
                      team.
                    </strong>{" "}
                    Any account with an outstanding balance must be paid in full
                    within 30 days. Should payments not be made on the day of
                    service, we reserve the right to cancel your appointment. We
                    accept cash, check, Visa, Mastercard, American Express, and
                    Discover.
                  </>
                ),
              },
              {
                question: "What happens if I need to cancel my appointment?",
                answer: (
                  <>
                    <strong>
                      If you need to cancel or reschedule your appointment,
                      please call 24-hours in advance
                    </strong>{" "}
                    before your scheduled appointment date to avoid being
                    charged a missed appointment fee.
                  </>
                ),
              },
              {
                question:
                  "What happens if I am late to my scheduled appointment?",
                answer: (
                  <>
                    <strong>
                      If you are 15 minutes late for our scheduled appointment,
                      you may be asked to reschedule.
                    </strong>
                  </>
                ),
              },
              {
                question:
                  "Can I receive a statement or invoice for the payments that I have made?",
                answer: (
                  <>
                    <strong>
                      We will send out a statement to the address we have on
                      file if a payment has not been received from your
                      insurance carrier.
                    </strong>{" "}
                    If payment is not received within 30 days, you will receive
                    a second notification of past due amount before we can
                    charge the standing balance using your credit card on file.
                  </>
                ),
              },
              {
                question: "Who can have access to my medical records?",
                answer: (
                  <>
                    <strong>
                      The use or disclosure of your personal health information
                      (PHI) to others requires your consent or authorization,
                    </strong>{" "}
                    especially when the purpose of such exchange is to provide
                    or arrange health care, to receive reimbursement for the
                    services we provide to you, and for other related
                    administrative activities we conduct. Wilmington Medical
                    Care may be required or permitted by certain laws to use and
                    disclose your medical information for other purposes without
                    your consent or authorization.
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>
      <section className="h-full w-screen flex flex-col items-center justify-center my-26">
        <div className="w-[85%]">
          <h2>Other Offered Services:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Intake Evaluation",
                href: "/medication-management/intake-evaluation",
              },
              {
                title: "Wellness Exams",
                href: "/health-services/wellness-exams",
              },
              {
                title: "Lab Services",
                href: "/lab-services",
              },
              {
                title: "Adult Therapy",
                href: "https://wilmingtonmentalhealth.netlify.app/mental-health/adult-therapy",
              },
              {
                title: "Substance Use Disorders",
                href: "https://wilmingtonmentalhealth.netlify.app/substance-use",
              },
              {
                title: "Virtual Visits",
                href: "/virtual-visits",
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
