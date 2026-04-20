import AftercareTemplate, { AftercareData } from "@/components/AftercareTemplate";

const data: AftercareData = {
  treatmentName: "Dental Fillings",
  heroImage: "/images/dentist-card.png",
  heroSubtitle:
    "Fillings are one of the most routine procedures in dentistry, and most people feel completely normal within a day or two. Here's what to keep in mind while you settle in.",
  serviceHref: "/services/general-family-dentistry",
  first24Do: [
    "<strong>Wait until the anesthesia fully wears off</strong> before eating — usually 1–3 hours.",
    "<strong>Take OTC pain relievers</strong> if there's any soreness after the numbness fades.",
    "<strong>Chew on the opposite side</strong> from the filling for the first 24 hours.",
    "<strong>Brush and floss normally</strong> — composite (white) fillings are set immediately.",
    "<strong>Pay attention to your bite</strong> — let us know if it feels high or off.",
  ],
  first24Avoid: [
    "<strong>Don't eat while numb</strong> — you could bite your cheek or tongue without realizing it.",
    "<strong>Avoid hard, sticky, or crunchy foods</strong> for the first 24 hours.",
    "<strong>No very hot or very cold foods</strong> — sensitivity is common right after a filling.",
    "<strong>Don't bite nails or chew on pens</strong> — these habits can crack a new filling.",
  ],
  days2to7Normal: [
    "Sensitivity to hot, cold, and pressure for a few days up to 2 weeks — very common.",
    "A slight change in how your bite feels — this usually settles within a few days.",
    "Tenderness around the filled tooth if a deep cavity was involved.",
    "The filled tooth may feel slightly &ldquo;different&rdquo; — your mouth just needs time to adjust.",
  ],
  days2to7Warning: [
    "<strong>Your bite feels noticeably high or off after 2–3 days</strong> — the filling may need adjustment.",
    "<strong>Sharp pain specifically when biting down</strong> on the filled tooth.",
    "<strong>Throbbing pain or pain that keeps you up at night.</strong>",
    "<strong>Filling cracked or fell out</strong> — call us right away.",
    "<strong>Sensitivity that is getting worse, not better, over time.</strong>",
  ],
  eatThis: [
    "Yogurt and soft dairy",
    "Scrambled eggs",
    "Soft pasta and rice",
    "Mashed potatoes",
    "Soft cooked vegetables",
    "Bananas and soft fruits",
    "Soup and broths",
    "Smoothies (with a glass, not a straw)",
  ],
  avoidEating: [
    "Hard candy or ice",
    "Chewy caramels or taffy",
    "Sticky foods (peanut butter, gummy candy)",
    "Very hot or very cold items initially",
    "Crunchy chips or hard crackers",
    "Tough or chewy meats",
    "Biting directly into apples or corn",
  ],
  callSymptoms: [
    "Filling fell out or you can feel a gap where it was",
    "Sharp pain every time you bite down on that specific tooth",
    "Bite feels significantly elevated even after 3 days",
    "Cracked or fractured tooth",
    "Throbbing pain that doesn't respond to OTC pain medication",
    "Sensitivity that worsens over time rather than improving",
  ],
};

export default function DentalFillingsAftercare() {
  return <AftercareTemplate data={data} />;
}
