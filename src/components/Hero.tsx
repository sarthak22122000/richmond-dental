import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { imgHeroBg, imgReview1, imgReview2, imgReview3, imgStar } from "@/lib/assets";

export default function Hero() {
  return (
    <section className="relative w-full h-[1024px] overflow-hidden bg-black">

      {/* Ken-burns background */}
      <div className="absolute inset-0 img-zoom">
        <Image
          src={imgHeroBg}
          alt="Richmond Dental Care office"
          fill
          className="object-cover animate-ken-burns"
          priority
          unoptimized
        />
        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Dark green bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[268px] bg-[#083703]" />

      <Navbar />

      {/* ── Headline (slide from left) ── */}
      <div
        className="absolute bottom-[49px] left-[50px] animate-slide-left"
        style={{ animationDelay: "200ms" }}
      >
        <h1
          className="text-white text-[clamp(36px,4vw,56px)] leading-[1.4] w-[773px] max-w-[calc(100vw-120px)]"
          style={{ fontFamily: "'Sharp Sans','Plus Jakarta Sans',sans-serif", fontWeight: 500 }}
        >
          A Better Dental Experience for Richmond, TX
        </h1>
      </div>

      {/* ── CTA area (slide from right) ── */}
      <div
        className="absolute bottom-[49px] right-[50px] flex flex-col gap-[30px] items-end animate-slide-right"
        style={{ animationDelay: "350ms" }}
      >
        <p className="text-[#ddd] text-[16px] leading-[1.5] text-right w-[389px] max-w-[calc(100vw-120px)]">
          Comfortable, modern dental care for Richmond, TX families. All major PPO insurance plans accepted.
        </p>
        <div className="flex gap-[22px] items-center flex-wrap justify-end">
          <Link href="/appointment" className="btn btn-white">
            Schedule an Appointment <span className="arrow ml-1">→</span>
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Get in Touch
          </Link>
        </div>
      </div>

      {/* ── Trust badge (fade up, floats) ── */}
      <div
        className="absolute left-[50px] bottom-[267px] flex items-center gap-[10px] backdrop-blur-[25px] bg-[rgba(11,11,11,0.45)] px-[20px] py-[15px] rounded-full h-[65px] animate-fade-up animate-float"
        style={{ animationDelay: "500ms" }}
      >
        {/* Stacked avatars */}
        <div className="flex items-center">
          {[imgReview1, imgReview2, imgReview3].map((src, i) => (
            <div
              key={i}
              className="w-[34.5px] h-[34.5px] rounded-full overflow-hidden border-2 border-white relative transition-transform duration-200 hover:scale-110 hover:z-10"
              style={{ marginLeft: i > 0 ? "-10px" : 0, zIndex: 3 - i }}
            >
              <Image src={src} alt="Patient" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[5px]">
          <span className="text-white text-[20px] leading-[1.4] font-sharp font-semibold">4.9</span>
          <Image src={imgStar} alt="star" width={12} height={12} unoptimized />
        </div>
        <span className="text-white text-[20px] leading-[1.5] font-sharp font-semibold whitespace-nowrap">
          Trusted Rate
        </span>
      </div>
    </section>
  );
}
