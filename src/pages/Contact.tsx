import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";

    try {
      const response = await fetch(`${apiUrl}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
          email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
        }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const errData = await response.json().catch(() => ({}));
        console.error("Contact API error:", response.status, errData);
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form failed:", err);
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
            {t("contact.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-sm font-light tracking-wide text-muted-foreground mb-12"
          >
            {t("contact.intro")}
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
                {t("contact.name")}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t("contact.namePlaceholder")}
                className="font-body bg-background border-border"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                {t("contact.email")}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("contact.emailPlaceholder")}
                className="font-body bg-background border-border"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                {t("contact.message")}
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder={t("contact.messagePlaceholder")}
                rows={5}
                className="font-body bg-background border-border resize-none"
              />
            </div>
            {status === "success" && (
              <p className="font-body text-sm text-green-600">
                {t("contact.success")}
              </p>
            )}
            {status === "error" && (
              <p className="font-body text-sm text-red-600">
                {t("contact.error")}
              </p>
            )}
            <Button
              type="submit"
              disabled={status === "submitting"}
              variant="outline"
              className="font-body tracking-[0.15em] uppercase"
            >
              {status === "submitting" ? t("contact.sending") : t("contact.send")}
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
              <span className="uppercase tracking-[0.15em] text-foreground">{t("contact.emailLabel")}:</span>{" "}
              <a
                href="mailto:info@atelierfourdesign.com"
                className="hover:text-foreground transition-colors"
              >
                info@atelierfourdesign.com
              </a>
            </p>
            <p className="font-body text-sm font-light text-muted-foreground">
              <span className="uppercase tracking-[0.15em] text-foreground">{t("contact.phoneLabel")}:</span>{" "}
              <a
                href="tel:+17735200500"
                className="hover:text-foreground transition-colors"
              >
                (773) 520-0500
              </a>
            </p>
            <p className="font-body text-sm font-light text-muted-foreground">
              <span className="uppercase tracking-[0.15em] text-foreground">{t("contact.locationLabel")}:</span> Miami, FL
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="font-body text-sm font-light tracking-wide text-muted-foreground"
          >
            {t("contact.hospitality")}
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
