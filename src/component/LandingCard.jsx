import React from "react";
import useFetechData from "../Utils/hooks/useFetch";

function LandingCard() {
  const { data: spaceXData } = useFetechData(
    "https://api.spacexdata.com/v3/info"
  );

  if (spaceXData.length === 0) {
    return <p className="text-center text-gray-400 mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0c10] to-[#1f2833] px-6 py-12 text-gray-300">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-md">
            🚀 The Quest for a Spacefaring Future 🚀
          </h1>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Elon Musk's Vision Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Elon Musk’s Vision for Humanity
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              "You want to wake up in the morning and think the future is going
              to be great. And that's what being a spacefaring civilization is
              all about."
            </p>
            <p className="text-sm text-gray-500">
              Elon Musk believes humanity must become a multiplanetary species
              to ensure its survival. SpaceX is working on Starship, the most
              powerful rocket ever built, to make interplanetary travel a
              reality.
            </p>
          </div>

          {/* Elon Musk's Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://live.staticflickr.com/65535/52822624215_7c03f127af.jpg"
              alt="Elon Musk Space Vision"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        {/* Mars Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-12">
          {/* Mars Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://live.staticflickr.com/65535/52821644502_e19673cb61_z.jpg"
              alt="Journey to Mars"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Mars Vision Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              The Journey to Mars
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              "Mars is the next step. It’s the only planet we can reach and
              colonize."
            </p>
            <p className="text-sm text-gray-500">
              SpaceX is developing reusable rockets to drastically cut the cost
              of space travel. The goal? To establish a permanent colony on Mars
              and expand humanity beyond Earth.
            </p>
          </div>
        </div>

        {/* SpaceX Company Info */}
        <div className="mt-16 bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-gray-700 rounded-xl p-6 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">
            🛰️ About SpaceX
          </h2>
          <p className="text-sm text-gray-400 mb-4">{spaceXData.summary}</p>

          {/* Company Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-gray-500">🚀 Founder:</span>
              <span className="font-semibold text-gray-300">
                {spaceXData.founder}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-gray-500">🌍 Founded:</span>
              <span className="font-semibold text-gray-300">
                {spaceXData.founded}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-gray-500">👥 Employees:</span>
              <span className="font-semibold text-gray-300">
                {spaceXData.employees}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">🚀 Valuation:</span>
              <span className="font-semibold text-gray-300">
                ${spaceXData.valuation.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-6">
            <a
              href={spaceXData.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 py-2 px-5 text-white text-sm font-semibold transition-all shadow-sm hover:bg-blue-700"
            >
              🌍 Official Website
            </a>
            <a
              href={spaceXData.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-600 py-2 px-5 text-white text-sm font-semibold transition-all shadow-sm hover:bg-gray-700"
            >
              🐦 SpaceX Twitter
            </a>
            <a
              href={spaceXData.links.elon_twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-500 py-2 px-5 text-white text-sm font-semibold transition-all shadow-sm hover:bg-blue-600"
            >
              🚀 Elon Musk Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCard;
