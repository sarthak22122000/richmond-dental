import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import {
  imgLogo, imgLogoWordmark,
  imgInstagram, imgFacebook, imgYoutube, imgLinkedin,
  imgLocationIcon, imgMailIcon, imgPhoneIcon2,
} from "@/lib/assets";

const quickLinks = ["About Us", "Services", "Insurance", "The Team", "Resources"];
const support    = ["Privacy Policy", "Terms of Use", "FAQs"];
const socials    = [
  { src: imgInstagram, label: "Instagram" },
  { src: imgFacebook,  label: "Facebook"  },
  { src: imgYoutube,   label: "YouTube"   },
  { src: imgLinkedin,  label: "LinkedIn"  },
];

export default function Footer() {
  return (
    <footer
      className="flex items-start overflow-hidden pb-[25px] pt-[100px] px-[20px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgb(255,255,255) 18.658%,rgb(197,231,193) 38.475%,rgb(139,206,131) 57.895%,rgb(8,55,3) 101.1%)",
      }}
    >
      <div className="bg-white flex-1 flex items-start justify-between overflow-hidden pb-[100px] pt-[75px] px-[50px] relative flex-wrap gap-y-10">

        {/* Company details */}
        <AnimateIn variant="up" delay={0} className="flex flex-col gap-[50px] w-[363px] max-w-full">
          <div className="flex flex-col gap-[25px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-[80px] h-[80px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image src={imgLogo} alt="Richmond Dental logo mark" fill className="object-contain" unoptimized />
              </div>
              <div className="relative h-[47px] w-[160px]">
                <Image src={imgLogoWordmark} alt="Richmond Dental Care" fill className="object-contain object-left" unoptimized />
              </div>
            </Link>

            {/* Socials */}
            <div className="flex items-center gap-[22px]">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="relative w-[22px] h-[22px] transition-transform duration-200 hover:scale-125 hover:opacity-70"
                >
                  <Image src={s.src} alt={s.label} fill className="object-contain" unoptimized />
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-[10px]">
            <div className="relative w-[24px] h-[24px] shrink-0 mt-0.5">
              <Image src={imgLocationIcon} alt="" fill className="object-contain" unoptimized />
            </div>
            <address className="not-italic text-[#666] text-[14px] font-medium leading-[1.6] underline">
              8019 W Grand Pkwy S Suite 1055,<br />Richmond, TX 77407
            </address>
          </div>
        </AnimateIn>

        {/* Contact */}
        <AnimateIn variant="up" delay={100} className="flex flex-col gap-[20px] w-[265px]">
          <p className="text-[#0b0b0b] text-[16px] leading-[1.5] font-sharp font-semibold">Contact</p>
          <a href="mailto:info@richmond-dentalcare.com" className="flex items-center gap-[10px] group hover:text-[#083703] transition-colors">
            <div className="relative w-[24px] h-[24px]">
              <Image src={imgMailIcon} alt="" fill className="object-contain" unoptimized />
            </div>
            <span className="text-[#666] text-[14px] font-medium leading-[1.5] whitespace-nowrap group-hover:text-[#083703] transition-colors">
              info@richmond-dentalcare.com
            </span>
          </a>
          <a href="tel:+18326122831" className="flex items-center gap-[10px] group">
            <div className="relative w-[24px] h-[24px]">
              <Image src={imgPhoneIcon2} alt="" fill className="object-contain" unoptimized />
            </div>
            <span className="text-[#666] text-[14px] font-medium leading-[1.5] whitespace-nowrap group-hover:text-[#083703] transition-colors">
              +1 (832) 612-2831
            </span>
          </a>
        </AnimateIn>

        {/* Quick Links */}
        <AnimateIn variant="up" delay={200} className="flex flex-col gap-[20px] w-[217px]">
          <p className="text-[#0b0b0b] text-[16px] leading-[1.5] font-sharp font-semibold">Quick Links</p>
          {quickLinks.map((link, i) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-[#666] text-[16px] font-medium leading-[1.5] hover:text-[#083703] hover:translate-x-1 transition-all duration-200 inline-block"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link}
            </Link>
          ))}
        </AnimateIn>

        {/* Support */}
        <AnimateIn variant="up" delay={300} className="flex flex-col gap-[20px] w-[197px]">
          <p className="text-[#0b0b0b] text-[16px] leading-[1.5] font-sharp font-semibold">Support</p>
          {support.map((link, i) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-[#666] text-[16px] font-medium leading-[1.5] hover:text-[#083703] hover:translate-x-1 transition-all duration-200 inline-block"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link}
            </Link>
          ))}
        </AnimateIn>

        {/* Copyright */}
        <div className="w-full text-center pt-10 border-t border-[rgba(217,217,217,0.4)]">
          <p className="text-[#666] text-[14px] leading-[1.5] font-sharp font-medium">
            © 2026 Richmond Dental Care, TX. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
