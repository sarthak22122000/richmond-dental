import AftercareTemplate, { AftercareData } from "@/components/AftercareTemplate";

const data: AftercareData = {
  treatmentName: "Deep Cleaning",
  heroImage: "/images/hero-bg.png",
  heroSubtitle:
    "Scaling and root planing removes the buildup that regular cleanings can't reach. Your gums will be tender for a few days, but you should start noticing real improvement within a week.",
  serviceHref: "/services/general-family-dentistry",
  first24Do: [
    "<strong>Take any prescribed antibiotics or antimicrobial rinse</strong> exactly as directed.",
    "<strong>Take OTC pain relievers</strong> (ibuprofen works especially well as it also reduces inflammation).",
    "<strong>Brush gently</strong> with a soft-bristled toothbrush — your gums need cleaning but also care.",
    "<strong>Rinse gently with warm salt water</strong> 2–3 times a day starting 24 hours after treatment.",
    "<strong>Eat soft, cool foods</strong> today to avoid irritating tender gum tissue.",
  ],
  first24Avoid: [
    "<strong>No smoking or tobacco</strong> — it severely impairs gum healing.",
    "<strong>Avoid very hot foods and drinks</strong> — your gum tissue is sensitive.",
    "<strong>No aggressive flossing or water flosser</strong> on the treated area today.",
    "<strong>Don't skip prescribed medication</strong> — completing the course matters.",
    "<strong>Avoid alcohol</strong> — it can interfere with antibiotics and slow healing.",
  ],
  days2to7Normal: [
    "Gum soreness and sensitivity for 2–5 days after treatment.",
    "Gums may appear to recede slightly as the inflammation reduces — this is healthy, not damage.",
    "Sensitivity to hot, cold, and sweet foods during healing.",
    "Slight bleeding when brushing in the first few days.",
    "Your teeth may look slightly longer as the puffiness subsides — this is a good sign.",
  ],
  days2to7Warning: [
    "<strong>Fever above 100.4°F.</strong>",
    "<strong>Severe throbbing pain that isn't controlled by OTC medication.</strong>",
    "<strong>Swelling that is visibly worsening after 72 hours.</strong>",
    "<strong>A painful lump or abscess forming near the treatment area.</strong>",
    "<strong>Symptoms getting noticeably worse</strong> instead of gradually better.",
  ],
  eatThis: [
    "Yogurt and soft dairy",
    "Scrambled eggs",
    "Soft pasta and rice",
    "Mashed potatoes and sweet potato",
    "Smoothies and protein shakes",
    "Bananas and very soft fruits",
    "Lukewarm soup and broth",
    "Soft cooked vegetables",
  ],
  avoidEating: [
    "Hard or crunchy foods (chips, raw vegetables, crackers)",
    "Spicy foods — they irritate already-sensitive gum tissue",
    "Very hot foods and drinks",
    "Smoking or tobacco products",
    "Alcohol — especially while on antibiotics",
    "Acidic foods (citrus, vinegar) that can sting",
    "Tough or chewy meats",
  ],
  callSymptoms: [
    "Fever above 100.4°F",
    "A visible abscess or painful bump forming on your gum",
    "Severe pain not responding to prescribed or OTC medication",
    "Swelling that is spreading or getting worse after 72 hours",
    "Symptoms are clearly getting worse, not better",
    "Heavy or persistent bleeding from the gums",
  ],
};

export default function DeepCleaningAftercare() {
  return <AftercareTemplate data={data} />;
}
