import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../Utils/hooks/useFetch";

function CrewDetailsPage() {
  const { id } = useParams();
  const { data } = useFetchData(`https://api.spacexdata.com/v4/crew/${id}`);

  if (data.length===0) {
    return (
      <p className="text-center text-gray-400 mt-10 text-lg">
        🚀 Loading Crew Details...
      </p>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12 text-gray-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* ✅ Left Side - Full Image */}
        <div className="w-full md:w-1/2">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* ✅ Right Side - Crew Details */}
        <div className="w-full md:w-1/2 space-y-4">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white">👨‍🚀 {data.name}</h2>

          {/* Agency */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <span className="text-gray-500">🏢 Agency:</span>
            <span className="font-semibold text-gray-300">{data.agency}</span>
          </div>

          {/* Status */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <span className="text-gray-500">✅ Status:</span>
            <span
              className={`font-semibold ${
                data.status === "active" ? "text-green-400" : "text-red-400"
              }`}
            >
              {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
            </span>
          </div>

          {/* Total Launches */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <span className="text-gray-500">🚀 Total Launches:</span>
            <span className="font-semibold text-gray-300">
              {data.launches.length}
            </span>
          </div>

          {/* ✅ CTA Buttons */}
          <div className="flex gap-4 mt-6">
            {/* Wikipedia Link */}
            {data.wikipedia && (
              <a
                href={data.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-6 rounded-full transition-all shadow-md"
              >
                🌍 Read on Wikipedia
              </a>
            )}

            {/* Go Back Button */}
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

export default CrewDetailsPage;
