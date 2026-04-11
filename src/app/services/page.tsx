"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import {
  imgServicesMain, imgServicesOverlay, imgDentistsMain, imgDentistCard, imgOffice,
  imgStar, imgEmergencyBg,
} from "@/lib/assets";

/* ─── Data ─────────────────────────────────────────────────────── */
const categories = [
  {
    id: "general",
    href: "/services/general-family-dentistry",
    name: "General & Family",
    tagline: "Your foundation for lifelong oral health",
    image: imgServicesMain,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C10.5 3 8 5.5 8 9c0 2.5 1 4.5 2.5 6L14 25l3.5-10C19 13.5 20 11.5 20 9c0-3.5-2.5-6-6-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="14" cy="9" r="2" fill="currentColor" opacity=".4"/>
      </svg>
    ),
    color: "#083703",
    lightColor: "#dcf0da",
    accentColor: "#8bce83",
    services: [
      { label: "Emergency Dental Care",   href: "/services/emergency-dental-care",  badge: "Walk-ins" },
      { label: "Dental Exams & Cleaning", href: "/services/dental-exams-cleaning",  badge: "Popular" },
      { label: "Oral Cancer Screening",   href: "/services/oral-cancer-screening",  badge: null },
      { label: "Senior Dentistry",        href: "/services/senior-dentistry",       badge: null },
      { label: "Scaling & Root Planing",  href: "/services/scaling-root-planing",   badge: null },
      { label: "Night Guards",            href: "/services/night-guards",           badge: null },
      { label: "Sports Mouth Guards",     href: "/services/sports-mouth-guards",    badge: null },
      { label: "Tooth Extractions",       href: "/services/tooth-extractions",      badge: null },
    ],
  },
  {
    id: "cosmetic",
    href: "/services/cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    tagline: "Smile transformations that last a lifetime",
    image: imgServicesOverlay,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 11c0-1 .6-2 2-2h14c1.4 0 2 1 2 2 0 5-4.5 9-9 9s-9-4-9-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M10 13h8M10 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
    color: "#083703",
    lightColor: "#dcf0da",
    accentColor: "#0c6d00",
    services: [
      { label: "Dental Crowns",    href: "/services/dental-crowns",    badge: "Most Requested" },
      { label: "Teeth Whitening",  href: "/services/teeth-whitening",  badge: "Popular" },
      { label: "Dental Bonding",   href: "/services/dental-bonding",   badge: null },
      { label: "Dental Veneers",   href: "/services/dental-veneers",   badge: null },
      { label: "Tooth Contouring", href: "/services/tooth-contouring", badge: null },
    ],
  },
  {
    id: "preventive",
    href: "/services/preventive-dentistry",
    name: "Preventive Dentistry",
    tagline: "Stop problems before they start",
    image: imgDentistCard,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.5L14 16.5 9.1 19.2l.9-5.5L6 9.8l5.5-.8L14 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
    color: "#083703",
    lightColor: "#c5e7c1",
    accentColor: "#8bce83",
    services: [
      { label: "Dental Sealants",    href: "/services/dental-sealants",    badge: "Recommended" },
      { label: "Fluoride Treatment", href: "/services/fluoride-treatment", badge: null },
    ],
  },
  {
    id: "restorative",
    href: "/services/restorative-dentistry",
    name: "Restorative Dentistry",
    tagline: "Rebuild your smile with expert precision",
    image: imgOffice,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="14" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 14V10a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="19" r="2" fill="currentColor" opacity=".4"/>
      </svg>
    ),
    color: "#083703",
    lightColor: "#dcf0da",
    accentColor: "#0c6d00",
    services: [
      { label: "Dental Bridges",          href: "/services/dental-bridges",        badge: null },
      { label: "Dental Implants",         href: "/services/dental-implants",       badge: "Most Requested" },
      { label: "Partial & Full Dentures", href: "/services/dentures",              badge: null },
      { label: "Dental Fillings",         href: "/services/dental-fillings",       badge: "Popular" },
      { label: "Periodontal Treatment",   href: "/services/periodontal-treatment", badge: null },
      { label: "Oral Surgery",            href: "/services/oral-surgery",          badge: null },
      { label: "Root Canal Therapy",      href: "/services/root-canal",            badge: null },
    ],
  },
  {
    id: "orthodontics",
    href: "/services/orthodontics",
    name: "Orthodontics",
    tagline: "Straighter teeth, healthier confidence",
    image: imgDentistsMain,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 10h4v8H6zM12 8h4v12h-4zM18 10h4v8h-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M6 14h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
    color: "#083703",
    lightColor: "#dcf0da",
    accentColor: "#8bce83",
    services: [
      { label: "Braces",      href: "/services/braces",    badge: null },
      { label: "Invisalign®", href: "/services/invisalign", badge: "Trending" },
    ],
  },
];

const stats = [
  { value: "4.9★", label: "Average Rating", sub: "from 500+ reviews" },
  { value: "24", label: "Dental Services", sub: "under one roof" },
  { value: "10+", label: "Years Serving", sub: "Richmond, TX" },
  { value: "Same-day", label: "Appointments", sub: "often available" },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden pt-[120px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imgServicesMain}
            alt="Richmond Dental Care"
            fill
            className="object-cover animate-ken-burns"
            unoptimized
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#083703]/95 via-[#083703]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#083703] via-transparent to-transparent" />
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-[50px] pb-[80px]">
          {/* Breadcrumb */}
          <div className="animate-fade-up flex items-center gap-2 mb-8" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
            <Link href="/" className="text-white/50 text-[13px] font-montreal hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30 text-[13px]">/</span>
            <span className="text-[#8bce83] text-[13px] font-montreal font-medium">Services</span>
          </div>

          {/* Headline */}
          <div className="animate-fade-up max-w-[700px]" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            <h1
              className="text-white leading-[1.1] mb-6"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(42px, 6vw, 80px)" }}
            >
              Every Service
              <br />
              <span className="text-[#8bce83]">Your Smile Needs.</span>
            </h1>
            <p className="text-white/70 text-[18px] font-montreal leading-[1.6] mb-10 max-w-[520px]">
              From routine cleanings to full smile transformations — Richmond Dental Care brings comprehensive care under one roof, right here in Richmond, TX.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/appointment" className="btn btn-primary-lg">
                Book an Appointment <span className="arrow ml-2">→</span>
              </Link>
              <button
                onClick={scrollToCatalog}
                className="btn btn-outline"
              >
                Explore Services <span className="ml-2">↓</span>
              </button>
            </div>
          </div>

          {/* Floating trust chips */}
          <div
            className="animate-fade-up flex flex-wrap gap-3 mt-14"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            {[
              { icon: "★", text: "4.9 Rating · 500+ Reviews" },
              { icon: "⚡", text: "Emergency Walk-ins Welcome" },
              { icon: "📅", text: "Open Saturdays" },
              { icon: "✓", text: "All Major Insurance Accepted" },
            ].map((chip) => (
              <div
                key={chip.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
              >
                <span className="text-[#8bce83] text-[13px]">{chip.icon}</span>
                <span className="text-white/90 text-[13px] font-montreal">{chip.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade into white */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-[60px] px-[50px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1100px] mx-auto">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} variant="up" delay={i * 80} className="text-center">
              <p
                className="text-[#083703] mb-1"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3vw, 42px)" }}
              >
                {stat.value}
              </p>
              <p className="text-[#083703] text-[15px] font-sharp font-semibold">{stat.label}</p>
              <p className="text-[#999] text-[13px] font-montreal mt-0.5">{stat.sub}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CATEGORY BENTO CARDS
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7fcf7] py-[80px] px-[50px]">
        <AnimateIn variant="up" className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 px-[18px] py-[10px] rounded-full border border-[rgba(8,55,3,0.15)] bg-white mb-5">
            <div className="w-2 h-2 rounded-full bg-[#8bce83] animate-pulse-dot" />
            <span className="text-[#083703] text-[13px] font-sharp font-semibold uppercase tracking-[0.08em]">Our Specialties</span>
          </div>
          <h2
            className="text-[#083703] leading-[1.2] mb-4"
            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Care Tailored to Every Need
          </h2>
          <p className="text-[#555] text-[16px] font-montreal max-w-[500px] mx-auto leading-[1.6]">
            Five distinct specialties, one trusted team. Find the care that fits your situation.
          </p>
        </AnimateIn>

        {/* Bento Grid — 3+2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {/* Top row — 3 cards */}
          {categories.slice(0, 3).map((cat, i) => (
            <AnimateIn
              key={cat.id}
              variant="up"
              delay={i * 100}
            >
              <div
                className="group relative bg-white rounded-2xl border border-[rgba(8,55,3,0.08)] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(8,55,3,0.14)] hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard(cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {/* Accent bar */}
                <div className="h-[3px] bg-gradient-to-r from-[#083703] to-[#8bce83]" />

                <div className="p-7">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#dcf0da] flex items-center justify-center text-[#083703] mb-5 transition-all duration-300 group-hover:bg-[#083703] group-hover:text-white">
                    {cat.icon}
                  </div>

                  {/* Text */}
                  <h3
                    className="text-[#083703] text-[20px] mb-2 leading-snug"
                    style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-[#777] text-[14px] font-montreal leading-[1.5] mb-5">{cat.tagline}</p>

                  {/* Service count pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#8bce83] text-[13px] font-sharp font-semibold">
                      {cat.services.length} services
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[rgba(8,55,3,0.15)] flex items-center justify-center text-[#083703] text-[14px] transition-all duration-300 group-hover:bg-[#083703] group-hover:text-white group-hover:border-transparent">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Bottom row — 2 cards spanning wider */}
          {categories.slice(3).map((cat, i) => (
            <AnimateIn
              key={cat.id}
              variant="up"
              delay={(i + 3) * 100}
              className={i === 0 ? "md:col-span-2" : "md:col-span-1"}
            >
              <div
                className="group relative bg-white rounded-2xl border border-[rgba(8,55,3,0.08)] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(8,55,3,0.14)] hover:-translate-y-1 h-full"
                onMouseEnter={() => setHoveredCard(cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <div className="h-[3px] bg-gradient-to-r from-[#083703] to-[#8bce83]" />
                <div className="p-7 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#dcf0da] flex items-center justify-center text-[#083703] mb-5 transition-all duration-300 group-hover:bg-[#083703] group-hover:text-white">
                    {cat.icon}
                  </div>
                  <h3
                    className="text-[#083703] text-[20px] mb-2 leading-snug"
                    style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-[#777] text-[14px] font-montreal leading-[1.5] mb-5 flex-1">{cat.tagline}</p>
                  {/* Preview services */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.services.slice(0, 3).map((s) => (
                      <span key={s.label} className="text-[12px] font-montreal text-[#555] bg-[#f7fcf7] px-3 py-1 rounded-full border border-[rgba(8,55,3,0.08)]">
                        {s.label}
                      </span>
                    ))}
                    {cat.services.length > 3 && (
                      <span className="text-[12px] font-montreal text-[#8bce83] px-3 py-1 rounded-full border border-[#8bce83]/30 bg-[#dcf0da]/40">
                        +{cat.services.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8bce83] text-[13px] font-sharp font-semibold">
                      {cat.services.length} services
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[rgba(8,55,3,0.15)] flex items-center justify-center text-[#083703] text-[14px] transition-all duration-300 group-hover:bg-[#083703] group-hover:text-white group-hover:border-transparent">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FULL SERVICE CATALOG (STACKED)
      ═══════════════════════════════════════════ */}
      <section
        ref={catalogRef}
        className="bg-white border-t border-[rgba(8,55,3,0.06)]"
        style={{ scrollMarginTop: "80px" }}
      >
        {/* Section header */}
        <div className="px-[50px] pt-[100px] pb-[60px]">
          <AnimateIn variant="up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-[18px] py-[10px] rounded-full border border-[rgba(8,55,3,0.15)] bg-[#f7fcf7] mb-5">
                  <div className="w-2 h-2 rounded-full bg-[#0c6d00] animate-pulse-dot" />
                  <span className="text-[#083703] text-[13px] font-sharp font-semibold uppercase tracking-[0.08em]">Full Service Directory</span>
                </div>
                <h2
                  className="text-[#083703] leading-[1.2]"
                  style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(26px, 3vw, 44px)" }}
                >
                  All {categories.reduce((s, c) => s + c.services.length, 0)} Services,<br />
                  <span className="text-[#8bce83]">Nothing Hidden.</span>
                </h2>
              </div>
              <Link href="/appointment" className="btn btn-primary shrink-0">
                Book Any Service <span className="arrow ml-2">→</span>
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Stacked category rows */}
        {categories.map((cat, catIdx) => (
          <div
            key={cat.id}
            id={cat.id}
            className={catIdx % 2 === 0 ? "bg-white" : "bg-[#f7fcf7]"}
            style={{ scrollMarginTop: "100px" }}
          >
            {/* Top divider */}
            <div className="mx-[50px] h-px bg-[rgba(8,55,3,0.08)]" />

            <div className="px-[50px] py-[70px]">
              <div className="flex flex-col lg:flex-row lg:items-start gap-[50px]">

                {/* ── Left: category identity ── */}
                <AnimateIn variant="left" className="lg:w-[240px] shrink-0">
                  {/* Oversized number */}
                  <div
                    className="text-[#083703]/[0.06] font-sharp font-bold leading-none mb-[-8px] select-none"
                    style={{ fontSize: "clamp(72px, 10vw, 120px)" }}
                    aria-hidden="true"
                  >
                    {String(catIdx + 1).padStart(2, "0")}
                  </div>

                  {/* Icon + name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#dcf0da] flex items-center justify-center text-[#083703] shrink-0">
                      {cat.icon}
                    </div>
                    <h3
                      className="text-[#083703] leading-snug"
                      style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(18px, 2vw, 24px)" }}
                    >
                      {cat.name}
                    </h3>
                  </div>

                  <p className="text-[#777] text-[14px] font-montreal leading-[1.6] mb-6">
                    {cat.tagline}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-[#8bce83] text-[13px] font-sharp font-semibold">
                      {cat.services.length} {cat.services.length === 1 ? "service" : "services"}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                    <Link
                      href={cat.href}
                      className="text-[13px] font-sharp font-semibold text-[#083703] hover:text-[#0c6d00] transition-colors group flex items-center gap-1"
                    >
                      Overview
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </AnimateIn>

                {/* ── Centre: image ── */}
                <AnimateIn variant="scale" delay={80} className="hidden lg:block lg:w-[220px] shrink-0 self-stretch">
                  <div className="relative h-full min-h-[220px] rounded-2xl overflow-hidden img-zoom shadow-[0_8px_32px_rgba(8,55,3,0.12)]">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* Subtle green tint overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#083703]/40 via-transparent to-transparent" />
                    {/* Category label pinned to bottom */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                      <span className="text-white text-[11px] font-sharp font-bold uppercase tracking-[0.08em] opacity-90">
                        {cat.name}
                      </span>
                    </div>
                  </div>
                </AnimateIn>

                {/* ── Right: service cards ── */}
                <AnimateIn variant="right" delay={100} className="flex-1 min-w-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {cat.services.map((service, i) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="group relative flex items-center justify-between gap-3 bg-white hover:bg-[#083703] rounded-xl px-5 py-4 border border-[rgba(8,55,3,0.08)] hover:border-[#083703] transition-all duration-250 hover:shadow-[0_8px_32px_rgba(8,55,3,0.18)] hover:-translate-y-px"
                        style={{ transitionDelay: `${i * 30}ms` }}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Dot */}
                          <span className="w-2 h-2 rounded-full bg-[#8bce83] group-hover:bg-white/50 shrink-0 transition-colors duration-250" />
                          <span
                            className="text-[#171717] group-hover:text-white text-[15px] leading-snug truncate transition-colors duration-250"
                            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
                          >
                            {service.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {service.badge && (
                            <span className="text-[10px] font-sharp font-bold uppercase tracking-[0.06em] text-[#0c6d00] bg-[#dcf0da] group-hover:bg-white/15 group-hover:text-white px-2 py-0.5 rounded-full transition-colors duration-250 whitespace-nowrap">
                              {service.badge}
                            </span>
                          )}
                          <span className="text-[#083703] group-hover:text-white text-[14px] opacity-40 group-hover:opacity-100 transition-all duration-250 group-hover:translate-x-0.5">
                            →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </AnimateIn>

              </div>
            </div>
          </div>
        ))}

        {/* Bottom padding */}
        <div className="pb-[60px]" />
      </section>

      {/* ═══════════════════════════════════════════
          MID-PAGE APPOINTMENT CTA
      ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-[100px] px-[50px]"
        style={{ background: "linear-gradient(135deg, #083703 0%, #0c6d00 60%, #8bce83 100%)" }}
      >
        {/* Decorative dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Large decorative number */}
        <div
          className="absolute right-[50px] top-1/2 -translate-y-1/2 text-white/5 font-sharp font-bold select-none pointer-events-none hidden lg:block"
          style={{ fontSize: "280px", lineHeight: 1 }}
        >
          RDC
        </div>

        <div className="relative z-10 max-w-[650px]">
          <AnimateIn variant="left">
            <p className="text-[#8bce83] text-[13px] font-sharp font-bold uppercase tracking-[0.1em] mb-4">
              Ready to Get Started?
            </p>
            <h2
              className="text-white leading-[1.15] mb-6"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              Your Healthiest Smile
              <br />
              Starts with One Appointment.
            </h2>
            <p className="text-white/70 text-[17px] font-montreal leading-[1.6] mb-10 max-w-[480px]">
              Our team is ready to answer your questions, walk through your options, and create a care plan that fits your life and budget.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/appointment" className="btn btn-white">
                Schedule Now <span className="arrow ml-2">→</span>
              </Link>
              <a href="tel:+18326122831" className="btn btn-outline flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 3.5A1.5 1.5 0 013.5 2h1.372c.648 0 1.218.422 1.414 1.04l.739 2.216a1.5 1.5 0 01-.334 1.552l-.557.557a9.003 9.003 0 004.502 4.502l.557-.557a1.5 1.5 0 011.552-.334l2.216.739c.618.206 1.04.776 1.04 1.414V12.5A1.5 1.5 0 0114 14C7.373 14 2 8.627 2 2V3.5z" fill="currentColor" opacity=".7"/>
                </svg>
                (832) 612-2831
              </a>
            </div>

            {/* Trust mini-badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["No hidden fees", "Insurance accepted", "Gentle care guaranteed"].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-white/70 text-[13px] font-montreal">
                  <span className="text-[#8bce83]">✓</span>
                  {b}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE US — DIFFERENTIATORS
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-[100px] px-[50px]">
        <AnimateIn variant="up" className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-2 px-[18px] py-[10px] rounded-full border border-[rgba(8,55,3,0.15)] bg-[#f7fcf7] mb-5">
            <div className="w-2 h-2 rounded-full bg-[#8bce83] animate-pulse-dot" />
            <span className="text-[#083703] text-[13px] font-sharp font-semibold uppercase tracking-[0.08em]">Why Richmond Dental</span>
          </div>
          <h2
            className="text-[#083703] leading-[1.2]"
            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(26px, 3vw, 44px)" }}
          >
            Care That Goes Beyond the Chair
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {[
            {
              num: "01",
              title: "All Under One Roof",
              desc: "From preventive checkups to complex restorations — no referrals, no driving around.",
              icon: "🏠",
            },
            {
              num: "02",
              title: "Open Saturdays",
              desc: "Your schedule matters. We're open Saturdays for exams, cleanings, and emergency care.",
              icon: "📅",
            },
            {
              num: "03",
              title: "Emergency Walk-Ins",
              desc: "Dental emergencies don't wait for appointments. We see emergency patients the same day.",
              icon: "⚡",
            },
            {
              num: "04",
              title: "All Major Insurance",
              desc: "We accept most PPO plans and work with your budget to make care accessible.",
              icon: "🛡",
            },
          ].map((item, i) => (
            <AnimateIn key={item.num} variant="up" delay={i * 80}>
              <div className="group bg-[#f7fcf7] rounded-2xl p-6 border border-[rgba(8,55,3,0.06)] hover:border-[rgba(8,55,3,0.15)] hover:shadow-[0_12px_40px_rgba(8,55,3,0.08)] transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[32px]">{item.icon}</span>
                  <span className="text-[#8bce83] text-[11px] font-sharp font-bold tracking-[0.1em]">{item.num}</span>
                </div>
                <h3
                  className="text-[#083703] text-[17px] mb-3 leading-snug"
                  style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="text-[#666] text-[14px] font-montreal leading-[1.6]">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EMERGENCY URGENCY STRIP
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={imgEmergencyBg} alt="" fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-[#083703]/90" />
        </div>
        <div className="relative z-10 px-[50px] py-[70px] flex flex-col lg:flex-row items-center justify-between gap-8">
          <AnimateIn variant="left">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-3 h-3 rounded-full bg-[#8bce83] animate-pulse-dot" />
              <span className="text-[#8bce83] text-[13px] font-sharp font-bold uppercase tracking-[0.1em]">Dental Emergency?</span>
            </div>
            <h2
              className="text-white leading-[1.2]"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(24px, 3vw, 40px)" }}
            >
              Walk In — We'll See You Today.
            </h2>
            <p className="text-white/60 text-[15px] font-montreal mt-3 max-w-[420px]">
              Severe pain, broken tooth, lost crown — we handle dental emergencies the same day, including Saturdays.
            </p>
          </AnimateIn>
          <AnimateIn variant="right">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18326122831" className="btn btn-white text-[#083703]">
                Call Now: (832) 612-2831
              </a>
              <Link href="/appointment" className="btn btn-outline">
                Book Emergency Visit
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ / OBJECTION HANDLING
      ═══════════════════════════════════════════ */}
      <section className="bg-[#f7fcf7] py-[100px] px-[50px]">
        <div className="max-w-[800px] mx-auto">
          <AnimateIn variant="up" className="text-center mb-[60px]">
            <div className="inline-flex items-center gap-2 px-[18px] py-[10px] rounded-full border border-[rgba(8,55,3,0.15)] bg-white mb-5">
              <div className="w-2 h-2 rounded-full bg-[#8bce83] animate-pulse-dot" />
              <span className="text-[#083703] text-[13px] font-sharp font-semibold uppercase tracking-[0.08em]">Common Questions</span>
            </div>
            <h2
              className="text-[#083703] leading-[1.2]"
              style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              Got Questions? We Have Answers.
            </h2>
          </AnimateIn>

          <FAQAccordion />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-[80px] px-[50px]">
        <AnimateIn variant="scale" className="max-w-[900px] mx-auto">
          <div
            className="rounded-3xl p-[60px] text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #083703 0%, #0c6d00 100%)" }}
          >
            {/* Circles decoration */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/10" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Image src={imgStar} alt="★" width={20} height={20} unoptimized />
                <span className="text-white/80 text-[14px] font-montreal">4.9 stars · Trusted by Richmond families</span>
              </div>
              <h2
                className="text-white leading-[1.15] mb-4"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                Your Best Smile is
                <span className="text-[#8bce83]"> One Click Away.</span>
              </h2>
              <p className="text-white/70 text-[16px] font-montreal mb-10 max-w-[420px] mx-auto leading-[1.6]">
                Join hundreds of Richmond families who trust us with their smiles. New patients are always welcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/appointment" className="btn btn-white">
                  Schedule an Appointment <span className="arrow ml-2">→</span>
                </Link>
                <a href="tel:+18326122831" className="btn btn-outline">
                  (832) 612-2831
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      <Footer />
    </main>
  );
}

/* ─── FAQ Accordion Sub-component ──────────────────────────────── */
function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you accept my insurance?",
      a: "We accept most major PPO dental insurance plans, including Delta Dental, Aetna, Cigna, MetLife, Guardian, and many more. Call us or visit our Insurance page for a full list. We'll verify your coverage before your visit so there are no surprises.",
    },
    {
      q: "How quickly can I get an appointment?",
      a: "For routine exams and cleanings we typically have availability within a few days. For emergency dental care, we make every effort to see you the same day — including Saturdays. Call us or book online and we'll get you in as soon as possible.",
    },
    {
      q: "What if I haven't been to the dentist in years?",
      a: "No judgment here — we see patients at all stages of their oral health journey. Our team will assess your current health, walk you through what we find, and create a realistic plan that addresses your priorities first.",
    },
    {
      q: "Are your cosmetic services covered by insurance?",
      a: "Most cosmetic procedures (veneers, whitening, bonding) are not covered by standard insurance. However, some procedures that are both cosmetic and restorative — like crowns — may have partial coverage. We'll review your plan and provide transparent cost estimates upfront.",
    },
    {
      q: "Do you offer payment plans or financing?",
      a: "Yes. We offer flexible in-office payment plans and work with third-party financing partners to help you get the care you need without delay. Talk to our front desk and we'll find an option that works for your budget.",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <AnimateIn key={i} variant="up" delay={i * 60}>
          <div
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              openIdx === i
                ? "border-[rgba(8,55,3,0.2)] bg-white shadow-[0_8px_32px_rgba(8,55,3,0.08)]"
                : "border-[rgba(8,55,3,0.08)] bg-white hover:border-[rgba(8,55,3,0.15)]"
            }`}
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span
                className="text-[#083703] text-[16px] pr-4 leading-snug"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}
              >
                {faq.q}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[14px] transition-all duration-300 ${
                  openIdx === i
                    ? "bg-[#083703] text-white rotate-45"
                    : "bg-[#dcf0da] text-[#083703]"
                }`}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-350 ease-out"
              style={{ maxHeight: openIdx === i ? "200px" : "0", opacity: openIdx === i ? 1 : 0 }}
            >
              <p className="px-6 pb-5 text-[#666] text-[15px] font-montreal leading-[1.65]">{faq.a}</p>
            </div>
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}
