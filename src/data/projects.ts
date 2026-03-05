import costeraImg from "@/assets/costera.jpg";
import beityImg from "@/assets/beity.jpg";
import pvolveImg from "@/assets/pvolve.jpg";
import speirImg from "@/assets/speir.jpg";
import inkwellImg from "@/assets/inkwell.jpg";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "costera",
    title: "Costera",
    subtitle: "Restaurant & Lounge",
    description: "Costera Cocina Tulum – Restaurant și lounge mexican modern. Designul Costera surprinde o fuziune vibrantă între tradiția mexicană de coastă și cultura rafinată a lounge-urilor.",
    image: costeraImg,
  },
  {
    id: "beity",
    title: "Beity",
    subtitle: "Restaurant Libanez",
    description: "Restaurant libanez \u2014 traducerea arab\u0103 a cuv\u00e2ntului \u201eBeity\u201d este \u201eCasa mea\u201d. \u00cembin\u00e2nd tradi\u021bia libanez\u0103 atemporal\u0103 cu designul modern din zona Fulton Market din Chicago.",
    image: beityImg,
  },
  {
    id: "pvolve",
    title: "Pvolve",
    subtitle: "Fitness Boutique",
    description: "Fitness boutique modern și motivant. Pvolve se desfășoară ca un refugiu modern de wellness, unde fiecare suprafață și fiecare joc de lumină este conceput pentru a trezi energia.",
    image: pvolveImg,
  },
  {
    id: "speir-pilates",
    title: "Speir Pilates",
    subtitle: "Studio Pilates",
    description: "Un studio Pilates modern inspirat de stilul californian. Designul Speir Pilates se inspiră din estetica relaxată a Californiei, folosind lumină naturală, tonuri calde de lemn și elemente minimaliste.",
    image: speirImg,
  },
  {
    id: "inkwell",
    title: "Inkwell",
    subtitle: "Speakeasy & Bar",
    description: "Un speakeasy ascuns, cu farmecul atemporal al unui pub englez rafinat. Inkwell este un speakeasy retras, proiectat cu influențe clasice de pub englezesc.",
    image: inkwellImg,
  },
];
