import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Inicio", "Historia", "Noticias", "Galería", "Contacto"];

  return (
    <nav
      className={`sticky top-0 z-50 px-10 py-4 shadow-sm transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
            FC
          </div>
          <div>
            <h1 className="font-bold">Club Deportivo</h1>
            <p className="text-sm text-gray-500">Galería Oficial</p>
          </div>
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              {item === "Galería" ? (
                <NavLink
                  to="/galería"
                  className="text-orange-600 font-semibold"
                >
                  {item}
                </NavLink>
              ) : (
                <span className="text-gray-400 cursor-not-allowed">{item}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
