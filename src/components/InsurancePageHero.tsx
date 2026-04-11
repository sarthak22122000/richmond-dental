import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import AnimateIn from "./AnimateIn";
import { imgHeroBg, imgHowItWorksLeft, imgReview1, imgReview2, imgReview3 } from "@/lib/assets";

const stats = [
  { value: "15+",    label: "Insurance Plans Accepted" },
  { value: "2,000+", label: "Patients Served" },
  { value: "4.9★",   label: "Average Google Rating" },
  { value: "Same Day", label: "Benefit Verification" },
];

const planChips = [
  "Delta Dental", "Cigna", "Aetna", "MetLife",
  "UnitedHealthcare", "Humana", "BlueCross BlueShield",
  "Guardian", "Ameritas", "Principal", "Anthem",
  "Careington", "DentaQuest", "Medicare Advantage",
  "Medicaid / CHIP", "Tricare",
];

export default function InsurancePageHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#083703] pt-[140px] pb-[0px]">

      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={imgHeroBg}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#083703]/95 via-[#083703]/85 to-[#0c6d00]/75" />
      </div>

      {/* Decorative rings */}
      {[700, 500].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[rgba(139,206,131,0.08)] pointer-events-none top-1/2 -translate-y-1/2"
          style={{ width: size, height: size, left: `-${size / 3}px` }}
        />
      ))}

      <Navbar />

      <div className="relative z-10 px-[50px] max-w-[1280px] mx-auto">

        {/* Breadcrumb */}
        <AnimateIn variant="fade" className="flex items-center gap-2 mb-[48px]">
          <Link href="/" className="text-[rgba(255,255,255,0.45)] text-[13px] font-montreal hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-[rgba(255,255,255,0.25)] text-[13px]">/</span>
          <span className="text-[rgba(255,255,255,0.75)] text-[13px] font-montreal">Dental Insurance</span>
        </AnimateIn>

        {/* ── Main hero row ── */}
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[70px] items-end">

          {/* Left: headline + CTAs + plan chips */}
          <AnimateIn variant="left" className="flex-1 pb-[70px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(139,206,131,0.15)] border border-[rgba(139,206,131,0.3)] rounded-full px-[14px] py-[6px] mb-[28px]">
              <span className="w-2 h-2 rounded-full bg-[#8bce83] animate-pulse-dot" />
              <span className="text-[#8bce83] text-[12px] font-sharp font-semibold uppercase tracking-[0.08em]">
                Most Major PPO Plans Accepted
              </span>
            </div>

            {/* ── Updated H1 — benefit-focused, anxiety-resolving ── */}
            <h1
              className="text-white text-[clamp(28px,3.6vw,52px)] leading-[1.25] mb-[22px]"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
            >
              Your Insurance Works Here —<br />
              We'll Verify It Before<br />
              Your Visit
            </h1>

            <p className="text-[rgba(255,255,255,0.68)] text-[17px] leading-[1.75] max-w-[480px] mb-[36px]">
              We contact your insurance carrier directly and confirm exactly what you'll owe —
              before you walk in the door. Delta Dental, Cigna, Aetna, MetLife, UnitedHealthcare,
              Humana, BlueCross BlueShield and most other major PPO plans accepted.
            </p>

            {/* ── CTAs — Verify is now PRIMARY ── */}
            <div className="flex gap-[14px] flex-wrap mb-[18px]">
              {/* PRIMARY: Verify (tel: link — dials on mobile, shows number on desktop) */}
              <a href="tel:+12812380023" className="btn btn-white">
                Call to Verify My Benefits <span className="arrow ml-1">→</span>
              </a>
              {/* SECONDARY: Schedule */}
              <Link href="/appointment" className="btn btn-outline">
                Schedule Online
              </Link>
            </div>

            {/* ── Phone number visible inline ── */}
            <p className="text-[rgba(255,255,255,0.45)] text-[13px] font-montreal mb-[44px]">
              <a href="tel:+12812380023" className="hover:text-white transition-colors">
                📞 (281) 238-0023
              </a>
              <span className="mx-2 opacity-40">·</span>
              Mon–Fri 8am–5pm &nbsp;·&nbsp; Sat 8am–2pm
            </p>

            {/* Plan chips */}
            <div>
              <p className="text-[rgba(255,255,255,0.4)] text-[11px] font-sharp font-semibold uppercase tracking-[0.1em] mb-[12px]">
                Plans We Accept
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {planChips.map((plan) => (
                  <span
                    key={plan}
                    className="bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.75)] text-[12px] font-montreal px-[11px] py-[5px] rounded-full hover:bg-[rgba(139,206,131,0.18)] hover:border-[rgba(139,206,131,0.35)] hover:text-white transition-all duration-200 cursor-default"
                  >
                    {plan}
                  </span>
                ))}
              </div>
              <p className="text-[rgba(255,255,255,0.3)] text-[11px] font-montreal mt-[12px]">
                Don't see your plan? Call us — we likely still accept it.
              </p>
            </div>
          </AnimateIn>

          {/* Right: patient photo card */}
          <AnimateIn variant="right" delay={150} className="shrink-0 w-full lg:w-[420px] self-end">
            <div className="relative rounded-t-[24px] overflow-hidden img-zoom" style={{ height: "520px" }}>
              <Image
                src={imgHowItWorksLeft}
                alt="Happy patient at Richmond Dental Care — insurance accepted"
                fill
                className="object-cover object-center"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083703] via-[#083703]/20 to-transparent" />

              {/* Floating verified badge */}
              <div className="absolute top-[20px] right-[20px] bg-white/10 backdrop-blur-[16px] border border-white/20 rounded-[12px] px-[16px] py-[12px]">
                <div className="flex items-center gap-[8px]">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#8bce83] animate-pulse-dot shrink-0" />
                  <span className="text-white text-[12px] font-sharp font-semibold whitespace-nowrap">
                    Benefits Verified ✓
                  </span>
                </div>
                <p className="text-[rgba(255,255,255,0.6)] text-[10px] font-montreal mt-[3px]">
                  Before every appointment
                </p>
              </div>

              {/* Bottom patient review strip */}
              <div className="absolute bottom-0 left-0 right-0 px-[22px] py-[22px]">
                <div className="flex items-center gap-[12px]">
                  <div className="flex items-center">
                    {[imgReview1, imgReview2, imgReview3].map((src, i) => (
                      <div
                        key={i}
                        className="w-[36px] h-[36px] rounded-full overflow-hidden border-2 border-white relative"
                        style={{ marginLeft: i > 0 ? "-10px" : 0, zIndex: 3 - i }}
                      >
                        <Image src={src} alt="Patient" fill className="object-cover" unoptimized />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-[2px] mb-[2px]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#8bce83">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-white text-[12px] font-montreal leading-[1.3]">
                      <span className="font-semibold">4.9</span>
                      <span className="text-white/60"> · 200+ patient reviews</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(255,255,255,0.06)] border-t border-[rgba(255,255,255,0.08)] px-[22px] py-[16px] flex items-center gap-[10px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#8bce83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#8bce83" strokeWidth="1.5"/>
              </svg>
              <p className="text-[rgba(255,255,255,0.6)] text-[12px] font-montreal">
                We handle the insurance paperwork — you focus on your smile.
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Stats row */}
        <AnimateIn variant="up" delay={300} className="mt-[0px] grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[rgba(255,255,255,0.08)] overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[rgba(255,255,255,0.04)] px-[30px] py-[26px] flex flex-col gap-[4px] hover:bg-[rgba(139,206,131,0.1)] transition-colors duration-300"
            >
              <span
                className="text-white text-[28px] leading-[1.2]"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}
              >
                {stat.value}
              </span>
              <span className="text-[rgba(255,255,255,0.45)] text-[13px] font-montreal leading-[1.4]">
                {stat.label}
              </span>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
