import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { imgEmergencyBg } from "@/lib/assets";

export default function EmergencySection() {
  return (
    <section className="bg-white flex gap-[20px] items-start overflow-hidden pb-[50px] pt-[75px] px-[50px]" style={{ minHeight: "900px" }}>

      {/* ── Left gradient card ── */}
      <AnimateIn
        variant="left"
        className="flex flex-col items-start overflow-hidden px-[45px] py-[50px] rounded-[15px] shrink-0 w-[564px] max-w-[45%]"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgb(255,255,255) 33.41%,rgb(197,231,193) 49.68%,rgb(139,206,131) 65.626%,rgb(8,55,3) 101.1%)",
          minHeight: "700px",
        }}
      >
        <div className="flex flex-1 flex-col justify-between h-full">
          <h2
            className="text-[#083703] text-[clamp(28px,3vw,40px)] leading-[1.5] whitespace-pre-wrap"
            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
          >
            {`Dental Emergency?\nWe're Here to Help`}
          </h2>
          <div className="flex flex-col gap-[35px] mt-[60px]">
            <p className="text-white text-[16px] font-medium leading-[1.6] max-w-[456px]">
              Tooth pain and dental injuries can happen unexpectedly. Our team provides prompt care to relieve discomfort and address urgent dental issues as quickly as possible.
            </p>
            <div className="flex gap-[22px] items-center flex-wrap">
              <Link href="/appointment" className="btn btn-primary">
                Schedule an Appointment <span className="arrow ml-1">→</span>
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* ── Right content ── */}
      <AnimateIn variant="right" delay={120} className="flex flex-col gap-[20px] flex-1 min-w-0" style={{ minHeight: "700px" }}>

        {/* Emergency photo */}
        <div className="relative flex-1 rounded-[15px] overflow-hidden min-h-[420px] img-zoom">
          <Image src={imgEmergencyBg} alt="Emergency dental care" fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Info cards */}
        <div className="flex gap-[10px]">
          {[
            {
              bg: "bg-[#dcf0da]",
              titleColor: "text-[#083703]",
              bodyColor: "text-[#161616]",
              title: "Quick Pain Relief",
              body: "We focus on diagnosing the problem quickly and helping you feel comfortable again.",
              delay: 200,
            },
            {
              bg: "bg-[#083703]",
              titleColor: "text-white",
              bodyColor: "text-white",
              title: "Same-Day Appointments",
              body: "Urgent cases are prioritized so you can get relief as quickly as possible.",
              delay: 300,
            },
          ].map((card, i) => (
            <AnimateIn
              key={i}
              variant="up"
              delay={card.delay}
              className={`flex-1 ${card.bg} border border-[rgba(217,217,217,0.25)] p-[30px] rounded-[15px] transition-transform duration-300 hover:translate-y-[-4px]`}
            >
              <div className="flex flex-col gap-[15px]">
                <p className={`${card.titleColor} text-[20px] leading-[1.5] font-sharp font-semibold whitespace-nowrap`}>
                  {card.title}
                </p>
                <p className={`${card.bodyColor} text-[14px] leading-[1.5]`}>{card.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
