"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

const PHONE_DISPLAY = "(832) 612-2831";
const PHONE_HREF = "tel:+18326122831";

const treatments = [
  {
    name: "Tooth Extraction",
    href: "/after-your-visit/tooth-extraction",
    image: "/images/emergency-bg.png",
    desc: "Dos and don'ts after your extraction — including dry socket prevention.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3C9 3 6 5 6 8c0 1.5.5 3 1 4l2 9h6l2-9c.5-1 1-2.5 1-4 0-3-3-5-6-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Root Canal",
    href: "/after-your-visit/root-canal",
    image: "/images/dentist-doctor.png",
    desc: "How to manage soreness and protect your temporary crown.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3C9 3 7 5 7 7.5c0 1.5.5 3.5 1.5 5L9 21h6l-.5-8.5C15.5 11 16 9 16 7.5 16 5 14 3 12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    name: "Dental Implants",
    href: "/after-your-visit/dental-implants",
    image: "/images/services-main.png",
    desc: "Surgical site care and what to expect in the weeks ahead.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v5M9 7h6l1 4H8l1-4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 11v9M14 11v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Braces & Aligners",
    href: "/after-your-visit/braces-and-aligners",
    image: "/images/dentists-main.png",
    desc: "Managing soreness, diet, and adjusting to your new appliance.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 8h16M4 8c0 5.5 1.5 9 8 9s8-3.5 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="8" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Teeth Whitening",
    href: "/after-your-visit/teeth-whitening",
    image: "/images/office.png",
    desc: "The White Diet and keeping your results as long as possible.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 8v1M12 15v1M8 12h1M15 12h1M9.5 9.5l.7.7M13.8 13.8l.7.7M9.5 14.5l.7-.7M13.8 10.2l.7-.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Dental Fillings",
    href: "/after-your-visit/dental-fillings",
    image: "/images/dentist-card.png",
    desc: "What's normal after a filling and when your bite should settle.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="7" y="4" width="10" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 10h6M9 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M10 16v4M14 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Deep Cleaning",
    href: "/after-your-visit/deep-cleaning",
    image: "/images/hero-bg.png",
    desc: "Caring for your gums after scaling and root planing.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 20c3-4 5-8 9-10 4-2 7-1 9 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 18c2-3 4-5 7-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.5"/>
        <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
];

const generalTips = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="#0c6d00" strokeWidth="1.8"/>
        <path d="M12 7v5l3 3" stroke="#0c6d00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "<strong>Take prescribed medication as directed</strong> — don't skip doses, even if you feel better.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v20M2 12h20" stroke="#0c6d00" strokeWidth="1.8" strokeLinecap="round" opacity="0.3"/>
        <path d="M8 8s0-4 4-4 4 4 4 4v8s0 4-4 4-4-4-4-4V8z" stroke="#0c6d00" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    text: "<strong>Stay hydrated</strong> — drink plenty of water throughout your recovery.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M18 8h1a4 4 0 010 8h-1M6 8H5a4 4 0 000 8h1" stroke="#0c6d00" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 12h12" stroke="#0c6d00" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2"/>
      </svg>
    ),
    text: "<strong>Avoid hard, crunchy foods</strong> for at least 24 hours after any dental procedure.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 22s8-4.5 8-11.8A8 8 0 0012 2a8 8 0 00-8 8.2C4 17.5 12 22 12 22z" stroke="#0c6d00" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#0c6d00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "<strong>Call us if swelling increases after 48 hours</strong> — that's your signal to check in.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#0c6d00" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    text: "<strong>Rest is part of healing</strong> — avoid strenuous activity for the first 24 hours.",
  },
];

export default function AfterYourVisitHub() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section style={{
          background: "linear-gradient(to bottom, #f4faf4 0%, #ffffff 100%)",
          paddingTop: "120px",
          paddingBottom: "0",
        }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
            <nav aria-label="Breadcrumb" style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "28px", fontSize: "13px", color: "#888" }}>
              <Link href="/" style={{ color: "#083703", textDecoration: "none", fontWeight: 500 }}>Home</Link>
              <span style={{ color: "#ccc" }}>›</span>
              <span>After Your Visit</span>
            </nav>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", paddingBottom: "72px" }}
              className="aftercare-hero-grid">
              <div>
                <span style={{
                  display: "inline-block",
                  background: "#dcf0da",
                  color: "#083703",
                  borderRadius: "100px",
                  padding: "6px 16px",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                  fontFamily: "var(--font-sharp)",
                }}>
                  Patient Resources
                </span>
                <h1 style={{
                  fontSize: "clamp(34px, 4.5vw, 56px)",
                  fontWeight: 700,
                  color: "#083703",
                  lineHeight: 1.05,
                  marginBottom: "20px",
                  fontFamily: "var(--font-sharp)",
                  letterSpacing: "-0.02em",
                }}>
                  We&apos;re Still With You{" "}
                  <span style={{ color: "#0c6d00" }}>After You Leave</span>
                </h1>
                <p style={{ fontSize: "18px", color: "#555", lineHeight: 1.75 }}>
                  Everything you need to know about caring for your smile after your appointment. Clear guidance, no jargon.
                </p>
              </div>
              <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", height: "400px" }}>
                <Image
                  src="/images/dentist-doctor.png"
                  alt="Dental care aftercare"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(8,55,3,0.10) 0%, transparent 60%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Treatment Cards Grid ──────────────────────────────── */}
        <section style={{ background: "white", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <AnimateIn>
              <h2 style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 700,
                color: "#083703",
                marginBottom: "8px",
                fontFamily: "var(--font-sharp)",
              }}>
                Select your treatment
              </h2>
              <p style={{ fontSize: "16px", color: "#666", marginBottom: "40px" }}>
                Find your specific aftercare guide below.
              </p>
            </AnimateIn>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}>
              {treatments.map((t, i) => (
                <AnimateIn key={t.href} delay={i * 60}>
                  <Link href={t.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <div style={{
                      background: "white",
                      border: "1px solid rgba(8,55,3,0.08)",
                      borderRadius: "18px",
                      overflow: "hidden",
                      transition: "all 0.22s ease",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(8,55,3,0.10)";
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(8,55,3,0.18)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(8,55,3,0.08)";
                      }}
                    >
                      {/* Card image */}
                      <div style={{ position: "relative", height: "180px", flexShrink: 0 }}>
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(8,55,3,0.35) 100%)" }} />
                        <div style={{
                          position: "absolute",
                          bottom: "12px",
                          left: "14px",
                          width: "38px",
                          height: "38px",
                          background: "rgba(255,255,255,0.92)",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#083703",
                        }}>
                          {t.icon}
                        </div>
                      </div>

                      {/* Card body */}
                      <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                        <h3 style={{
                          fontSize: "17px",
                          fontWeight: 700,
                          color: "#083703",
                          margin: 0,
                          fontFamily: "var(--font-sharp)",
                        }}>
                          {t.name}
                        </h3>
                        <p style={{ fontSize: "14px", color: "#666", margin: 0, lineHeight: 1.6 }}>
                          {t.desc}
                        </p>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#083703",
                          fontSize: "13px",
                          fontWeight: 600,
                          marginTop: "auto",
                          paddingTop: "8px",
                        }}>
                          View aftercare guide
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── General Tips ─────────────────────────────────────── */}
        <section style={{ background: "#f7fcf7", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <AnimateIn>
              <span style={{
                display: "inline-block",
                background: "#dcf0da",
                color: "#083703",
                borderRadius: "100px",
                padding: "5px 14px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}>
                Universal Tips
              </span>
              <h2 style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 700,
                color: "#083703",
                marginBottom: "10px",
                fontFamily: "var(--font-sharp)",
              }}>
                Good advice after any procedure
              </h2>
              <p style={{ fontSize: "16px", color: "#666", marginBottom: "40px", maxWidth: "520px" }}>
                These tips apply no matter what treatment you just had.
              </p>
            </AnimateIn>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "16px",
            }}>
              {generalTips.map((tip, i) => (
                <AnimateIn key={i} delay={i * 60}>
                  <div style={{
                    background: "white",
                    border: "1px solid rgba(8,55,3,0.08)",
                    borderRadius: "16px",
                    padding: "22px 24px",
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}>
                    <div style={{
                      width: "42px",
                      height: "42px",
                      minWidth: "42px",
                      background: "#dcf0da",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      {tip.icon}
                    </div>
                    <p
                      style={{ fontSize: "14px", color: "#444", lineHeight: 1.65, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: tip.text }}
                    />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Soft CTA ─────────────────────────────────────────── */}
        <section style={{ background: "white", padding: "80px 24px" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <AnimateIn>
              <h2 style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                color: "#083703",
                marginBottom: "16px",
                fontFamily: "var(--font-sharp)",
              }}>
                Questions? We&apos;re a call away.
              </h2>
              <p style={{ fontSize: "17px", color: "#555", marginBottom: "32px", lineHeight: 1.75 }}>
                If something doesn&apos;t feel right after your appointment, don&apos;t Google it — just call us. That&apos;s what we&apos;re here for.
              </p>
              <a href={PHONE_HREF} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#083703",
                color: "white",
                padding: "18px 36px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "18px",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
              <p style={{ fontSize: "13px", color: "#999", marginTop: "14px" }}>
                Mon–Fri 8am–5pm · Sat 8am–2pm
              </p>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
