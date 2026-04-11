"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import {
  imgHeroBg, imgServicesMain, imgServicesOverlay, imgDentistsMain,
  imgOffice, imgStar, imgStars, imgEmergencyBg,
  imgReview1, imgReview2, imgReview3, imgTestimonialAvatar,
  imgArrowLeft, imgArrowRight,
} from "@/lib/assets";

/* ─── Sub-services data ─────────────────────────────────────────── */
const subServices = [
  {
    num: "01",
    label: "Emergency Dental Care",
    href: "/services/emergency-dental-care",
    desc: "Severe pain, broken teeth, lost crowns — we see urgent cases the same day, including Saturdays. Walk-ins always welcome.",
    featured: true,
    badge: "Walk-ins Welcome",
    image: imgEmergencyBg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L13.5 9H21L15 13.5L17.5 21L12 16.5L6.5 21L9 13.5L3 9H10.5L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    label: "Dental Exams & Cleaning",
    href: "/services/dental-exams-cleaning",
    desc: "Comprehensive checkups and professional cleanings every 6 months to catch small problems before they become big ones.",
    featured: false,
    badge: "Most Popular",
    image: imgServicesMain,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    label: "Oral Cancer Screening",
    href: "/services/oral-cancer-screening",
    desc: "Early detection is everything. We include thorough oral cancer screenings with every comprehensive exam — at no extra cost.",
    featured: false,
    badge: null,
    image: imgDentistsMain,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 8v3l2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    label: "Senior Dentistry",
    href: "/services/senior-dentistry",
    desc: "Gentle, specialized care for older adults addressing dry mouth, gum recession, and restorative needs with patience and expertise.",
    featured: false,
    badge: null,
    image: imgOffice,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8.5 3 6 5.5 6 8c0 2.5 1.5 4.5 3 6l3 6 3-6c1.5-1.5 3-3.5 3-6 0-2.5-2.5-5-6-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "05",
    label: "Scaling & Root Planing",
    href: "/services/scaling-root-planing",
    desc: "Deep cleaning treatment that removes built-up tartar below the gumline to stop gum disease in its tracks and protect your teeth.",
    featured: false,
    badge: null,
    image: imgServicesOverlay,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 20l4-4m0 0l8-8m-8 8l2-2M16 8l2-4 2 2-4 2zm0 0l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "06",
    label: "Night Guards",
    href: "/services/night-guards",
    desc: "Custom-fitted guards to protect teeth from grinding and clenching while you sleep, preventing wear, cracking, and jaw pain.",
    featured: false,
    badge: null,
    image: imgServicesMain,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3a6 6 0 010 12A6 6 0 0112 3z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 15v6M9 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "07",
    label: "Sports Mouth Guards",
    href: "/services/sports-mouth-guards",
    desc: "Durable, precisely fitted mouthguards for athletes of all ages. Protect teeth, lips, and jaw during contact and high-impact sports.",
    featured: false,
    badge: null,
    image: imgDentistsMain,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C7 2 4 5.5 4 9c0 5 4 8 8 13 4-5 8-8 8-13 0-3.5-3-7-8-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "08",
    label: "Tooth Extractions",
    href: "/services/tooth-extractions",
    desc: "When a tooth cannot be saved, we perform gentle, comfortable extractions with sedation options and clear aftercare guidance.",
    featured: false,
    badge: null,
    image: imgOffice,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C9 3 7 5 7 7.5c0 1.5.5 3 1 4l1 9.5h6l1-9.5c.5-1 1-2.5 1-4C17 5 15 3 12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 8c0 1.5 1 3 3 3s3-1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
  },
];

const visitSteps = [
  { num: "01", title: "Warm Welcome",     desc: "Check in, meet our team, and get settled — no long waits." },
  { num: "02", title: "Exam & X-rays",    desc: "A thorough clinical exam plus digital X-rays to see the full picture." },
  { num: "03", title: "Deep Cleaning",    desc: "Professional cleaning removes plaque and tartar you can't reach at home." },
  { num: "04", title: "Your Care Plan",   desc: "We walk you through findings and options — no pressure, just clarity." },
];

const testimonials = [
  {
    quote: "The dentist, Dr. Patel, was amazing! His team did a wonderful job too! The office is very clean and organized. You have to come here for your dental needs.",
    name: "Laura Sigala",
    tag: "General dentistry patient",
  },
  {
    quote: "I hadn't been to a dentist in years and was nervous. The team made me feel so comfortable. They explained everything clearly and never made me feel judged.",
    name: "Maria Gonzalez",
    tag: "New patient",
  },
  {
    quote: "They fit me in the same day I called for a toothache. The pain relief was immediate and the staff was incredibly kind throughout. Highly recommend.",
    name: "James Carter",
    tag: "Emergency care patient",
  },
];

const faqs = [
  {
    q: "How often should I come in for a cleaning and exam?",
    a: "Most patients benefit from a checkup and professional cleaning every 6 months. If you have gum disease, a history of cavities, or other risk factors, we may recommend visits every 3–4 months. We'll personalize a schedule that makes sense for your oral health.",
  },
  {
    q: "Does a cleaning hurt?",
    a: "For most patients, a routine cleaning is entirely painless. If your gums are sensitive or inflamed, you may feel some mild discomfort — we'll check in with you throughout and can apply a numbing gel if needed. The discomfort is always temporary and well worth it.",
  },
  {
    q: "What happens if I haven't been to the dentist in a long time?",
    a: "No judgment — ever. We see patients at all stages of their oral health journey. We'll do a comprehensive assessment, walk you through what we find, and prioritize the most important issues first. You're in control of your treatment decisions.",
  },
  {
    q: "Do you treat kids and seniors?",
    a: "Absolutely. We are a family practice serving patients of all ages — from toddlers getting their first checkup to seniors needing specialized restorative care. Everyone gets the same gentle, attentive treatment.",
  },
  {
    q: "Is my insurance accepted?",
    a: "We accept most major PPO plans including Delta Dental, Aetna, Cigna, MetLife, Guardian, and many more. Preventive services like exams and cleanings are often fully covered. Call us and we'll verify your benefits before your visit.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────── */
export default function GeneralFamilyPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const goTestimonial = (dir: number) =>
    setTestimonialIdx((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden pt-[120px]">
        <div className="absolute inset-0 z-0">
          <Image src={imgHeroBg} alt="General & Family Dentistry" fill className="object-cover animate-ken-burns" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-[#083703]/95 via-[#083703]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#083703] via-transparent to-transparent" />
        </div>

        {/* Subtle dot grid */}
        <div className="absolute inset-0 z-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="relative z-10 px-[50px] pb-[90px]">
          {/* Breadcrumb */}
          <div className="animate-fade-up flex items-center gap-2 mb-8" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
            <Link href="/" className="text-white/40 text-[13px] font-montreal hover:text-white/70 transition-colors">Home</Link>
            <span className="text-white/25">/</span>
            <Link href="/services" className="text-white/40 text-[13px] font-montreal hover:text-white/70 transition-colors">Services</Link>
            <span className="text-white/25">/</span>
            <span className="text-[#8bce83] text-[13px] font-montreal font-medium">General & Family</span>
          </div>

          {/* Category pill */}
          <div className="animate-fade-up mb-5" style={{ animationDelay: "0.15s", opacity: 0, animationFillMode: "forwards" }}>
            <span className="inline-flex items-center gap-2 text-[12px] font-sharp font-bold uppercase tracking-[0.1em] text-[#8bce83] bg-[#8bce83]/10 border border-[#8bce83]/25 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8bce83] animate-pulse-dot" />
              General & Family Dentistry
            </span>
          </div>

          {/* Headline */}
          <div className="animate-fade-up max-w-[680px]" style={{ animationDelay: "0.22s", opacity: 0, animationFillMode: "forwards" }}>
            <h1
              className="text-white leading-[1.1] mb-6"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(40px, 5.5vw, 76px)" }}
            >
              Your Family's
              <br /><span className="text-[#8bce83]">Dental Home</span>
              <br />in Richmond, TX.
            </h1>
            <p className="text-white/65 text-[17px] font-montreal leading-[1.7] mb-10 max-w-[500px]">
              From your child's first checkup to grandparent's crown — comprehensive general dentistry for every stage of life, all under one roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn btn-primary-lg">
                Book an Appointment <span className="arrow ml-2">→</span>
              </Link>
              <a href="tel:+18326122831" className="btn btn-outline flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M2 3.5A1.5 1.5 0 013.5 2h1.372c.648 0 1.218.422 1.414 1.04l.739 2.216a1.5 1.5 0 01-.334 1.552l-.557.557a9.003 9.003 0 004.502 4.502l.557-.557a1.5 1.5 0 011.552-.334l2.216.739c.618.206 1.04.776 1.04 1.414V12.5A1.5 1.5 0 0114 14C7.373 14 2 8.627 2 2V3.5z" fill="currentColor" opacity=".8"/></svg>
                (832) 612-2831
              </a>
            </div>
          </div>

          {/* Trust chips */}
          <div className="animate-fade-up flex flex-wrap gap-3 mt-12" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            {[
              "8 Services Available",
              "⚡ Emergency Walk-ins",
              "📅 Open Saturdays",
              "✓ All Ages Welcome",
              "★ 4.9 Rating",
            ].map((chip) => (
              <div key={chip} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm">
                <span className="text-white/85 text-[13px] font-montreal">{chip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════
          INTRO STRIP — what this page covers
      ═══════════════════════════════════════════ */}
      <section className="bg-white px-[50px] py-[70px]">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <AnimateIn variant="left" className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(8,55,3,0.12)] bg-[#f7fcf7] mb-5">
              <div className="w-2 h-2 rounded-full bg-[#8bce83] animate-pulse-dot" />
              <span className="text-[#083703] text-[12px] font-sharp font-bold uppercase tracking-[0.09em]">Why It Matters</span>
            </div>
            <h2
              className="text-[#083703] leading-[1.2] mb-5"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)" }}
            >
              Prevention is the Best
              <br />Dental Treatment.
            </h2>
            <p className="text-[#555] text-[16px] font-montreal leading-[1.7] mb-6">
              Most serious dental problems — cavities, gum disease, tooth loss — are preventable with regular care. General dentistry is the foundation that keeps everything else in check.
            </p>
            <p className="text-[#555] text-[16px] font-montreal leading-[1.7]">
              At Richmond Dental Care, we combine thorough clinical exams, professional cleanings, and personalized care plans to keep your whole family healthy between visits.
            </p>
          </AnimateIn>

          <AnimateIn variant="right" delay={100} className="flex-1 grid grid-cols-2 gap-4">
            {[
              { stat: "2×/year", label: "Recommended visit frequency", icon: "📅" },
              { stat: "80%", label: "Of dental disease is preventable", icon: "🛡" },
              { stat: "8", label: "Services in this specialty", icon: "✦" },
              { stat: "All ages", label: "Kids through seniors welcome", icon: "👪" },
            ].map((item, i) => (
              <div key={i} className="bg-[#f7fcf7] rounded-2xl p-5 border border-[rgba(8,55,3,0.07)]">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p
                  className="text-[#083703] leading-none mb-1"
                  style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(22px, 2.5vw, 30px)" }}
                >
                  {item.stat}
                </p>
                <p className="text-[#777] text-[13px] font-montreal leading-[1.4]">{item.label}</p>
              </div>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EMERGENCY FEATURED CARD
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7fcf7] px-[50px] py-[30px]">
        <AnimateIn variant="scale" className="max-w-[1100px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[320px] shadow-[0_20px_60px_rgba(8,55,3,0.14)]">
            {/* Image side */}
            <div className="relative lg:w-[420px] shrink-0 min-h-[240px] img-zoom">
              <Image src={imgEmergencyBg} alt="Emergency Dental Care" fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#083703]/20 lg:bg-gradient-to-r lg:from-transparent lg:to-[#083703]/30" />
            </div>

            {/* Content side */}
            <div className="flex-1 bg-[#083703] p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative watermark */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/[0.04] font-sharp font-black select-none pointer-events-none leading-none" style={{ fontSize: "160px" }}>01</div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center gap-2 text-[11px] font-sharp font-bold uppercase tracking-[0.1em] text-[#8bce83] bg-[#8bce83]/15 border border-[#8bce83]/30 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8bce83] animate-pulse-dot" />
                    Emergency Walk-ins Welcome
                  </span>
                  <span className="text-white/40 text-[12px] font-sharp">01 / 08</span>
                </div>

                <h3
                  className="text-white leading-[1.2] mb-4"
                  style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 40px)" }}
                >
                  Emergency Dental Care
                </h3>
                <p className="text-white/65 text-[16px] font-montreal leading-[1.7] max-w-[440px] mb-8">
                  Severe toothache, broken or knocked-out tooth, lost crown or filling — we prioritize emergency patients and will see you the same day, including Saturdays.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/services/emergency-dental-care" className="btn btn-white">
                  Learn About Emergency Care <span className="arrow ml-2">→</span>
                </Link>
                <a href="tel:+18326122831" className="btn btn-outline flex items-center gap-2 text-white border-white/40 hover:bg-white/10">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ═══════════════════════════════════════════
          ALL 8 SUB-SERVICES GRID
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7fcf7] px-[50px] pt-[60px] pb-[100px]">
        <AnimateIn variant="up" className="max-w-[1100px] mx-auto mb-[48px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[#8bce83] text-[12px] font-sharp font-bold uppercase tracking-[0.1em] mb-3">All Services</p>
              <h2
                className="text-[#083703] leading-[1.2]"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)" }}
              >
                Everything Under One Roof
              </h2>
            </div>
            <Link href="/appointment" className="btn btn-primary shrink-0">
              Book Any Service <span className="arrow ml-2">→</span>
            </Link>
          </div>
        </AnimateIn>

        {/* 3-col grid — skip Emergency (already featured above) */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subServices.slice(1).map((svc, i) => (
            <AnimateIn key={svc.num} variant="up" delay={i * 60}>
              <Link
                href={svc.href}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[rgba(8,55,3,0.07)] hover:border-[rgba(8,55,3,0.18)] hover:shadow-[0_16px_48px_rgba(8,55,3,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Image strip */}
                <div className="relative h-[180px] overflow-hidden img-zoom bg-[#dcf0da]">
                  <Image src={svc.image} alt={svc.label} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#083703]/50 to-transparent" />

                  {/* Number watermark */}
                  <span
                    className="absolute top-3 right-4 text-white/20 font-sharp font-black leading-none select-none"
                    style={{ fontSize: "52px" }}
                  >{svc.num}</span>

                  {/* Badge */}
                  {svc.badge && (
                    <span className="absolute top-3 left-3 text-[10px] font-sharp font-bold uppercase tracking-[0.07em] text-white bg-[#0c6d00] px-2.5 py-1 rounded-full">
                      {svc.badge}
                    </span>
                  )}

                  {/* Icon circle pinned bottom-left */}
                  <div className="absolute bottom-3 left-4 w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#083703] shadow-md group-hover:bg-[#083703] group-hover:text-white transition-all duration-300">
                    {svc.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="text-[#083703] text-[17px] mb-2 leading-snug group-hover:text-[#0c6d00] transition-colors duration-200"
                    style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}
                  >
                    {svc.label}
                  </h3>
                  <p className="text-[#777] text-[14px] font-montreal leading-[1.6] flex-1 mb-4">
                    {svc.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#083703] text-[13px] font-sharp font-semibold group-hover:gap-2.5 transition-all duration-200">
                    Learn more
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT TO EXPECT — VISIT PROCESS
      ═══════════════════════════════════════════ */}
      <section className="bg-white px-[50px] py-[100px]">
        <div className="max-w-[1100px] mx-auto">
          <AnimateIn variant="up" className="text-center mb-[60px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(8,55,3,0.12)] bg-[#f7fcf7] mb-5">
              <div className="w-2 h-2 rounded-full bg-[#8bce83] animate-pulse-dot" />
              <span className="text-[#083703] text-[12px] font-sharp font-bold uppercase tracking-[0.09em]">Your First Visit</span>
            </div>
            <h2
              className="text-[#083703] leading-[1.2] mb-4"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)" }}
            >
              What to Expect at Your Appointment
            </h2>
            <p className="text-[#666] text-[16px] font-montreal max-w-[460px] mx-auto leading-[1.7]">
              No surprises, no pressure. Here's exactly how a routine visit with us looks — from arrival to aftercare.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[36px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-[#8bce83] via-[#0c6d00] to-[#8bce83] z-0" />

            {visitSteps.map((step, i) => (
              <AnimateIn key={step.num} variant="up" delay={i * 80} className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-5 border-4 border-white shadow-[0_0_0_2px_#8bce83] bg-white"
                    style={{ background: i % 2 === 1 ? "#083703" : "white" }}
                  >
                    <span
                      className={`font-sharp font-bold text-[18px] ${i % 2 === 1 ? "text-white" : "text-[#083703]"}`}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className="text-[#083703] text-[17px] mb-2"
                    style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#777] text-[14px] font-montreal leading-[1.6]">{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn variant="up" delay={300} className="text-center mt-[56px]">
            <Link href="/appointment" className="btn btn-primary-lg">
              Schedule Your Visit <span className="arrow ml-2">→</span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OFFICE PHOTO STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-white px-[50px] pb-[100px]">
        <AnimateIn variant="scale" className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-3 gap-4 h-[340px]">
            <div className="col-span-2 relative rounded-2xl overflow-hidden img-zoom">
              <Image src={imgOffice} alt="Richmond Dental Care office" fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083703]/30 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <p className="text-white text-[13px] font-sharp font-semibold">Modern, Comfortable Facility</p>
                <p className="text-white/60 text-[12px] font-montreal">Richmond, TX 77407</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden img-zoom flex-1">
                <Image src={imgDentistsMain} alt="Our dental team" fill className="object-cover" unoptimized />
              </div>
              <div className="relative rounded-2xl overflow-hidden img-zoom flex-1">
                <Image src={imgServicesOverlay} alt="Dental care" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ═══════════════════════════════════════════
          APPOINTMENT CTA BANNER
      ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-[90px] px-[50px]"
        style={{ background: "linear-gradient(135deg, #083703 0%, #0c6d00 55%, #8bce83 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute right-[50px] top-1/2 -translate-y-1/2 text-white/[0.04] font-sharp font-black select-none leading-none hidden lg:block" style={{ fontSize: "220px" }}>RDC</div>

        <div className="relative z-10 max-w-[600px]">
          <AnimateIn variant="left">
            <p className="text-[#8bce83] text-[12px] font-sharp font-bold uppercase tracking-[0.1em] mb-4">
              New Patients Welcome
            </p>
            <h2
              className="text-white leading-[1.15] mb-5"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 50px)" }}
            >
              Ready to Make Your
              <br />Smile a Priority?
            </h2>
            <p className="text-white/65 text-[16px] font-montreal leading-[1.7] mb-10 max-w-[440px]">
              Book your first exam and cleaning today. We'll review your full oral health, answer every question, and build a care plan around your life — not the other way around.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/appointment" className="btn btn-white">
                Book an Appointment <span className="arrow ml-2">→</span>
              </Link>
              <a href="tel:+18326122831" className="btn btn-outline">
                (832) 612-2831
              </a>
            </div>
            <div className="flex flex-wrap gap-5 mt-8">
              {["No hidden fees", "Insurance accepted", "All ages welcome"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-white/65 text-[13px] font-montreal">
                  <span className="text-[#8bce83]">✓</span> {b}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-[100px] px-[50px] relative overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-400px] w-[900px] h-[900px] rounded-full border border-[rgba(139,206,131,0.12)] pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-340px] w-[700px] h-[700px] rounded-full border border-[rgba(139,206,131,0.08)] pointer-events-none" />

        <div className="max-w-[700px] mx-auto text-center relative z-10">
          <AnimateIn variant="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(8,55,3,0.12)] bg-[#f7fcf7] mb-5">
              <div className="w-2 h-2 rounded-full bg-[#8bce83] animate-pulse-dot" />
              <span className="text-[#083703] text-[12px] font-sharp font-bold uppercase tracking-[0.09em]">Patient Stories</span>
            </div>
            <h2
              className="text-[#083703] leading-[1.2] mb-4"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)" }}
            >
              What Our Patients Say
            </h2>
          </AnimateIn>

          <AnimateIn variant="scale" delay={100} className="mt-[50px]">
            <div className="relative bg-white rounded-3xl border border-[rgba(217,217,217,0.5)] shadow-[5px_5px_30px_rgba(0,0,0,0.06)] px-[40px] py-[50px] pt-[65px]">
              {/* Avatar */}
              <div className="absolute -top-[44px] left-1/2 -translate-x-1/2 w-[88px] h-[88px] rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image src={imgTestimonialAvatar} alt={testimonials[testimonialIdx].name} fill className="object-cover" unoptimized />
              </div>

              <div key={testimonialIdx} className="animate-fade-in flex flex-col gap-[36px]">
                <p className="text-[#555] text-[17px] font-montreal leading-[1.8] text-center">
                  "{testimonials[testimonialIdx].quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[#1a1a1a] text-[15px] font-sharp font-semibold">{testimonials[testimonialIdx].name}</p>
                    <p className="text-[#999] text-[13px] font-montreal mt-0.5">{testimonials[testimonialIdx].tag}</p>
                  </div>
                  <div className="relative h-[16px] w-[88px]">
                    <Image src={imgStars} alt="5 stars" fill className="object-contain object-right" unoptimized />
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-5 mt-8">
              <button onClick={() => goTestimonial(-1)} aria-label="Previous" className="w-10 h-10 rounded-full border border-[rgba(8,55,3,0.15)] flex items-center justify-center text-[#083703] hover:bg-[#083703] hover:text-white transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)}
                    className={`rounded-full transition-all duration-300 ${i === testimonialIdx ? "w-6 h-2.5 bg-[#083703]" : "w-2.5 h-2.5 bg-[rgba(8,55,3,0.2)]"}`}
                  />
                ))}
              </div>
              <button onClick={() => goTestimonial(1)} aria-label="Next" className="w-10 h-10 rounded-full border border-[rgba(8,55,3,0.15)] flex items-center justify-center text-[#083703] hover:bg-[#083703] hover:text-white transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7fcf7] py-[100px] px-[50px]">
        <div className="max-w-[800px] mx-auto">
          <AnimateIn variant="up" className="mb-[52px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(8,55,3,0.12)] bg-white mb-5">
              <div className="w-2 h-2 rounded-full bg-[#8bce83] animate-pulse-dot" />
              <span className="text-[#083703] text-[12px] font-sharp font-bold uppercase tracking-[0.09em]">Common Questions</span>
            </div>
            <h2
              className="text-[#083703] leading-[1.2]"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)" }}
            >
              Questions About General Dentistry?
            </h2>
          </AnimateIn>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} variant="up" delay={i * 50}>
                <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${faqOpen === i ? "border-[rgba(8,55,3,0.18)] bg-white shadow-[0_8px_32px_rgba(8,55,3,0.07)]" : "border-[rgba(8,55,3,0.07)] bg-white hover:border-[rgba(8,55,3,0.12)]"}`}>
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                    <span className="text-[#083703] text-[15px] pr-4 leading-snug" style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}>
                      {faq.q}
                    </span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[15px] font-light transition-all duration-300 ${faqOpen === i ? "bg-[#083703] text-white rotate-45" : "bg-[#dcf0da] text-[#083703]"}`}>
                      +
                    </span>
                  </button>
                  <div className="overflow-hidden transition-all duration-350 ease-out" style={{ maxHeight: faqOpen === i ? "200px" : 0, opacity: faqOpen === i ? 1 : 0 }}>
                    <p className="px-6 pb-5 text-[#666] text-[14px] font-montreal leading-[1.7]">{faq.a}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn variant="up" delay={300} className="mt-10 text-center">
            <p className="text-[#999] text-[14px] font-montreal mb-4">Still have questions?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+18326122831" className="btn btn-outline-dark">
                Call (832) 612-2831
              </a>
              <Link href="/contact" className="btn btn-primary">
                Send Us a Message <span className="arrow ml-2">→</span>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPLORE OTHER SERVICES
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-[80px] px-[50px]">
        <AnimateIn variant="up" className="max-w-[1100px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2
              className="text-[#083703] leading-snug"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(20px, 2.5vw, 32px)" }}
            >
              Explore Other Specialties
            </h2>
            <Link href="/services" className="text-[14px] font-sharp font-semibold text-[#083703] hover:text-[#0c6d00] transition-colors flex items-center gap-1 group">
              View all services
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Cosmetic Dentistry",  href: "/services/cosmetic-dentistry",  tag: "5 services" },
              { name: "Restorative",         href: "/services/restorative-dentistry", tag: "7 services" },
              { name: "Orthodontics",        href: "/services/orthodontics",        tag: "2 services" },
              { name: "Preventive",          href: "/services/preventive-dentistry", tag: "2 services" },
            ].map((s, i) => (
              <AnimateIn key={s.name} variant="up" delay={i * 60}>
                <Link href={s.href} className="group flex flex-col gap-3 bg-[#f7fcf7] hover:bg-[#083703] rounded-2xl p-5 border border-[rgba(8,55,3,0.07)] hover:border-[#083703] transition-all duration-250">
                  <span className="text-[#8bce83] group-hover:text-[#8bce83] text-[11px] font-sharp font-bold uppercase tracking-[0.08em]">{s.tag}</span>
                  <span className="text-[#083703] group-hover:text-white text-[15px] font-sharp font-semibold leading-snug transition-colors duration-250">{s.name}</span>
                  <span className="text-[#083703] group-hover:text-white/60 text-[14px] opacity-40 group-hover:opacity-100 transition-all duration-250">→</span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>
      </section>

      <Footer />
    </main>
  );
}
