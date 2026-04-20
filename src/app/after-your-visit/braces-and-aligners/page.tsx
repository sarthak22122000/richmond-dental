import AftercareTemplate, { AftercareData } from "@/components/AftercareTemplate";

const data: AftercareData = {
  treatmentName: "Braces & Aligners",
  heroImage: "/images/dentists-main.png",
  heroSubtitle:
    "A little soreness after getting braces or starting a new aligner tray is your teeth responding to the pressure. It means it's working. Here's how to get through the first week comfortably.",
  serviceHref: "/services/general-family-dentistry",
  first24Do: [
    "<strong>Take OTC pain relievers</strong> (ibuprofen or acetaminophen) as directed if you're experiencing soreness.",
    "<strong>Rinse with warm salt water</strong> — it soothes irritated gum tissue.",
    "<strong>Use orthodontic wax</strong> on any bracket or wire that's irritating the inside of your cheek.",
    "<strong>Wear your aligners for 20–22 hours per day</strong> — only remove them to eat and brush.",
    "<strong>Eat soft foods</strong> for the first 2–3 days while you adjust.",
    "<strong>Keep up with your oral hygiene</strong> — braces trap food, so brush after every meal.",
  ],
  first24Avoid: [
    "<strong>Avoid hard, sticky, or crunchy foods</strong> — they can break brackets or wires.",
    "<strong>Don't chew on pens, nails, or ice</strong> — these put unintended pressure on brackets.",
    "<strong>Don't remove your aligners more than necessary</strong> — treatment depends on consistent wear.",
    "<strong>No chewing gum</strong> — it sticks to brackets and is nearly impossible to clean off.",
  ],
  days2to7Normal: [
    "Soreness and pressure on the teeth — especially the first 3–4 days after placement or a new tray.",
    "Teeth may feel slightly loose — this is normal and expected during active tooth movement.",
    "Cheek and lip irritation from brackets as your mouth adjusts.",
    "A new aligner tray may feel tight at first and then loosen as movement progresses.",
    "Slight lisp with new aligners — this typically resolves within a few days.",
  ],
  days2to7Warning: [
    "<strong>A wire is poking your cheek and orthodontic wax isn't holding it.</strong>",
    "<strong>A bracket has broken off or feels loose.</strong>",
    "<strong>Your aligner is cracked or doesn't seat fully on your teeth.</strong>",
    "<strong>Sharp pain localized to one specific tooth</strong> — different from general soreness.",
    "<strong>Significant swelling or a sore that isn't healing.</strong>",
  ],
  eatThis: [
    "Soft pasta and rice",
    "Yogurt and smoothies",
    "Mashed potatoes",
    "Scrambled eggs",
    "Soup and soft cooked vegetables",
    "Bananas and soft fruits",
    "Soft cheese",
    "Pancakes or soft bread",
  ],
  avoidEating: [
    "Popcorn — kernels get under brackets",
    "Hard candy and lollipops",
    "Ice — never chew it",
    "Caramel, taffy, or gummy candy",
    "Bagels and hard rolls",
    "Corn on the cob",
    "Chips and pretzels",
    "Chewy or tough meats",
  ],
  callSymptoms: [
    "A wire is poking into your cheek or gum that you can't relieve with wax",
    "A bracket broke off or came loose",
    "Your aligner has a crack or won't seat properly over your teeth",
    "Unusual pain in one specific tooth that's separate from general adjustment soreness",
    "A sore or ulcer in your mouth that isn't healing after 7–10 days",
  ],
};

export default function BracesAlignersAftercare() {
  return <AftercareTemplate data={data} />;
}
