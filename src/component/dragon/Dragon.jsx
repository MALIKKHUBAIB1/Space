import React from "react";
import useFetechData from "../../Utils/hooks/useFetch";
import DragonCard from "./DragonCard";

function Dragon() {
  const { data: dragonsData } = useFetechData(
    "https://api.spacexdata.com/v3/dragons"
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-8">
        SpaceX Dragons
      </h2>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-6">
        {dragonsData &&
          dragonsData.map((dragon) => (
            <DragonCard dragon={dragon} key={dragon.id} />
          ))}
      </div>
    </div>
  );
}

export default Dragon;
