"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateIn from "./AnimateIn";
import { imgServicesMain, imgStar } from "@/lib/assets";

const services = [
  { num: "01", name: "General Dentistry",  desc: "Routine exams, cleanings, and preventive care to keep your smile healthy." },
  { num: "02", name: "Cosmetic Dentistry", desc: "Veneers, whitening, and smile makeovers tailored to your goals." },
  { num: "03", name: "Gum Treatment",      desc: "Periodontal care and treatment to protect your gum health." },
  { num: "04", name: "Tooth Replacement",  desc: "Implants, bridges, and dentures to restore your complete smile." },
  { num: "05", name: "Orthodontics",       desc: "Invisalign® and traditional braces for a straighter, healthier smile." },
  { num: "06", name: "Oral Surgery",       desc: "Extractions and surgical treatments performed with expert care and comfort." },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="flex gap-[20px] items-start overflow-hidden pb-[50px] pt-[75px] px-[50px] w-full relative"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgb(255,255,255) 15.327%,rgb(197,231,193) 35.945%,rgb(139,206,131) 56.15%,rgb(8,55,3) 101.1%)",
      }}
    >
      {/* ── Left card ── */}
      <AnimateIn variant="left" className="bg-white flex-1 flex flex-col gap-[50px] items-start pb-[50px] pt-[25px] px-[50px] rounded-[10px] min-w-0">

        {/* Header */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          <div className="flex items-center gap-[5px] px-[18px] py-[10px] rounded-full border border-[rgba(217,217,217,0.5)] bg-white">
            <div className="w-[10px] h-[10px] rounded-full bg-[#8bce83] animate-pulse-dot" />
            <span className="text-[#666] text-[14px] leading-[1.5] whitespace-nowrap font-sharp font-medium">
              Our Services
            </span>
          </div>
          <h2
            className="text-[#083703] text-[32px] leading-[1.5] w-full"
            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
          >
            Comprehensive Dental Care for Richmond, TX
          </h2>
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-0 w-full">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-row flex flex-col w-full py-[15px] border-b border-[rgba(217,217,217,0.5)] group"
              style={{ transitionDelay: `${i * 50}ms` }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center gap-[25px]">
                <span
                  className="text-[#083703] text-[14px] leading-[1.5] w-[50px] shrink-0 font-sharp font-semibold"
                >
                  [{service.num}]
                </span>
                <span
                  className="service-name text-[#083703] text-[18px] leading-[1.5] whitespace-nowrap font-sharp font-medium transition-colors duration-200"
                >
                  {service.name}
                </span>
                {/* Expand chevron */}
                <svg
                  className={`ml-auto w-4 h-4 text-[#083703] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  viewBox="0 0 16 16" fill="none"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {/* Expandable description */}
              <div
                className="overflow-hidden transition-all duration-350 ease-out"
                style={{ maxHeight: open === i ? "80px" : "0", opacity: open === i ? 1 : 0 }}
              >
                <div className="flex items-start gap-[20px] pt-[8px]">
                  <div className="w-[50px] shrink-0" />
                  <p className="text-[#666] text-[14px] leading-[1.5]">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/appointment" className="btn btn-primary-lg">
          Schedule an Appointment <span className="arrow ml-1">→</span>
        </Link>
      </AnimateIn>

      {/* ── Right image ── */}
      <AnimateIn variant="right" delay={100} className="relative rounded-[10px] overflow-hidden self-stretch shrink-0 w-[660px] max-w-[50%] hidden lg:block img-zoom">
        <Image
          src={imgServicesMain}
          alt="Dental care"
          fill
          className="object-cover rounded-[10px]"
          unoptimized
        />

        {/* Rating blob */}
        <div className="absolute bottom-[25px] right-[15px] w-[333px] backdrop-blur-[12.5px] bg-[rgba(11,11,11,0.25)] border border-[rgba(217,217,217,0.25)] rounded-[15px] pl-[30px] pr-[72px] py-[30px] transition-transform duration-500 hover:translate-y-[-4px]">
          <div className="flex flex-col gap-[50px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-white h-[25px] w-[74px] rounded" />
              <span className="text-white text-[20px] leading-[1.5] whitespace-nowrap font-sharp font-semibold">
                Trusted Rate
              </span>
            </div>
            <div>
              <div className="flex items-center gap-[10px]">
                <span
                  className="text-[#8bce83] text-[108px] leading-[1.4]"
                  style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 300 }}
                >
                  4.9
                </span>
                <Image src={imgStar} alt="star" width={32} height={32} unoptimized />
              </div>
              <p className="text-white text-[14px] leading-[1.5]">
                Our clients love us and are consistently satisfied with our care
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
