import React from "react";

export default function GalleryFilter({
  categories,
  filters,
  selectedCategory,
  setSelectedCategory,
  selectedFilter,
  setSelectedFilter,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-6">
      {/* Buscar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar fotos..."
          className="w-full pl-3 pr-3 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categorías */}
      <div>
        <h4 className="font-semibold mb-3 text-gray-700">Categorías</h4>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition
                ${selectedCategory === c.id ? "bg-orange-600 text-white" : "hover:bg-orange-50"}`}
            >
              <span>{c.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded ${selectedCategory === c.id ? "bg-white/20" : "bg-gray-100"}`}
              >
                {c.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Filtros */}
      <div>
        <h4 className="font-semibold mb-3 flex items-center text-gray-700">Filtros</h4>
        <div className="space-y-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition
                ${selectedFilter === f.id ? "bg-orange-100 text-orange-700" : "hover:bg-orange-50"}`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
