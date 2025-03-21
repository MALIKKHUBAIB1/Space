import React from "react";
import useFetchData from "../../Utils/hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Ships() {
  const { data: shipsData } = useFetchData(
    "https://api.spacexdata.com/v3/ships"
  );
  const navigate = useNavigate();

  if (!shipsData) {
    return (
      <p className="text-center text-gray-400 mt-10 text-lg">
        🚢 Loading Ships...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Heading */}
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-12">
          🚢 SpaceX Ships 🚢
        </h2>

        {/* ✅ Ships Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shipsData.map((ship) => (
            <div
              key={ship.ship_id}
              className="bg-[rgba(21,23,25,0.8)] border border-gray-700 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl"
              onClick={() => navigate(`/ships/${ship.ship_id}`)}
            >
              {/* ✅ Ship Image */}
              {/* {ship.image && ( */}
              <img
                src={
                  !ship.image ? "https://i.imgur.com/jmj8Sh2.jpeg" : ship.image
                }
                alt={ship.ship_name}
                className="w-full h-56 object-cover"
              />
              {/* )} */}

              {/* ✅ Ship Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-blue-400">
                  {ship.ship_name}
                </h3>
                <p className="text-gray-400">
                  <span className="font-semibold">Type:</span> {ship.ship_type}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Roles:</span>{" "}
                  {ship.roles.join(", ")}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Home Port:</span>{" "}
                  {ship.home_port || "N/A"}
                </p>
                <p
                  className={`${
                    ship.active ? "text-green-400" : "text-red-400"
                  } font-semibold`}
                >
                  {ship.active ? "🟢 Active" : "🔴 Inactive"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ships;
