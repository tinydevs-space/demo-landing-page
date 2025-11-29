import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

interface NavLink {
  id: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: NavLink[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "cta", label: "Get Started" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-bg/90 backdrop-blur-md border-b border-primary/10"
        : "bg-transparent border-none"
        }`}
    >
      <div className="container nav-cont mx-auto flex justify-between items-center py-4 sm:py-6 px-4 sm:px-6 md:px-12">
        {/* Logo */}
        <h1 className={`nav-logo text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide transition-colors duration-300 ${scrolled ? "text-primary" : "text-bg drop-shadow-md"
          }`}>
          EverGlow
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={600}
                offset={-80}
                className={`cursor-pointer text-xl font-heading font-semibold transition-colors duration-300 ${scrolled
                  ? "text-text hover:text-primary"
                  : "text-white hover:text-accent"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
