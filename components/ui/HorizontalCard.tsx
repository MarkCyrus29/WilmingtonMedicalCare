import React from "react";
import {
  CheckCircle,
  Clock,
  Shield,
  Video,
  Users,
  Lightbulb,
  Wrench,
  MessageCircle,
  TrendingUp,
  Activity,
  Bone,
  Bandage,
  Accessibility,
  Flame,
  Eye,
  HeartPulse,
  Stethoscope,
  Pill,
  ScanLine,
  AlertCircle,
  FileHeart,
  BrainCircuit,
  HeartCrack,
} from "lucide-react";

const CARDIO_ICONS = [
  Stethoscope,
  HeartPulse,
  Pill,
  Activity,
  FileHeart,
  AlertCircle,
  BrainCircuit,
  Shield,
  HeartCrack,
  ScanLine,
];
const TIP_ICONS = [CheckCircle, Clock, Shield, Video];
const BENEFIT_ICONS = [Users, Lightbulb, Wrench, MessageCircle, TrendingUp];
const INJURY_ICONS = [Bone, Accessibility, Bandage, Activity, Flame, Eye];
const DEFAULT_ICONS = [CheckCircle];

// Explicit kind type
type Kind = "tip" | "benefit" | "injury" | "cardio";

interface Props {
  border: string;
  textColor: string;
  icon: number;
  kind?: Kind;
  title: string;
  desc?: string;
}

function HorizontalCard({
  border,
  textColor,
  icon,
  kind = "tip",
  title,
  desc,
}: Props) {
  let iconSet;

  switch (kind) {
    case "benefit":
      iconSet = BENEFIT_ICONS;
      break;
    case "injury":
      iconSet = INJURY_ICONS;
      break;
    case "cardio":
      iconSet = CARDIO_ICONS;
      break;
    case "tip":
    default:
      iconSet = TIP_ICONS;
      break;
  }

  const IconComponent = iconSet[icon] ?? DEFAULT_ICONS[0];

  return (
    <div
      className={`w-full h-full border-l-4 p-4 flex items-start gap-4 rounded-xl shadow-sm bg-gray/10 ${border}`}
    >
      <IconComponent className={`h-6 w-6 mt-1 flex-shrink-0 ${textColor}`} />
      <div className="w-full">
        <h5 className={`font-semibold ${!desc ? "!text-2xl font-bold" : ""}`}>
          {title}
        </h5>
        {desc && <p className="text-sm text-gray-600 break-words">{desc}</p>}
      </div>
    </div>
  );
}

export default HorizontalCard;
