import AftercareTemplate, { AftercareData } from "@/components/AftercareTemplate";

const data: AftercareData = {
  treatmentName: "Tooth Extraction",
  heroImage: "/images/emergency-bg.png",
  heroSubtitle:
    "You did great. Now let's make sure you heal comfortably. Follow these guidelines and you'll be feeling better within a few days.",
  serviceHref: "/services/general-family-dentistry",
  first24Do: [
    "<strong>Bite gently on the gauze pad</strong> for 30–45 minutes to control bleeding.",
    "<strong>Keep your head elevated</strong> — prop it up with an extra pillow when resting.",
    "<strong>Apply an ice pack</strong> to your cheek in 20-minute on/off cycles for the first 4 hours.",
    "<strong>Rest for the day</strong> — avoid any physical exertion.",
    "<strong>Take prescribed pain medication</strong> before the anesthesia fully wears off.",
    "<strong>Drink plenty of cool water</strong> — stay hydrated, but no straws.",
  ],
  first24Avoid: [
    "<strong>Do not rinse or spit forcefully</strong> — this can dislodge the blood clot.",
    "<strong>No straws</strong> — the suction movement disrupts healing.",
    "<strong>No smoking or vaping</strong> — dramatically increases the risk of dry socket.",
    "<strong>Don't touch or probe the socket</strong> with your tongue or fingers.",
    "<strong>No hot foods or drinks</strong> — stick to lukewarm or cool.",
    "<strong>Avoid alcohol</strong> for at least 24 hours.",
  ],
  days2to7Normal: [
    "Mild to moderate soreness, peaking around 48–72 hours then steadily improving.",
    "Some swelling and light bruising on your cheek — this is normal.",
    "A slight bad taste or odor as the socket heals.",
    "Light oozing or pink-tinged saliva on day one.",
    "Difficulty opening your mouth fully for a few days.",
  ],
  days2to7Warning: [
    "<strong>Severe throbbing pain after day 3</strong> — this can signal dry socket.",
    "<strong>Fever above 101°F</strong> — possible sign of infection.",
    "<strong>Swelling that's getting worse, not better, after 72 hours.</strong>",
    "<strong>Pus or discharge</strong> from the extraction site.",
    "<strong>Numbness or tingling</strong> that persists beyond 24 hours.",
  ],
  eatThis: [
    "Yogurt and smoothies (no straw)",
    "Mashed potatoes or sweet potato",
    "Scrambled eggs",
    "Soft cooked rice or oatmeal",
    "Applesauce or pudding",
    "Lukewarm soup (no chunky bits)",
    "Soft banana or avocado",
    "Ice cream (no cone, no straw)",
  ],
  avoidEating: [
    "Hard or crunchy foods (chips, crackers)",
    "Seeds, nuts, or popcorn",
    "Chewy meats or bagels",
    "Hot foods or drinks",
    "Alcohol and carbonated drinks",
    "Spicy foods",
    "Anything that requires forceful chewing",
  ],
  callSymptoms: [
    "Severe throbbing pain that starts 2–4 days after extraction (dry socket)",
    "Fever above 101°F",
    "Swelling that continues to worsen after 72 hours",
    "Persistent bleeding that doesn't slow after 2 hours of pressure",
    "Pus, discharge, or a bad smell from the socket",
    "Allergic reaction to any prescribed medication",
    "Numbness that hasn't resolved after 24 hours",
  ],
};

export default function ToothExtractionAftercare() {
  return <AftercareTemplate data={data} />;
}
