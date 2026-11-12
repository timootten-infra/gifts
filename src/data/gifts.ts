export type Category = "süßes" | "salziges" | "getränke" | "sonstiges";

export interface Gift {
  id: string;
  name: string;
  description?: string;
  category: Category;
  priority: 1 | 2 | 3;
  link?: string;
  /**
   * Produktbild von Open Food Facts (openfoodfacts.org).
   * Lizenz: Creative Commons Attribution-ShareAlike (CC BY-SA 3.0 / 4.0)
   * Quelle: https://world.openfoodfacts.org
   */
  image?: string;
}

export const categories: Record<Category, { label: string; emoji: string; darkColor: string }> = {
  süßes:     { label: "Süßes",     emoji: "🍬", darkColor: "bg-pink-900/40 text-pink-300" },
  salziges:  { label: "Salziges",  emoji: "🧂", darkColor: "bg-amber-900/40 text-amber-300" },
  getränke:  { label: "Getränke",  emoji: "🥤", darkColor: "bg-blue-900/40 text-blue-300" },
  sonstiges: { label: "Sonstiges", emoji: "🎁", darkColor: "bg-purple-900/40 text-purple-300" },
};

export const gifts: Gift[] = [
  {
    id: "pringles-ketchup",
    name: "Pringles Ketchup",
    description: "Die klassischen Pringles in Ketchup – absoluter Favorit.",
    category: "salziges",
    priority: 3,
    link: "https://www.amazon.de/s?k=Pringles+Ketchup",
    image: "https://images.openfoodfacts.org/images/products/505/399/010/1566/front_fr.65.400.jpg",
  },
  {
    id: "flying-power-aldi",
    name: "Flying Power (Aldi)",
    description: "Der Energy Drink von Aldi – günstig und lecker.",
    category: "getränke",
    priority: 3,
    link: "https://www.aldi-sued.de/de/p.flying-power-energy-drink.490000000000411601.html",
    image: "https://images.openfoodfacts.org/images/products/406/145/920/1673/front_en.3.400.jpg",
  },
  {
    id: "haribo-goldbaren",
    name: "Haribo Goldbären",
    description: "Die Originalen – geht immer.",
    category: "süßes",
    priority: 2,
    link: "https://www.amazon.de/s?k=Haribo+Goldb%C3%A4ren",
    image: "https://images.openfoodfacts.org/images/products/400/168/630/1784/front_fr.24.400.jpg",
  },
  {
    id: "lays-paprika",
    name: "Lay's Paprika",
    description: "Paprika Chips, die süchtig machen.",
    category: "salziges",
    priority: 2,
    link: "https://www.amazon.de/s?k=Lays+Paprika",
    image: "https://images.openfoodfacts.org/images/products/406/213/900/7677/front_de.23.400.jpg",
  },
  {
    id: "monster-ultra",
    name: "Monster Ultra White",
    description: "Der leichtere Monster – weniger Kalorien, voller Geschmack.",
    category: "getränke",
    priority: 2,
    link: "https://www.amazon.de/s?k=Monster+Ultra+White",
    image: "https://images.openfoodfacts.org/images/products/506/033/750/0982/front_en.36.400.jpg",
  },
  {
    id: "milka-oreo",
    name: "Milka Oreo Schokolade",
    description: "Schokolade mit Oreo-Stückchen – Perfektion.",
    category: "süßes",
    priority: 3,
    link: "https://www.amazon.de/s?k=Milka+Oreo",
    image: "https://images.openfoodfacts.org/images/products/762/230/065/0353/front_fr.38.400.jpg",
  },
  {
    id: "tortilla-chips-nacho",
    name: "Doritos Nacho Cheese",
    description: "Tortilla Chips mit Nacho Cheese – zum Snacken.",
    category: "salziges",
    priority: 2,
    link: "https://www.amazon.de/s?k=Doritos+Nacho+Cheese",
    image: "https://images.openfoodfacts.org/images/products/002/840/008/7926/front_en.3.400.jpg",
  },
  {
    id: "redbull",
    name: "Red Bull (Original)",
    description: "Der Klassiker unter den Energy Drinks.",
    category: "getränke",
    priority: 1,
    link: "https://www.amazon.de/s?k=Red+Bull+Original",
    image: "https://images.openfoodfacts.org/images/products/900/249/010/0070/front_en.245.400.jpg",
  },
];
