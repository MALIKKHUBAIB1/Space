import React from "react";
function CoresCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {cores.map((core) => (
        <div
          key={core.core_serial}
          onClick={() => setSelectedCore(core)}
          className="cursor-pointer bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-blue-500"
        >
          {/* Core Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
              {core.core_serial}
            </h3>
            <span
              className={`px-3 py-1 rounded-lg text-sm ${getStatusColor(
                core?.status
              )}`}
            >
              {core.status === null ? "No Details" : core?.status.toUpperCase()}
            </span>
          </div>

          {/* Core Details */}
          <p className="text-gray-300 mt-2 text-sm">
            {core.details || "No details available"}
          </p>

          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>
              <strong className="text-blue-400">Launch Date:</strong>{" "}
              {core.original_launch || "N/A"}
            </li>
            <li>
              <strong className="text-blue-400">RTLS Attempts:</strong>{" "}
              {core.rtls_attempts || 0}
            </li>
            <li>
              <strong className="text-blue-400">RTLS Landings:</strong>{" "}
              {core.rtls_landings || 0}
            </li>
            <li>
              <strong className="text-blue-400">ASDS Attempts:</strong>{" "}
              {core.asds_attempts || 0}
            </li>
            <li>
              <strong className="text-blue-400">ASDS Landings:</strong>{" "}
              {core.asds_landings || 0}
            </li>
            <li>
              <strong className="text-blue-400">Water Landing:</strong>{" "}
              {core.water_landing ? "Yes" : "No"}
            </li>
            <li>
              <strong className="text-blue-400">Reuse Count:</strong>{" "}
              {core.reuse_count || 0}
            </li>
            <li>
              <strong className="text-blue-400">Missions:</strong>{" "}
              {core.missions && core.missions.length > 0
                ? core.missions.map((m) => m.name).join(", ")
                : "None"}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CoresCard;
