import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";

const pillars = [
  {
    title: "Atemporalitate",
    text: "Nu urmărim tendințele. Proiectăm cu gândul la durabilitate — spații bazate pe proporție, integritatea materialelor și măiestria execuției care vor rezista zeci de ani.",
  },
  {
    title: "Unicitate",
    text: "Fiecare proiect spune o poveste. Istoria, contextul și cultura nu sunt elemente decorative — ele sunt fundamentul. Proiectăm cu sens, integrând narațiunea în fiecare detaliu.",
  },
  {
    title: "Funcționalitate",
    text: "Frumusețea fără scop este incompletă. Fiecare linie, fiecare material și fiecare amplasare sunt deliberate. Un spațiu nu trebuie doar să inspire — trebuie să funcționeze.",
  },
  {
    title: "Eleganță",
    text: "Eleganța înseamnă reținere. Este echilibru, proporție și încredere. Nu cere atenție; o câștigă în mod discret.",
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
            Designul este mai întâi o formă de artă și abia apoi un serviciu.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-body text-sm md:text-base font-light leading-relaxed text-muted-foreground"
          >
            <p>
              Un atelier este un loc unde un artist își rafinează meșteșugul — unde ideile sunt studiate, stratificate și aduse la viață cu intenție.
            </p>
            <p>
              „Four" reprezintă cei patru piloni care stau la baza fiecărui spațiu pe care îl creăm: Atemporalitate, Unicitate, Funcționalitate și Eleganță.
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
            La Atelier Four, designul este compus cu aceeași grijă ca o operă de artă — stratificat, studiat și realizat pentru a dura.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
