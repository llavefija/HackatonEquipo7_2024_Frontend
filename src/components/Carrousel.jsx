import { useEffect, useState } from "react";

export const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen activa
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Cambia cada 3000 ms (3 segundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images]);

  return (
    <>
      <div className="carousel w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <img src={src} className="w-full" />
          </div>
        ))}
      </div>
    </>
  );
};
