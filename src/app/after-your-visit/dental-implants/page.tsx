import AftercareTemplate, { AftercareData } from "@/components/AftercareTemplate";

const data: AftercareData = {
  treatmentName: "Dental Implants",
  heroImage: "/images/services-main.png",
  heroSubtitle:
    "Your implant surgery went well. The next two weeks are the most important for osseointegration — how the implant fuses to your jawbone. Take it easy and follow these steps.",
  serviceHref: "/services/general-family-dentistry",
  first24Do: [
    "<strong>Rest with your head elevated</strong> for the remainder of the day.",
    "<strong>Apply an ice pack</strong> to your cheek — 15 minutes on, 15 minutes off for the first 4–6 hours.",
    "<strong>Take all prescribed medications</strong> exactly as directed — do not skip doses.",
    "<strong>Eat only very soft, cool foods</strong> on the day of surgery.",
    "<strong>Rinse gently with warm salt water</strong> starting 24 hours after surgery (not before).",
    "<strong>Keep the area clean</strong> but avoid brushing directly on the surgical site today.",
  ],
  first24Avoid: [
    "<strong>No rinsing or spitting</strong> for the first 24 hours — you'll disturb the clot.",
    "<strong>No smoking, vaping, or tobacco</strong> — the single biggest risk factor for implant failure.",
    "<strong>Avoid using straws</strong> — suction disrupts healing.",
    "<strong>No strenuous exercise</strong> — physical exertion raises blood pressure and increases bleeding.",
    "<strong>Don't touch or probe</strong> the surgical site with your tongue or fingers.",
    "<strong>Avoid hot foods and drinks</strong> on the day of surgery.",
  ],
  days2to7Normal: [
    "Swelling and bruising on your cheek and jaw, peaking at 48–72 hours then gradually decreasing.",
    "Some light bleeding or oozing on the first day.",
    "Mild to moderate discomfort managed well with prescribed medication.",
    "Slight stiffness in your jaw — this typically improves by day 5.",
    "The surgical site may look a little white or yellowish as it heals — this is fibrin, not infection.",
  ],
  days2to7Warning: [
    "<strong>Implant feels loose or moves when you touch it.</strong>",
    "<strong>Fever above 101°F.</strong>",
    "<strong>Severe pain that worsens beyond day 3.</strong>",
    "<strong>Swelling that spreads or gets significantly worse after 72 hours.</strong>",
    "<strong>Persistent heavy bleeding that doesn't stop with gentle pressure.</strong>",
    "<strong>Numbness or tingling that persists beyond 48 hours.</strong>",
  ],
  eatThis: [
    "Protein shakes and nutritional supplements",
    "Yogurt and soft cheese",
    "Scrambled eggs",
    "Mashed sweet potato or cauliflower",
    "Soft cooked fish",
    "Pudding and ice cream (no straw)",
    "Applesauce and soft bananas",
    "Soup and broths (lukewarm, not hot)",
  ],
  avoidEating: [
    "Anything hard, crunchy, or chewy",
    "Seeds or small grains that can get into the site",
    "Spicy or acidic foods",
    "Very hot foods or drinks",
    "Alcohol — interferes with healing and medications",
    "Straws for any beverage",
    "Tough meats or fibrous vegetables",
  ],
  callSymptoms: [
    "The implant feels loose or you can move it",
    "Fever above 101°F",
    "Severe pain that is worsening, not improving, after 72 hours",
    "Swelling spreading to your neck or eye area",
    "Excessive or persistent bleeding beyond the first day",
    "Implant or abutment has come out completely",
    "Signs of infection: increasing pain, pus, bad taste or smell",
  ],
};

export default function DentalImplantsAftercare() {
  return <AftercareTemplate data={data} />;
}
