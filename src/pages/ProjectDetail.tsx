import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero image */}
      <section className="pt-24">
        <div className="w-full overflow-hidden">
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
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground"
          >
            {project.subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl font-light text-foreground mt-3 mb-8"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body text-sm md:text-base font-light leading-relaxed text-muted-foreground max-w-2xl"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.gallery.slice(1).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="overflow-hidden"
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

      <Footer />
    </div>
  );
};

export default ProjectDetail;
