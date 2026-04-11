"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    q: "Does Richmond Dental Care accept my insurance?",
    a: "Richmond Dental Care accepts most major PPO dental insurance plans, including Delta Dental, Cigna, Aetna, MetLife, UnitedHealthcare, Humana, BlueCross BlueShield, Guardian, Ameritas, Principal, Anthem, and many others. If you're unsure, call our office and we'll verify your benefits within minutes — at no charge.",
  },
  {
    q: "Does Richmond Dental Care accept Delta Dental?",
    a: "Yes. Richmond Dental Care is in-network with Delta Dental PPO and Delta Dental Premier plans. Delta Dental is one of the most widely accepted plans we work with. If you have a Delta Dental plan, your preventive care (cleanings, exams, X-rays) is typically covered at 100%, and most other treatments are covered at standard PPO rates.",
  },
  {
    q: "Does Richmond Dental Care accept Cigna dental insurance?",
    a: "Yes. We accept Cigna DPPO (dental PPO) plans at Richmond Dental Care. We recommend calling ahead so we can pull up your specific plan details and give you an accurate cost estimate before your appointment.",
  },
  {
    q: "Does Richmond Dental Care accept Aetna dental insurance?",
    a: "Yes. Richmond Dental Care accepts Aetna dental PPO plans. We work with Aetna to maximize your benefits on preventive, restorative, and specialty care services.",
  },
  {
    q: "Does Richmond Dental Care accept Medicare?",
    a: "Original Medicare (Parts A & B) does not cover routine dental care such as cleanings, fillings, or extractions. However, many Medicare Advantage (Part C) plans include a dental benefit. If you have a Medicare Advantage plan with dental coverage, we may be able to accept it — call our office with your plan details and we'll verify for you. We also offer our in-house membership plan as an affordable alternative for Medicare patients.",
  },
  {
    q: "Does Richmond Dental Care accept Medicaid or CHIP?",
    a: "Richmond Dental Care accepts certain Texas Medicaid and CHIP dental plans, including plans administered through DentaQuest. Coverage may vary depending on your specific managed care plan. Please call our office with your Medicaid or CHIP plan information and we'll confirm your eligibility and covered services before your appointment.",
  },
  {
    q: "Does Richmond Dental Care accept UnitedHealthcare dental insurance?",
    a: "Yes. We accept UnitedHealthcare dental PPO plans. United Healthcare dental benefits typically cover preventive services at 100% and provide coverage for basic and major restorative procedures at standard rates. Call us to verify your specific plan.",
  },
  {
    q: "Does Richmond Dental Care accept Humana dental insurance?",
    a: "Yes. We accept Humana dental PPO and some HMO plans at our Richmond, TX office. Call ahead with your member ID and we'll verify your specific benefits.",
  },
  {
    q: "What is a PPO dental plan and how does it work?",
    a: "A PPO (Preferred Provider Organization) dental plan gives you a network of dentists who have agreed to provide services at negotiated rates. When you visit an in-network dentist like Richmond Dental Care, your plan pays more of the cost. You can also see out-of-network dentists, but your costs will typically be higher. PPO plans generally cover preventive care at 100%, basic restorative at 70–80%, and major restorative at 50% after your deductible.",
  },
  {
    q: "What if I have an out-of-network dental plan?",
    a: "Even if Richmond Dental Care is out-of-network for your specific plan, you may still have out-of-network benefits. Many plans pay 50–80% of 'usual and customary' charges even for out-of-network providers. We'll submit claims on your behalf and help you understand your reimbursement. Call us with your plan information and we'll check.",
  },
  {
    q: "How do I verify my dental insurance benefits?",
    a: "The easiest way is to call our Richmond office directly. Give us your insurance carrier name, member ID, and group number (found on your insurance card), and our billing team will contact your carrier and verify your benefits — usually the same day or before your next appointment. This is a free service we provide for all patients.",
  },
  {
    q: "What happens when I've used up my annual dental insurance maximum?",
    a: "Most dental plans reset their annual maximum on January 1st. If you've reached your annual maximum, you can either pay out-of-pocket for remaining treatment, wait until your benefits renew, or use our CareCredit financing or in-house payment plan to spread costs over time. Our team will help you plan your treatment schedule to maximize your benefits across benefit years.",
  },
  {
    q: "Do you offer any options for patients without dental insurance in Richmond, TX?",
    a: "Absolutely. We offer three options for uninsured patients: (1) Our in-house Membership Plan, which includes cleanings, exams, and X-rays plus discounts on all other services for one annual fee. (2) CareCredit third-party financing with 0% promotional periods. (3) Flexible in-house payment plans for larger treatments. We'll never let cost prevent you from getting the care you need.",
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[rgba(217,217,217,0.6)] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-[20px] py-[22px] text-left group"
        aria-expanded={open}
      >
        <span
          className="text-[#1a1a1a] text-[16px] leading-[1.5] group-hover:text-[#083703] transition-colors"
          style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
        >
          {q}
        </span>
        <span
          className={`shrink-0 w-[28px] h-[28px] rounded-full border border-[rgba(8,55,3,0.2)] flex items-center justify-center transition-all duration-250 ${
            open ? "bg-[#083703] border-[#083703] rotate-45" : "group-hover:border-[#083703]"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke={open ? "#fff" : "#083703"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-350 ease-out ${
          open ? "max-h-[300px] pb-[22px]" : "max-h-0"
        }`}
      >
        <p className="text-[#555] text-[14px] font-montreal leading-[1.75] max-w-[680px]">{a}</p>
      </div>
    </div>
  );
}

export default function InsuranceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-[90px]">
      <div className="px-[50px] max-w-[1200px] mx-auto">

        <div className="flex flex-col lg:flex-row gap-[80px]">

          {/* Left: heading */}
          <AnimateIn variant="left" className="shrink-0 lg:w-[340px]">
            <div className="flex flex-col gap-[20px] lg:sticky lg:top-[40px]">
              <h2
                className="text-[#083703] text-[clamp(24px,2.8vw,36px)] leading-[1.4]"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
              >
                Frequently Asked Insurance Questions
              </h2>
              <p className="text-[#666] text-[15px] leading-[1.7]">
                Still have questions about your coverage, costs, or how our billing process works?
                Our front desk team is happy to help.
              </p>
              <div className="flex flex-col gap-[12px]">
                <a
                  href="tel:+1-281-238-0023"
                  className="btn btn-primary"
                >
                  Call Our Office <span className="arrow ml-1">→</span>
                </a>
                <Link href="/contact" className="btn btn-outline-dark">
                  Send a Message
                </Link>
              </div>
              <div className="rounded-[14px] bg-[#f7fcf7] border border-[rgba(8,55,3,0.08)] p-[20px]">
                <p className="text-[#083703] text-[13px] font-sharp font-semibold mb-[6px]">
                  Quick Benefit Verification
                </p>
                <p className="text-[#666] text-[12px] font-montreal leading-[1.6]">
                  Have your insurance card handy. Call us with your member ID and group number
                  and we'll verify your benefits same-day — free of charge.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: accordion */}
          <AnimateIn variant="right" delay={100} className="flex-1">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
