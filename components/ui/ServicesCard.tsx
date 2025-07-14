import { CheckCircle } from "lucide-react";

export function ServicesCard({
  title,
  textColor = "text-primary",
  bgColor = "bg-primary/10",
}: {
  title: string;
  textColor?: string;
  bgColor?: string;
}) {
  return (
    <div
      className={`w-full h-full bg-[#F6F6F6] rounded-sm p-5 shadow-md  duration-200 flex items-start gap-4 ${textColor} ${bgColor}`}
    >
      <div className={`p-2 rounded-full  `}>
        <CheckCircle className="h-5 w-5" />
      </div>
      <h4 className="text-sm sm:text-base font-medium leading-snug text-foreground">
        {title}
      </h4>
    </div>
  );
}
