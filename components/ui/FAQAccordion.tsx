"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
interface QuestionItem {
  question: string;
  answer: string | React.ReactNode;
}

export default function Accordion({
  questions,
}: {
  questions: QuestionItem[];
}) {
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
              className="w-full flex justify-between items-center p-4 text-left text-xl md:text-2xl font-medium transition-colors bg-primary/65  text-background border-t border-t-[rgba(255,255,255,0.18)] hover:cursor-pointer"
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
              <div className="py-2 text-lg md:text-xl">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
