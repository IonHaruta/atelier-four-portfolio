import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pillarKeys = ["timelessness", "uniqueness", "functionality", "elegance"] as const;

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Intro */}
      <section className="px-6 md:px-12 pt-32 pb-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-light leading-tight text-foreground mb-10"
          >
            {t("about.hero")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-body text-sm md:text-base font-light leading-relaxed text-muted-foreground"
          >
            <p>{t("about.intro1")}</p>
            <p>{t("about.intro2")}</p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {pillarKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4 italic">
                {t(`about.pillars.${key}.title`)}
              </h3>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                {t(`about.pillars.${key}.text`)}
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
            {t("about.closing")}
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
