import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Your main content goes here */}

        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Body;
