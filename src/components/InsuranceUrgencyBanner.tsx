import Link from "next/link";

export default function InsuranceUrgencyBanner() {
  return (
    <div className="bg-[#7c2d12] relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10"
           style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)" }} />

      <div className="relative z-10 px-[50px] max-w-[1280px] mx-auto py-[16px] flex flex-col sm:flex-row items-center justify-between gap-[12px]">
        <div className="flex items-center gap-[12px]">
          {/* Warning icon */}
          <span className="text-[#fbbf24] text-[18px] shrink-0">⚠</span>
          <p className="text-white text-[14px] font-montreal leading-[1.5]">
            <span className="font-semibold text-[#fbbf24]">Most dental benefits reset January 1st</span>
            {" "}— don't lose the coverage you've already paid for. Unused benefits don't roll over.
          </p>
        </div>
        <a
          href="tel:+12812380023"
          className="shrink-0 bg-[#fbbf24] text-[#7c2d12] text-[13px] font-sharp font-bold px-[18px] py-[9px] rounded-full hover:bg-[#fcd34d] transition-colors whitespace-nowrap"
        >
          Book Before Year-End →
        </a>
      </div>
    </div>
  );
}
