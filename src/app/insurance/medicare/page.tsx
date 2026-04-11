import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import Footer from "@/components/Footer";
import {
  imgLogo,
  imgDentistCard,
  imgDentistsMain,
  imgHowItWorksLeft,
  imgHowItWorksRight,
  imgOffice,
  imgServicesMain,
} from "@/lib/assets";

export const metadata: Metadata = {
  title: "Medicare Dentist in Richmond, TX — Benefits Verified Free | Richmond Dental Care",
  description:
    "Looking for a Medicare dentist in Richmond, TX? Richmond Dental Care accepts Medicare Advantage dental plans. We verify your benefits before your visit at no charge. Call (281) 238-0023.",
  keywords:
    "Medicare dentist Richmond TX, Medicare Advantage dental Richmond TX, does Richmond Dental Care accept Medicare, Medicare dental coverage Richmond, dentist for seniors Richmond TX, Medicare dental benefits Richmond TX",
};

/* ── Minimal ad-landing navbar — no exit links ── */
function MinimalNav() {
  return (
    <nav className="absolute left-0 top-0 w-full z-50 px-[30px] py-[22px] flex items-center justify-between animate-fade-down">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative w-[48px] h-[48px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <Image src={imgLogo} alt="Richmond Dental Care" fill className="object-contain" unoptimized />
        </div>
        <span className="text-white text-[14px] font-sharp font-semibold hidden sm:block opacity-80">
          Richmond Dental Care
        </span>
      </Link>

      {/* Phone — dominant, always visible */}
      <a
        href="tel:+12812380023"
        className="flex items-center gap-[10px] bg-white text-[#083703] px-[20px] py-[12px] rounded-full font-sharp font-bold text-[15px] hover:bg-[#f0f0f0] transition-colors shadow-lg"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="#083703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        (281) 238-0023
      </a>
    </nav>
  );
}

/* ── Medicare logo badge ── */
function MedicareBadge({ small = false }: { small?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-[8px] bg-white rounded-[10px] shadow-sm border border-[rgba(0,0,0,0.08)] ${small ? "px-[12px] py-[8px]" : "px-[18px] py-[12px]"}`}>
      <svg width={small ? 24 : 32} height={small ? 24 : 32} viewBox="0 0 36 36" fill="none" aria-label="Medicare">
        <rect width="36" height="36" rx="6" fill="#003087"/>
        <rect x="15" y="4" width="6" height="28" fill="white"/>
        <rect x="4" y="15" width="28" height="6" fill="white"/>
        <rect x="4" y="15" width="28" height="2.5" fill="#CC0000"/>
        <rect x="15" y="4" width="2.5" height="28" fill="#CC0000"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`text-[#003087] font-sharp font-bold tracking-wide ${small ? "text-[12px]" : "text-[14px]"}`}>Medicare</span>
        <span className={`text-[#CC0000] font-sharp font-semibold uppercase tracking-[0.1em] ${small ? "text-[8px]" : "text-[9px]"}`}>Advantage Accepted</span>
      </div>
    </div>
  );
}

const coveredServices = [
  { service: "Dental Exams & Cleanings",  note: "Preventive — typically 100%" },
  { service: "Dental X-Rays",             note: "Bitewing & panoramic" },
  { service: "Dental Fillings",           note: "Basic restorative — 70–80%" },
  { service: "Tooth Extractions",         note: "Including surgical extractions" },
  { service: "Root Canal Therapy",        note: "Basic or major per plan" },
  { service: "Dental Crowns",             note: "Major restorative — ~50%" },
  { service: "Dentures & Partials",       note: "Coverage varies by plan" },
  { service: "Dental Implants",           note: "Select Medicare Advantage plans" },
  { service: "Periodontal Treatment",     note: "Scaling & root planing" },
  { service: "Oral Cancer Screenings",    note: "Preventive — typically covered" },
  { service: "Night Guards",              note: "Select plans — verify first" },
  { service: "Emergency Dental Care",     note: "Most plans cover urgent visits" },
];

const whyUs = [
  { title: "Gentle, Comfortable Care for Seniors", desc: "We take extra time with senior patients. No rushing. Every visit is calm, comfortable, and unhurried." },
  { title: "Free Medicare Benefit Verification",   desc: "We call your insurance before your visit and give you a clear answer on coverage — at no charge to you." },
  { title: "Transparent Costs Upfront",            desc: "You'll know your exact out-of-pocket cost before any procedure begins. No dental billing jargon." },
  { title: "Open Saturdays — Easy to Schedule",    desc: "Open Saturdays for regular and emergency appointments. Accessible office. Easy parking." },
];

const medicareFaqs = [
  {
    q: "Do I need a referral to see Richmond Dental Care with Medicare?",
    a: "No referral is needed. You can call us directly and schedule an appointment. If you have a Medicare Advantage plan with dental benefits, you may be able to use your coverage without any referral from your primary care physician.",
  },
  {
    q: "What if my Medicare Advantage plan only covers part of the cost?",
    a: "We'll tell you the exact out-of-pocket amount before any procedure begins — so there are no surprises. If there's a remaining balance, we offer Cherry payment plans that let you split costs into manageable monthly payments. We also have an in-house membership plan as an affordable alternative.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring your Medicare Advantage insurance card (front and back), a government-issued photo ID, and a list of any current medications. If you have a secondary dental plan, bring that card too. That's it — we handle everything else.",
  },
  {
    q: "Does Medicare cover dentures or dental implants?",
    a: "Original Medicare does not cover dentures or implants. However, many Medicare Advantage dental plans include partial coverage for dentures, and some plans now cover dental implants. Call us with your plan information and we'll verify exactly what's covered for you at no charge.",
  },
  {
    q: "Can I use my Medicare Advantage dental benefits as a new patient?",
    a: "Yes — your Medicare Advantage dental benefits apply from your very first visit. There are no new patient exclusions for preventive care. Some plans may have waiting periods for major procedures (like crowns or dentures), but we'll check that when we verify your benefits before your appointment.",
  },
];

export default function MedicareLandingPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative bg-[#083703] pt-[120px] pb-[0px] overflow-hidden min-h-[680px]">

        <div className="absolute inset-0">
          <Image src={imgServicesMain} alt="" fill className="object-cover opacity-20" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-br from-[#083703]/95 via-[#083703]/80 to-[#0c6d00]/70" />
        </div>

        {[700, 500, 350].map((size, i) => (
          <div key={i} className="absolute rounded-full border border-[rgba(139,206,131,0.08)] pointer-events-none"
               style={{ width: size, height: size, top: `-${size / 3}px`, right: `-${size / 4}px` }} />
        ))}

        {/* ── Minimal nav — no exit links ── */}
        <MinimalNav />

        <div className="relative z-10 px-[50px] max-w-[1200px] mx-auto">

          {/* Breadcrumb */}
          <AnimateIn variant="fade" className="flex items-center gap-2 mb-[36px]">
            <Link href="/insurance" className="text-[rgba(255,255,255,0.4)] text-[13px] font-montreal hover:text-white transition-colors">← All Insurance Plans</Link>
          </AnimateIn>

          <div className="flex flex-col lg:flex-row gap-[60px] items-end">

            {/* Left: headline */}
            <AnimateIn variant="left" className="flex-1 pb-[70px]">
              <div className="mb-[24px]"><MedicareBadge /></div>

              {/* ── Updated H1 — message-match for ads ── */}
              <h1
                className="text-white text-[clamp(28px,3.8vw,52px)] leading-[1.25] mb-[22px]"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
              >
                Medicare Dentist<br />
                in Richmond, TX —<br />
                Benefits Verified Free
              </h1>

              {/* ── Lead with the anxiety-resolver ── */}
              <p className="text-white text-[18px] font-sharp font-semibold leading-[1.5] mb-[12px]">
                We call your Medicare Advantage plan before your visit and tell you exactly what's covered and what you'll owe — at no charge to you.
              </p>
              <p className="text-[rgba(255,255,255,0.65)] text-[16px] leading-[1.75] max-w-[480px] mb-[36px]">
                Many patients pay $0 for their cleaning. If your Medicare Advantage plan includes dental benefits, you may be able to use your coverage for cleanings, fillings, crowns, dentures, and more at our Richmond, TX office.
              </p>

              {/* ── Phone-first CTAs — phone is clearly PRIMARY ── */}
              <div className="flex flex-col sm:flex-row gap-[14px] mb-[18px]">
                <a
                  href="tel:+12812380023"
                  className="btn btn-white text-[17px] px-[28px] py-[18px]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-2 shrink-0">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="#083703" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Call (281) 238-0023
                </a>
                <Link href="/appointment" className="btn btn-outline text-[15px]">
                  Schedule Online
                </Link>
              </div>
              <p className="text-[rgba(255,255,255,0.4)] text-[13px] font-montreal">
                Free benefit verification · No commitment · Open Saturdays
              </p>
            </AnimateIn>

            {/* Right: doctor photo + quick facts */}
            <AnimateIn variant="right" delay={150} className="shrink-0 w-full lg:w-[380px] self-end">
              <div className="relative rounded-t-[20px] overflow-hidden img-zoom" style={{ height: "400px" }}>
                <Image src={imgDentistCard} alt="Richmond Dental Care — Medicare patients welcome" fill className="object-cover object-top" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083703]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-[22px] py-[20px]">
                  <p className="text-white text-[15px] font-sharp font-semibold leading-[1.3]">Caring for Richmond Seniors</p>
                  <p className="text-[rgba(255,255,255,0.7)] text-[13px] font-montreal mt-[4px]">Gentle care · No rushing · No surprises</p>
                </div>
              </div>
              <div className="bg-white rounded-b-[20px] divide-y divide-[rgba(217,217,217,0.5)]">
                {[
                  { label: "Medicare Advantage",    value: "Dental benefit accepted" },
                  { label: "Original Medicare",     value: "Doesn't cover routine dental" },
                  { label: "Benefit verification",  value: "Same-day · Free of charge" },
                  { label: "No Medicare dental?",   value: "Membership plan available" },
                ].map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between px-[20px] py-[13px]">
                    <span className="text-[#888] text-[13px] font-montreal">{fact.label}</span>
                    <span className="text-[#083703] text-[13px] font-sharp font-semibold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Medicare explained ── */}
      <section className="bg-white py-[70px]">
        <div className="px-[50px] max-w-[1200px] mx-auto">

          <AnimateIn className="flex flex-col gap-[12px] mb-[40px]">
            <h2 className="text-[#083703] text-[clamp(22px,2.8vw,36px)] leading-[1.4]"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}>
              Does Medicare Cover Dental Care?
            </h2>
            <p className="text-[#555] text-[16px] leading-[1.7] max-w-[560px]">
              It depends on your plan type. Here's the key distinction most patients don't know about.
            </p>
          </AnimateIn>

          <div className="flex flex-col lg:flex-row gap-[20px]">

            {/* Original Medicare */}
            <AnimateIn variant="left" className="flex-1 rounded-[20px] border-2 border-[rgba(217,217,217,0.6)] overflow-hidden">
              <div className="bg-[#f9f9f9] px-[28px] py-[22px] flex items-center gap-[12px] border-b border-[rgba(217,217,217,0.5)]">
                <span className="w-[28px] h-[28px] rounded-full bg-[#f0f0f0] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M9 3L3 9M3 3l6 6" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <h3 className="text-[#888] text-[17px] font-sharp font-semibold">Original Medicare (Parts A & B)</h3>
              </div>
              <div className="p-[28px]">
                <p className="text-[#555] text-[15px] font-montreal leading-[1.75] mb-[16px]">
                  Standard Medicare <strong>does not cover</strong> routine dental care — no cleanings, fillings, extractions, crowns, or dentures. It only covers dental work that is medically necessary as part of a covered medical procedure.
                </p>
                <div className="bg-[#fafafa] rounded-[10px] p-[16px]">
                  <p className="text-[#888] text-[13px] font-montreal leading-[1.6]">
                    <strong className="text-[#555]">If you only have Original Medicare:</strong> Ask us about our affordable Membership Plan — it covers cleanings, exams, and X-rays for one annual fee with no insurance needed.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Medicare Advantage */}
            <AnimateIn variant="right" delay={100} className="flex-1 rounded-[20px] border-2 border-[#8bce83] overflow-hidden">
              <div className="relative h-[180px] overflow-hidden">
                <Image src={imgHowItWorksRight} alt="Patient care" fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083703]/80 to-transparent" />
                <div className="absolute bottom-[16px] left-[16px]"><MedicareBadge small /></div>
              </div>
              <div className="p-[28px] bg-[#f7fcf7]">
                <h3 className="text-[#083703] text-[17px] font-sharp font-semibold mb-[14px]">
                  ✓ Medicare Advantage (Part C) — May include dental
                </h3>
                <p className="text-[#555] text-[15px] font-montreal leading-[1.75] mb-[16px]">
                  Many Medicare Advantage plans (Humana, Aetna, UnitedHealthcare, Cigna, BCBS) <strong>include dental benefits</strong> — often 100% for preventive care and partial coverage for restorative procedures.
                </p>
                <a href="tel:+12812380023" className="btn btn-primary text-[14px]">
                  Verify My Plan Free →
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Services + senior photo ── */}
      <section className="bg-[#f9faf9] py-[70px]">
        <div className="px-[50px] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[50px] items-start">

          {/* Left images */}
          <AnimateIn variant="left" className="shrink-0 lg:w-[40%] relative hidden lg:block" style={{ height: "480px" }}>
            <div className="absolute top-0 left-[30px] w-[240px] h-[460px] rounded-[120px] overflow-hidden img-zoom shadow-xl">
              <Image src={imgHowItWorksLeft} alt="Patient care" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute top-[40px] left-[240px] w-[190px] h-[190px] rounded-full overflow-hidden img-zoom shadow-xl border-4 border-white">
              <Image src={imgDentistsMain} alt="Richmond Dental Care team" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute bottom-[20px] left-[180px] z-10 bg-[#083703] rounded-[12px] px-[16px] py-[12px] shadow-xl">
              <p className="text-white text-[13px] font-sharp font-semibold">Open Saturdays</p>
              <p className="text-[#8bce83] text-[11px] font-montreal mt-[2px]">Walk-ins welcome</p>
            </div>
          </AnimateIn>

          {/* Right: services list */}
          <AnimateIn variant="right" delay={100} className="flex-1">
            <div className="flex flex-col gap-[14px] mb-[36px]">
              <h2 className="text-[#083703] text-[clamp(20px,2.8vw,32px)] leading-[1.4]"
                  style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}>
                Dental Services Available to Medicare Patients
              </h2>
              <p className="text-[#555] text-[16px] leading-[1.65]">
                Whether your Medicare Advantage plan covers it or you're paying out-of-pocket, all of the following are available at our Richmond, TX office.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
              {coveredServices.map((item) => (
                <div key={item.service} className="flex items-start gap-[12px] bg-white border border-[rgba(217,217,217,0.5)] rounded-[10px] p-[14px] hover:border-[#8bce83] hover:bg-[#f7fcf7] transition-all duration-200">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#0c6d00] mt-[7px] shrink-0" />
                  <div>
                    <p className="text-[#1a1a1a] text-[14px] font-sharp font-semibold leading-[1.3] mb-[2px]">{item.service}</p>
                    <p className="text-[#aaa] text-[12px] font-montreal">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#aaa] text-[12px] font-montreal leading-[1.6] mt-[16px] italic">
              Coverage estimates based on typical Medicare Advantage dental plans. Your plan may vary. Call for a free verification.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="bg-white py-[70px]">
        <div className="px-[50px] max-w-[1200px] mx-auto">

          <AnimateIn className="flex flex-col gap-[12px] mb-[40px]">
            <h2 className="text-[#083703] text-[clamp(20px,2.8vw,34px)] leading-[1.4]"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}>
              Why Richmond Dental Care for Medicare Patients
            </h2>
          </AnimateIn>

          <div className="flex flex-col lg:flex-row gap-[24px]">
            {/* Office photo */}
            <AnimateIn variant="left" className="shrink-0 lg:w-[36%] relative rounded-[20px] overflow-hidden img-zoom min-h-[380px]">
              <Image src={imgOffice} alt="Richmond Dental Care office" fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083703]/75 via-transparent to-transparent" />
              <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                <div className="bg-white/10 backdrop-blur-[14px] border border-white/20 rounded-[14px] px-[18px] py-[14px]">
                  <div className="flex gap-[2px] mb-[6px]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#8bce83">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                    <span className="text-white text-[12px] font-sharp font-semibold ml-1">4.9</span>
                  </div>
                  <p className="text-white text-[13px] font-montreal leading-[1.5] italic">
                    "I wasn't sure my Medicare plan covered anything. The team verified it before I came in — my cleaning was 100% covered. I paid nothing."
                  </p>
                  <p className="text-[rgba(255,255,255,0.55)] text-[11px] font-sharp font-semibold mt-[6px]">
                    — Patricia R., Medicare Advantage patient
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Reasons */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
              {whyUs.map((item, i) => (
                <AnimateIn key={item.title} variant="up" delay={i * 70}>
                  <div className="flex flex-col gap-[10px] p-[22px] rounded-[16px] border border-[rgba(217,217,217,0.5)] hover:border-[#8bce83] hover:bg-[#f7fcf7] transition-all duration-250 h-full">
                    <div className="w-[36px] h-[36px] rounded-full bg-[#dcf0da] flex items-center justify-center">
                      <span className="text-[#083703] text-[13px] font-sharp font-bold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-[#1a1a1a] text-[16px] font-sharp font-semibold leading-[1.3]">{item.title}</h3>
                    <p className="text-[#555] text-[14px] font-montreal leading-[1.65]">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Medicare-specific FAQ ── */}
      <section className="bg-[#f9faf9] py-[70px]">
        <div className="px-[50px] max-w-[900px] mx-auto">

          <AnimateIn className="flex flex-col gap-[12px] mb-[40px] text-center items-center">
            <h2 className="text-[#083703] text-[clamp(20px,2.8vw,34px)] leading-[1.4]"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}>
              Common Questions from Medicare Patients
            </h2>
            <p className="text-[#666] text-[16px] leading-[1.7] max-w-[500px]">
              Answers to the questions we hear most often from patients with Medicare.
            </p>
          </AnimateIn>

          <AnimateIn variant="up" delay={80} className="bg-white rounded-[20px] border border-[rgba(217,217,217,0.5)] overflow-hidden divide-y divide-[rgba(217,217,217,0.5)]">
            {medicareFaqs.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex items-start justify-between gap-[20px] px-[28px] py-[22px] cursor-pointer list-none hover:bg-[#f7fcf7] transition-colors">
                  <span className="text-[#1a1a1a] text-[16px] leading-[1.5] font-sharp font-medium pr-4">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-[28px] h-[28px] rounded-full border border-[rgba(8,55,3,0.2)] flex items-center justify-center mt-[2px] group-open:bg-[#083703] group-open:border-[#083703] transition-all duration-200">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-open:rotate-45 transition-transform duration-200">
                      <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                            className="group-open:stroke-white"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-[28px] pb-[22px]">
                  <p className="text-[#555] text-[15px] font-montreal leading-[1.75]">{faq.a}</p>
                </div>
              </details>
            ))}
          </AnimateIn>

          <AnimateIn variant="up" delay={150} className="mt-[24px] text-center">
            <p className="text-[#888] text-[14px] font-montreal mb-[16px]">
              Have a question not listed here? Our front desk team is happy to help.
            </p>
            <a href="tel:+12812380023" className="btn btn-primary">
              Call (281) 238-0023 →
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#083703] py-[80px] overflow-hidden relative">
        <div className="absolute inset-0">
          <Image src={imgServicesMain} alt="" fill className="object-cover opacity-10" unoptimized />
          <div className="absolute inset-0 bg-[#083703]/85" />
        </div>
        {[500, 360].map((size, i) => (
          <div key={i} className="absolute rounded-full border border-[rgba(139,206,131,0.08)] pointer-events-none top-1/2 -translate-y-1/2"
               style={{ width: size, height: size, right: `-${size / 3}px` }} />
        ))}

        <div className="relative z-10 px-[50px] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-[60px]">

            <AnimateIn variant="left" className="flex-1 flex flex-col gap-[22px]">
              <MedicareBadge />
              <h2 className="text-white text-[clamp(22px,3vw,40px)] leading-[1.35]"
                  style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}>
                Ready to Use Your Medicare Dental Benefits?
              </h2>
              <p className="text-[rgba(255,255,255,0.65)] text-[16px] font-montreal leading-[1.7]">
                We'll verify your Medicare Advantage dental benefits before your visit and tell you exactly what's covered — at no charge.
              </p>
              <div className="flex flex-col sm:flex-row gap-[14px]">
                <a href="tel:+12812380023" className="btn btn-white text-[17px] px-[28px] py-[18px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-2 shrink-0">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="#083703" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Call (281) 238-0023
                </a>
                <Link href="/appointment" className="btn btn-outline text-[15px]">Schedule Online</Link>
              </div>
              <div className="flex items-center gap-[8px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#8bce83">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <span className="text-[rgba(255,255,255,0.45)] text-[13px] font-montreal ml-1">
                  4.9 stars · 200+ Google reviews
                </span>
              </div>
            </AnimateIn>

            <AnimateIn variant="right" delay={100} className="shrink-0 lg:w-[320px]">
              <div className="relative rounded-[20px] overflow-hidden img-zoom shadow-2xl" style={{ height: "400px" }}>
                <Image src={imgDentistCard} alt="Richmond Dental Care — Medicare patients welcome" fill className="object-cover object-top" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083703]/60 to-transparent" />
              </div>
            </AnimateIn>
          </div>

          {/* Link strip */}
          <AnimateIn variant="up" delay={200} className="mt-[50px] pt-[28px] border-t border-[rgba(255,255,255,0.1)] flex flex-wrap gap-[24px] justify-center">
            {[
              { label: "← All Insurance Plans",    href: "/insurance" },
              { label: "View Membership Plan",     href: "/membership-plan" },
              { label: "Senior Dentistry",         href: "/services/senior-dentistry" },
              { label: "Schedule an Appointment",  href: "/appointment" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[rgba(255,255,255,0.45)] text-[13px] font-montreal hover:text-white transition-colors underline underline-offset-2">
                {l.label}
              </Link>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* ── Sticky mobile phone bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[rgba(0,0,0,0.1)] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] px-[16px] py-[12px] flex gap-[10px]">
        <a href="tel:+12812380023" className="flex-1 btn btn-primary text-[15px] py-[13px] justify-center">
          📞 Call to Verify Free
        </a>
        <Link href="/appointment" className="flex-1 btn btn-outline-dark text-[14px] py-[13px] justify-center">
          Book Online
        </Link>
      </div>
      <div className="h-[64px] lg:hidden" />

      <Footer />
    </main>
  );
}
