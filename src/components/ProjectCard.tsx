import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  index: number;
}

const ProjectCard = ({ id, title, subtitle, image, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <Link to={`/project/${id}`} className="group block">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="mt-5 flex items-baseline justify-between">
          <h3 className="font-display text-2xl md:text-3xl font-light text-foreground">
            {title}
          </h3>
          <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
            {subtitle}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
