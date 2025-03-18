import React, { useEffect, useState } from "react";

function DragonImage({ data }) {
  const [imageIndex, setDragonIndex] = useState(0);

  useEffect(() => {
    if (!data?.flickr_images?.length) return;
    const timer = setTimeout(() => {
      setDragonIndex((prev) =>
        prev === data?.flickr_images?.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [imageIndex, data?.flickr_images?.length]);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Main Image */}
      {data?.flickr_images?.length > 0 && (
        <img
          src={data?.flickr_images[imageIndex]}
          alt={data?.name}
          className="w-full max-w-[400px] h-[300px] object-cover rounded-md shadow-md"
        />
      )}

      {/* Thumbnails */}
      <div className="mt-4 flex justify-center gap-3">
        {data?.flickr_images?.slice(0, 3).map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`${data?.name} thumbnail`}
            onClick={() => setDragonIndex(i)}
            className={`w-[70px] h-[70px] object-cover rounded-md cursor-pointer transition-transform ${
              imageIndex === i
                ? "border-2 border-blue-400 scale-105"
                : "border border-gray-600 hover:scale-105"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default DragonImage;
