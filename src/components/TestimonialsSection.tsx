"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";
import { imgTestimonialAvatar, imgStars, imgArrowLeft, imgArrowRight } from "@/lib/assets";

const testimonials = [
  {
    quote: "The dentist, Dr. Patel, was amazing! His team did a wonderful job too! The office is very clean and organized. I was welcomed the moment I stepped into the beautiful office! You have to come here for your dental needs. You will be so happy you did!",
    name: "Laura Sigala",
    role: "Dental patient",
  },
  {
    quote: "Absolutely the best dental experience I've ever had. The staff was kind, the office was spotless, and Dr. Patel took the time to explain everything. I left feeling confident and cared for.",
    name: "Maria Gonzalez",
    role: "Dental patient",
  },
  {
    quote: "Dr. Pruneda made my Invisalign journey so smooth! She answered all my questions and the results are incredible. Highly recommend Richmond Dental Care to anyone looking for a great dentist.",
    name: "James Carter",
    role: "Invisalign patient",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent]   = useState(0);
  const [animKey, setAnimKey]   = useState(0);   // re-triggers CSS animation

  const go = (next: number) => {
    setCurrent((next + testimonials.length) % testimonials.length);
    setAnimKey((k) => k + 1);
  };

  /* Auto-advance every 6 s */
  useEffect(() => {
    const id = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const t = testimonials[current];

  return (
    <section className="bg-white min-h-[1024px] overflow-hidden relative flex flex-col items-center py-[65px]">

      {/* Decorative rings */}
      {[1141, 953].map((size, i) => (
        <div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 rounded-full border border-[rgba(139,206,131,0.18)] pointer-events-none"
          style={{ width: size, height: size, bottom: `${-489 + i * 94}px` }}
        />
      ))}

      {/* Decorative dots */}
      {[
        { bottom: "420px", left: "calc(8.33% + 123px)", size: 87 },
        { bottom: "565px", left: "calc(58.33% + 51px)", size: 87 },
        { bottom: "65px",  left: "calc(75% + 77px)",    size: 77 },
        { bottom: "124px", left: "calc(8.33% + 94px)",  size: 87 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[rgba(139,206,131,0.12)] pointer-events-none"
          style={{ bottom: pos.bottom, left: pos.left, width: pos.size, height: pos.size }}
        />
      ))}

      {/* Header */}
      <AnimateIn className="flex flex-col gap-[25px] items-center text-center px-4 z-10">
        <h2
          className="text-[#083703] text-[clamp(24px,3vw,40px)] leading-[1.5]"
          style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
        >
          Trusted by Patients Who Value Great Care
        </h2>
        <p className="text-[#666] text-[16px] font-medium leading-[1.6] w-[515px] max-w-full">
          Our patients consistently share their experiences about the comfort, professionalism, and quality of care they receive.
        </p>
        <div className="flex gap-[22px] items-center flex-wrap justify-center">
          <Link href="/appointment" className="btn btn-primary">
            Schedule an Appointment <span className="arrow ml-1">→</span>
          </Link>
          <Link href="/contact" className="btn btn-outline-dark">
            Get in Touch
          </Link>
        </div>
      </AnimateIn>

      {/* Testimonial card */}
      <AnimateIn variant="scale" delay={200} className="mt-[60px] w-[672px] max-w-[calc(100%-40px)] bg-white border border-[rgba(217,217,217,0.5)] rounded-[25px] shadow-[5px_5px_15px_0px_rgba(0,0,0,0.05)] relative px-[40px] py-[50px] pt-[60px]">

        {/* Avatar */}
        <div className="absolute -top-[42px] left-1/2 -translate-x-1/2 w-[84px] h-[84px] rounded-full overflow-hidden border-4 border-white shadow-md transition-transform duration-300 hover:scale-110">
          <Image src={imgTestimonialAvatar} alt={t.name} fill className="object-cover" unoptimized />
        </div>

        {/* Quote – key re-triggers fade */}
        <div key={animKey} className="animate-fade-in flex flex-col gap-[40px]">
          <p className="text-[#666] text-[18px] font-medium leading-[1.75] text-center">{t.quote}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <span className="text-[#1a1a1a] text-[16px] leading-[1.5] font-sharp font-semibold">{t.name}</span>
              <span className="text-[#666] text-[14px] capitalize font-sharp font-medium">{t.role}</span>
            </div>
            <div className="relative h-[18px] w-[98px]">
              <Image src={imgStars} alt="5 stars" fill className="object-contain" unoptimized />
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Controls */}
      <div className="mt-[40px] flex flex-col gap-[22px] items-center z-10">
        {/* Progress bar */}
        <div className="relative bg-[rgba(217,217,217,0.5)] h-[2px] w-[200px] rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#083703] rounded-full transition-all duration-500"
            style={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
          />
        </div>
        {/* Arrow buttons */}
        <div className="flex gap-[25px] items-center">
          <button
            onClick={() => go(current - 1)}
            aria-label="Previous"
            className="w-[42px] h-[42px] transition-transform duration-200 hover:scale-110 hover:opacity-80 active:scale-95"
          >
            <Image src={imgArrowLeft} alt="" width={42} height={42} unoptimized />
          </button>
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-6 h-2.5 bg-[#083703]" : "w-2.5 h-2.5 bg-[rgba(8,55,3,0.25)]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(current + 1)}
            aria-label="Next"
            className="w-[42px] h-[42px] transition-transform duration-200 hover:scale-110 hover:opacity-80 active:scale-95"
          >
            <Image src={imgArrowRight} alt="" width={42} height={42} unoptimized />
          </button>
        </div>
      </div>
    </section>
  );
}
