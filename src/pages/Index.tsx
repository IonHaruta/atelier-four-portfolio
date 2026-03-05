import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-6 md:px-12">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-foreground"
          >
            Designul este creat,
            <br />
            <em className="italic font-light">nu asamblat.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 font-body text-sm md:text-base font-light tracking-wide text-muted-foreground max-w-xl leading-relaxed"
          >
            Interior design studio — Atemporalitate, Unicitate, Funcționalitate și Eleganță.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
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
      </section>

      <Footer />
    </div>
  );
};

export default Index;
