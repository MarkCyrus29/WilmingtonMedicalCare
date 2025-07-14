"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
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

export default function TeletherapyAccordion() {
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
