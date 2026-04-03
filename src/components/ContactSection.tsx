"use client";

import Image from "next/image";
import { useState } from "react";
import AnimateIn from "./AnimateIn";
import { imgContactBg } from "@/lib/assets";

const fields = [
  { id: "name",    label: "Enter Your Name",         type: "text"  },
  { id: "phone",   label: "Enter Your Phone Number", type: "tel"   },
  { id: "email",   label: "Enter Your Email Address",type: "email" },
] as const;

type FormKey = "name" | "phone" | "email" | "message";

export default function ContactSection() {
  const [form, setForm]       = useState<Record<FormKey, string>>({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmit]= useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <section className="bg-white flex gap-[50px] items-start overflow-hidden pl-[75px] pr-[50px] py-[100px] relative">

      {/* Background photo (right half, faded) */}
      <div className="absolute right-0 top-0 w-[730px] h-[877px] pointer-events-none overflow-hidden">
        <Image src={imgContactBg} alt="" fill className="object-cover" unoptimized />
        <div className="absolute top-0 left-0 right-0 h-[200px]" style={{ background: "linear-gradient(to bottom,white,transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-[200px]" style={{ background: "linear-gradient(to top,white,transparent)" }} />
        <div className="absolute top-0 left-0 bottom-0 w-[120px]"  style={{ background: "linear-gradient(to right,white,transparent)" }} />
      </div>

      {/* Form */}
      <AnimateIn variant="left" className="relative z-10 flex flex-col gap-[50px] w-[475px] max-w-full shrink-0">
        <div className="flex flex-col gap-[12px]">
          <h2
            className="text-[#083703] text-[clamp(28px,3vw,40px)] leading-[1.5]"
            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
          >
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-[#666] text-[16px] font-medium leading-[1.6] max-w-[453px]">
            Our team is here to provide comfortable, modern dental care and help you feel confident about your smile.
          </p>
        </div>

        {submitted ? (
          <div className="animate-scale-in bg-[#dcf0da] rounded-[15px] p-[40px] flex flex-col gap-4 items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#083703] flex items-center justify-center text-white text-2xl">✓</div>
            <p className="text-[#083703] text-[20px] font-sharp font-semibold">Message sent!</p>
            <p className="text-[#666] text-[15px]">We&apos;ll reach out to you within 24 hours to confirm your appointment.</p>
            <button onClick={() => setSubmit(false)} className="btn btn-primary mt-2">
              Send another <span className="arrow ml-1">→</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-[28px]">
            {fields.map((field, i) => (
              <AnimateIn key={field.id} variant="up" delay={100 + i * 80}>
                <div
                  className={`border-b-2 flex items-center h-[50px] transition-colors duration-200 ${
                    focused === field.id ? "border-[#083703]" : "border-[rgba(217,217,217,0.5)]"
                  }`}
                >
                  <input
                    type={field.type}
                    placeholder={field.label}
                    value={form[field.id]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent text-[14px] leading-[1.5] text-[#1a1a1a] placeholder:text-[rgba(26,26,26,0.4)] outline-none"
                    required={field.id === "name" || field.id === "email"}
                  />
                </div>
              </AnimateIn>
            ))}

            <AnimateIn variant="up" delay={370}>
              <div
                className={`border-b-2 py-[15px] flex items-start min-h-[155px] transition-colors duration-200 ${
                  focused === "message" ? "border-[#083703]" : "border-[rgba(217,217,217,0.5)]"
                }`}
              >
                <textarea
                  placeholder="Enter Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  className="w-full bg-transparent text-[14px] leading-[1.5] text-[#1a1a1a] placeholder:text-[rgba(26,26,26,0.4)] outline-none resize-none"
                />
              </div>
            </AnimateIn>

            <AnimateIn variant="up" delay={450}>
              <button type="submit" className="btn btn-primary-lg w-full justify-center">
                Get In Touch <span className="arrow ml-1">→</span>
              </button>
            </AnimateIn>
          </form>
        )}
      </AnimateIn>
    </section>
  );
}
