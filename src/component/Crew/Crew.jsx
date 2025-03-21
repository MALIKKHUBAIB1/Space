import React from "react";
import useFetchData from "../../Utils/hooks/useFetch";
import { Link } from "react-router-dom";

function Crew() {
  const { data: crewData } = useFetchData("https://api.spacexdata.com/v4/crew");

  if (!crewData) {
    return (
      <p className="text-center text-gray-400 mt-10 text-lg">
        🚀 Loading Crew Data...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {crewData.map((crew) => (
          <div key={crew.id} className="overflow-hidden rounded-lg shadow-lg">
            <Link to={crew.id}>
              <img
                src={crew.image}
                alt={crew.name}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crew;
