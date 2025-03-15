import React, { useState, useEffect } from "react";
import useFetchData from "../../Utils/hooks/useFetch";
import CapsuleItem from "./CapsuleItem";
import CapsuleButton from "./CapsuleButton";

function Capsule() {
  const { data } = useFetchData("https://api.spacexdata.com/v3/capsules");
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Data fetch hone ke baad originalData set karo
  useEffect(() => {
    if (data?.length > 0) {
      setOriginalData(data);
      setFilteredData(data); // Initially, show all data
    }
  }, [data]);

  // Status color logic

  // Filter function
  function handleFilter(type) {
    if (type === "all") {
      setFilteredData(originalData); // Show all capsules
    } else {
      const filtered = originalData.filter(
        (capsule) => capsule.status.toLowerCase() === type.toLowerCase()
      );
      setFilteredData(filtered);
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-8">
        SpaceX Capsules
      </h2>

      {/* Buttons for Filtering */}
      <CapsuleButton handleFilter = {handleFilter} />

      <CapsuleItem
        filteredData={filteredData}
      />
    </div>
  );
}

export default Capsule;
