"use client";

import dynamic from "next/dynamic";

const HorizontalCard = dynamic(() => import("@/components/ui/HorizontalCard"), {
  ssr: false,
  loading: () => <p>Loading Tips...</p>,
});

export default HorizontalCard;
