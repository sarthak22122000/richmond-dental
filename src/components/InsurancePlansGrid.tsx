import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import {
  imgInsurance1,  imgInsurance2,  imgInsurance3,  imgInsurance4,  imgInsurance5,
  imgInsurance6,  imgInsurance7,  imgInsurance8,  imgInsurance9,  imgInsurance10,
  imgInsurance11, imgInsurance12, imgInsurance13, imgInsurance14, imgInsurance15,
  imgOffice,
} from "@/lib/assets";

/* Logos displayed in the static grid (all 15) */
const logos = [
  { src: imgInsurance1,  name: "Delta Dental" },
  { src: imgInsurance2,  name: "Cigna" },
  { src: imgInsurance3,  name: "Aetna" },
  { src: imgInsurance4,  name: "MetLife" },
  { src: imgInsurance5,  name: "UnitedHealthcare" },
  { src: imgInsurance6,  name: "Humana" },
  { src: imgInsurance7,  name: "BlueCross BlueShield" },
  { src: imgInsurance8,  name: "Guardian" },
  { src: imgInsurance9,  name: "Ameritas" },
  { src: imgInsurance10, name: "Principal" },
  { src: imgInsurance11, name: "Anthem" },
  { src: imgInsurance12, name: "Careington" },
  { src: imgInsurance13, name: "DentaQuest" },
  { src: imgInsurance14, name: "Medicare Advantage" },
  { src: imgInsurance15, name: "Tricare" },
];

/* Marquee track (doubled for seamless loop) */
const marqueeTrack = [...logos, ...logos];

const extraPlans = [
  { name: "Delta Dental",          note: "PPO & Premier",        href: null },
  { name: "Cigna Dental",          note: "DPPO & DHMO",          href: null },
  { name: "Aetna",                 note: "PPO plans",            href: null },
  { name: "MetLife",               note: "PPO plans",            href: null },
  { name: "UnitedHealthcare",      note: "Dental plans",         href: null },
  { name: "Humana",                note: "PPO & HMO",            href: null },
  { name: "BlueCross BlueShield",  note: "Most plans",           href: null },
  { name: "Guardian",              note: "PPO plans",            href: null },
  { name: "Ameritas",              note: "PPO plans",            href: null },
  { name: "Principal",             note: "Dental plans",         href: null },
  { name: "Anthem",                note: "PPO plans",            href: null },
  { name: "Careington",            note: "Discount plans",       href: null },
  { name: "DentaQuest",            note: "Medicaid plans",       href: null },
  { name: "Medicare Advantage",    note: "Dental riders",        href: "/insurance/medicare" },
  { name: "Texas Medicaid / CHIP", note: "Qualifying plans",     href: null },
  { name: "Tricare",               note: "Military dental",      href: null },
];

export default function InsurancePlansGrid() {
  return (
    <section className="bg-white py-[90px] overflow-hidden">
      <div className="px-[50px] max-w-[1200px] mx-auto">

        {/* ── Section header ── */}
        <AnimateIn className="flex flex-col lg:flex-row lg:items-end justify-between gap-[30px] mb-[56px]">
          <div className="flex flex-col gap-[14px]">
            <h2
              className="text-[#083703] text-[clamp(24px,3vw,40px)] leading-[1.4]"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
            >
              Insurance Plans We Accept
            </h2>
            <p className="text-[#666] text-[16px] leading-[1.6] max-w-[520px]">
              We're in-network with most major PPO carriers. If your plan isn't listed,
              call our office — we accept many out-of-network plans and will maximize
              your benefits either way.
            </p>
          </div>
          <Link href="/contact" className="btn btn-outline-dark shrink-0">
            Verify My Plan →
          </Link>
        </AnimateIn>

        {/* ── Large logo grid ── */}
        <AnimateIn variant="up" delay={80} className="mb-[60px]">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-[1px] bg-[rgba(217,217,217,0.4)] border border-[rgba(217,217,217,0.4)] rounded-[20px] overflow-hidden">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="bg-white flex flex-col items-center justify-center gap-[10px] px-[16px] py-[28px] hover:bg-[#f7fcf7] transition-colors duration-250 group"
              >
                <div className="relative h-[44px] w-[130px] grayscale group-hover:grayscale-0 opacity-55 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-[#999] text-[11px] font-montreal text-center leading-[1.3] group-hover:text-[#083703] transition-colors duration-250">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] text-[#aaa] font-montreal mt-[18px] italic">
            Hover any logo to see carrier name · If yours isn't shown, we likely still accept it — call us to verify.
          </p>
        </AnimateIn>

        {/* ── Split: office photo + plan text chips ── */}
        <div className="flex flex-col lg:flex-row gap-[20px] items-stretch mb-[50px]">

          {/* Left: office photo */}
          <AnimateIn variant="left" className="lg:w-[45%] relative rounded-[20px] overflow-hidden img-zoom min-h-[380px]">
            <Image
              src={imgOffice}
              alt="Richmond Dental Care office — insurance accepted"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#083703]/80 via-[#083703]/20 to-transparent" />
            {/* Badge overlay */}
            <div className="absolute bottom-[24px] left-[24px] right-[24px]">
              <div className="bg-white/10 backdrop-blur-[16px] border border-white/20 rounded-[14px] px-[22px] py-[18px]">
                <p className="text-white text-[15px] font-sharp font-semibold mb-[4px]">
                  All Major PPO Insurance Plans Accepted
                </p>
                <p className="text-white/70 text-[13px] font-montreal leading-[1.5]">
                  We verify your benefits before every visit — no billing surprises.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: plan text cards */}
          <AnimateIn variant="right" delay={120} className="flex-1">
            <div className="grid grid-cols-2 gap-[10px] h-full">
              {extraPlans.map((plan, i) => {
                const inner = (
                  <div className="flex flex-col gap-[4px] p-[16px] border border-[rgba(217,217,217,0.6)] rounded-[10px] hover:border-[#8bce83] hover:bg-[#f7fcf7] transition-all duration-200 group h-full">
                    <span
                      className="text-[#1a1a1a] text-[13px] leading-[1.4] group-hover:text-[#083703] transition-colors"
                      style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}
                    >
                      {plan.name}
                    </span>
                    <span className="text-[#aaa] text-[11px] font-montreal">{plan.note}</span>
                    {plan.href && (
                      <span className="text-[#0c6d00] text-[10px] font-sharp font-semibold uppercase tracking-[0.07em] mt-[2px]">
                        View details →
                      </span>
                    )}
                  </div>
                );
                return (
                  <div key={plan.name}>
                    {plan.href ? (
                      <Link href={plan.href} className="block h-full">{inner}</Link>
                    ) : (
                      inner
                    )}
                  </div>
                );
              })}
            </div>
          </AnimateIn>
        </div>

        {/* ── Out-of-network note ── */}
        <AnimateIn className="bg-[#f7fcf7] border border-[rgba(8,55,3,0.1)] rounded-[16px] px-[30px] py-[24px] flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#dcf0da] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#083703" strokeWidth="1.5"/>
              <path d="M12 8v4m0 4h.01" stroke="#083703" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[#083703] text-[14px] font-sharp font-semibold leading-[1.4] mb-[4px]">
              Out-of-network? We still help you get benefits.
            </p>
            <p className="text-[#666] text-[13px] font-montreal leading-[1.5]">
              Even if your carrier isn't listed, we'll submit claims on your behalf and work to maximize
              whatever out-of-network benefits your plan provides. Call us to check.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary shrink-0 text-[14px]">
            Call to Verify
          </Link>
        </AnimateIn>

        {/* ── Animated marquee strip ── */}
        <div className="mt-[50px]">
          <p className="text-center text-[11px] font-sharp font-semibold uppercase tracking-[0.1em] text-[#ccc] mb-[20px]">
            Accepted Carriers
          </p>
          <div className="w-full overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                 style={{ background: "linear-gradient(to right, white, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                 style={{ background: "linear-gradient(to left, white, transparent)" }} />
            <div className="marquee-track gap-[65px] py-2 px-4">
              {marqueeTrack.map((logo, i) => (
                <div key={i} className="relative h-[40px] w-[120px] shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-90">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
