import React from "react";
import useFetchData from "../../Utils/hooks/useFetch";
import PayLoadsItem from "./PayLoadsItem";
import { Link } from "react-router-dom";

function Payloads() {
  const { data: payloadsData } = useFetchData(
    "https://api.spacexdata.com/v3/payloads"
  );
  if (!payloadsData || !payloadsData.length) {
    return (
      <p className="text-center text-gray-400 mt-10 text-lg">
        🚀 Loading SpaceX payloads...
      </p>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      {/* ✅ Title */}
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-12">
        🚀 SpaceX Payloads
      </h2>

      {/* ✅ Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {payloadsData.map((payload) => (
          <Link key={payload.payload_id} to={`/payloads/${payload.payload_id}`}>
            <PayLoadsItem payload={payload} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Payloads;
