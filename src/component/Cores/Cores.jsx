import React, { useEffect, useState } from "react";
import useFetechData from "../../Utils/hooks/useFetch";
import CoresItem from "./CoresItems";

function Cores() {
  const [filterCores, setFilterCores] = useState([]);
  const [orignalData, setOriginalData] = useState([]);
  const { data: coresData } = useFetechData(
    "https://api.spacexdata.com/v3/cores"
  );
  useEffect(() => {
    if (coresData.length > 0) {
      setOriginalData(coresData);
      setFilterCores(coresData);
    }
  }, [coresData]);

  const handleFilter = (type) => {
    if (type === "all") {
      setFilterCores(coresData);
    } else if (type === "Nodetail") {
      const returnCores = orignalData.filter((cores) => cores.status === null);
      setFilterCores(returnCores);
    } else {
      const returnCores = orignalData.filter(
        (cores) =>
          cores.status && cores?.status.toLowerCase() === type.toLowerCase()
      );
      setFilterCores(returnCores);
    }
  };
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-8">
        SpaceX Cores
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* <Modal /> */}
        {["lost", "inactive", "unknown", "all", "active", "Nodetail"].map(
          (status) => (
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
          )
        )}
      </div>
      <CoresItem cores={filterCores} />
    </div>
  );
}

export default Cores;
