/**
 * Lazy-loads gallery images only when a project is opened.
 * Uses curated image lists per project (from client Dropbox).
 * TITLE_PIC is used as hero; these are the additional gallery images.
 */

type ImageModule = { default: string };

// Costera - only these images (from Dropbox)
import costera2 from "../assets/COSTERA/costera-night-2.jpg";
import costera5 from "../assets/COSTERA/costera-night-5.jpg";
import costera18 from "../assets/COSTERA/costera-night-18.jpg";
import costera19 from "../assets/COSTERA/costera-night-19.jpg";

// Beity
import beity1 from "../assets/BEITY/Beity_8_19_8489.jpg";
import beity2 from "../assets/BEITY/Beity_9_18_9981.jpg";
import beity3 from "../assets/BEITY/tempImageecI7Ye.png";


// Inkwell - only these images (from Dropbox)
import inkwell1 from "../assets/INKWELL/DSC_7601-2.jpg";
import inkwell2 from "../assets/INKWELL/DSC_7606-1.jpg";
import inkwell3 from "../assets/INKWELL/DSC_7626-1.jpg";
import inkwell4 from "../assets/INKWELL/DSC_7655-1.jpg";
import inkwell5 from "../assets/INKWELL/DSC_7656-1.jpg";

// Pvolve - only these images (from Dropbox)
import pvolve1 from "../assets/PVOLVE/pvolve_sandynoto3.jpg";
import pvolve2 from "../assets/PVOLVE/pvolve_sandynoto4.jpg";
import pvolve3 from "../assets/PVOLVE/pvolve_sandynoto10.jpg";
import pvolve4 from "../assets/PVOLVE/pvolve_sandynoto14.jpg";
import pvolve5 from "../assets/PVOLVE/pvolve_sandynoto20.jpg";

// Speir Pilates - only these images (from Dropbox)
import speir1 from "../assets/SPEIR PILATES/2025-01-30 (1).jpg";
import speir2 from "../assets/SPEIR PILATES/2025-01-30 (4).jpg";
import speir3 from "../assets/SPEIR PILATES/2025-01-30 (5).jpg";
import speir4 from "../assets/SPEIR PILATES/Screenshot 2025-04-09 143109.jpg";

const galleries: Record<string, string[]> = {
  costera: [costera2, costera5, costera18, costera19],
  beity: [beity1, beity2, beity3],
  inkwell: [inkwell1, inkwell2, inkwell3, inkwell4, inkwell5],
  pvolve: [pvolve1, pvolve2, pvolve3, pvolve4, pvolve5],
  "speir-pilates": [speir1, speir2, speir3, speir4],
};

export function loadProjectGallery(projectId: string): Promise<string[]> {
  return Promise.resolve(galleries[projectId] ?? []);
}
