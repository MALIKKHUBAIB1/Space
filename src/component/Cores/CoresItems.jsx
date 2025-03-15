import React, { useState } from "react";
import { getStatusColor } from "../../Utils/getColor";
import Modal from "../../Utils/Modal";

function CoresItem({ cores }) {
  const [selectedCores, setSelectedCore] = useState();
  function onClose() {
    setSelectedCore(null);
  }
  return (
    <>
      {cores.length > 0 ? (
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
                  {core.status === null
                    ? "No Details"
                    : core?.status.toUpperCase()}
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
      ) : (
        <p className="text-center text-gray-400 text-lg">No cores found.</p>
      )}

      {selectedCores && (
        <Modal
          isOpen={selectedCores}
          onClose={onClose}
          title={selectedCores.core_serial}
        >
          <p className="text-gray-300 mt-2 text-sm">
            {selectedCores.details || "No details available"}
          </p>

          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>
              <strong className="text-blue-400">Launch Date:</strong>{" "}
              {selectedCores.original_launch || "N/A"}
            </li>
            <li>
              <strong className="text-blue-400">RTLS Attempts:</strong>{" "}
              {selectedCores.rtls_attempts || 0}
            </li>
            <li>
              <strong className="text-blue-400">RTLS Landings:</strong>{" "}
              {selectedCores.rtls_landings || 0}
            </li>
            <li>
              <strong className="text-blue-400">ASDS Attempts:</strong>{" "}
              {selectedCores.asds_attempts || 0}
            </li>
            <li>
              <strong className="text-blue-400">ASDS Landings:</strong>{" "}
              {selectedCores.asds_landings || 0}
            </li>
            <li>
              <strong className="text-blue-400">Water Landing:</strong>{" "}
              {selectedCores.water_landing ? "Yes" : "No"}
            </li>
            <li>
              <strong className="text-blue-400">Reuse Count:</strong>{" "}
              {selectedCores.reuse_count || 0}
            </li>
            <li>
              <strong className="text-blue-400">Missions:</strong>{" "}
              {selectedCores.missions && selectedCores.missions.length > 0
                ? selectedCores.missions.map((m) => m.name).join(", ")
                : "None"}
            </li>
          </ul>
        </Modal>
      )}
    </>
  );
}

export default CoresItem;
