import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { imgDentistsMain, imgServicesOverlay } from "@/lib/assets";

const tiers = [
  {
    category: "Preventive Care",
    coverage: "100%",
    coverageNote: "Typically covered in full",
    color: "#083703",
    bgColor: "#dcf0da",
    services: [
      "Routine dental exams",
      "Teeth cleaning (prophylaxis)",
      "Dental X-rays",
      "Oral cancer screenings",
      "Fluoride treatments",
      "Dental sealants (children)",
    ],
    tip: "Most plans cover 2 cleanings per year at no cost to you.",
  },
  {
    category: "Basic Restorative",
    coverage: "70–80%",
    coverageNote: "After deductible",
    color: "#0c6d00",
    bgColor: "#f0f8ef",
    services: [
      "Dental fillings",
      "Tooth extractions",
      "Root canal therapy",
      "Periodontal treatment",
      "Scaling & root planing",
      "Emergency dental visits",
    ],
    tip: "After your annual deductible is met, most plans cover the majority of basic procedures.",
  },
  {
    category: "Major Restorative",
    coverage: "50%",
    coverageNote: "After deductible & waiting period",
    color: "#1a5c17",
    bgColor: "#f7fcf7",
    services: [
      "Dental crowns",
      "Dental bridges",
      "Partial & full dentures",
      "Dental implants (some plans)",
      "Inlays & onlays",
      "Bone grafting",
    ],
    tip: "Some plans have a 6–12 month waiting period for major procedures. Ask us to check before scheduling.",
  },
  {
    category: "Orthodontics",
    coverage: "50%",
    coverageNote: "Lifetime max may apply",
    color: "#083703",
    bgColor: "#f7f7f7",
    services: [
      "Traditional metal braces",
      "Invisalign® clear aligners",
      "Retainers",
      "Orthodontic consultations",
    ],
    tip: "Ortho coverage often has a separate lifetime maximum (typically $1,000–$2,000). We'll check your specific plan.",
  },
];

export default function InsuranceCoverage() {
  return (
    <section className="bg-[#f9faf9] py-[90px]">
      <div className="px-[50px] max-w-[1200px] mx-auto">

        {/* ── Split: image + header ── */}
        <div className="flex flex-col lg:flex-row gap-[50px] items-start mb-[60px]">

          {/* Left: dentists photo */}
          <AnimateIn variant="left" className="lg:w-[42%] relative rounded-[20px] overflow-hidden img-zoom shrink-0 min-h-[340px] lg:min-h-[420px]">
            <Image
              src={imgDentistsMain}
              alt="Richmond Dental Care team"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#083703]/70 via-transparent to-transparent" />
            {/* Stat bubble */}
            <div className="absolute bottom-[20px] left-[20px] right-[20px] flex gap-[10px]">
              {[
                { val: "100%", label: "Preventive" },
                { val: "80%",  label: "Basic" },
                { val: "50%",  label: "Major" },
              ].map((s) => (
                <div key={s.label} className="flex-1 bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-[10px] px-[12px] py-[10px] text-center">
                  <p className="text-white text-[18px] font-sharp font-bold leading-none mb-[3px]">{s.val}</p>
                  <p className="text-white/70 text-[10px] font-montreal">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Small floating overlay image */}
            <div className="absolute top-[20px] right-[20px] w-[90px] h-[90px] rounded-[14px] overflow-hidden border-2 border-white/30 shadow-lg img-zoom hidden sm:block">
              <Image src={imgServicesOverlay} alt="" fill className="object-cover" unoptimized />
            </div>
          </AnimateIn>

          {/* Right: header */}
          <AnimateIn variant="right" delay={100} className="flex flex-col gap-[20px] pt-[10px]">
            <div className="inline-flex items-center gap-2 w-fit">
              <span className="w-[3px] h-[20px] rounded-full bg-[#0c6d00]" />
              <span className="text-[#0c6d00] text-[12px] font-sharp font-semibold uppercase tracking-[0.09em]">
                Understanding Your Coverage
              </span>
            </div>
            <h2
              className="text-[#083703] text-[clamp(24px,3vw,40px)] leading-[1.4]"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
            >
              What Does Dental Insurance Cover?
            </h2>
            <p className="text-[#666] text-[16px] leading-[1.6]">
              Most PPO dental plans follow a <strong className="text-[#083703]">100-80-50 structure</strong>. Here's what
              that means for the services available at Richmond Dental Care in Richmond, TX.
            </p>
            <p className="text-[#666] text-[15px] leading-[1.6]">
              We walk every patient through their specific plan before treatment begins — so you
              always know exactly what you'll owe, with zero surprises at checkout.
            </p>
          </AnimateIn>
        </div>

        {/* Coverage cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-[50px]">
          {tiers.map((tier, i) => (
            <AnimateIn key={tier.category} variant="up" delay={i * 80} className="flex flex-col">
              <div
                className="flex flex-col h-full rounded-[16px] overflow-hidden border border-[rgba(217,217,217,0.5)] bg-white hover:shadow-[0_8px_32px_rgba(8,55,3,0.08)] transition-shadow duration-300"
              >
                {/* Top band */}
                <div
                  className="px-[24px] py-[22px]"
                  style={{ backgroundColor: tier.bgColor }}
                >
                  <p className="text-[11px] font-sharp font-semibold uppercase tracking-[0.09em] mb-[8px]"
                     style={{ color: tier.color, opacity: 0.7 }}>
                    {tier.category}
                  </p>
                  <div className="flex items-baseline gap-[6px]">
                    <span
                      className="text-[36px] leading-[1.1]"
                      style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, color: tier.color }}
                    >
                      {tier.coverage}
                    </span>
                    <span className="text-[12px] font-montreal leading-[1.4]" style={{ color: tier.color, opacity: 0.65 }}>
                      covered
                    </span>
                  </div>
                  <p className="text-[11px] font-montreal mt-[4px]" style={{ color: tier.color, opacity: 0.55 }}>
                    {tier.coverageNote}
                  </p>
                </div>

                {/* Services list */}
                <div className="px-[24px] py-[20px] flex flex-col gap-[10px] flex-1">
                  {tier.services.map((s) => (
                    <div key={s} className="flex items-start gap-[10px]">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#8bce83] mt-[7px] shrink-0" />
                      <span className="text-[#444] text-[13px] font-montreal leading-[1.5]">{s}</span>
                    </div>
                  ))}
                </div>

                {/* Tip */}
                <div className="px-[24px] pb-[20px]">
                  <p className="text-[11.5px] font-montreal leading-[1.5] text-[#888] italic border-t border-[rgba(217,217,217,0.5)] pt-[14px]">
                    {tier.tip}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Annual max note */}
        <AnimateIn className="bg-[#083703] rounded-[16px] px-[35px] py-[28px] flex flex-col sm:flex-row items-start sm:items-center gap-[20px]">
          <div className="flex-1">
            <p className="text-white text-[15px] font-sharp font-semibold leading-[1.4] mb-[6px]">
              Annual Maximum & Deductible — We Explain It All Before Your Visit
            </p>
            <p className="text-[rgba(255,255,255,0.65)] text-[13px] font-montreal leading-[1.6]">
              Most plans have an annual maximum benefit (typically $1,000–$2,000) and a deductible
              ($50–$150). We'll check your specific plan details and walk you through exactly what you'll
              owe before any procedure begins. No guessing, no surprises.
            </p>
          </div>
          <a href="tel:+1-281-238-0023" className="btn btn-white shrink-0 text-[14px]">
            Call to Ask →
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
