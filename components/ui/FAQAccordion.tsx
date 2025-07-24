"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const telehealthQuestions = [
  {
    question: "Is Telehealth private?",
    answer:
      "Just like in a face-to-face appointment, your Telehealth visit will be private and confidential.",
  },
  {
    question: "Will the appointment be recorded?",
    answer: "None of our appointments are recorded or stored.",
  },
  {
    question: "Where can I find the Telehealth appointment link?",
    answer:
      "Check your email inbox. From there, you should be able to find the link to the Google Meet. If it is not there, check your spam folder.",
  },
  {
    question: "What should I do if I do not get the reminder with the link?",
    answer:
      "Contact us at 910-777-5575 so we can send the link to you via email or secure messaging.",
  },
  {
    question: "How can I prepare my space for a teletherapy appointment?",
    answer: (
      <ul className="list-disc ml-4 space-y-1">
        <li>
          Identify a suitable room that is quiet, private, and free of
          distractions.
        </li>
        <li>Close doors, shut windows, and turn off TVs or loud devices.</li>
        <li>Consider a “Do Not Disturb” sign to avoid interruptions.</li>
      </ul>
    ),
  },
];

const medManagementQuestions = [
  {
    question: "Who provides medication management services?",
    answer: (
      <>
        <strong>Medication management works best with a team approach.</strong>{" "}
        Every member of our healthcare team, including you, our nurse
        practitioners, and any specialist you routinely see should help make
        decisions about your treatment. This can help you manage your medication
        use, stay healthy, be hospitalized less often, and spend less money on
        healthcare over time.
      </>
    ),
  },
  {
    question: "How do I get a prescription refilled?",
    answer: (
      <>
        <strong>
          Please inform your provider during your scheduled appointment if you
          need a prescription refilled.
        </strong>{" "}
        We recommend that you check your bottle for any refills remaining
        between appointments. Please ask your pharmacist to fax or
        electronically transmit any refill request to your provider and allow 48
        hours for an authorization.{" "}
        <strong>Our fax number is 910-777-5273.</strong>
      </>
    ),
  },
  {
    question: "When is payment due?",
    answer: (
      <>
        <strong>
          All payments are expected at time of service, unless a payment
          schedule has been set up with the administrative team.
        </strong>{" "}
        Any account with an outstanding balance must be paid in full within 30
        days. Should payments not be made on the day of service, we reserve the
        right to cancel your appointment. We accept cash, check, Visa,
        Mastercard, American Express, and Discover.
      </>
    ),
  },
  {
    question: "What happens if I need to cancel my appointment?",
    answer: (
      <>
        <strong>
          If you need to cancel or reschedule your appointment, please call
          24-hours in advance
        </strong>{" "}
        before your scheduled appointment date to avoid being charged a missed
        appointment fee.
      </>
    ),
  },
  {
    question: "What happens if I am late to my scheduled appointment?",
    answer: (
      <>
        <strong>
          If you are 15 minutes late for our scheduled appointment, you may be
          asked to reschedule.
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
          We will send out a statement to the address we have on file if a
          payment has not been received from your insurance carrier.
        </strong>{" "}
        If payment is not received within 30 days, you will receive a second
        notification of past due amount before we can charge the standing
        balance using your credit card on file.
      </>
    ),
  },
  {
    question: "Who can have access to my medical records?",
    answer: (
      <>
        <strong>
          The use or disclosure of your personal health information (PHI) to
          others requires your consent or authorization,
        </strong>{" "}
        especially when the purpose of such exchange is to provide or arrange
        health care, to receive reimbursement for the services we provide to
        you, and for other related administrative activities we conduct.
        Wilmington Medical Care may be required or permitted by certain laws to
        use and disclose your medical information for other purposes without
        your consent or authorization.
      </>
    ),
  },
];

export default function Accordion({ type }: { type: string }) {
  const questions =
    type === "telehealth" ? telehealthQuestions : medManagementQuestions;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto space-y-4 mt-6">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-sm "
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left text-xl font-medium transition-colors bg-primary/65  text-background border-t border-t-[rgba(255,255,255,0.18)] hover:cursor-pointer"
            >
              {item.question}
              <ChevronDown
                className={`ml-2 transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                size={20}
              />
            </button>

            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
              }}
              className="transition-all duration-200 ease-in-out overflow-hidden px-4 text-base text-dark/70"
            >
              <div className="py-2">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
