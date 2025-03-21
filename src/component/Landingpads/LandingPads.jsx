import React from "react";
import useFetchData from "../../Utils/hooks/useFetch";
import { Link } from "react-router-dom";
import LandingPadsItems from "./LandingPadsItems";

function LandingPads() {
  const { data: landingData } = useFetchData(
    "https://api.spacexdata.com/v3/landpads"
  );

  if (!landingData.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400 text-xl">🚀 Loading Landing Pads...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0c10] to-[#1f2833] px-6 py-12 text-gray-300">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-md">
            🚀 SpaceX Landing Pads 🚀
          </h1>
          <p className="text-gray-400 mt-2">
            A look at the incredible landing pads used for Falcon rocket
            landings.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingData.map((pad) => (
            <Link key={pad.id} to={`/landingpads/${pad.id}`}>
              <LandingPadsItems pad={pad} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPads;
