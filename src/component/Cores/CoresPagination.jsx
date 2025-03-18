import React from "react";

function CoresPagination({ handlePagination, pageButton, currentPage }) {
  return (
    <div className="flex justify-center mt-4">
      {pageButton.map((pageIndex) => (
        <button
          key={pageIndex}
          className={`p-3 m-2 rounded-4xl text-white ${
            pageIndex === currentPage
              ? "bg-blue-500 hover:bg-blue-600" // Active page color
              : "bg-gray-700 hover:bg-gray-600" // Inactive page color
          } transition-all`}
          onClick={() => handlePagination(pageIndex)}
        >
          {pageIndex + 1}
        </button>
      ))}
    </div>
  );
}

export default CoresPagination;
