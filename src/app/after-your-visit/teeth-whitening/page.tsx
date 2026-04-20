import AftercareTemplate, { AftercareData } from "@/components/AftercareTemplate";

const data: AftercareData = {
  treatmentName: "Teeth Whitening",
  heroImage: "/images/office.png",
  heroSubtitle:
    "Your enamel is slightly more porous right after whitening, which means the next 48 hours determine how long your results last. The &ldquo;White Diet&rdquo; is your best friend right now.",
  serviceHref: "/services/general-family-dentistry",
  first24Do: [
    "<strong>Follow the White Diet strictly for 48 hours</strong> — only white and light-colored foods and drinks.",
    "<strong>Drink water</strong> — it's the safest beverage for the next two days.",
    "<strong>Use a sensitivity toothpaste</strong> (like Sensodyne) if you experience any tooth sensitivity.",
    "<strong>Brush gently</strong> with a soft-bristled toothbrush.",
    "<strong>Keep follow-up tray wear sessions</strong> as instructed if you received take-home trays.",
  ],
  first24Avoid: [
    "<strong>No coffee, tea, or red wine</strong> — these are the biggest culprits for re-staining.",
    "<strong>No dark sodas, juices, or sports drinks.</strong>",
    "<strong>No berries, tomatoes, or dark sauces.</strong>",
    "<strong>No smoking or tobacco</strong> — this will stain your teeth immediately.",
    "<strong>Avoid very hot or very cold foods</strong> if you're experiencing sensitivity.",
    "<strong>No acidic foods</strong> (citrus, vinegar-based dressings) — they can worsen sensitivity.",
  ],
  days2to7Normal: [
    "Tooth sensitivity to temperature or sweet foods for 24–72 hours — very common.",
    "Slight gum sensitivity if tray whitening was used — resolves within 48 hours.",
    "Teeth may look slightly uneven at first — this evens out as hydration returns.",
    "Some people experience &ldquo;zingers&rdquo; — brief, sharp sensitivity spikes — for 1–2 days.",
  ],
  days2to7Warning: [
    "<strong>Sensitivity that is severe and continues past 5–7 days without improvement.</strong>",
    "<strong>White patches or spots on your gums</strong> — a sign of tissue irritation from the bleaching gel.",
    "<strong>Significant gum irritation or blistering.</strong>",
    "<strong>Sensitivity that makes eating or drinking difficult</strong> beyond 3 days.",
  ],
  eatThis: [
    "White chicken or turkey breast",
    "White fish (cod, tilapia, halibut)",
    "White rice and plain pasta",
    "Cauliflower and white mushrooms",
    "Bananas and white peaches",
    "White cheese and plain yogurt",
    "Milk and water",
    "Eggs (scrambled or boiled)",
  ],
  avoidEating: [
    "Coffee and tea (any color)",
    "Red wine and dark beers",
    "Berries and dark-colored fruits",
    "Tomato sauce and ketchup",
    "Soy sauce, teriyaki, and curry",
    "Dark sodas and sports drinks",
    "Mustard and balsamic vinegar",
    "Chocolate and dark candy",
  ],
  callSymptoms: [
    "Severe tooth sensitivity lasting more than 7 days",
    "White patches on your gums that don't resolve within 48 hours",
    "Significant gum blistering or sores",
    "Pain that makes eating or sleeping difficult",
    "Sensitivity that seems to be getting worse rather than better",
  ],
};

export default function TeethWhiteningAftercare() {
  return <AftercareTemplate data={data} />;
}
