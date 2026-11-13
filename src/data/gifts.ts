import imgPringlesKetchup from "../assets/gifts/pringles-ketchup.jpg";
import imgFlyingPowerAldi from "../assets/gifts/flying-power-aldi.jpg";
import imgRedbull from "../assets/gifts/redbull.jpg";
import imgMonsterMangoLoco from "../assets/gifts/monster-mango-loco.jpg";
import imgKrombacherSpezi from "../assets/gifts/krombacher-spezi.jpg";
import imgCocaCola from "../assets/gifts/coca-cola.jpg";
import imgLiptonEistee from "../assets/gifts/lipton-eistee-zitrone.jpg";
import imgMioMate from "../assets/gifts/mio-mio-mate.jpg";
import imgNimm2Softies from "../assets/gifts/nimm2-lachgummi-softies.jpg";
import imgNimm2Brause from "../assets/gifts/nimm2-soft-brause.jpg";
import imgNimm2Plop from "../assets/gifts/nimm2-plop.jpg";
import imgMonsterRedApple from "../assets/gifts/monster-red-apple.jpg";
import imgFunnyFrischBakedBbq from "../assets/gifts/funny-frisch-baked-bbq.jpg";
import imgPomBaerKetchup from "../assets/gifts/pombar-ketchup.jpg";

export type Category = "süßes" | "salziges" | "getränke" | "sonstiges";

export interface Gift {
  id: string;
  name: string;
  description?: string;
  category: Category;
  priority: 1 | 2 | 3;
  link?: string;
  /**
   * Lokal gehostetes Produktbild von Open Food Facts (openfoodfacts.org).
   * Lizenz: Creative Commons Attribution-ShareAlike (CC BY-SA 3.0 / 4.0)
   * Quelle: https://world.openfoodfacts.org
   */
  image?: ImageMetadata;
}

export const categories: Record<Category, { label: string; emoji: string; darkColor: string }> = {
  süßes:     { label: "Süßes",     emoji: "🍬", darkColor: "bg-pink-900/40 text-pink-300" },
  salziges:  { label: "Salziges",  emoji: "🧂", darkColor: "bg-amber-900/40 text-amber-300" },
  getränke:  { label: "Getränke",  emoji: "🥤", darkColor: "bg-blue-900/40 text-blue-300" },
  sonstiges: { label: "Sonstiges", emoji: "🎁", darkColor: "bg-purple-900/40 text-purple-300" },
};

export const gifts: Gift[] = [
  {
    id: "flying-power-aldi",
    name: "Flying Power Energy",
    description: "Der Energy Drink von Aldi – günstig und lecker.",
    category: "getränke",
    priority: 3,
    link: "https://www.aldi-sued.de/de/p.flying-power-energy-drink.490000000000411601.html",
    image: imgFlyingPowerAldi,
  },
  {
    id: "redbull",
    name: "Red Bull (Original)",
    description: "Der Klassiker unter den Energy Drinks.",
    category: "getränke",
    priority: 3,
    link: "https://www.amazon.de/s?k=Red+Bull+Original",
    image: imgRedbull,
  },
  {
    id: "monster-mango-loco",
    name: "Monster Mango Loco",
    description: "Fruchtig-exotischer Monster mit Mango.",
    category: "getränke",
    priority: 3,
    link: "https://www.amazon.de/s?k=Monster+Mango+Loco",
    image: imgMonsterMangoLoco,
  },
  {
    id: "monster-red-apple",
    name: "Monster Red Apple",
    description: "Monster mit Apfelgeschmack.",
    category: "getränke",
    priority: 3,
    link: "https://www.amazon.de/s?k=Monster+Red+Apple",
    image: imgMonsterRedApple,
  },
  {
    id: "krombacher-spezi",
    name: "Krombacher Spezi",
    description: "Cola-Orange-Mix – immer eine gute Wahl.",
    category: "getränke",
    priority: 3,
    link: "https://www.amazon.de/s?k=Krombacher+Spezi",
    image: imgKrombacherSpezi,
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Der Klassiker.",
    category: "getränke",
    priority: 2,
    link: "https://www.amazon.de/s?k=Coca+Cola",
    image: imgCocaCola,
  },
  {
    id: "eistee-zitrone",
    name: "Eistee Zitrone",
    description: "Erfrischender Eistee mit Zitrone.",
    category: "getränke",
    priority: 2,
    link: "https://www.amazon.de/s?k=Lipton+Ice+Tea+Zitrone",
    image: imgLiptonEistee,
  },
  {
    id: "mio-mio-mate",
    name: "Mio Mio Mate",
    description: "Mate-Limonade für zwischendurch.",
    category: "getränke",
    priority: 1,
    link: "https://www.amazon.de/s?k=Mio+Mio+Mate",
    image: imgMioMate,
  },
  {
    id: "funny-frisch-baked-bbq",
    name: "Funny-Frisch Baked BBQ",
    description: "Gebackene Chips mit BBQ-Geschmack.",
    category: "salziges",
    priority: 3,
    link: "https://www.amazon.de/s?k=funny-frisch+Baked+BBQ",
    image: imgFunnyFrischBakedBbq,
  },
  {
    id: "pringles-ketchup",
    name: "Pringles Ketchup",
    description: "Die klassischen Pringles in Ketchup – absoluter Favorit.",
    category: "salziges",
    priority: 3,
    link: "https://www.amazon.de/s?k=Pringles+Ketchup",
    image: imgPringlesKetchup,
  },
  {
    id: "pombaren-ketchup",
    name: "Pom-Bär Ketchup",
    description: "Knusprige Bärchen mit Ketchup-Geschmack.",
    category: "salziges",
    priority: 2,
    link: "https://www.amazon.de/s?k=Pom-B%C3%A4r+Ketchup",
    image: imgPomBaerKetchup,
  },
  {
    id: "nimm2-lachgummi-softies",
    name: "nimm2 Lachgummi Softies Joghurt",
    description: "Weiche Joghurt-Lachgummis, saftig & gefüllt.",
    category: "süßes",
    priority: 3,
    link: "https://www.amazon.de/s?k=nimm2+Lachgummi+Softies+Joghurt",
    image: imgNimm2Softies,
  },
  {
    id: "nimm2-plop",
    name: "nimm2 mit dem Plop",
    description: "Fruchtbonbons mit dem Plop in der Mitte.",
    category: "süßes",
    priority: 2,
    link: "https://www.amazon.de/s?k=nimm2+Plop",
    image: imgNimm2Plop,
  },
  {
    id: "nimm2-brause",
    name: "nimm2 mit Brause",
    description: "Soft-Bonbons mit Brause.",
    category: "süßes",
    priority: 2,
    link: "https://www.amazon.de/s?k=nimm2+Soft+Brause",
    image: imgNimm2Brause,
  },
];
