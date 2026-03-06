const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-end">
        <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Atelier Four. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
