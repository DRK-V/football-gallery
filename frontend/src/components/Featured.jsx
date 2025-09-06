import React, { useState } from "react";

const destacados = [
  {
    id: 1,
    type: "image",
    src: "/img/football-match-celebration-goal.jpg",
    titulo: "Gol de la Victoria – Final Liga 2024",
    desc: "Juan Pérez anota el gol decisivo en el minuto 89",
    tag: "Partidos",
    likes: 234,
  },
  {
    id: 2,
    type: "image",
    src: "/img/football-training-session-players.jpg",
    titulo: "Entrenamiento Matutino",
    desc: "Preparación para el próximo partido",
    tag: "Entrenamientos",
    likes: 89,
  },
  {
    id: 3,
    type: "video",
    src: "/videos/700_F_95326106_luXBbZS4XBTn0d6EXJDS2aFVOtVjG9Ns_ST.mp4",
    titulo: "La Hinchada en Acción",
    desc: "Ambiente espectacular en el estadio",
    tag: "Afición",
    likes: 456,
  },
];

export default function Featured() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="px-10 py-16 relative">
      <h2 className="text-2xl font-bold text-center mb-10">
        Momentos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destacados.map((item) => (
          <div
            key={item.id}
            className="bg-orange-50 rounded-lg shadow overflow-hidden"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.titulo}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setSelectedItem(item)}
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setSelectedItem(item)}
                muted
              />
            )}
            <div className="p-4">
              <h3 className="font-bold">{item.titulo}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs px-2 py-1 bg-orange-500 text-white rounded">
                  {item.tag}
                </span>
                <span className="text-gray-500 text-sm">❤️ {item.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para imagen o video */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="relative">
            {/* Botón cerrar */}
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 shadow z-50"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.titulo}
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
