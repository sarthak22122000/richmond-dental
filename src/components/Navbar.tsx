"use client";

import Image from "next/image";
import Link from "next/link";
import { imgLogo, imgLiveIcon } from "@/lib/assets";
import { useState, useRef, useEffect } from "react";

const serviceLinks = [
  { label: "General Dentistry",  href: "/services/general-dentistry" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { label: "Gum Treatment",      href: "/services/gum-treatment" },
  { label: "Tooth Replacement",  href: "/services/tooth-replacement" },
  { label: "Orthodontics",       href: "/services/orthodontics" },
  { label: "Oral Surgery",       href: "/services/oral-surgery" },
];

export default function Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="absolute left-0 top-0 w-full z-50 px-[25px] py-[25px] flex items-start justify-between gap-[10px] animate-fade-down">

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

          {/* Services with dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-[5px] font-montreal text-[16px] text-black leading-[1.5] whitespace-nowrap hover:text-[#083703] transition-colors"
            >
              Services
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`transition-transform duration-250 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {servicesOpen && (
              <div className="nav-dropdown animate-dropdown absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[rgba(217,217,217,0.4)] p-2 min-w-[220px] z-50">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[15px] text-[#333] hover:bg-[#dcf0da] hover:text-[#083703] transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8bce83] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "About",          href: "/about" },
            { label: "Invisalign®",    href: "/invisalign" },
            { label: "Membership Plan",href: "/membership-plan" },
            { label: "Contact Us",     href: "/contact" },
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

      {/* ── Mobile menu ── */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-b-3xl flex flex-col gap-3 lg:hidden overflow-hidden transition-all duration-350 ease-out ${
          menuOpen ? "max-h-[500px] opacity-100 py-6 px-6" : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        <Link href="/services" className="font-montreal text-[16px] text-black py-2 border-b border-[rgba(0,0,0,0.06)]" onClick={() => setMenuOpen(false)}>Services</Link>
        {[
          { label: "About",           href: "/about" },
          { label: "Invisalign®",     href: "/invisalign" },
          { label: "Membership Plan", href: "/membership-plan" },
          { label: "Contact Us",      href: "/contact" },
        ].map(({ label, href }) => (
          <Link key={label} href={href} className="font-montreal text-[16px] text-black py-2 border-b border-[rgba(0,0,0,0.06)]" onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="/appointment" className="btn btn-primary-lg mt-2 text-center" onClick={() => setMenuOpen(false)}>
          Schedule an Appointment <span className="arrow ml-1">→</span>
        </Link>
      </div>
    </nav>
  );
}
