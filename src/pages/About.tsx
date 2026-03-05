import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";

const pillars = [
  {
    title: "Timelessness",
    text: "We do not chase trends. We design with longevity in mind — spaces rooted in proportion, material integrity, and craftsmanship that will endure for decades. Our work is meant to age beautifully, to be lived in, and to be passed down.",
  },
  {
    title: "Uniqueness",
    text: "Every project tells a story. History, context, and culture are never decorative elements — they are the foundation. We design with meaning, weaving narrative into every detail so that each space feels personal, intentional, and impossible to replicate.",
  },
  {
    title: "Functionality",
    text: "Beauty without purpose is incomplete. Every line, every material, and every placement is deliberate. Nothing is an afterthought. A space must not only inspire — it must serve, flow, and support the way it is lived in.",
  },
  {
    title: "Elegance",
    text: "Elegance is restraint. It is balance, proportion, and confidence. It does not demand attention; it earns it quietly.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero image */}
      <section className="pt-24">
        <div className="w-full h-[50vh] md:h-[65vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            src={aboutHero}
            alt="Atelier Four studio"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-light leading-tight text-foreground mb-10"
          >
            Design is an art form before it is a service.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-body text-sm md:text-base font-light leading-relaxed text-muted-foreground"
          >
            <p>
              An atelier is a place where an artist refines their craft — where ideas are studied, layered, and brought to life with intention.
            </p>
            <p>
              The "Four" represents the four pillars that ground every space we create: Timelessness, Uniqueness, Functionality, and Elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4 italic">
                {pillar.title}
              </h3>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fine art background */}
      <section className="px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-sm md:text-base font-light leading-relaxed text-muted-foreground"
          >
            With a background rooted in fine art — painting, drawing, and color theory — our approach is painterly and intuitive yet grounded in discipline and technical precision.
          </motion.p>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-3xl mx-auto border-t border-border pt-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-2xl md:text-3xl font-light leading-relaxed text-foreground italic"
          >
            At Atelier Four, design is crafted, not assembled. It is composed with the same care as a work of art — layered, studied, and created to endure.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
