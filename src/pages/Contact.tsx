import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Set VITE_FORMSPREE_ID in .env with your Formspree form ID (from formspree.io)
      const formId = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORM_ID";
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="flex-1 px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-light text-foreground mb-8"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-sm font-light tracking-wide text-muted-foreground mb-12"
          >
            For inquiries and collaborations, please complete the form below or reach out directly.
          </motion.p>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="font-body bg-background border-border"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="font-body bg-background border-border"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about your project..."
                rows={5}
                className="font-body bg-background border-border resize-none"
              />
            </div>
            {status === "success" && (
              <p className="font-body text-sm text-green-600">
                Thank you! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="font-body text-sm text-red-600">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
            <Button
              type="submit"
              disabled={status === "submitting"}
              variant="outline"
              className="font-body tracking-[0.15em] uppercase"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 mb-12 space-y-3"
          >
            <p className="font-body text-sm font-light text-muted-foreground">
              <span className="uppercase tracking-[0.15em] text-foreground">Email:</span>{" "}
              <a
                href="mailto:info@atelierfourdesign.com"
                className="hover:text-foreground transition-colors"
              >
                info@atelierfourdesign.com
              </a>
            </p>
            <p className="font-body text-sm font-light text-muted-foreground">
              <span className="uppercase tracking-[0.15em] text-foreground">Phone:</span>{" "}
              <a
                href="tel:+17735200500"
                className="hover:text-foreground transition-colors"
              >
                (773) 520-0500
              </a>
            </p>
            <p className="font-body text-sm font-light text-muted-foreground">
              <span className="uppercase tracking-[0.15em] text-foreground">Location:</span> Miami, FL
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="font-body text-sm font-light tracking-wide text-muted-foreground"
          >
            Atelier Four works on hospitality projects across the world.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
