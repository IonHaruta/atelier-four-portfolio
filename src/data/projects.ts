import costeraImg from "@/assets/costera.jpg";
import costera2Img from "@/assets/costera-2.jpg";
import costera3Img from "@/assets/costera-3.jpg";
import beityImg from "@/assets/beity.jpg";
import beity2Img from "@/assets/beity-2.jpg";
import beity3Img from "@/assets/beity-3.jpg";
import pvolveImg from "@/assets/pvolve.jpg";
import pvolve2Img from "@/assets/pvolve-2.jpg";
import pvolve3Img from "@/assets/pvolve-3.jpg";
import speirImg from "@/assets/speir.jpg";
import speir2Img from "@/assets/speir-2.jpg";
import speir3Img from "@/assets/speir-3.jpg";
import inkwellImg from "@/assets/inkwell.jpg";
import inkwell2Img from "@/assets/inkwell-2.jpg";
import inkwell3Img from "@/assets/inkwell-3.jpg";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "costera",
    title: "Costera",
    subtitle: "Restaurant & Lounge",
    description: "Costera Cocina Tulum — Modern Mexican Restaurant and Lounge. The design of Costera captures a vibrant fusion of coastal Mexican tradition and refined lounge culture.",
    image: costeraImg,
    gallery: [costeraImg, costera2Img, costera3Img],
  },
  {
    id: "beity",
    title: "Beity",
    subtitle: "Lebanese Restaurant",
    description: "Lebanese Restaurant — The Arabic translation of \"Beity\" is \"My Home.\" Blending timeless Lebanese tradition with modern design in Chicago's Fulton Market. Warm materials, clean lines, and intimate lighting create an authentic, inviting space that celebrates shared meals and Michelin-starred cuisine.",
    image: beityImg,
    gallery: [beityImg, beity2Img, beity3Img],
  },
  {
    id: "pvolve",
    title: "Pvolve",
    subtitle: "Boutique Fitness",
    description: "Modern and empowering boutique fitness. Pvolve unfolds as a modern wellness retreat, where every surface and shadow is designed to awaken energy, inspire flow, and celebrate the beauty of movement.",
    image: pvolveImg,
    gallery: [pvolveImg, pvolve2Img, pvolve3Img],
  },
  {
    id: "speir-pilates",
    title: "Speir Pilates",
    subtitle: "Pilates Studio",
    description: "A modern California-inspired Pilates studio. The design of Speir Pilates draws from California's relaxed aesthetic, using natural light, warm wood tones, and minimalist elements to create a serene environment that supports mindful movement and well-being.",
    image: speirImg,
    gallery: [speirImg, speir2Img, speir3Img],
  },
  {
    id: "inkwell",
    title: "Inkwell",
    subtitle: "Speakeasy & Bar",
    description: "A hidden speakeasy with the timeless charm of a refined English pub. Inkwell is a tucked-away speakeasy designed with timeless English pub influence — rich wood tones, tufted leather seating, warm ambient lighting, and classic detailing — creating a refined and intimate escape.",
    image: inkwellImg,
    gallery: [inkwellImg, inkwell2Img, inkwell3Img],
  },
];
