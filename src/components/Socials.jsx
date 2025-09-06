import React

from "react";
const redes = [
  { id: "IG", name: "Instagram", user: "@clubdeportivo" },
  { id: "TW", name: "Twitter", user: "@clubdeportivo" },
  { id: "YT", name: "YouTube", user: "Club Deportivo TV" },
  { id: "TK", name: "TikTok", user: "@clubdeportivo" },
];

export default function Socials() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-2xl font-bold mb-10">Síguenos en Redes Sociales</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
        {redes.map((r) => (
          <div key={r.id} className="p-6 rounded-lg bg-orange-50 text-center shadow">
            <span className="text-orange-600 font-bold text-xl">{r.id}</span>
            <h3 className="font-bold">{r.name}</h3>
            <p className="text-gray-500">{r.user}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
