"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateIn from "./AnimateIn";
import { imgDentistsMain, imgDentistCard, imgPhoneIcon } from "@/lib/assets";

const dentists = [
  { name: "Dr. Arpitkumar Patel", active: false },
  { name: "Dr. Harsh Patel",      active: true  },
  { name: "Dr. Natalie Pruneda",  active: false },
];

export default function DentistsSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white flex gap-[20px] items-start justify-center overflow-hidden px-[25px] py-[50px] w-full">

      {/* ── Large team photo ── */}
      <AnimateIn variant="left" className="relative h-[844px] rounded-[10px] overflow-hidden shrink-0 w-[1000px] max-w-[65%] hidden lg:block img-zoom">
        <Image
          src={imgDentistsMain}
          alt="Richmond Dental Care team"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(8,55,3,0.1)] rounded-[10px]" />

        {/* Bottom-left text box */}
        <div className="absolute bottom-0 left-0 bg-white pl-[25px] pr-[75px] py-[35px] rounded-tr-[50px]">
          <h2
            className="text-[#083703] text-[clamp(28px,3.5vw,48px)] leading-[1.5] w-[481px] max-w-full"
            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
          >
            Meet the Dentists Behind Your Care
          </h2>
          <p className="text-[#666] text-[16px] font-medium leading-[1.6] whitespace-nowrap">
            Trusted by families and patients throughout the community.
          </p>
        </div>

        {/* Dentist name pills */}
        {dentists.map((d, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`absolute flex items-center px-[25px] py-[12px] rounded-full backdrop-blur-[25px] border shadow-[10px_10px_25px_0px_rgba(139,206,131,0.15)] transition-all duration-300
              ${active === i
                ? "bg-[#0c6d00] border-[rgba(23,157,9,0.5)] text-white scale-[1.03]"
                : "bg-white border-[rgba(23,157,9,0.5)] text-[#083703] hover:bg-[#dcf0da]"
              }`}
            style={{ top: "493px", left: i === 0 ? "95px" : i === 1 ? "416px" : "737px" }}
          >
            <span className="text-[18px] leading-[1.5] font-sharp font-medium whitespace-nowrap">
              {d.name}{active === i ? " →" : ""}
            </span>
          </button>
        ))}
      </AnimateIn>

      {/* ── Right column ── */}
      <AnimateIn variant="right" delay={150} className="flex flex-col gap-[10px] flex-1 min-w-0 self-stretch">

        {/* Dark green card */}
        <div className="bg-[#083703] flex-1 rounded-[10px] overflow-hidden relative min-h-[400px]">
          <div className="absolute left-[-136px] bottom-0 w-[506px] h-[506px] transition-transform duration-700 hover:scale-105">
            <Image src={imgDentistCard} alt="Dr. Harsh Patel" fill className="object-cover" unoptimized />
          </div>
          <p className="absolute top-[35px] left-1/2 -translate-x-1/2 text-[#f0f0f0] text-[16px] leading-[1.8] w-[305px] text-center">
            <span className="font-sharp font-semibold">
              Our dentists focus on thoughtful, modern care in a comfortable setting
            </span>
            {". "}
            <span className="font-light">
              Every treatment is approached with attention to detail and a commitment to making patients feel at ease.
            </span>
          </p>
        </div>

        {/* Call CTA card */}
        <div className="bg-[#dcf0da] flex flex-col items-center justify-between pb-[10px] pt-[35px] px-[25px] rounded-[10px] h-[203px] shrink-0 group">
          <h3 className="text-[#083703] text-[26px] leading-[1.5] self-start font-sharp font-semibold">
            Call Us →
          </h3>
          <a
            href="tel:+18326122831"
            className="flex items-center justify-between gap-4 px-[20px] py-[10px] rounded-[10px] w-full max-w-[350px] hover:bg-white/60 transition-colors duration-200"
          >
            <div className="relative w-[24px] h-[24px] shrink-0">
              <Image src={imgPhoneIcon} alt="" fill className="object-contain" unoptimized />
            </div>
            <span className="text-[#083703] text-[20px] leading-[1.5] font-sharp font-medium whitespace-nowrap">
              +1 (832) 612-2831
            </span>
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}
