// Card/hero images - TITLE_PIC for main portfolio image per client
// Gallery images are loaded on demand (see loadProjectGallery.ts)
import costeraCard from "@/assets/COSTERA/TITLE_PIC.jpg";
import beityCard from "@/assets/BEITY/Beity_8_19_8489.jpg";
import pvolveCard from "@/assets/PVOLVE/TITLE_PIC.jpg";
import speirCard from "@/assets/SPEIR PILATES/TITLE_PIC.jpg";
import inkwellCard from "@/assets/INKWELL/TITLE_PIC.jpg";

export type ProjectCategory = "restaurants-bars" | "wellness";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: ProjectCategory;
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "restaurants-bars", label: "Restaurants & Bars" },
  { id: "wellness", label: "Wellness" },
];

export const projects: Project[] = [
  {
    id: "costera",
    title: "Costera",
    subtitle: "Restaurant & Lounge",
    description: "Costera Cocina Tulum — Modern Mexican Restaurant and Lounge. The design of Costera captures a vibrant fusion of coastal Mexican tradition and refined lounge culture.",
    image: costeraCard,
    category: "restaurants-bars",
  },
  {
    id: "beity",
    title: "Beity",
    subtitle: "Lebanese Restaurant",
    description: "Lebanese Restaurant — The Arabic translation of \"Beity\" is \"My Home.\" Blending timeless Lebanese tradition with modern design in Chicago's Fulton Market. Warm materials, clean lines, and intimate lighting create an authentic, inviting space that celebrates shared meals and Michelin-starred cuisine.",
    image: beityCard,
    category: "restaurants-bars",
  },
  {
    id: "inkwell",
    title: "Inkwell",
    subtitle: "Speakeasy & Bar",
    description: "A hidden speakeasy with the timeless charm of a refined English pub. Inkwell is a tucked-away speakeasy designed with timeless English pub influence — rich wood tones, tufted leather seating, warm ambient lighting, and classic detailing — creating a refined and intimate escape.",
    image: inkwellCard,
    category: "restaurants-bars",
  },
  {
    id: "pvolve",
    title: "Pvolve",
    subtitle: "Boutique Fitness",
    description: "Modern and empowering boutique fitness. Pvolve unfolds as a modern wellness retreat, where every surface and shadow is designed to awaken energy, inspire flow, and celebrate the beauty of movement.",
    image: pvolveCard,
    category: "wellness",
  },
  {
    id: "speir-pilates",
    title: "Speir Pilates",
    subtitle: "Pilates Studio",
    description: "A modern California-inspired Pilates studio. The design of Speir Pilates draws from California's relaxed aesthetic, using natural light, warm wood tones, and minimalist elements to create a serene environment that supports mindful movement and well-being.",
    image: speirCard,
    category: "wellness",
  },
];
