import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function Launches() {
  const [page, setPage] = useState(0);
  const [itemPerPage] = useState(10);
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const isFetching = useRef(false); // ✅ To prevent multiple calls

  // ✅ Fetch Data Function
  const fetchData = async () => {
    if (isFetching.current || !hasMore) return;
    isFetching.current = true; // ✅ Prevent multiple calls
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.spacexdata.com/v3/launches?limit=${itemPerPage}&offset=${
          page * itemPerPage
        }`
      );
      const newData = await res.json();
      if (newData.length === 0) {
        setHasMore(false); // ✅ Stop fetching when no more data
      } else {
        setLaunches((prev) => {
          const uniqueData = Array.from(
            new Map(
              [...prev, ...newData].map((item) => [item.flight_number, item])
            ).values()
          );
          return uniqueData;
        });
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  // ✅ Initial Data Fetch (Only Once)
  useEffect(() => {
    fetchData();
  }, [page]); // ✅ Only depends on `page`

  // ✅ Infinite Scroll with Debouncing
  useEffect(() => {
    let debounceTimer;

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 50 &&
        !loading &&
        hasMore
      ) {
        // ✅ Debounce to prevent spamming
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          setPage((prev) => prev + 1);
        }, 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);

  if (!launches.length && !loading)
    return (
      <p className="text-center text-gray-400 mt-10 text-lg">
        🚀 No launches found.
      </p>
    );

  return (
    <div className="container mx-auto px-6 py-10">
      {/* ✅ Title */}
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-12">
        🚀 SpaceX Launches
      </h2>

      {/* ✅ Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {launches.map((launch, index) => (
          <div
            key={`${launch.flight_number}-${index}`} // ✅ Unique key
            className="bg-[#12131A] rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700"
          >
            {/* ✅ Mission Image */}
            {launch.links.mission_patch ? (
              <img
                src={launch.links.mission_patch}
                alt={launch.mission_name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-400">
                🚀 No Image Available
              </div>
            )}

            {/* ✅ Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {launch.mission_name}
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                📅 Launch Year:{" "}
                <span className="font-semibold text-white">
                  {launch.launch_year}
                </span>
              </p>
              <p
                className={`text-sm ${
                  launch.launch_success ? "text-green-400" : "text-red-400"
                }`}
              >
                ✅ Status: {launch.launch_success ? "Success" : "Failed"}
              </p>

              {/* ✅ View Details Button */}
              <Link
                to={`/launches/${launch.flight_number}`}
                className="block mt-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full font-semibold hover:opacity-80 transition-all"
              >
                🔍 View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Loading State */}
      {loading && (
        <p className="text-center text-gray-400 mt-6">🚀 Loading more...</p>
      )}
      {/* ✅ No More Data */}
      {!hasMore && (
        <p className="text-center text-gray-500 mt-6">
          🚀 No more launches available.
        </p>
      )}
    </div>
  );
}

export default Launches;
