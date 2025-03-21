import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../Utils/hooks/useFetch";

function LandingPadsDetails() {
  const { id } = useParams();
  const { data: pad, loading } = useFetchData(
    `https://api.spacexdata.com/v3/landpads/${id}`
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400 text-xl">
          🚀 Loading Landing Pad Details...
        </p>
      </div>
    );
  }

  if (!pad) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-xl">❌ Data not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0c10] to-[#1f2833] px-6 py-12 text-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ✅ Left Side - Image Section */}
        <div className="relative rounded-lg shadow-lg">
          <img
            src="https://live.staticflickr.com/65535/52822624215_7c03f127af.jpg"
            alt={pad.full_name}
            className="w-full aspect-[16/16] object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* ✅ Right Side - Details Section */}
        <div className="space-y-6">
          {/* Title */}
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            {pad.full_name}
          </h3>
          {/* Details */}
          <div className="space-y-3">
            {/* Status */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-500">🚀 Status:</span>
              <span
                className={`font-semibold ${
                  pad.status === "active" ? "text-green-400" : "text-red-400"
                }`}
              >
                {pad.status}
              </span>
            </div>

            {/* Landing Type */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-500">🛬 Landing Type:</span>
              <span className="font-semibold text-gray-300">
                {pad.landing_type}
              </span>
            </div>

            {/* Location */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-500">🌍 Location:</span>
              <span className="font-semibold text-gray-300">
                {pad.location.name}, {pad.location.region}
              </span>
            </div>

            {/* Latitude & Longitude */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-500">📍 Coordinates:</span>
              <span className="font-semibold text-gray-300">
                {pad.location.latitude.toFixed(2)}° N,{" "}
                {pad.location.longitude.toFixed(2)}° W
              </span>
            </div>

            {/* Attempted Landings */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-500">🎯 Attempted Landings:</span>
              <span className="font-semibold text-gray-300">
                {pad.attempted_landings}
              </span>
            </div>

            {/* Successful Landings */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-500">🏆 Successful Landings:</span>
              <span className="font-semibold text-gray-300">
                {pad.successful_landings}
              </span>
            </div>

            {/* Details */}
            <div className="text-gray-400 leading-relaxed">{pad.details}</div>
          </div>

          {/* ✅ CTA Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href={pad.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-6 rounded-full transition-all shadow-md"
            >
              🌍 Read on Wikipedia
            </a>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold py-2 px-6 rounded-full transition-all shadow-md"
            >
              ⬅️ Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPadsDetails;
