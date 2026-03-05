/**
 * Lazy-loads gallery images only when a project is opened.
 * Uses Vite's import.meta.glob for code-splitting - images are fetched when needed.
 */

type ImageModule = { default: string };

const galleryGlobs: Record<string, Record<string, () => Promise<ImageModule>>> = {
  costera: import.meta.glob<ImageModule>("../assets/COSTERA/*.jpg", { eager: false }),
  beity: import.meta.glob<ImageModule>("../assets/BEITY/*.{jpg,png}", { eager: false }),
  pvolve: import.meta.glob<ImageModule>("../assets/PVOLVE/*.jpg", { eager: false }),
  "speir-pilates": import.meta.glob<ImageModule>("../assets/SPEIR PILATES/*.jpg", { eager: false }),
  inkwell: import.meta.glob<ImageModule>("../assets/INKWELL/*.jpg", { eager: false }),
};

export async function loadProjectGallery(projectId: string): Promise<string[]> {
  const modules = galleryGlobs[projectId];
  if (!modules) return [];

  const paths = Object.keys(modules).sort();
  const results = await Promise.all(paths.map((path) => modules[path]()));
  return results.map((m) => m.default);
}
