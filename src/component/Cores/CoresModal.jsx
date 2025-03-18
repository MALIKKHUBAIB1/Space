import React from "react";
import Modal from "../../Utils/Modal";

function CoresModal({ selectedCores, onClose }) {
  return (
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
  );
}

export default CoresModal;
