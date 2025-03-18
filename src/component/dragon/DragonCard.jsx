import React from "react";
import { Link } from "react-router-dom";

function DragonCard({ dragon }) {
  return (
    <div
      key={dragon.id}
      className="flex flex-col bg-gray-800 text-white shadow-lg border border-gray-700 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 w-[400px]"
    >
      {/* Link Component */}
      <Link to={`/dragons/${dragon.id}`}>
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
            src={dragon.flickr_images[0]}
            alt={dragon.name}
          />
          <div className="absolute bottom-0 bg-black/60 w-full p-2 text-center">
            <span className="text-blue-400 text-sm font-semibold">
              {dragon.type}
            </span>
          </div>
        </div>

        {/* Card Details Section */}
        <div className="p-6 text-center">
          <h4 className="text-2xl font-semibold text-blue-400 mb-2">
            {dragon.name}
          </h4>
          <p className="text-base text-slate-300 mt-2 leading-relaxed line-clamp-3">
            {dragon.description}
          </p>
        </div>
      </Link>

      {/* Additional Info Section */}
      <div className="px-6 py-4 text-slate-400 text-sm grid grid-cols-2 gap-3">
        <div>
          <p>
            <span className="font-semibold text-white">Active:</span>{" "}
            {dragon.active ? "Yes" : "No"}
          </p>
          <p>
            <span className="font-semibold text-white">Crew Capacity:</span>{" "}
            {dragon.crew_capacity}
          </p>
          <p>
            <span className="font-semibold text-white">First Flight:</span>{" "}
            {dragon.first_flight}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold text-white">Orbit Duration:</span>{" "}
            {dragon.orbit_duration_yr} years
          </p>
          <p>
            <span className="font-semibold text-white">Dry Mass (kg):</span>{" "}
            {dragon.dry_mass_kg}
          </p>
          <p>
            <span className="font-semibold text-white">Heat Shield:</span>{" "}
            {dragon.heat_shield.material}
          </p>
        </div>
      </div>

      {/* Thruster Info Section */}
      <div className="px-6 py-4 text-slate-400 text-sm">
        <h5 className="text-blue-400 font-semibold mb-2">Thrusters:</h5>
        {dragon.thrusters.slice(0, 1).map((thruster, index) => (
          <div key={index} className="grid grid-cols-2 gap-2">
            <p>
              <span className="font-semibold text-white">Type:</span>{" "}
              {thruster.type}
            </p>
            <p>
              <span className="font-semibold text-white">Thrust:</span>{" "}
              {thruster.thrust.kN} kN
            </p>
            <p>
              <span className="font-semibold text-white">Fuel:</span>{" "}
              {thruster.fuel_1} + {thruster.fuel_2}
            </p>
          </div>
        ))}
      </div>

      {/* Wikipedia Link */}
      <div className="flex justify-between p-4">
        <a
          href={dragon.wikipedia}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gray-700 py-2 px-6 text-center text-sm text-white font-semibold transition-all shadow-md hover:bg-gray-600"
        >
          Wikipedia
        </a>
      </div>
    </div>
  );
}

export default DragonCard;
