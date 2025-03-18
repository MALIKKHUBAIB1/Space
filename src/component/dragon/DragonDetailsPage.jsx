import React from "react";
import useFetechData from "../../Utils/hooks/useFetch";
import { useParams } from "react-router-dom";
import DragonImage from "./DragonImage";

function DragonDetailsPage() {
  const { id } = useParams();
  const { data } = useFetechData(`https://api.spacexdata.com/v3/dragons/${id}`);

  if (!data) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl  text-gray-400">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-10">
        🚀 SpaceX Dragon Details 🚀
      </h2>

      {/* Image and Basic Info */}
      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dragon Image */}
          <div className="flex justify-center">
            <DragonImage data={data} />
          </div>

          {/* Dragon Basic Details */}
          <div className="text-gray-300">
            {/* ✅ Gray tone diya */}
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-4">
              {data.name}
            </h3>
            <p className="text-base text-gray-400 leading-relaxed mb-4">
              {data.description}
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-500">🚀 Type:</span>
                <span className="font-semibold text-gray-300">{data.type}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-500">✅ Active:</span>
                <span className="font-semibold text-gray-300">
                  {data.active ? "Yes" : "No"}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span className="text-gray-500">👥 Crew Capacity:</span>
                <span className="font-semibold text-gray-300">
                  {data.crew_capacity}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">🚀 First Flight:</span>
                <span className="font-semibold text-gray-300">
                  {data.first_flight}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Heat Shield Info */}
      {data?.heat_shield && (
        <div className="mt-12 bg-[rgb(21,23,25)] border border-gray-700 rounded-2xl p-6 shadow-lg">
          <h4 className="text-2xl font-semibold text-blue-400 mb-4">
            🔥 Heat Shield Info
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <span className="font-semibold text-gray-500">Material:</span>{" "}
              {data.heat_shield.material}
            </p>
            <p>
              <span className="font-semibold text-gray-500">Size:</span>{" "}
              {data.heat_shield.size_meters} meters
            </p>
            <p>
              <span className="font-semibold text-gray-500">Max Temp:</span>{" "}
              {data.heat_shield.temp_degrees}°C
            </p>
            <p>
              <span className="font-semibold text-gray-500">Developer:</span>{" "}
              {data.heat_shield.dev_partner}
            </p>
          </div>
        </div>
      )}

      {/* Thrusters Info */}
      {data?.thrusters?.length > 0 && (
        <div className="mt-12 bg-[rgb(21,23,25)] border border-gray-700 rounded-2xl p-6 shadow-lg">
          <h4 className="text-2xl font-semibold text-blue-400 mb-4">
            🚀 Thrusters Info
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.thrusters.map((thruster, index) => (
              <div
                key={index}
                className="p-4 border border-gray-700 rounded-xl shadow-md"
              >
                <p>
                  <span className="font-semibold text-gray-500">Type:</span>{" "}
                  {thruster.type}
                </p>
                <p>
                  <span className="font-semibold text-gray-500">Amount:</span>{" "}
                  {thruster.amount}
                </p>
                <p>
                  <span className="font-semibold text-gray-500">Pods:</span>{" "}
                  {thruster.pods}
                </p>
                <p>
                  <span className="font-semibold text-gray-500">Thrust:</span>{" "}
                  {thruster.thrust.kN} kN
                </p>
                <p>
                  <span className="font-semibold text-gray-500">Fuel:</span>{" "}
                  {thruster.fuel_1} + {thruster.fuel_2}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Wikipedia Link */}
      <div className="mt-12 flex justify-center">
        <a
          href={data?.wikipedia}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 py-3 px-8 text-center text-lg text-white font-semibold transition-all shadow-md hover:bg-blue-700"
        >
          🌍 Read More on Wikipedia
        </a>
      </div>
    </div>
  );
}

export default DragonDetailsPage;
