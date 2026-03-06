import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HomeSlideshowProps {
  images: string[];
  interval?: number;
}

const HomeSlideshow = ({ images, interval = 5000 }: HomeSlideshowProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-[calc(100vh-120px)] min-h-[400px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: 1,
            scale: 1.08,
          }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{
            opacity: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: interval / 1000, ease: "linear" },
          }}
          className="absolute inset-0 origin-center"
        >
          <img
            src={images[index]}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-foreground" : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeSlideshow;
