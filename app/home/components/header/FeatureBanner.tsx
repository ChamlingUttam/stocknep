import { ArrowRight } from "lucide-react";

export function FeatureBanner() {
  return (
    <div className="flex w-fit mb-10 items-center rounded-lg border border-[#0057FB] text-[#0057FB]">
      {/* Left side */}
      <div className="px-2 py-2 font-sans text-sm">
        <span>New Feature is Live</span>
      </div>

      {/* Divider */}
      <div className="h-4 w-px bg-[#0057FB]" />

      {/* Right side */}
      <div className="flex items-center font-sans gap-px px-2 text-sm py-2">
        <span>Read More</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}