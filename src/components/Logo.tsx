import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="hover:opacity-80 transition-opacity block">
      <img
        src={logoImg}
        alt="Atelier Four"
        className="h-10 md:h-12 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
