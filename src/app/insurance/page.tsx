import type { Metadata } from "next";
import InsurancePageHero from "@/components/InsurancePageHero";
import InsuranceUrgencyBanner from "@/components/InsuranceUrgencyBanner";
import InsuranceFAQ from "@/components/InsuranceFAQ";
import InsurancePlansGrid from "@/components/InsurancePlansGrid";
import InsuranceCoverage from "@/components/InsuranceCoverage";
import InsuranceHowToUse from "@/components/InsuranceHowToUse";
import InsuranceFinancing from "@/components/InsuranceFinancing";
import InsuranceVerifyBanner from "@/components/InsuranceVerifyBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dental Insurance Accepted | Richmond Dental Care — Richmond, TX",
  description:
    "Richmond Dental Care accepts Delta Dental, Cigna, Aetna, MetLife, UnitedHealthcare, Humana, BlueCross BlueShield, Medicare Advantage, Medicaid, and most major PPO plans. Free benefit verification before your visit.",
  keywords:
    "dental insurance Richmond TX, dentist that accepts Delta Dental Richmond TX, Cigna dentist Richmond TX, Aetna dental Richmond TX, MetLife dentist Richmond TX, UnitedHealthcare dentist Richmond TX, Medicare dental Richmond TX, Medicaid dentist Richmond TX, PPO dentist Richmond TX, in-network dentist Richmond TX, dental insurance accepted Richmond, dental coverage Richmond TX, no insurance dentist Richmond TX",
};

export default function InsurancePage() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero — updated H1, verify CTA primary, phone visible */}
      <InsurancePageHero />

      {/* 2. Urgency — year-end benefits banner */}
      <InsuranceUrgencyBanner />

      {/* 3. FAQ — moved up so searchers get instant answers */}
      <InsuranceFAQ />

      {/* 4–8. Supporting sections */}
      <InsurancePlansGrid />
      <InsuranceCoverage />
      <InsuranceHowToUse />
      <InsuranceFinancing />
      <InsuranceVerifyBanner />
      <Footer />

      {/* ── Sticky mobile CTA bar ── */}
      {/* Hidden on lg+ where hero CTAs are always near the top */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[rgba(0,0,0,0.1)] shadow-[0_-4px_20px_rgba(0,0,0,0.12)] px-[16px] py-[12px] flex gap-[10px]">
        <a
          href="tel:+12812380023"
          className="flex-1 btn btn-primary text-[14px] py-[12px] justify-center"
        >
          📞 Call to Verify
        </a>
        <a
          href="/appointment"
          className="flex-1 btn btn-outline-dark text-[14px] py-[12px] justify-center"
        >
          Book Online
        </a>
      </div>

      {/* Bottom padding so sticky bar doesn't overlap footer on mobile */}
      <div className="h-[64px] lg:hidden" />
    </main>
  );
}
