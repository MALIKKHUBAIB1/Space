import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../../Utils/hooks/useFetch";

function LaunchDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: launch, loading } = useFetchData(
    `https://api.spacexdata.com/v3/launches/${id}`
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400 text-xl">🚀 Loading Launch Details...</p>
      </div>
    );
  }

  if (!launch) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-xl">❌ Data not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0c10] to-[#1f2833] px-6 py-12 text-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ✅ Left Side - Mission Patch */}
        <div className="relative rounded-lg shadow-lg">
          {launch.links.mission_patch ? (
            <img
              src={launch.links.mission_patch}
              alt={launch.mission_name}
              className="w-full aspect-[16/16] object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-64 bg-gray-800 flex items-center justify-center text-gray-500">
              🚀 No Image Available
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-md" />
        </div>

        {/* ✅ Right Side - Details Section */}
        <div className="space-y-6">
          {/* Title */}
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            {launch.mission_name}
          </h3>

          {/* ✅ Basic Info */}
          <div className="space-y-3">
            <InfoRow label="🚀 Flight Number:" value={launch.flight_number} />
            <InfoRow label="📅 Launch Year:" value={launch.launch_year} />
            <InfoRow
              label="✅ Status:"
              value={
                launch.launch_success ? (
                  <span className="text-green-400">Success</span>
                ) : (
                  <span className="text-red-400">Failed</span>
                )
              }
            />
            <InfoRow
              label="📍 Launch Site:"
              value={launch.launch_site.site_name_long}
            />
            <InfoRow
              label="📅 Local Time:"
              value={new Date(launch.launch_date_local).toLocaleString()}
            />
          </div>

          {/* ✅ Rocket Info */}
          <h4 className="text-2xl font-semibold text-blue-400 mt-6">
            🚀 Rocket Details:
          </h4>
          <div className="space-y-3">
            <InfoRow
              label="🚀 Rocket Name:"
              value={`${launch.rocket.rocket_name} (${launch.rocket.rocket_type})`}
            />

            {/* First Stage */}
            <div>
              <h5 className="text-gray-400 text-lg">🛬 First Stage:</h5>
              {launch.rocket.first_stage.cores.map((core, index) => (
                <div key={index} className="ml-4 space-y-2">
                  <InfoRow label="🚀 Core Serial:" value={core.core_serial} />
                  <InfoRow
                    label="🔁 Reused:"
                    value={core.reused ? "Yes" : "No"}
                  />
                  <InfoRow
                    label="🎯 Landing Success:"
                    value={
                      core.land_success !== null
                        ? core.land_success
                          ? "✅ Success"
                          : "❌ Failed"
                        : "N/A"
                    }
                  />
                </div>
              ))}
            </div>

            {/* Second Stage */}
            <div>
              <h5 className="text-gray-400 text-lg">🛰️ Second Stage:</h5>
              {launch.rocket.second_stage.payloads.map((payload) => (
                <div key={payload.payload_id} className="ml-4 space-y-2">
                  <InfoRow label="🚀 Payload ID:" value={payload.payload_id} />
                  <InfoRow
                    label="🌍 Nationality:"
                    value={payload.nationality}
                  />
                  <InfoRow
                    label="🏭 Manufacturer:"
                    value={payload.manufacturer}
                  />
                  <InfoRow label="🎯 Orbit:" value={payload.orbit} />
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Failure Info */}
          {launch.launch_failure_details && (
            <>
              <h4 className="text-2xl font-semibold text-red-400 mt-6">
                ❌ Failure Details:
              </h4>
              <InfoRow
                label="⏰ Failure Time:"
                value={`${launch.launch_failure_details.time} seconds`}
              />
              <InfoRow
                label="❗ Reason:"
                value={launch.launch_failure_details.reason}
              />
            </>
          )}

          {/* ✅ CTA Buttons */}
          <div className="flex gap-4 mt-6">
            {launch.links.wikipedia && (
              <a
                href={launch.links.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-6 rounded-full transition-all shadow-md"
              >
                🌍 Read on Wikipedia
              </a>
            )}
            {launch.links.video_link && (
              <a
                href={launch.links.video_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-6 rounded-full transition-all shadow-md"
              >
                ▶️ Watch Launch
              </a>
            )}
            <button
              onClick={() => navigate(-1)}
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

// ✅ InfoRow Component
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
    <span className="text-gray-500">{label}</span>
    <span className="font-semibold text-gray-300">{value || "N/A"}</span>
  </div>
);

export default LaunchDetails;
