import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-500 text-center text-white py-20">
      <h1 className="text-4xl font-bold mb-4">Galería Oficial del Club</h1>
      <p className="text-lg mb-6">Revive los mejores momentos de nuestro equipo</p>
      <button className="px-6 py-2 bg-orange-600 rounded hover:bg-orange-700 transition">
        Explorar Galería
      </button>
    </section>
  );
}

