import { useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { loadProjectGallery } from "@/data/loadProjectGallery";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [gallery, setGallery] = useState<string[]>([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null || gallery.length === 0) return;
    setLightboxIndex((lightboxIndex + 1) % gallery.length);
  }, [lightboxIndex, gallery.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null || gallery.length === 0) return;
    setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
  }, [lightboxIndex, gallery.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!id) return;
    setGalleryLoading(true);
    loadProjectGallery(id)
      .then((images) => setGallery(images))
      .finally(() => setGalleryLoading(false));
  }, [id]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  if (!project) return <Navigate to="/" replace />;

  const displayGallery =
    gallery.length > 0
      ? [project.image, ...gallery.filter((url) => url !== project.image)]
      : [project.image];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero image - shows immediately (card image), gallery loads in background */}
      <section className="pt-24">
        <div className="w-full overflow-hidden cursor-pointer" onClick={() => openLightbox(0)}>
          <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              src={project.image}
              alt={project.title}
              className="w-full h-[55vh] md:h-[75vh] object-cover"
            />
        </div>
      </section>

      {/* Info */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {project.subtitle}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="font-display text-5xl md:text-7xl font-light text-foreground mt-3 mb-8">
            {project.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="font-body text-sm md:text-base font-light leading-relaxed text-muted-foreground max-w-2xl">
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      {displayGallery.length > 1 && (
        <section className="px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {displayGallery.slice(1).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i + 1)}
              >
                <img
                  src={img}
                  alt={`${project.title} — detail ${i + 2}`}
                  className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {galleryLoading && (
        <section className="px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full aspect-[16/10] bg-muted animate-pulse rounded-sm" />
            ))}
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && displayGallery[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10">
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={displayGallery[lightboxIndex]}
              alt={`${project.title} — ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs tracking-[0.2em] text-white/50">
              {lightboxIndex + 1} / {displayGallery.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
