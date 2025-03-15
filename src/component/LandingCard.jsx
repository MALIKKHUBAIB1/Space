import React from "react";

function LandingCard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center">
        The Quest for a Spacefaring Future
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* First Card - Elon Musk's Vision */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 flex flex-col items-center transition-transform transform hover:scale-105">
          <img
            src="https://live.staticflickr.com/65535/52822624215_7c03f127af.jpg"
            alt="Elon Musk Space Vision"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Elon Musk’s Vision for Humanity
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            "You want to wake up in the morning and think the future is going to
            be great. And that's what being a spacefaring civilization is all
            about."
          </p>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-center">
            Elon Musk believes humanity must become a multiplanetary species to
            ensure its survival. SpaceX is working on Starship, the most
            powerful rocket ever built, to make interplanetary travel a reality.
          </p>
        </div>

        {/* Second Card - Space Exploration */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 flex flex-col items-center transition-transform transform hover:scale-105">
          <img
            src="https://live.staticflickr.com/65535/52821644502_e19673cb61_z.jpg"
            alt="Journey to Mars"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            The Journey to Mars
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            "Mars is the next step. It’s the only planet we can reach and
            colonize."
          </p>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-center">
            SpaceX is developing reusable rockets to drastically cut the cost of
            space travel. The goal? To establish a permanent colony on Mars and
            expand humanity beyond Earth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingCard;
