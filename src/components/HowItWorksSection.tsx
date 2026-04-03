import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { imgHowItWorksLeft, imgHowItWorksRight } from "@/lib/assets";

const steps = [
  { num: "01", title: "Schedule Your Appointment",    desc: "Book online or call our office to choose a time that works for you." },
  { num: "02", title: "Consultation & Dental Exam",   desc: "Our dentists evaluate your oral health and take the time to understand your concerns." },
  { num: "03", title: "Personalized Treatment Plan",  desc: "We explain your options clearly and recommend the best treatment for your needs." },
  { num: "04", title: "Comfortable, Modern Care",     desc: "Receive treatment in a calm environment using modern dental techniques." },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white flex gap-[50px] items-start overflow-hidden px-[50px] py-[100px]">

      {/* ── Left imagery ── */}
      <AnimateIn variant="left" className="h-[874px] overflow-hidden relative shrink-0 w-[758px] max-w-[55%] hidden lg:block">

        {/* Tall pill (gradient bg + patient image) */}
        <div
          className="absolute top-[80px] left-[49px] h-[741px] w-[311px] rounded-[1217px] overflow-hidden img-zoom"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgb(255,255,255) 14.78%,rgb(197,231,193) 28.59%,rgb(139,206,131) 42.12%,rgb(8,55,3) 72.22%)",
          }}
        >
          <div className="absolute bottom-0 left-[-98px] w-[507px] h-[507px]">
            <Image src={imgHowItWorksLeft} alt="Patient care" fill className="object-cover" unoptimized />
          </div>
        </div>

        {/* Smaller rounded image */}
        <AnimateIn variant="right" delay={200} className="absolute top-[101px] left-[441px] h-[456px] w-[255px] rounded-full overflow-hidden img-zoom shadow-lg">
          <Image src={imgHowItWorksRight} alt="Dental care" fill className="object-cover" unoptimized />
        </AnimateIn>
      </AnimateIn>

      {/* ── Steps ── */}
      <AnimateIn variant="right" delay={100} className="flex flex-col justify-between self-stretch shrink-0 w-[515px] max-w-full gap-[30px]">

        {/* Heading */}
        <div className="flex flex-col gap-[20px]">
          <h2
            className="text-[#083703] text-[clamp(24px,2.8vw,32px)] leading-[1.5]"
            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
          >
            Simple, Clear Dental Care from Start to Finish
          </h2>
          <p className="text-[#666] text-[16px] font-medium leading-[1.6]">
            From your first call to your final treatment, our team focuses on making every step of your visit clear, comfortable, and straightforward.
          </p>
        </div>

        {/* Steps list */}
        <div className="flex flex-col gap-[36px]">
          {steps.map((step, i) => (
            <AnimateIn key={i} variant="up" delay={200 + i * 100} className="flex flex-col gap-[12px] group">
              <div className="flex items-center gap-[25px]">
                <span
                  className="text-[#083703] text-[14px] leading-[1.5] w-[50px] shrink-0 font-sharp font-semibold transition-colors duration-200 group-hover:text-[#0c6d00]"
                >
                  [{step.num}]
                </span>
                <span
                  className="text-[#083703] text-[18px] leading-[1.5] font-sharp font-medium transition-colors duration-200 group-hover:text-[#0c6d00]"
                >
                  {step.title}
                </span>
              </div>
              <div className="flex items-start gap-[20px]">
                <div className="w-[50px] shrink-0" />
                <p className="text-[#666] text-[14px] leading-[1.5] max-w-[385px]">{step.desc}</p>
              </div>
              <div className="w-full h-px bg-[rgba(217,217,217,0.5)] transition-colors duration-200 group-hover:bg-[rgba(8,55,3,0.15)]" />
            </AnimateIn>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
