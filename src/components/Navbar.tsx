// Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
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
        {["Inicio", "Historia", "Noticias", "Galería", "Contacto"].map((item) => (
          <li key={item}>
            <NavLink
              to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 font-semibold"
                  : "text-gray-600 hover:text-orange-600"
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

