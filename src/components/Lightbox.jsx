import React from "react";

export default function Lightbox({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full px-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl font-bold"
        >
          ✕
        </button>

        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            autoPlay
            className="w-full max-h-[80vh] rounded-lg shadow-lg"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
          />
        )}

        <p className="text-white text-center mt-4">{item.title}</p>
      </div>
    </div>
  );
}
