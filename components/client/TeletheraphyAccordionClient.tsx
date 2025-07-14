"use client";
import dynamic from "next/dynamic";

const TeletherapyAccordion = dynamic(
  () => import("@/components/ui/FAQAccordion"),
  { ssr: false, loading: () => <p>Loading FAQs...</p> }
);
export default TeletherapyAccordion;
