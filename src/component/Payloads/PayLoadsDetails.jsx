import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../Utils/hooks/useFetch";

function PayLoadsDetails() {
  const { id } = useParams(); // ✅ Get ID from URL params
  const { data: payloadData } = useFetchData(
    `https://api.spacexdata.com/v3/payloads/${id}`
  );

  if (payloadData.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10 text-lg">
        🚀 Loading Payload Details...
      </p>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* ✅ Header */}
      <div className="bg-[#12131A] rounded-xl shadow-lg border border-gray-700 overflow-hidden">
        <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 flex justify-between items-center">
          <div>
            <h2 className="text-white text-4xl font-extrabold mb-1">
              {payloadData.payload_id}
            </h2>
            <p className="text-gray-300 text-sm">
              {payloadData.payload_type} · {payloadData.orbit}
            </p>
          </div>
          <div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                payloadData.reused
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {payloadData.reused ? "Reused" : "New"}
            </span>
          </div>
        </div>

        {/* ✅ Content Section */}
        <div className="p-8 space-y-8">
          {/* 🚀 General Info */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-4">
                🏷️ General Info
              </h3>
              <div className="space-y-2">
                <p className="text-gray-400">
                  👥 Customers:{" "}
                  <span className="text-white">
                    {payloadData.customers.join(", ") || "N/A"}
                  </span>
                </p>
                <p className="text-gray-400">
                  🏢 Manufacturer:{" "}
                  <span className="text-white">
                    {payloadData.manufacturer || "N/A"}
                  </span>
                </p>
                <p className="text-gray-400">
                  🌍 Nationality:{" "}
                  <span className="text-white">
                    {payloadData.nationality || "N/A"}
                  </span>
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-4">
                🚀 Mass Info
              </h3>
              <div className="space-y-2">
                <p className="text-gray-400">
                  💪 Payload Mass (kg):{" "}
                  <span className="text-white">
                    {payloadData.payload_mass_kg || "N/A"}
                  </span>
                </p>
                <p className="text-gray-400">
                  🏋️ Payload Mass (lbs):{" "}
                  <span className="text-white">
                    {payloadData.payload_mass_lbs || "N/A"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* 🌍 Orbit Info */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-4">
                🌍 Orbit Info
              </h3>
              <div className="space-y-2">
                <p className="text-gray-400">
                  🛰️ Orbit:{" "}
                  <span className="text-white">
                    {payloadData.orbit || "N/A"}
                  </span>
                </p>
                <p className="text-gray-400">
                  🔄 Reference System:{" "}
                  <span className="text-white">
                    {payloadData.orbit_params?.reference_system || "N/A"}
                  </span>
                </p>
                <p className="text-gray-400">
                  🚀 Regime:{" "}
                  <span className="text-white">
                    {payloadData.orbit_params?.regime || "N/A"}
                  </span>
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-4">
                🌌 Positioning
              </h3>
              <div className="space-y-2">
                <p className="text-gray-400">
                  📍 Periapsis (km):{" "}
                  <span className="text-white">
                    {payloadData.orbit_params?.periapsis_km || "N/A"}
                  </span>
                </p>
                <p className="text-gray-400">
                  🌎 Apoapsis (km):{" "}
                  <span className="text-white">
                    {payloadData.orbit_params?.apoapsis_km || "N/A"}
                  </span>
                </p>
                <p className="text-gray-400">
                  🔄 Inclination (deg):{" "}
                  <span className="text-white">
                    {payloadData.orbit_params?.inclination_deg || "N/A"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Footer */}
        <div className="p-6 border-t border-gray-700 bg-[#1c1c28]">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">
              🚀 Payload Type:{" "}
              <span className="text-white">{payloadData.payload_type}</span>
            </p>
            <a
              href={`https://en.wikipedia.org/wiki/${payloadData.payload_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 text-sm font-medium transition duration-200"
            >
              🔗 Wikipedia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayLoadsDetails;
