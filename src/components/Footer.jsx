import React from "react";

export default function Footer() {
  return (
    <footer className="bg-orange-50 py-10 px-10 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold">FC Club Deportivo</h3>
          <p className="text-sm text-gray-600">Revive los mejores momentos de nuestro equipo a través de nuestra galería oficial.</p>
        </div>

        <div>
          <h3 className="font-bold">Navegación</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Inicio</li>
            <li>Historia</li>
            <li>Noticias</li>
            <li>Galería</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Contacto</h3>
          <p className="text-sm text-gray-600">
            Estadio Municipal <br />
            Calle del Deporte, 123 <br />
            Tel: +34 900 123 456 <br />
            info@clubdeportivo.com
          </p>
        </div>

        <div>
          <h3 className="font-bold">Créditos</h3>
          <p className="text-sm text-gray-600">
            Fotografía: Juan Martín <br />
            Video: Media Sports <br />
            Diseño: Club Deportivo
          </p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-10">
        © 2024 Club Deportivo. Todos los derechos reservados.
      </p>
    </footer>
  );
}
