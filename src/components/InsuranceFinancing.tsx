import Link from "next/link";
import AnimateIn from "./AnimateIn";

/* Cherry logo as inline SVG — Cherry's teal/dark brand */
function CherryLogo() {
  return (
    <div className="inline-flex items-center gap-[8px]">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-label="Cherry">
        <rect width="28" height="28" rx="6" fill="#1B1F3B"/>
        {/* Cherry fruit icon */}
        <circle cx="10" cy="17" r="4" fill="#E8325A"/>
        <circle cx="18" cy="17" r="4" fill="#E8325A"/>
        {/* Stems */}
        <path d="M10 13 Q14 6 18 13" stroke="#4CAF7D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="14" cy="6" r="1.5" fill="#4CAF7D"/>
      </svg>
      <span
        className="text-[#1B1F3B] text-[15px] tracking-tight"
        style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700 }}
      >
        Cherry
      </span>
    </div>
  );
}

const options = [
  {
    tag: "Third-Party Financing",
    title: "Cherry Payment Plans",
    desc: "Cherry makes it easy to say yes to the dental care you need. Apply in seconds, get an instant decision, and split your treatment cost into simple monthly payments.",
    bullets: [
      "Instant approval — apply in under 60 seconds",
      "0% APR promotional periods available",
      "Flexible terms from 3 to 60 months",
      "Soft credit check — won't hurt your score",
      "All credit types considered",
      "No prepayment penalties",
    ],
    cta: "Learn About Cherry →",
    ctaHref: "/cherry-purchase-plans",
    bg: "#1B1F3B",
    accent: "#4CAF7D",
    dark: true,
    cherry: true,
  },
  {
    tag: "In-Office Plans",
    title: "Membership Plan",
    desc: "Skip the insurance hassle altogether. Our in-house membership plan gives you cleanings, exams, X-rays, and discounts on all other services for one low annual fee.",
    bullets: [
      "2 cleanings + exams + X-rays included",
      "15–20% discount on all other treatments",
      "No waiting periods, no annual maximums",
      "No claim forms — ever",
    ],
    cta: "See Membership Details →",
    ctaHref: "/membership-plan",
    bg: "#083703",
    accent: "#8bce83",
    dark: true,
  },
  {
    tag: "Flexible Payments",
    title: "In-House Payment Plans",
    desc: "Ask our team about splitting larger treatment costs into manageable monthly payments. We work with you to make sure cost is never a barrier to the care you need.",
    bullets: [
      "Custom payment schedules",
      "No credit check required",
      "Available for most major procedures",
      "Speak to our team before any treatment begins",
    ],
    cta: "Talk to Our Team →",
    ctaHref: "/contact",
    bg: "#f7fcf7",
    accent: "#083703",
  },
];

export default function InsuranceFinancing() {
  return (
    <section className="bg-[#f9faf9] py-[90px]">
      <div className="px-[50px] max-w-[1200px] mx-auto">

        {/* Header */}
        <AnimateIn className="flex flex-col gap-[14px] mb-[60px]">
          <div className="inline-flex items-center gap-2 w-fit">
            <span className="w-[3px] h-[20px] rounded-full bg-[#0c6d00]" />
            <span className="text-[#0c6d00] text-[12px] font-sharp font-semibold uppercase tracking-[0.09em]">
              No Insurance? No Problem.
            </span>
          </div>
          <h2
            className="text-[#083703] text-[clamp(24px,3vw,40px)] leading-[1.4]"
            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
          >
            Affordable Dental Care in Richmond, TX<br />
            With or Without Insurance
          </h2>
          <p className="text-[#666] text-[16px] leading-[1.6] max-w-[550px]">
            We believe everyone deserves quality dental care. If you don't have insurance or your
            plan doesn't cover a procedure, we have flexible options to make it work for your budget.
          </p>
        </AnimateIn>

        {/* Option cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {options.map((opt, i) => (
            <AnimateIn key={opt.title} variant="up" delay={i * 100} className="flex flex-col">
              <div
                className="flex flex-col h-full rounded-[20px] overflow-hidden p-[32px] hover:shadow-[0_12px_40px_rgba(8,55,3,0.12)] transition-shadow duration-350"
                style={{ backgroundColor: opt.bg }}
              >
                {/* Tag + Cherry logo */}
                <div className="flex items-center justify-between mb-[16px]">
                  <p
                    className="text-[11px] font-sharp font-semibold uppercase tracking-[0.09em]"
                    style={{ color: opt.dark ? "rgba(255,255,255,0.5)" : "#666" }}
                  >
                    {opt.tag}
                  </p>
                  {opt.cherry && (
                    <div className="bg-white rounded-[8px] px-[10px] py-[5px]">
                      <CherryLogo />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-[22px] leading-[1.3] mb-[14px]"
                  style={{
                    fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif",
                    fontWeight: 600,
                    color: opt.dark ? "#fff" : "#083703",
                  }}
                >
                  {opt.title}
                </h3>

                {/* Desc */}
                <p
                  className="text-[14px] font-montreal leading-[1.7] mb-[24px]"
                  style={{ color: opt.dark ? "rgba(255,255,255,0.65)" : "#555" }}
                >
                  {opt.desc}
                </p>

                {/* Bullets */}
                <div className="flex flex-col gap-[10px] flex-1 mb-[28px]">
                  {opt.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-[10px]">
                      <span
                        className="w-[5px] h-[5px] rounded-full mt-[7px] shrink-0"
                        style={{ backgroundColor: opt.accent }}
                      />
                      <span
                        className="text-[13px] font-montreal leading-[1.5]"
                        style={{ color: opt.dark ? "rgba(255,255,255,0.75)" : "#444" }}
                      >
                        {b}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={opt.ctaHref}
                  className="text-[14px] font-sharp font-semibold transition-opacity hover:opacity-70"
                  style={{ color: opt.dark ? (opt.cherry ? "#4CAF7D" : "#8bce83") : "#083703" }}
                  {...(opt.ctaHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {opt.cta}
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Cherry callout strip */}
        <AnimateIn variant="up" delay={200} className="mt-[30px] rounded-[16px] border border-[rgba(27,31,59,0.12)] bg-white px-[28px] py-[20px] flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
          <div className="shrink-0">
            <CherryLogo />
          </div>
          <div className="flex-1 h-px bg-[rgba(0,0,0,0.06)] hidden sm:block" />
          <p className="text-[#555] text-[13px] font-montreal leading-[1.6] flex-1">
            <strong className="text-[#1B1F3B]">Pay over time. Start care today.</strong> Cherry lets you break
            your treatment into predictable monthly payments with no hidden fees. Ask our front desk to apply
            at your next visit, or apply online before you come in.
          </p>
          <Link href="/cherry-purchase-plans" className="btn btn-primary shrink-0 text-[14px]">
            Apply for Cherry →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
