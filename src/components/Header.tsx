import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "@/components/Logo";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
] as const;

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", labelKey: "nav.home" },
    { to: "/portfolio", labelKey: "nav.portfolio" },
    { to: "/about", labelKey: "nav.about" },
    { to: "/contact", labelKey: "nav.contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <div className="flex gap-2 ml-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`font-body text-xs tracking-wider uppercase px-2 py-1 transition-colors ${
                  i18n.language === lang.code
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-sm tracking-[0.15em] uppercase ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <div className="flex gap-3 pt-4 border-t border-border">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { i18n.changeLanguage(lang.code); setMenuOpen(false); }}
                className={`font-body text-sm uppercase ${
                  i18n.language === lang.code ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
