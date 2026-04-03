import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { imgOffice, imgEmergencyIcon, imgTechIcon } from "@/lib/assets";

const features = [
  {
    icon: imgTechIcon,
    title: "Modern Dental Technology",
    desc: "We use advanced equipment and digital tools to deliver precise, efficient, and comfortable treatments.",
  },
  {
    icon: null,
    title: "Comfort-Focused Environment",
    desc: "Our office is designed to help patients feel relaxed from the moment they walk in.",
  },
  {
    icon: imgEmergencyIcon,
    title: "Patient-Centered Care",
    desc: "Every treatment is explained clearly so you feel informed, comfortable, and confident about your care.",
  },
];

export default function OfficeSection() {
  return (
    <section className="bg-white overflow-hidden relative" style={{ minHeight: "1024px" }}>

      {/* Title row */}
      <div className="flex items-start justify-between pt-[85px] px-[50px] max-w-[1440px] mx-auto">
        <AnimateIn variant="left" className="w-[564px] max-w-[50%]">
          <h2
            className="text-[#083703] text-[clamp(24px,3vw,40px)] leading-[1.5]"
            style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
          >
            A Modern Dental Office Designed for Comfort
          </h2>
        </AnimateIn>
        <AnimateIn variant="right" delay={100} className="w-[492px] max-w-[45%]">
          <p className="text-[#666] text-[16px] font-medium leading-[1.6] text-right">
            Our office is designed to make every visit feel calm, clean, and comfortable. From modern equipment to welcoming treatment spaces, every detail supports a better patient experience.
          </p>
        </AnimateIn>
      </div>

      {/* Office panorama */}
      <AnimateIn variant="scale" delay={150} className="mx-[50px] mt-[30px] relative rounded-[12px] overflow-hidden img-zoom" style={{ height: "580px" }}>
        <Image src={imgOffice} alt="Richmond Dental Care office" fill className="object-cover" unoptimized />
        {/* Dark overlay for blob contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Feature blobs — staggered from bottom */}
        <div className="absolute bottom-[25px] left-[25px] right-[25px] flex gap-[20px]">
          {features.map((f, i) => (
            <AnimateIn
              key={i}
              variant="up"
              delay={300 + i * 120}
              className="flex-1 backdrop-blur-[12.5px] bg-[rgba(11,11,11,0.35)] border border-[rgba(217,217,217,0.25)] p-[30px] rounded-[15px] transition-transform duration-300 hover:translate-y-[-4px] hover:bg-[rgba(11,11,11,0.5)]"
            >
              <div className="flex flex-col gap-[16px]">
                <div className="w-[32px] h-[32px] relative">
                  {f.icon ? (
                    <Image src={f.icon} alt="" fill className="object-contain" unoptimized />
                  ) : (
                    /* Comfort icon placeholder */
                    <svg viewBox="0 0 32 32" className="w-full h-full fill-white" aria-hidden="true">
                      <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13S23.2 3 16 3zm0 5a2 2 0 110 4 2 2 0 010-4zm3 14h-6v-2h2v-6h-2v-2h4v8h2v2z"/>
                    </svg>
                  )}
                </div>
                <p className="text-white text-[18px] leading-[1.4] font-sharp font-semibold">{f.title}</p>
                <p className="text-white/85 text-[14px] leading-[1.5]">{f.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
