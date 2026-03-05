import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="flex-1 flex items-center px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-light text-foreground mb-8"
          >
            Hai să creăm <em className="italic">împreună.</em>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="font-body text-sm font-light tracking-wide text-muted-foreground">
              Pentru colaborări și proiecte noi:
            </p>
            <a
              href="mailto:hello@atelierfour.com"
              className="font-display text-2xl md:text-3xl font-light text-foreground hover:text-muted-foreground transition-colors duration-300 block"
            >
              hello@atelierfour.com
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
