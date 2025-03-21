import React from "react";

function PayLoadsItem({payload}) {
  return (
    <div
      className="bg-[#1c1c28] rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
    >
      {/* ✅ Header */}
      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <h3 className="text-white text-xl font-bold truncate">
          {payload.payload_id}
        </h3>
        <p className="text-gray-200 text-sm">
          {payload.payload_type} · {payload.orbit}
        </p>
      </div>

      {/* ✅ Details */}
      <div className="p-6">
        {/* Manufacturer and Nationality */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm">
            🏢 Manufacturer:{" "}
            <span className="text-white">{payload.manufacturer}</span>
          </p>
          <p className="text-gray-400 text-sm">
            🌍 Nationality:{" "}
            <span className="text-white">{payload.nationality}</span>
          </p>
        </div>

        {/* Customers */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm">
            👥 Customers:{" "}
            <span className="text-white">{payload.customers.join(", ")}</span>
          </p>
        </div>

        {/* Mass Details */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-sm">
              🚀 Mass (kg):{" "}
              <span className="text-white">
                {payload.payload_mass_kg || "N/A"}
              </span>
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              🚀 Mass (lbs):{" "}
              <span className="text-white">
                {payload.payload_mass_lbs || "N/A"}
              </span>
            </p>
          </div>
        </div>

        {/* Orbit Details */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-sm">
              🌍 Periapsis (km):{" "}
              <span className="text-white">
                {payload.orbit_params.periapsis_km || "N/A"}
              </span>
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              🌎 Apoapsis (km):{" "}
              <span className="text-white">
                {payload.orbit_params.apoapsis_km || "N/A"}
              </span>
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              🔄 Inclination (deg):{" "}
              <span className="text-white">
                {payload.orbit_params.inclination_deg || "N/A"}
              </span>
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              🔥 Lifespan (years):{" "}
              <span className="text-white">
                {payload.orbit_params.lifespan_years || "N/A"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Footer */}
      <div className="p-4 border-t border-gray-700 bg-[#12131A]">
        <p className="text-gray-400 text-sm">
          🔄 Reused:{" "}
          <span
            className={`${payload.reused ? "text-green-400" : "text-red-400"}`}
          >
            {payload.reused ? "Yes" : "No"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default PayLoadsItem;
