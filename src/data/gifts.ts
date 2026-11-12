export type Category = "süßes" | "salziges" | "getränke" | "sonstiges";

export interface Gift {
  id: string;
  name: string;
  description?: string;
  category: Category;
  priority: 1 | 2 | 3; // 1 = nice to have, 2 = würde ich gerne haben, 3 = sehr gerne
  link?: string;
  image?: string;
}

export const categories: Record<Category, { label: string; emoji: string; color: string }> = {
  süßes: { label: "Süßes", emoji: "🍬", color: "bg-pink-100 text-pink-800" },
  salziges: { label: "Salziges", emoji: "🧂", color: "bg-amber-100 text-amber-800" },
  getränke: { label: "Getränke", emoji: "🥤", color: "bg-blue-100 text-blue-800" },
  sonstiges: { label: "Sonstiges", emoji: "🎁", color: "bg-purple-100 text-purple-800" },
};

export const gifts: Gift[] = [
  {
    id: "pringles-ketchup",
    name: "Pringles Ketchup",
    description: "Die klassischen Pringles in Ketchup – absoluter Favorit.",
    category: "salziges",
    priority: 3,
    link: "https://www.amazon.de/s?k=Pringles+Ketchup",
  },
  {
    id: "flying-power-aldi",
    name: "Flying Power (Aldi)",
    description: "Der Energy Drink von Aldi – günstig und lecker.",
    category: "getränke",
    priority: 3,
    link: "https://www.aldi-sued.de/de/p.flying-power-energy-drink.490000000000411601.html",
  },
  {
    id: "haribo-goldbaren",
    name: "Haribo Goldbären",
    description: "Die Originalen – geht immer.",
    category: "süßes",
    priority: 2,
    link: "https://www.amazon.de/s?k=Haribo+Goldb%C3%A4ren",
  },
  {
    id: "lays-paprika",
    name: "Lay's Paprika",
    description: "Paprika Chips, die süchtig machen.",
    category: "salziges",
    priority: 2,
    link: "https://www.amazon.de/s?k=Lays+Paprika",
  },
  {
    id: "monster-ultra",
    name: "Monster Ultra White",
    description: "Der leichtere Monster – weniger Kalorien, voller Geschmack.",
    category: "getränke",
    priority: 2,
    link: "https://www.amazon.de/s?k=Monster+Ultra+White",
  },
  {
    id: "milka-oreo",
    name: "Milka Oreo Schokolade",
    description: "Schokolade mit Oreo-Stückchen – Perfektion.",
    category: "süßes",
    priority: 3,
    link: "https://www.amazon.de/s?k=Milka+Oreo",
  },
  {
    id: "tortilla-chips-nacho",
    name: "Doritos Nacho Cheese",
    description: "Tortilla Chips mit Nacho Cheese – zum Snacken.",
    category: "salziges",
    priority: 2,
    link: "https://www.amazon.de/s?k=Doritos+Nacho+Cheese",
  },
  {
    id: "redbull",
    name: "Red Bull (Original)",
    description: "Der Klassiker unter den Energy Drinks.",
    category: "getränke",
    priority: 1,
    link: "https://www.amazon.de/s?k=Red+Bull+Original",
  },
];
