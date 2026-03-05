const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-display text-xl font-light tracking-wider text-foreground">
          Atelier Four
        </p>
        <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Atelier Four. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
