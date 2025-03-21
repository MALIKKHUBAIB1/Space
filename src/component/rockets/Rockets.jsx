import React from "react";
import { useNavigate } from "react-router-dom";
import useFetchData from "../../Utils/hooks/useFetch";

function Rockets() {
  const { data: rocketsData } = useFetchData(
    "https://api.spacexdata.com/v3/rockets"
  );
  const navigate = useNavigate();

  if (!rocketsData) {
    return (
      <p className="text-center text-gray-400 mt-10 text-lg">
        🚀 Loading Rockets...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-6 py-12 text-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Heading */}
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-12">
          🚀 SpaceX Rockets 🚀
        </h2>

        {/* ✅ Rocket List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rocketsData.map((rocket) => (
            <div
              key={rocket.id}
              onClick={() => navigate(`/rockets/${rocket.rocket_id}`)}
              className="cursor-pointer bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {/* ✅ Rocket Image */}
              <img
                src={rocket.flickr_images[0]}
                alt={rocket.rocket_name}
                className="w-full h-60 object-cover"
              />

              {/* ✅ Rocket Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {rocket.rocket_name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {rocket.description.slice(0, 100)}...
                </p>

                {/* ✅ Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">🌍 Country:</span>
                    <span className="block font-semibold text-gray-300">
                      {rocket.country}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">💰 Cost/Launch:</span>
                    <span className="block font-semibold text-gray-300">
                      ${rocket.cost_per_launch.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">🚀 Success Rate:</span>
                    <span
                      className={`block font-semibold ${
                        rocket.success_rate_pct >= 50
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {rocket.success_rate_pct}%
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">📅 First Flight:</span>
                    <span className="block font-semibold text-gray-300">
                      {rocket.first_flight}
                    </span>
                  </div>
                </div>

                {/* ✅ CTA Button */}
                <div className="mt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all">
                    🔍 View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rockets;
