import { teamData, TeamMember } from "@/app/data/teamData";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/ui/PageBanner";
import CallBanner from "@/components/ui/CallBanner";
import { Globe } from "lucide-react";
import Card from "@/components/ui/Card";

const groupedByDepartment = teamData.reduce<Record<string, TeamMember[]>>(
  (acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  },
  {}
);

export default function OurTeamPage() {
  return (
    <main>
      <PageBanner
        title="*picture of team*"
        imageSrc="/images/home/slideshow-images/hero1.JPG"
        alt="Phone Image"
        subtitle="Meet Our Team"
      />
      <section className="flex flex-col items-center">
        <div className="max-w-6xl py-24 px-4 justify-center items-center">
          <h2 className="text-center">Meet Our Team</h2>
          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-12 mt-14">
            <Card
              title="Primary Care Provider"
              desc="Providing general medical care. They can diagnose and treat physical illnesses, as well as refer you to a specialist if needed."
            />
            <Card
              title="Primary Care Provider"
              desc="Providing general medical care. They can diagnose and treat physical illnesses, as well as refer you to a specialist if needed."
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen pt-12 py-24 px-4 ">
        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(groupedByDepartment).map(([department, members]) => (
            <section key={department}>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 border-b border-[var(--color-gray)] pb-2">
                {department}
              </h3>

              <div className="space-y-6 flex flex-col">
                {members.map((member, index) => (
                  <Link
                    key={member.id + index}
                    href={`/our-team/${member.id}`}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  >
                    {/* Avatar */}
                    <div className="relative w-24 h-24 bg-[var(--color-gray)] rounded-full flex items-center justify-center border border-dark overflow-hidden flex-shrink-0">
                      <Image
                        src={member.pictureSrc}
                        alt={`Portrait of ${member.name}`}
                        fill
                        className="object-cover rounded-full"
                        sizes="96px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-1">
                      {/* Name + Credentials */}
                      <h3 className="text-lg font-normal text-[var(--color-foreground)]">
                        <strong>{member.name}</strong>
                        {member.credentials.length > 0 && (
                          <i>, {member.credentials.join(", ")}</i>
                        )}
                      </h3>

                      {/* Role */}
                      <p className="text-sm text-dark/60">{member.role}</p>

                      {/* Languages */}
                      {member.languages && member.languages.length > 0 && (
                        <p className="!text-base !text-dark/70 flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          {member.languages.join(", ")}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
          <section>
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 border-b border-[var(--color-gray)] pb-2">
              Staff
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { name: "Algernon Williams", role: "Medical Assistant" },
                { name: "Averie Garcia", role: "Receptionist" },
              ].map((staff, i) => (
                <div key={i} className="space-y-6 flex flex-col">
                  <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div className="flex-1 space-y-1">
                      <h3 className="text-lg font-normal text-[var(--color-foreground)]">
                        <strong>{staff.name}</strong>
                        <i>, {staff.role}</i>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="pt-12 py-24 ">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-center mb-10">Our Partnered Team</h2>
          <div className="flex flex-col md:flex-row w-full gap-4">
            {[
              {
                name: "Dr. Perry Stanley",
                id: "perry-stanley",
                img: "/images/our-team/Perry.jpg",
              },
              {
                name: "Havah Henzler",
                id: "havah-henzler",
                img: "/images/our-team/Havah.png",
              },
              {
                name: "Stacy Tarantino",
                id: "stacy-tarantino",
                img: "/images/our-team/Stacy Tarantino.JPG",
              },
            ].map((partner, i) => (
              <a
                className=""
                key={i}
                href={
                  "https://wilmingtonmentalhealth.vercel.app/our-team/" +
                  partner.id
                }
              >
                <Card
                  title={partner.name}
                  desc="Wilmington Mental Health"
                  img={partner.img}
                  customHeight="clamp(300px, 18vh, 200px)"
                  customWidth="clamp(360px, 20vw, 600px)"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      <CallBanner />
    </main>
  );
}
