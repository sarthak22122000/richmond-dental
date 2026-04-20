"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

const PHONE_DISPLAY = "(832) 612-2831";
const PHONE_HREF = "tel:+18326122831";

export interface AftercareData {
  treatmentName: string;
  heroSubtitle: string;
  heroImage: string;
  serviceHref: string;
  first24Do: string[];
  first24Avoid: string[];
  days2to7Normal: string[];
  days2to7Warning: string[];
  eatThis: string[];
  avoidEating: string[];
  callSymptoms: string[];
}

/* ─── Icons ─────────────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CheckCircle({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden style={{ minWidth: 18 }}>
      <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.6"/>
      <path d="M8 12l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function XCircle({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden style={{ minWidth: 18 }}>
      <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.6"/>
      <path d="M9 9l6 6M15 9l-6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function WarnCircle({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden style={{ minWidth: 18 }}>
      <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.6"/>
      <path d="M12 8v4M12 16v.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function ForkKnife() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 2v7c0 1.1.9 2 2 2h1v11a1 1 0 002 0V11h1a2 2 0 002-2V2M3 6h8M16 2l-1 10h2l-1 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Slash() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────── */
function SectionLabel({ text }: { text: string }) {
  return (
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
      {text}
    </span>
  );
}

function BulletList({
  title, items, icon, bg,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  bg: string;
}) {
  return (
    <div style={{
      background: bg,
      borderRadius: "20px",
      padding: "28px 30px",
      height: "100%",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
        {icon}
        <h3 style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#083703",
          margin: 0,
          fontFamily: "var(--font-sharp)",
        }}>
          {title}
        </h3>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", color: "#444", lineHeight: 1.65 }}>
            <span style={{ marginTop: "2px" }}>
              {icon}
            </span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FoodList({ title, items, type }: { title: string; items: string[]; type: "eat" | "skip" }) {
  const isEat = type === "eat";
  return (
    <div style={{
      background: isEat ? "#f4faf4" : "#fff8f8",
      borderRadius: "20px",
      padding: "28px 30px",
      border: `1px solid ${isEat ? "rgba(8,55,3,0.10)" : "rgba(192,57,43,0.10)"}`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <span style={{ color: isEat ? "#083703" : "#c0392b" }}>
          {isEat ? <ForkKnife /> : <Slash />}
        </span>
        <h3 style={{
          fontSize: "16px",
          fontWeight: 700,
          color: isEat ? "#083703" : "#c0392b",
          margin: 0,
          fontFamily: "var(--font-sharp)",
        }}>
          {title}
        </h3>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item, i) => (
          <li key={i} style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
            color: "#444",
            padding: "9px 14px",
            background: "white",
            borderRadius: "10px",
            border: "1px solid rgba(0,0,0,0.05)",
          }}>
            <span style={{ color: isEat ? "#8bce83" : "#e88080", fontWeight: 700, fontSize: "15px" }}>
              {isEat ? "✓" : "✕"}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Main template ─────────────────────────────────────────────── */
export default function AftercareTemplate({ data }: { data: AftercareData }) {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Block 1: Page Header ──────────────────────────────── */}
        <section style={{ background: "linear-gradient(to bottom, #f7fcf7, #fff)", paddingTop: "120px", paddingBottom: "0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

            <nav aria-label="Breadcrumb" style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "28px", fontSize: "13px", color: "#888", flexWrap: "wrap" }}>
              <Link href="/" style={{ color: "#083703", textDecoration: "none", fontWeight: 500 }}>Home</Link>
              <span style={{ color: "#ccc" }}>›</span>
              <Link href="/after-your-visit" style={{ color: "#083703", textDecoration: "none", fontWeight: 500 }}>After Your Visit</Link>
              <span style={{ color: "#ccc" }}>›</span>
              <span>{data.treatmentName}</span>
            </nav>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", paddingBottom: "72px" }}
              className="aftercare-hero-grid">
              <div>
                <SectionLabel text="Aftercare Guide" />
                <h1 style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 700,
                  color: "#083703",
                  lineHeight: 1.08,
                  marginBottom: "20px",
                  fontFamily: "var(--font-sharp)",
                  letterSpacing: "-0.02em",
                }}>
                  {data.treatmentName}{" "}
                  <span style={{ color: "#0c6d00" }}>Aftercare</span>
                </h1>
                <p style={{ fontSize: "18px", color: "#555", lineHeight: 1.75, marginBottom: "36px" }}>
                  {data.heroSubtitle}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                  <a href={PHONE_HREF} style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#083703",
                    color: "white",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}>
                    <PhoneIcon /> {PHONE_DISPLAY}
                  </a>
                  <span style={{ fontSize: "13px", color: "#888" }}>Mon–Fri 8am–5pm · Sat 8am–2pm</span>
                </div>
              </div>
              <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", height: "420px" }}>
                <Image
                  src={data.heroImage}
                  alt={`${data.treatmentName} aftercare`}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(8,55,3,0.12) 0%, transparent 60%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Block 2: First 24 Hours ───────────────────────────── */}
        <section style={{ background: "white", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <AnimateIn>
              <SectionLabel text="First 24 Hours" />
              <h2 style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 700,
                color: "#083703",
                marginBottom: "10px",
                fontFamily: "var(--font-sharp)",
              }}>
                The most important window
              </h2>
              <p style={{ fontSize: "16px", color: "#555", maxWidth: "540px", lineHeight: 1.7, marginBottom: "36px" }}>
                These first few hours set the foundation for a smooth recovery. Keep these in mind tonight.
              </p>
            </AnimateIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <AnimateIn delay={50}>
                <BulletList
                  title="What to Do"
                  items={data.first24Do}
                  icon={<CheckCircle color="#083703" />}
                  bg="#f4faf4"
                />
              </AnimateIn>
              <AnimateIn delay={120}>
                <BulletList
                  title="What to Avoid"
                  items={data.first24Avoid}
                  icon={<XCircle color="#c0392b" />}
                  bg="#fff8f8"
                />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Block 3: Days 2–7 ────────────────────────────────── */}
        <section style={{ background: "#f7fcf7", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <AnimateIn>
              <SectionLabel text="Days 2–7" />
              <h2 style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 700,
                color: "#083703",
                marginBottom: "10px",
                fontFamily: "var(--font-sharp)",
              }}>
                What healing looks like
              </h2>
              <p style={{ fontSize: "16px", color: "#555", maxWidth: "540px", lineHeight: 1.7, marginBottom: "36px" }}>
                Most people feel noticeably better by day 3. Here's what's normal and what's worth a call.
              </p>
            </AnimateIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <AnimateIn delay={50}>
                <BulletList
                  title="Normal Signs of Healing"
                  items={data.days2to7Normal}
                  icon={<CheckCircle color="#0c6d00" />}
                  bg="#ecf7ec"
                />
              </AnimateIn>
              <AnimateIn delay={120}>
                <BulletList
                  title="Watch Out For"
                  items={data.days2to7Warning}
                  icon={<WarnCircle color="#d97706" />}
                  bg="#fffbeb"
                />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Block 4: What to Eat ─────────────────────────────── */}
        <section style={{ background: "white", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <AnimateIn>
              <SectionLabel text="Nutrition" />
              <h2 style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 700,
                color: "#083703",
                marginBottom: "10px",
                fontFamily: "var(--font-sharp)",
              }}>
                What to eat right now
              </h2>
              <p style={{ fontSize: "16px", color: "#555", maxWidth: "540px", lineHeight: 1.7, marginBottom: "36px" }}>
                Your food choices in the next few days directly affect how fast you heal. Keep it simple.
              </p>
            </AnimateIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <AnimateIn delay={50}>
                <FoodList title="Eat This" items={data.eatThis} type="eat" />
              </AnimateIn>
              <AnimateIn delay={120}>
                <FoodList title="Skip This" items={data.avoidEating} type="skip" />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Block 5: When to Call Us ──────────────────────────── */}
        <section style={{ background: "#fff8f8", padding: "80px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <AnimateIn>
              <span style={{
                display: "inline-block",
                background: "#fee2e2",
                color: "#991b1b",
                borderRadius: "100px",
                padding: "5px 14px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}>
                Important
              </span>
              <h2 style={{
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 700,
                color: "#083703",
                marginBottom: "16px",
                fontFamily: "var(--font-sharp)",
              }}>
                When to Call Us
              </h2>
              <p style={{ fontSize: "17px", color: "#555", marginBottom: "36px", lineHeight: 1.7 }}>
                These symptoms go beyond normal healing. Don't wait — call us right away and we'll take care of you.
              </p>
            </AnimateIn>
            <AnimateIn delay={80}>
              <div style={{
                background: "white",
                borderRadius: "20px",
                border: "1px solid #fecaca",
                padding: "28px 32px",
                textAlign: "left",
                marginBottom: "32px",
              }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {data.callSymptoms.map((symptom, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{
                        width: "22px",
                        height: "22px",
                        minWidth: "22px",
                        background: "#fee2e2",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "1px",
                      }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M6 1.5v5M6 9.5v1" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <span style={{ fontSize: "15px", color: "#333", lineHeight: 1.6, fontWeight: 600 }}>
                        {symptom}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn delay={160}>
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
                <PhoneIcon /> Call {PHONE_DISPLAY}
              </a>
              <p style={{ fontSize: "13px", color: "#999", marginTop: "12px" }}>
                Tap to call · Mon–Fri 8am–5pm · Sat 8am–2pm
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── Block 6: Related Service Link ────────────────────── */}
        <section style={{ background: "white", padding: "60px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <AnimateIn>
              <div style={{
                background: "#f7fcf7",
                border: "1px solid rgba(8,55,3,0.10)",
                borderRadius: "20px",
                padding: "32px 36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                flexWrap: "wrap",
              }}>
                <div>
                  <p style={{ fontSize: "12px", color: "#888", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.07em", fontWeight: 600 }}>
                    Considering this treatment?
                  </p>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#083703", margin: 0, fontFamily: "var(--font-sharp)" }}>
                    Learn about {data.treatmentName} at Richmond Dental
                  </h3>
                </div>
                <Link href={data.serviceHref} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#083703",
                  color: "white",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  whiteSpace: "nowrap",
                }}>
                  View Service <ArrowRight />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── Block 7: Soft CTA ────────────────────────────────── */}
        <section style={{ background: "#f7fcf7", padding: "80px 24px" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <AnimateIn>
              <h2 style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                color: "#083703",
                marginBottom: "16px",
                fontFamily: "var(--font-sharp)",
              }}>
                Still have questions?
              </h2>
              <p style={{ fontSize: "17px", color: "#555", marginBottom: "32px", lineHeight: 1.75 }}>
                Recovery questions are always welcome — that's what we're here for. A quick call usually answers everything.
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
                <PhoneIcon /> {PHONE_DISPLAY}
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
