// src/pages/Gallery.jsx
import React, { useState, useMemo, useRef, useEffect } from "react";
import { Heart, Share2, Download } from "lucide-react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Socials from "../components/Socials";
import GalleryFilter from "../components/GalleryFilter";


export default function Gallery() {
  const defaultPoster = "/img/default-poster.jpg"; // fallback si falla el poster

  const categories = [
    { id: "todos", name: "Todos", count: 156 },
    { id: "partidos", name: "Partidos", count: 45 },
    { id: "entrenamientos", name: "Entrenamientos", count: 32 },
    { id: "aficion", name: "Afición", count: 28 },
    { id: "eventos", name: "Eventos Especiales", count: 25 },
    { id: "trofeos", name: "Trofeos", count: 26 },
  ];

  const filters = [
    { id: "todos", name: "Todos" },
    { id: "2024", name: "Temporada 2024" },
    { id: "2023", name: "Temporada 2023" },
    { id: "liga", name: "Liga Nacional" },
    { id: "copa", name: "Copa del Rey" },
  ];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/img/football-match-celebration-goal.jpg",
      title: "Gol de la Victoria - Final Liga 2024",
      description: "Juan Pérez anota el gol decisivo en el minuto 89",
      category: "partidos",
      filter: "2024",
      likes: 234,
      date: "2024-05-15",
    },
    {
      id: 2,
      type: "image",
      src: "/img/football-training-session-players.jpg",
      title: "Entrenamiento Matutino",
      description: "Preparación para el próximo partido",
      category: "entrenamientos",
      filter: "2024",
      likes: 89,
      date: "2024-05-10",
    },
   {
  id: 3,
  type: "video",
  src: "/videos/700_F_95326106_luXBbZS4XBTn0d6EXJDS2aFVOtVjG9Ns_ST.mp4",
  titulo: "La Hinchada en Acción",
  desc: "Ambiente espectacular en el estadio",
  tag: "aficion",
  likes: 456,
  poster: "/img/football-training-session-players.jpg" // miniatura del video
},
    {
      id: 4,
      type: "image",
      src: "/img/football-training-session-players.jpg",
      title: "Levantando la Copa",
      description: "Momento histórico del campeonato",
      category: "trofeos",
      filter: "2024",
      likes: 789,
      date: "2024-05-20",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const modalVideoRef = useRef(null);

  // Filtrado ajustado para videos e imágenes
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const byCategory =
        selectedCategory === "todos" ||
        (item.type === "video" ? item.tag === selectedCategory : item.category === selectedCategory);
      const byFilter = selectedFilter === "todos" || item.filter === selectedFilter;
      const bySearch =
        ((item.title || item.titulo)?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        ((item.description || item.desc)?.toLowerCase().includes(searchTerm.toLowerCase()));
      return byCategory && byFilter && bySearch;
    });
  }, [galleryItems, selectedCategory, selectedFilter, searchTerm]);

  const closeModal = () => {
    if (modalVideoRef.current) {
      try {
        modalVideoRef.current.pause();
        modalVideoRef.current.currentTime = 0;
      } catch (e) {}
    }
    setSelectedItem(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <Hero />
      <Featured />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <GalleryFilter
              categories={categories}
              filters={filters}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <main className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">
                  {selectedCategory === "todos"
                    ? "Toda la Galería"
                    : categories.find((c) => c.id === selectedCategory)?.name}
                </h3>
                <p className="text-gray-500 text-sm">{filteredItems.length} elementos</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm group cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative">
                      {item.type === "video" ? (
                        <img
                          src={item.poster || defaultPoster}
                          alt={item.titulo}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform rounded-md"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = defaultPoster;
                          }}
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform rounded-md"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = defaultPoster;
                          }}
                        />
                      )}

                      {item.type === "video" && (
                        <span className="absolute right-3 top-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/60 text-white text-sm">
                          ▶
                        </span>
                      )}

                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4 text-white">
                        <h4 className="font-bold text-sm">{item.title || item.titulo}</h4>
                        <p className="text-xs mb-2">{item.description || item.desc}</p>
                        <div className="flex gap-3 text-white">
                          <button className="hover:text-red-500" aria-label="Me gusta">
                            <Heart size={18} />
                          </button>
                          <button className="hover:text-blue-400" aria-label="Compartir">
                            <Share2 size={18} />
                          </button>
                          <a href={item.src} download className="hover:text-green-400" aria-label="Descargar">
                            <Download size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      <Socials />

      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={closeModal}>
          <div
            className="relative bg-white rounded-xl shadow-lg p-4 max-w-3xl w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full px-3 py-1 shadow hover:bg-red-600 z-50"
              onClick={closeModal}
            >
              ✕
            </button>

            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
              />
            ) : (
              <video
                ref={modalVideoRef}
                src={selectedItem.src}
                controls
                autoPlay
                poster={selectedItem.poster || defaultPoster}
                className="max-h-[80vh] max-w-[90vw] rounded-lg"
              />
            )}

            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{selectedItem.titulo || selectedItem.title}</h3>
              <p className="text-gray-600 text-sm">{selectedItem.desc || selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
