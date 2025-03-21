import React, { useEffect, useState } from "react";
import useFetchData from "../../Utils/hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";

function RocketDetailsPage() {
  const [rocketIndex, setRocketIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useFetchData(`https://api.spacexdata.com/v3/rockets/${id}`);

  // ✅ Auto-slide logic
  useEffect(() => {
    if (!data?.flickr_images?.length) return;

    const timer = setInterval(() => {
      setRocketIndex((prev) =>
        prev === data.flickr_images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [data?.flickr_images?.length]);

  if (data.length===0) {
    return (
      <p className="text-center text-gray-400 mt-10 text-lg">
        🚀 Loading Rocket Details...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-6 py-12 text-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Heading */}
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-12">
          🚀 {data.rocket_name} Details 🚀
        </h2>

        {/* ✅ Image + Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ✅ Rocket Image with Animation */}
          <div className="flex justify-center">
            <img
              src={data.flickr_images[rocketIndex]}
              alt={data.rocket_name}
              className="rounded-lg shadow-lg w-full max-h-[500px] object-cover animate-fade-in-out"
            />
          </div>

          {/* ✅ Rocket Basic Details */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              {data.rocket_name} ({data.rocket_type})
            </h3>
            <p className="text-gray-400">{data.description}</p>

            {/* ✅ Additional Info */}
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500">🌍 Country:</span>
                <span className="font-semibold text-gray-300">
                  {data.country}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500">💰 Cost per Launch:</span>
                <span className="font-semibold text-gray-300">
                  ${data.cost_per_launch.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500">✅ Success Rate:</span>
                <span
                  className={`font-semibold ${
                    data.success_rate_pct >= 50
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {data.success_rate_pct}%
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500">📅 First Flight:</span>
                <span className="font-semibold text-gray-300">
                  {data.first_flight}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ First Stage Details */}
        <div className="mt-12 bg-[rgb(21,23,25)] border border-gray-700 rounded-2xl p-6 shadow-lg">
          <h4 className="text-2xl font-semibold text-blue-400 mb-4">
            🚀 First Stage Details
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <p>
              <span className="font-semibold text-gray-500">Reusable:</span>{" "}
              {data.first_stage.reusable ? "Yes" : "No"}
            </p>
            <p>
              <span className="font-semibold text-gray-500">Engines:</span>{" "}
              {data.first_stage.engines}
            </p>
            <p>
              <span className="font-semibold text-gray-500">
                Fuel Amount (Tons):
              </span>{" "}
              {data.first_stage.fuel_amount_tons}
            </p>
            <p>
              <span className="font-semibold text-gray-500">Burn Time:</span>{" "}
              {data.first_stage.burn_time_sec} sec
            </p>
            <p>
              <span className="font-semibold text-gray-500">
                Thrust (Sea Level):
              </span>{" "}
              {data.first_stage.thrust_sea_level.kN} kN
            </p>
          </div>
        </div>

        {/* ✅ Wikipedia Link */}
        <div className="mt-12 flex justify-center">
          <a
            href={data.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 py-3 px-8 text-center text-lg text-white font-semibold transition-all shadow-md hover:bg-blue-700"
          >
            🌍 Read More on Wikipedia
          </a>
        </div>

        {/* ✅ Go Back Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-6 rounded-full transition-all shadow-md"
          >
            ⬅️ Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default RocketDetailsPage;
