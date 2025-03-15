import React, { useState } from "react";
import Modal from "../../Utils/Modal"; // Import your existing Modal component
import { getStatusColor } from "../../Utils/getColor";

function CapsuleItem({ filteredData }) {
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  return (
    <>
      {/* Capsule Grid */}
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {filteredData.map((capsule) => (
            <div
              key={capsule.capsule_serial}
              onClick={() => setSelectedCapsule(capsule)} // Open modal on click
              className="cursor-pointer bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-blue-500"
            >
              {/* Capsule Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                  {capsule.capsule_id} - {capsule.capsule_serial}
                </h3>
                <span
                  className={`px-3 py-1 rounded-lg text-sm ${getStatusColor(
                    capsule.status
                  )}`}
                >
                  {capsule.status.toUpperCase()}
                </span>
              </div>

              {/* Capsule Details */}
              <p className="text-gray-300 mt-2 text-sm">
                {capsule.details || "No details available"}
              </p>

              <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                <li>
                  <strong className="text-blue-400">Type:</strong>{" "}
                  {capsule.type}
                </li>
                <li>
                  <strong className="text-blue-400">Launch Date:</strong>{" "}
                  {capsule.original_launch || "N/A"}
                </li>
                <li>
                  <strong className="text-blue-400">Landings:</strong>{" "}
                  {capsule.landings}
                </li>
                <li>
                  <strong className="text-blue-400">Reuse Count:</strong>{" "}
                  {capsule.reuse_count}
                </li>
                <li>
                  <strong className="text-blue-400">Missions:</strong>{" "}
                  {capsule.missions.length > 0
                    ? capsule.missions.map((m) => m.name).join(", ")
                    : "None"}
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">No capsules found.</p>
      )}

      {/* Use Existing Modal Component */}
      {selectedCapsule && (
        <Modal
          isOpen={!!selectedCapsule}
          onClose={() => setSelectedCapsule(null)}
          title={`${selectedCapsule.capsule_id} - ${selectedCapsule.capsule_serial}`} // Passing title to modal
        >
          {/* Modal Content - Responsive */}
          <div className="p-4 sm:p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-[95%] sm:max-w-lg w-full mx-auto">
            <p className="text-gray-300 mt-4 text-sm">
              {selectedCapsule.details || "No details available"}
            </p>

            <ul className="mt-4 space-y-2 text-gray-300 text-sm">
              <li>
                <strong className="text-blue-400">Type:</strong>{" "}
                {selectedCapsule.type}
              </li>
              <li>
                <strong className="text-blue-400">Launch Date:</strong>{" "}
                {selectedCapsule.original_launch || "N/A"}
              </li>
              <li>
                <strong className="text-blue-400">Landings:</strong>{" "}
                {selectedCapsule.landings}
              </li>
              <li>
                <strong className="text-blue-400">Reuse Count:</strong>{" "}
                {selectedCapsule.reuse_count}
              </li>
              <li>
                <strong className="text-blue-400">Missions:</strong>{" "}
                {selectedCapsule.missions.length > 0
                  ? selectedCapsule.missions.map((m) => m.name).join(", ")
                  : "None"}
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
}

export default CapsuleItem;
