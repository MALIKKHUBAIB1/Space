import React, { useEffect, useState } from "react";

const images = [
  "https://live.staticflickr.com/65535/52822624215_7c03f127af.jpg",
  "https://live.staticflickr.com/65535/52821644502_e19673cb61_z.jpg",
  "https://live.staticflickr.com/65535/52822649093_fceab30ea0.jpg",
  "https://live.staticflickr.com/65535/52822620435_e73b301099.jpg",
];
function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change image every 3 seconds
    console.log("calling");
    return () => clearTimeout(timer);
  }, [imageIndex]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image with Fade Effect */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === imageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Gradient Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              imageIndex === idx ? "bg-blue-500 w-4" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
