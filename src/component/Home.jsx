import React from "react";
import Crousel from "./Crousel";
import LandingCard from "./LandingCard";

function Home() {
  return (
    <div className="text-3xl text-amber-50">
      <Crousel />
      <LandingCard />
    </div>
    
  );
}

export default Home;
