import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { imgContactBg } from "@/lib/assets";

export default function InsuranceVerifyBanner() {
  return (
    <section className="bg-[#083703] py-[80px] overflow-hidden relative">

      {/* Background photo with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={imgContactBg}
          alt=""
          fill
          className="object-cover opacity-20"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#083703]/80" />
      </div>

      {/* Decorative rings */}
      {[600, 420].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[rgba(139,206,131,0.08)] pointer-events-none top-1/2 -translate-y-1/2"
          style={{ width: size, height: size, left: `-${size / 3}px` }}
        />
      ))}

      <div className="relative z-10 px-[50px] max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px]">

          <AnimateIn variant="left" className="flex flex-col gap-[16px] max-w-[580px]">
            <div className="inline-flex items-center gap-2 w-fit bg-[rgba(139,206,131,0.15)] border border-[rgba(139,206,131,0.25)] rounded-full px-[14px] py-[6px]">
              <span className="w-2 h-2 rounded-full bg-[#8bce83] animate-pulse-dot" />
              <span className="text-[#8bce83] text-[11px] font-sharp font-semibold uppercase tracking-[0.08em]">
                Free Benefit Verification
              </span>
            </div>
            <h2
              className="text-white text-[clamp(22px,2.8vw,36px)] leading-[1.4]"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
            >
              Not Sure If We Accept Your Plan?<br />
              We'll Check — Before Your Visit.
            </h2>
            <p className="text-[rgba(255,255,255,0.65)] text-[16px] font-montreal leading-[1.7]">
              Our billing team contacts your insurance carrier directly, confirms your coverage,
              and tells you exactly what you'll owe — all before you set foot in our office.
              No surprises, no hidden costs.
            </p>
          </AnimateIn>

          <AnimateIn variant="right" delay={100} className="flex flex-col gap-[14px] items-center lg:items-end shrink-0">
            <a
              href="tel:+1-281-238-0023"
              className="btn btn-white text-[16px] px-[28px]"
            >
              Call (281) 238-0023 <span className="arrow ml-1">→</span>
            </a>
            <Link href="/appointment" className="btn btn-outline text-[15px]">
              Schedule Online
            </Link>
            <div className="flex items-center gap-[8px] mt-[4px]">
              <div className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#8bce83">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-[rgba(255,255,255,0.5)] text-[12px] font-montreal">
                4.9 rating · 200+ Google reviews
              </span>
            </div>
          </AnimateIn>
        </div>

        {/* Bottom info strip */}
        <AnimateIn variant="up" delay={150} className="mt-[60px] pt-[30px] border-t border-[rgba(255,255,255,0.1)] flex flex-wrap gap-[30px] lg:gap-[60px] items-center justify-center lg:justify-start">
          {[
            { label: "Address", value: "Richmond, TX 77406" },
            { label: "Hours", value: "Mon–Fri 8am–5pm · Sat 8am–2pm" },
            { label: "Emergency", value: "Saturday walk-ins welcome" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-[2px]">
              <span className="text-[rgba(255,255,255,0.4)] text-[10px] font-sharp font-semibold uppercase tracking-[0.1em]">
                {item.label}
              </span>
              <span className="text-[rgba(255,255,255,0.8)] text-[14px] font-montreal">
                {item.value}
              </span>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
