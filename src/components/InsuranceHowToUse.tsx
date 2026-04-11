import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { imgHowItWorksLeft, imgHowItWorksRight } from "@/lib/assets";

const steps = [
  {
    num: "01",
    title: "Book Your Appointment",
    desc: "Call our office or schedule online. Mention your insurance carrier when booking and we'll pull up your plan details immediately.",
  },
  {
    num: "02",
    title: "We Verify Your Benefits — Free",
    desc: "Before your visit, our billing team contacts your insurance carrier directly to confirm your coverage, deductible status, remaining annual maximum, and what's covered for your planned treatment.",
  },
  {
    num: "03",
    title: "You See Your Costs Upfront",
    desc: "We give you a clear cost breakdown before any procedure starts — what your insurance pays, what you pay, and any out-of-pocket amounts. Zero surprises at checkout.",
  },
  {
    num: "04",
    title: "We File Your Claims for You",
    desc: "After your visit, we submit the claim directly to your insurance company. You don't have to deal with paperwork — we handle it and follow up if needed.",
  },
];

export default function InsuranceHowToUse() {
  return (
    <section className="bg-white py-[90px]">
      <div className="px-[50px] max-w-[1200px] mx-auto">

        <div className="flex flex-col lg:flex-row gap-[60px] items-start">

          {/* Left: images + heading + cta */}
          <AnimateIn variant="left" className="shrink-0 lg:w-[420px] lg:sticky lg:top-[40px]">
            <div className="flex flex-col gap-[20px]">

              {/* Image composition */}
              <div className="relative h-[300px] w-full mb-[8px] hidden lg:block">
                {/* Tall pill image */}
                <div className="absolute top-0 left-0 w-[200px] h-[290px] rounded-[120px] overflow-hidden img-zoom shadow-lg">
                  <Image src={imgHowItWorksLeft} alt="Patient receiving dental care" fill className="object-cover" unoptimized />
                </div>
                {/* Smaller round image */}
                <div className="absolute top-[20px] left-[180px] w-[200px] h-[200px] rounded-full overflow-hidden img-zoom shadow-xl border-4 border-white">
                  <Image src={imgHowItWorksRight} alt="Dental care" fill className="object-cover" unoptimized />
                </div>
                {/* Insurance accepted badge */}
                <div className="absolute bottom-0 left-[70px] bg-[#083703] rounded-[12px] px-[16px] py-[12px] shadow-lg z-10">
                  <p className="text-white text-[11px] font-sharp font-semibold">Insurance Handled</p>
                  <p className="text-[#8bce83] text-[10px] font-montreal">We file claims for you</p>
                </div>
              </div>

              <h2
                className="text-[#083703] text-[clamp(24px,2.8vw,36px)] leading-[1.4]"
                style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
              >
                How to Use Your Insurance at Richmond Dental Care
              </h2>
              <p className="text-[#666] text-[15px] leading-[1.7]">
                We take the confusion out of dental insurance. Our team does the heavy lifting
                so you can focus on getting the care you need.
              </p>

              <div
                className="rounded-[16px] p-[24px] flex flex-col gap-[12px]"
                style={{
                  backgroundImage: "linear-gradient(160deg, #dcf0da 0%, #c5e7c1 100%)",
                }}
              >
                <p className="text-[#083703] text-[13px] font-sharp font-semibold uppercase tracking-[0.08em]">
                  What to Bring
                </p>
                {[
                  "Your insurance card (front & back)",
                  "A government-issued photo ID",
                  "Your policy holder's name & DOB (if different from you)",
                  "List of current medications",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-[10px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#083703] mt-[7px] shrink-0" />
                    <span className="text-[#333] text-[13px] font-montreal leading-[1.5]">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/appointment" className="btn btn-primary">
                Schedule Now <span className="arrow ml-1">→</span>
              </Link>
            </div>
          </AnimateIn>

          {/* Right: steps */}
          <div className="flex flex-col gap-[0px] flex-1">
            {steps.map((step, i) => (
              <AnimateIn key={step.num} variant="right" delay={i * 100} className="group">
                <div className="flex gap-[24px] items-start py-[30px] border-b border-[rgba(217,217,217,0.5)] last:border-0">
                  {/* Number */}
                  <div className="shrink-0 w-[52px] h-[52px] rounded-full border-2 border-[rgba(8,55,3,0.15)] flex items-center justify-center group-hover:border-[#0c6d00] group-hover:bg-[#dcf0da] transition-all duration-250">
                    <span
                      className="text-[#083703] text-[14px] group-hover:text-[#0c6d00] transition-colors"
                      style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700 }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-[8px] pt-[10px]">
                    <h3
                      className="text-[#1a1a1a] text-[18px] leading-[1.4] group-hover:text-[#083703] transition-colors"
                      style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#666] text-[14px] font-montreal leading-[1.7] max-w-[460px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
