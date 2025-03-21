import React from "react";

function LandingPadsItems({pad}) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-gray-700 rounded-lg shadow-md p-6 transition-all hover:scale-105 hover:shadow-lg">
      {/* Title and Status */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-400">{pad.full_name}</h2>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            pad.status === "active"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {pad.status.toUpperCase()}
        </span>
      </div>

      {/* Location */}
      <div className="mb-3">
        <p className="text-sm text-gray-400">
          📍 Location:{" "}
          <span className="font-semibold text-gray-300">
            {pad.location.name}, {pad.location.region}
          </span>
        </p>
        <p className="text-sm text-gray-400">
          🌐 Coordinates:{" "}
          <span className="font-semibold text-gray-300">
            {pad.location.latitude.toFixed(2)}° N,{" "}
            {pad.location.longitude.toFixed(2)}° W
          </span>
        </p>
      </div>

      {/* Landing Type */}
      <div className="mb-3">
        <p className="text-sm text-gray-400">
          🛬 Landing Type:{" "}
          <span className="font-semibold text-gray-300">
            {pad.landing_type}
          </span>
        </p>
      </div>

      {/* Attempted and Successful Landings */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">🎯 Attempts:</span>
          <span className="text-gray-300 font-semibold">
            {pad.attempted_landings}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">🏆 Successful:</span>
          <span className="text-gray-300 font-semibold">
            {pad.successful_landings}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">
        {pad.details.length > 120
          ? `${pad.details.substring(0, 120)}...`
          : pad.details}
      </p>

      {/* Wikipedia Link */}
      <div className="flex justify-center">
        <a
          href={pad.wikipedia}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-5 rounded-full transition-all"
        >
          🌍 Read More
        </a>
      </div>
    </div>
  );
}

export default LandingPadsItems;
