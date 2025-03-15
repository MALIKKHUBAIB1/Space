import React from "react";

function CapsuleButton({ handleFilter }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {/* <Modal /> */}
      {["retired", "active", "unknown", "all"].map((status) => (
        <button
          key={status}
          className={`px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base font-semibold text-white rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 ${
            status === "retired"
              ? "bg-red-600 hover:bg-red-700"
              : status === "active"
              ? "bg-green-600 hover:bg-green-700"
              : status === "unknown"
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-gray-600 hover:bg-gray-700"
          }`}
          onClick={() => handleFilter(status)}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default CapsuleButton;
