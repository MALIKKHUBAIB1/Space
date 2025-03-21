import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../../Utils/hooks/useFetch";

function ShipDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: ship } = useFetchData(
    `https://api.spacexdata.com/v3/ships/${id}`
  );

  if (!ship) {
    return (
      <p className="text-center text-gray-400 mt-10 text-lg">
        🚢 Loading Ship Details...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-6 py-12 text-gray-300">
      <div className="max-w-5xl mx-auto">
        {/* ✅ Heading */}
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-12">
          🚢 {ship.ship_name} Details 🚢
        </h2>

        {/* ✅ Image + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ✅ Ship Image */}
          {/* {ship.image && ( */}
          <div className="relative">
            <img
              src={
                !ship.image ? "https://i.imgur.com/jmj8Sh2.jpeg" : ship.image
              }
              alt={ship.ship_name}
              className="rounded-lg shadow-lg w-full max-h-[400px] object-cover animate-fade-in-out"
            />
          </div>
          {/* )} */}

          {/* ✅ Ship Basic Details */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              {ship.ship_name} ({ship.ship_type || "N/A"})
            </h3>
            <p className="text-gray-400">
              {ship.status ? `Status: ${ship.status}` : "Status: Unknown"}
            </p>

            {/* ✅ Additional Info */}
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500">⚓ Home Port:</span>
                <span className="font-semibold text-gray-300">
                  {ship.home_port || "N/A"}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500">📅 Year Built:</span>
                <span className="font-semibold text-gray-300">
                  {ship.year_built || "N/A"}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500">🏆 Successful Landings:</span>
                <span
                  className={`font-semibold ${
                    ship.successful_landings ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {ship.successful_landings || "N/A"}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500">🚀 Attempted Landings:</span>
                <span className="font-semibold text-gray-300">
                  {ship.attempted_landings || "N/A"}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500">🚢 IMO:</span>
                <span className="font-semibold text-gray-300">
                  {ship.imo || "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Mission Details */}
        {ship.missions?.length > 0 && (
          <div className="mt-12 bg-[rgb(21,23,25)] border border-gray-700 rounded-2xl p-6 shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-400 mb-4">
              🚀 Missions
            </h4>
            {ship.missions.map((mission) => (
              <div
                key={mission.flight}
                className="flex justify-between border-b border-gray-700 pb-2"
              >
                <span className="text-gray-500">{mission.name}</span>
                <span className="font-semibold text-gray-300">
                  Flight {mission.flight}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ✅ Position Details */}
        {ship.position?.latitude && ship.position?.longitude ? (
          <div className="mt-12 bg-[rgb(21,23,25)] border border-gray-700 rounded-2xl p-6 shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-400 mb-4">
              📍 Current Position
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-500">🌍 Latitude:</span>
                <span className="block font-semibold text-gray-300">
                  {ship.position.latitude}
                </span>
              </div>
              <div>
                <span className="text-gray-500">🌍 Longitude:</span>
                <span className="block font-semibold text-gray-300">
                  {ship.position.longitude}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-6 text-center text-gray-500">
            🌍 Position data not available
          </p>
        )}

        {/* ✅ External Link */}
        {ship.url && (
          <div className="mt-12 flex justify-center">
            <a
              href={ship.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 py-3 px-8 text-center text-lg text-white font-semibold transition-all shadow-md hover:bg-blue-700"
            >
              🌍 View More
            </a>
          </div>
        )}

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

export default ShipDetailsPage;
