import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectCategories } from "@/data/projects";

const Portfolio = () => {
  useEffect(() => {
    const links = projects.slice(0, 4).map((p) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = p.image;
      document.head.appendChild(link);
      return link;
    });
    return () => links.forEach((link) => link.remove());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page title */}
      <section className="pt-32 pb-12 md:pb-16 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-light text-foreground"
        >
          Portfolio
        </motion.h1>
      </section>

      {/* Projects by category */}
      <section className="px-6 md:px-12 pb-24">
        {projectCategories.map((category) => {
          const categoryProjects = projects.filter((p) => p.category === category.id);
          if (categoryProjects.length === 0) return null;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <h2 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
                {category.label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {categoryProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    subtitle={project.subtitle}
                    image={project.image}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
