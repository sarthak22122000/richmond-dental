import Image from "next/image";
import AnimateIn from "./AnimateIn";
import {
  imgInsurance1,  imgInsurance2,  imgInsurance3,  imgInsurance4,  imgInsurance5,
  imgInsurance6,  imgInsurance7,  imgInsurance8,  imgInsurance9,  imgInsurance10,
  imgInsurance11, imgInsurance12, imgInsurance13, imgInsurance14, imgInsurance15,
} from "@/lib/assets";

const logos = [
  imgInsurance1,  imgInsurance2,  imgInsurance3,  imgInsurance4,  imgInsurance5,
  imgInsurance6,  imgInsurance7,  imgInsurance8,  imgInsurance9,  imgInsurance10,
  imgInsurance11, imgInsurance12, imgInsurance13, imgInsurance14, imgInsurance15,
];

/* Double the array so the marquee loops seamlessly */
const track = [...logos, ...logos];

export default function InsuranceSection() {
  return (
    <section className="bg-white py-[100px] flex flex-col gap-[75px] items-center overflow-hidden">

      {/* Title */}
      <AnimateIn className="flex flex-col gap-[16px] items-center text-center px-4">
        <h2
          className="text-[#083703] text-[clamp(24px,3vw,40px)] leading-[1.5]"
          style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
        >
          We Accept All Major PPO Insurance Plans
        </h2>
        <p className="text-[#666] text-[18px] leading-[1.5] w-[568px] max-w-full">
          Comfortable, modern dental care for Richmond, TX families.{" "}
          All major PPO insurance plans accepted.
        </p>
      </AnimateIn>

      {/* Marquee + note */}
      <AnimateIn className="flex flex-col gap-[25px] items-center w-full" delay={150}>
        {/* Marquee wrapper — overflow-hidden masks the track */}
        <div className="w-full overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
               style={{ background: "linear-gradient(to right, white, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
               style={{ background: "linear-gradient(to left, white, transparent)" }} />

          <div className="marquee-track gap-[65px] py-2 px-4">
            {track.map((src, i) => (
              <div key={i} className="relative h-[50px] w-[140px] shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={src}
                  alt={`Insurance provider ${(i % logos.length) + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#666] text-[14px] leading-[1.5] text-center italic px-4">
          If you&apos;re unsure about your coverage, our staff can quickly verify your benefits before your visit.
        </p>
      </AnimateIn>
    </section>
  );
}
