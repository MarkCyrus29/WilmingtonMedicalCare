import { Monitor, Smartphone } from "lucide-react";
import Image from "next/image";
import CallBanner from "@/components/ui/CallBanner";
import PageBanner from "@/components/ui/PageBanner";
import HorizontalCard from "@/components/client/HorizontalCardClient";
import TeletherapyAccordion from "@/components/client/TeletheraphyAccordionClient";

function Page() {
  return (
    <main>
      <PageBanner
        title="Virtual Appointment & Remote Care"
        imageSrc="/images/patients-care/phone.webp"
        alt="Phone Image"
        subtitle="What is Telehealth?"
      />

      {/* What is telehealth section */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-20">
        <div className="h-full w-[85%] text-left">
          <h2>What is Telehealth?</h2>
          <p>
            Telehealth, also known as Telemedicine, Teletherapy, or
            Telepsychiatry, allows for you to schedule and meet with our
            providers directly through the Internet here at Wilmington Mental
            Health and Medical Care. These online audio and video visits connect
            us directly through your computer or mobile device (iOS or Android)
            — it&#39;s your choice!
            <br />
            <br />
            Our providers use Meet, a real-time video-communication service
            developed by Google. Meet&#39;s platform comes with automated
            security and HIPAA compliance to personal health information.
            <br />
            <br />
            This guide outlines basic tips, instructions on how to join your
            video appointment, and answers to commonly asked questions at the
            bottom. Please review all sections before your first Telehealth
            appointment and contact us if you have any questions.
          </p>
        </div>
      </section>

      {/* Tips section */}
      <section className="h-full w-screen flex flex-col items-center justify-center my-20">
        <div className="w-[85%] text-left">
          <h2>Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {[
              {
                title: "Reliable Internet Connection",
                desc: "You will need a steady internet connection to join and connect to Telehealth appointments.",
                border: "border-primary",
                textColor: "text-primary",
                icon: 0,
              },
              {
                title: "Connect a Few Minutes Early",
                desc: "Join the appointment a few minutes early to test internet connection.",
                border: "border-green-500",
                textColor: "text-green-500",
                icon: 1,
              },
              {
                title: "Distraction Free Space",
                desc: "Select a place that is private, safe, and away from distractions.",
                border: "border-purple-500",
                textColor: "text-purple-500",
                icon: 2,
              },
              {
                title: "Camera Setup",
                desc: "Make sure to choose a space that is well-lit and a camera that is clear and functional.",
                border: "border-orange-500",
                textColor: "text-orange-500",
                icon: 3,
              },
              {
                title: "Appointment Cancellation",
                desc: "If you need to cancel or reschedule the appointment, please contact us!",
                border: "border-accent",
                textColor: "text-accent",
                icon: 4,
              },
              {
                title: "Other",
                desc: "Ask questions!",
                border: "border-secondary",
                textColor: "text-secondary",
                icon: 5,
              },
            ].map(({ title, desc, border, textColor, icon }, i) => (
              <HorizontalCard
                key={i}
                border={border}
                textColor={textColor}
                icon={icon}
                title={title}
                desc={desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Meeting Section */}
      <section className="h-full w-screen flex flex-col gap-10 items-center justify-center my-20 mx-auto">
        <div className="w-[85%] text-left">
          <h2>How to Join a Meeting:</h2>
          <p>
            You can join a video call from Google Meet, Google Calendar, Gmail,
            etc. You can also dial-in to a meeting from a phone or a meeting
            room. You can use Google Meet without a Google account.
          </p>
        </div>

        {/* Computer Join Card */}
        <div className="w-[85%] rounded-2xl bg-background shadow-lg border border-gray-200 overflow-hidden">
          <div className="flex flex-col md:flex-row w-full p-6 gap-6">
            <div className="w-full md:w-1/2 p-4 md:p-8 space-y-5">
              <div className="flex items-center">
                <Monitor className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Join from a Computer
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
                If you plan to use a <strong>desktop or laptop</strong>,
                there&#39;s <strong>no need to download anything</strong> prior
                to your appointment.
                <br />
                <br />
                For new patients, please ensure you&#39;ve provided a{" "}
                <strong>valid and up-to-date</strong> email address or mobile
                number so we can send appointment reminders.
                <br />
                <br />
                Click the <strong>unique link</strong> included in the reminder.
                Your video call screen will open in a new browser tab. If it
                doesn&#39;t open automatically, you may need to{" "}
                <strong>copy and paste</strong> the link into your browser.
                <br />
                <br />
                Once the screen opens, click <strong>&#39;Join Now&#39;</strong>
                . You will either see your provider immediately, or if they
                haven&#39;t joined yet, you&#39;ll be in the meeting room alone
                until they arrive.
              </p>
            </div>
            <div className="relative w-full md:w-1/2 aspect-[4/3]">
              <Image
                src="/images/patients-care/girl-using-cellphone.webp"
                alt="Girl Using a Cellphone"
                fill
                className="object-cover rounded-xl md:rounded-r-2xl"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Mobile Join Card */}
        <div className="w-[85%] rounded-2xl bg-background shadow-lg border border-gray-200 overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row w-full p-6 gap-6">
            <div className="relative w-full md:w-1/2 aspect-[4/3]">
              <Image
                src="/images/patients-care/girl-using-laptop.webp"
                alt="Girl Using a Laptop"
                fill
                className="object-cover rounded-xl md:rounded-r-2xl"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8 space-y-5 text-left md:text-right">
              <div className="flex items-center md:justify-end">
                <Smartphone className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Join from a Mobile Device
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
                If you plan to use a <strong>mobile device or tablet</strong>,
                you will need to <strong>download the Google Meet app</strong>{" "}
                prior to joining the video call.
                <br />
                <br />
                Once the app is installed,{" "}
                <strong>click the unique link</strong> sent via email or text
                reminder to join the Telehealth meeting. Tapping the link will
                automatically open the Google Meet app.
                <br />
                <br />
                If your provider has already joined, you will{" "}
                <strong>see them on the screen</strong>. If not, you&#39;ll see
                yourself until they arrive.
                <br />
                <br />
                <strong>Note:</strong> Your provider might be finishing up with
                another patient. <strong>Please be patient</strong> — they will
                join the meeting shortly.
              </p>
            </div>
          </div>
        </div>

        {/* Note Box */}
        <div className="w-full mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <p className="text-blue-800 mb-4">
            <strong>Note:</strong> There may be a slight delay for your provider
            to join the appointment if they are finishing up with a previous
            patient. Please be patient. They will join momentarily.
          </p>
          <p className="text-blue-800">
            <strong>Need additional help?</strong> Watch this video on how to
            join a Google Meet step-by-step!
          </p>
        </div>

        {/* Responsive Video */}
        <div className="aspect-video w-full max-w-4xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/X4jAvaX73-U?si=P7Kd-2CWtKQY7Hex"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            className="w-full h-full rounded-lg"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="h-full w-screen flex flex-col gap-10 items-center justify-center my-20">
        <div className="w-[85%]">
          <h2>Common Teletherapy Questions:</h2>
          <TeletherapyAccordion />
        </div>
      </section>

      <CallBanner
        title={
          <>
            Call today to <strong>Schedule an appointment!</strong>
          </>
        }
        subtitle=""
      />
    </main>
  );
}

export default Page;
