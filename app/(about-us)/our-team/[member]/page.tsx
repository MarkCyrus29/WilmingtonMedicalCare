import { teamData } from "@/app/data/teamData";
import {
  Users,
  BookOpen,
  Shield,
  MapPin,
  Calendar,
  Heart,
  Leaf,
  Globe,
} from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";
import CallBanner from "@/components/ui/CallBanner";

interface PageParams {
  member: string;
}

type Props = {
  params: Promise<PageParams>;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  return teamData.map((member) => ({ member: member.id }));
}

export default async function Page({ params }: Props) {
  const { member: memberId } = await params;
  const member = teamData.find((m) => m.id === memberId);
  if (!member) return notFound();

  return (
    <main className="min-h-screen bg-background ">
      <article className="max-w-4xl mx-auto space-y-8 my-8">
        <header className="bg-white rounded-xl shadow-lg overflow-hidden text-center animate-fade-in ">
          <div className="relative h-44 w-full bg-gray-200">
            <Image
              src={member.bannerSrc}
              alt="Profile banner"
              fill
              className="object-contain w-full h-full p-6"
            />
          </div>

          <figure className="w-32 h-32 mx-auto -mt-24 overflow-hidden rounded-full relative z-10 border-4 border-white shadow-lg flex items-center justify-center bg-[var(--color-gray)] ">
            <Image
              src={member.pictureSrc}
              alt={`Portrait of ${member.name}`}
              width={128}
              height={128}
              className="block object-cover rounded-full "
            />
          </figure>

          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mt-4">
            {member.name}
          </h2>

          {member.credentials?.length > 0 && (
            <p className="!text-dark !mb-2 px-10">
              {member.credentials.join(", ")}
            </p>
          )}

          <p>{member.role}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="inline-flex items-center bg-accent text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-accent/30 hover:text-accent transition-all">
              <BookOpen className="w-4 h-4 mr-1" />
              {member.frameworkTag}
            </span>
            <span className="inline-flex items-center bg-primary text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-primary/30 hover:text-primary transition-all">
              <Users className="w-4 h-4 mr-1" />
              {member.idealPopulation}
            </span>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-xl shadow p-6">
            <h4 className="font-semibold flex items-center mb-2 text-foreground">
              <BookOpen className="w-5 h-5 mr-2 text-accent" />
              Theoretical Framework
            </h4>
            <p>{member.framework}</p>
          </article>
          <article className="bg-white rounded-xl shadow p-6">
            <h4 className="font-semibold flex items-center mb-2 text-foreground">
              <Users className="w-5 h-5 mr-2 text-primary" />
              Ideal Population
            </h4>
            <p>{member.idealPopulation}</p>
          </article>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold flex items-center mb-2 text-foreground">
            <Shield className="w-5 h-5 mr-2 text-primary" />
            Insurance Information
          </h3>
          <div className="flex gap-12 bg-[var(--color-gray)]/30  p-4 rounded-lg">
            <ul className="list-disc ml-6 text-lg italic">
              {member.insurance
                .slice(0, Math.ceil(member.insurance.length / 2))
                .map((ins, idx) => (
                  <li key={idx}>{ins}</li>
                ))}
            </ul>

            <ul className="list-disc ml-6 text-lg italic">
              {member.insurance
                .slice(Math.ceil(member.insurance.length / 2))
                .map((ins, idx) => (
                  <li key={idx + Math.ceil(member.insurance.length / 2)}>
                    {ins}
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold flex items-center mb-4 text-foreground">
            <Heart className="w-5 h-5 mr-2 text-accent" />
            About {member.name.split(",")[0]}
          </h3>
          <div className="space-y-4 mb-6">
            {member.about.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          {member.languages && member.languages.length > 0 && (
            <>
              <h3 className="font-semibold flex items-center mb-2 text-foreground">
                <Globe className="w-5 h-5 mr-2 text-secondary" />
                Languages Spoken
              </h3>
              <ul className="list-disc ml-6 text-lg italic">
                {member.languages.map((lang, idx) => (
                  <li key={idx}>{lang}</li>
                ))}
              </ul>
            </>
          )}
          <hr className="w-full h-px bg-[var(--color-gray)] my-4" />
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="font-semibold !text-primary mb-2">Experience</h4>
              <p className="!text-secondary text-sm">{member.experience}</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="font-semibold !text-primary mb-2">Specialties</h4>
              <p className="!text-secondary text-sm">{member.specialties}</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold flex items-center mb-4 text-foreground">
            <MapPin className="w-5 h-5 mr-2 text-secondary" />
            Background
          </h3>
          <p className="mb-6">{member.background}</p>

          <aside className="bg-[var(--color-gray)]/30 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-foreground mb-2 flex items-center">
              <Leaf className="w-4 h-4 mr-2 text-secondary" />
              Personal Interests
            </h4>
            <p className="text-sm">{member.interests}</p>
          </aside>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Joined {member.joined}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{member.location}</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-5 text-foreground">
            {member.mediaVideo
              ? `Meet ${member.name.split(" ")[0]}`
              : member.mediaImages && member.mediaImages.length > 0
              ? `${member.name.split(" ")[0]}'s Office`
              : "Media Coming Soon"}
          </h3>

          {member.mediaVideo ? (
            <video
              src={member.mediaVideo}
              controls
              className="w-full rounded-lg shadow-md aspect-video"
            />
          ) : member.mediaImages && member.mediaImages.length > 0 ? (
            <div
              className={`grid gap-4 ${
                member.mediaImages.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {member.mediaImages.map((src, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video overflow-hidden rounded-lg"
                >
                  <Image
                    src={src}
                    alt={`${member.name} work area image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="aspect-video bg-[var(--color-gray)]/20 rounded-lg flex items-center justify-center border-2 border-dashed border-[var(--color-gray)]">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[var(--color-gray)] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-[var(--color-dark)]/40"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-[var(--color-dark)]/60 font-medium">
                  No media available
                </p>
                <p className="text-[var(--color-dark)]/40 text-sm">
                  This section will feature a video or workspace images.
                </p>
              </div>
            </div>
          )}
        </section>
      </article>

      <CallBanner
        title=""
        subtitle={`Call to make an appointment today with ${member.name} by calling our office at `}
      />
    </main>
  );
}
