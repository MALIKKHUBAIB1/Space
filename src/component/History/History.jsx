import React from "react";
import useFetechData from "../../Utils/hooks/useFetch";

function History() {
  const { data } = useFetechData("https://api.spacexdata.com/v3/history");

  if (!data) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-10">
        🚀 SpaceX Historical Events 🚀
      </h2>

      <div className="space-y-8">
        {data.map((event) => (
          <div
            key={event.id}
            className="bg-[rgb(21,23,25)] border border-gray-700 p-6 rounded-2xl shadow-md transition-transform transform hover:scale-[1.02]"
          >
            {/* Event Title and Date */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-blue-400">
                {event.title}
              </h3>
              <p className="text-sm text-gray-400">
                {new Date(event.event_date_utc).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>

            {/* Event Details */}
            <p className="text-gray-300 leading-relaxed mb-4">
              {event.details}
            </p>

            {/* Flight Number */}
            <p className="text-sm text-gray-400 mb-4">
              <span className="font-semibold text-gray-300">
                Flight Number:
              </span>{" "}
              {event.flight_number}
            </p>

            {/* Links */}
            <div className="flex gap-4">
              {event.links?.reddit && (
                <a
                  href={event.links.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-red-600 py-2 px-6 text-white text-sm font-semibold shadow-md hover:bg-red-700 transition-all"
                >
                  🔥 Reddit
                </a>
              )}
              {event.links?.article && (
                <a
                  href={event.links.article}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-600 py-2 px-6 text-white text-sm font-semibold shadow-md hover:bg-blue-700 transition-all"
                >
                  📰 Article
                </a>
              )}
              {event.links?.wikipedia && (
                <a
                  href={event.links.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-600 py-2 px-6 text-white text-sm font-semibold shadow-md hover:bg-gray-700 transition-all"
                >
                  🌍 Wikipedia
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
