import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSlideshow from "@/components/HomeSlideshow";
import { slideshowImages } from "@/data/slideshowImages";

const Index = () => {
  useEffect(() => {
    const links = slideshowImages.slice(0, 4).map((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
      return link;
    });
    return () => links.forEach((link) => link.remove());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Minimal hero - logo only in header, full-width slideshow below */}
      <section className="pt-20">
        <HomeSlideshow images={slideshowImages} />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
