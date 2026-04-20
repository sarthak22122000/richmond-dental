import AftercareTemplate, { AftercareData } from "@/components/AftercareTemplate";

const data: AftercareData = {
  treatmentName: "Root Canal",
  heroImage: "/images/dentist-doctor.png",
  heroSubtitle:
    "Some soreness after a root canal is completely normal — you just had a small procedure inside your tooth. Here's how to make the next few days comfortable.",
  serviceHref: "/services/general-family-dentistry",
  first24Do: [
    "<strong>Take OTC pain relievers</strong> (ibuprofen or acetaminophen) as directed before the anesthetic wears off.",
    "<strong>Eat only soft foods</strong> — and chew on the opposite side from the treated tooth.",
    "<strong>Rest and keep your head elevated</strong> if there's any swelling.",
    "<strong>Take any prescribed antibiotics</strong> for the full course, even if you feel better.",
    "<strong>Bite carefully</strong> — a temporary filling or crown is in place and is more fragile than a permanent one.",
  ],
  first24Avoid: [
    "<strong>Don't chew hard foods on the treated side</strong> until your permanent crown is placed.",
    "<strong>Avoid very hot or cold foods and drinks</strong> while the area is still numb.",
    "<strong>Don't bite down hard on the tooth</strong> — the temporary filling can dislodge.",
    "<strong>No smoking or alcohol</strong> — both slow healing and can interfere with medication.",
  ],
  days2to7Normal: [
    "Mild to moderate soreness for 2–5 days — this is your body's natural response.",
    "The tooth may feel slightly different or &ldquo;high&rdquo; when you bite — this usually settles on its own.",
    "Slight tenderness when pressing on the area.",
    "Sensitivity to pressure rather than temperature (usually a good sign that the nerve is gone).",
  ],
  days2to7Warning: [
    "<strong>Severe pain not controlled by OTC medication.</strong>",
    "<strong>Visible swelling spreading to your jaw or face.</strong>",
    "<strong>Fever above 100.4°F.</strong>",
    "<strong>Rash, itching, or difficulty breathing</strong> — possible allergic reaction to medication.",
    "<strong>Temporary filling or crown fell out</strong> — call us right away to avoid contamination.",
  ],
  eatThis: [
    "Soft pasta or rice",
    "Scrambled eggs",
    "Yogurt and smoothies",
    "Bananas and soft fruits",
    "Soft cooked vegetables",
    "Soup and broths",
    "Mashed potatoes",
    "Soft fish or tofu",
  ],
  avoidEating: [
    "Hard candy or ice",
    "Crusty bread or bagels",
    "Chips and raw vegetables",
    "Chewy meats or gummy candy",
    "Anything that requires biting with force",
    "Very hot foods or drinks",
    "Sticky foods that can pull out the temporary filling",
  ],
  callSymptoms: [
    "Severe pain that isn't relieved by prescription or OTC medication",
    "Swelling spreading to your neck or around your eye",
    "Fever above 100.4°F",
    "Signs of allergic reaction: rash, hives, difficulty breathing",
    "Temporary filling or crown fell out",
    "A visible bubble or pimple forming on your gum near the tooth",
  ],
};

export default function RootCanalAftercare() {
  return <AftercareTemplate data={data} />;
}
