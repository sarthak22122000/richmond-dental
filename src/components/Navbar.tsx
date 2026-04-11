"use client";

import Image from "next/image";
import Link from "next/link";
import { imgLogo } from "@/lib/assets";
import { useState, useRef, useEffect } from "react";

const serviceCategories = [
  {
    name: "General & Family",
    href: "/services/general-family-dentistry",
    services: [
      { label: "Emergency Dental Care",    href: "/services/emergency-dental-care" },
      { label: "Dental Exams & Cleaning",  href: "/services/dental-exams-cleaning" },
      { label: "Oral Cancer Screening",    href: "/services/oral-cancer-screening" },
      { label: "Senior Dentistry",         href: "/services/senior-dentistry" },
      { label: "Scaling & Root Planing",   href: "/services/scaling-root-planing" },
      { label: "Night Guards",             href: "/services/night-guards" },
      { label: "Sports Mouth Guards",      href: "/services/sports-mouth-guards" },
      { label: "Tooth Extractions",        href: "/services/tooth-extractions" },
    ],
  },
  {
    name: "Cosmetic Dentistry",
    href: "/services/cosmetic-dentistry",
    services: [
      { label: "Dental Crowns",    href: "/services/dental-crowns" },
      { label: "Teeth Whitening",  href: "/services/teeth-whitening" },
      { label: "Dental Bonding",   href: "/services/dental-bonding" },
      { label: "Dental Veneers",   href: "/services/dental-veneers" },
      { label: "Tooth Contouring", href: "/services/tooth-contouring" },
    ],
  },
  {
    name: "Preventive Dentistry",
    href: "/services/preventive-dentistry",
    services: [
      { label: "Dental Sealants",    href: "/services/dental-sealants" },
      { label: "Fluoride Treatment", href: "/services/fluoride-treatment" },
    ],
  },
  {
    name: "Restorative Dentistry",
    href: "/services/restorative-dentistry",
    services: [
      { label: "Dental Bridges",           href: "/services/dental-bridges" },
      { label: "Dental Implants",          href: "/services/dental-implants" },
      { label: "Partial & Full Dentures",  href: "/services/dentures" },
      { label: "Dental Fillings",          href: "/services/dental-fillings" },
      { label: "Periodontal Treatment",    href: "/services/periodontal-treatment" },
      { label: "Oral Surgery",             href: "/services/oral-surgery" },
      { label: "Root Canal Therapy",       href: "/services/root-canal" },
    ],
  },
  {
    name: "Orthodontics",
    href: "/services/orthodontics",
    services: [
      { label: "Braces",      href: "/services/braces" },
      { label: "Invisalign®", href: "/services/invisalign" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  /* close mega menu on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMega = () => setServicesOpen(false);

  return (
    <nav className="absolute left-0 top-0 w-full z-50 px-[25px] py-[25px] animate-fade-down">

      {/* ── Row: pill + badge (relative wrapper for mega menu) ── */}
      <div ref={navContainerRef} className="relative flex items-start gap-[10px]">

        {/* ── Main pill ── */}
        <div className="flex-1 bg-white flex items-center justify-between pl-[35px] pr-[8px] py-[8px] rounded-full shadow-sm">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="relative w-[53px] h-[53px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image src={imgLogo} alt="Richmond Dental Care" fill className="object-contain" unoptimized />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-[26px]">

            {/* Services trigger */}
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-[5px] font-montreal text-[16px] text-black leading-[1.5] whitespace-nowrap hover:text-[#083703] transition-colors"
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`transition-transform duration-250 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {[
              { label: "About",           href: "/about" },
              { label: "Invisalign®",     href: "/invisalign" },
              { label: "Membership Plan", href: "/membership-plan" },
              { label: "Contact Us",      href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-montreal text-[16px] text-black leading-[1.5] whitespace-nowrap hover:text-[#083703] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 after:bg-[#083703] after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link href="/appointment" className="btn btn-primary-lg hidden lg:flex">
            Schedule an Appointment <span className="arrow ml-1">→</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-3 w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* ── Saturdays badge ── */}
        <div className="bg-white rounded-full p-[8px] flex items-center justify-center shrink-0 w-[131px] animate-float">
          <div className="bg-[#0c6d00] w-full h-[64px] rounded-full relative flex items-center px-3">
            <span className="w-2 h-2 rounded-full bg-white mr-2 shrink-0 animate-pulse-dot" />
            <div className="flex flex-col">
              <span className="text-white text-[10px] leading-tight font-sharp font-medium">OPEN ON</span>
              <span className="text-white text-[12px] leading-tight font-sharp font-bold">SATURDAYS</span>
              <span className="text-white/80 text-[9px] leading-tight font-sharp">EMERGENCY</span>
              <span className="text-white/80 text-[9px] leading-tight font-sharp">WALK-INS</span>
            </div>
          </div>
        </div>

        {/* ── Services Mega Menu ── */}
        {servicesOpen && (
          <div className="mega-menu animate-dropdown absolute top-[calc(100%+12px)] left-0 right-[141px] bg-white rounded-2xl shadow-[0_16px_56px_rgba(0,0,0,0.11)] border border-[rgba(8,55,3,0.08)] overflow-hidden z-50">

            {/* Green gradient accent bar */}
            <div className="h-[3px] bg-gradient-to-r from-[#083703] via-[#0c6d00] to-[#8bce83]" />

            {/* 5-column grid */}
            <div className="grid grid-cols-5 p-5 gap-0">
              {serviceCategories.map((cat, i) => (
                <div
                  key={cat.name}
                  className={[
                    "flex flex-col",
                    i > 0 ? "pl-5" : "",
                    i < serviceCategories.length - 1 ? "pr-5 border-r border-[rgba(0,0,0,0.06)]" : "",
                  ].join(" ")}
                >
                  {/* Category header */}
                  <Link
                    href={cat.href}
                    onClick={closeMega}
                    className="group flex items-center gap-2 mb-3 pb-3 border-b border-[rgba(8,55,3,0.1)]"
                  >
                    <span className="w-[3px] h-[14px] rounded-full bg-[#0c6d00] shrink-0" />
                    <span className="font-sharp font-semibold text-[11px] uppercase tracking-[0.09em] text-[#0c6d00] leading-none group-hover:text-[#083703] transition-colors">
                      {cat.name}
                    </span>
                  </Link>

                  {/* Service links */}
                  <ul className="space-y-0.5">
                    {cat.services.map((s) => (
                      <li key={s.label}>
                        <Link
                          href={s.href}
                          onClick={closeMega}
                          className="group flex items-center gap-2 px-2.5 py-[7px] rounded-[10px] text-[13.5px] text-[#2f2f2f] font-montreal leading-snug hover:bg-[#dcf0da] hover:text-[#083703] transition-all duration-150"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8bce83] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[rgba(0,0,0,0.06)] bg-[#f7fcf7] px-6 py-3 flex items-center justify-between">
              <p className="text-[12.5px] font-montreal text-[#555]">
                <span className="text-[#0c6d00] font-semibold">Emergency walk-ins welcome</span>
                <span className="mx-2 text-[#ccc]">·</span>
                Same-day appointments available
              </p>
              <Link
                href="/services"
                onClick={closeMega}
                className="group flex items-center gap-1.5 text-[12.5px] font-sharp font-semibold text-[#083703] hover:text-[#0c6d00] transition-colors"
              >
                View all services
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-b-3xl flex flex-col gap-0 lg:hidden overflow-hidden transition-all duration-350 ease-out ${
          menuOpen ? "max-h-[600px] opacity-100 py-4 px-6" : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        {/* Services accordion in mobile */}
        <div className="border-b border-[rgba(0,0,0,0.06)]">
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="w-full flex items-center justify-between font-montreal text-[16px] text-black py-3"
          >
            Services
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              className={`transition-transform duration-250 ${mobileServicesOpen ? "rotate-180" : ""}`}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              mobileServicesOpen ? "max-h-[400px] pb-3" : "max-h-0"
            }`}
          >
            {serviceCategories.map((cat) => (
              <div key={cat.name} className="mb-3">
                <Link
                  href={cat.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[11px] font-sharp font-semibold uppercase tracking-[0.09em] text-[#0c6d00] px-3 mb-1"
                >
                  {cat.name}
                </Link>
                {cat.services.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[14px] font-montreal text-[#333] px-3 py-1 hover:text-[#083703] transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {[
          { label: "About",           href: "/about" },
          { label: "Invisalign®",     href: "/invisalign" },
          { label: "Membership Plan", href: "/membership-plan" },
          { label: "Contact Us",      href: "/contact" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="font-montreal text-[16px] text-black py-3 border-b border-[rgba(0,0,0,0.06)]"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}

        <Link
          href="/appointment"
          className="btn btn-primary-lg mt-3 text-center"
          onClick={() => setMenuOpen(false)}
        >
          Schedule an Appointment <span className="arrow ml-1">→</span>
        </Link>
      </div>
    </nav>
  );
}
