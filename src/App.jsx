import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Utils/RouteCOnfig";

function App() {
  return <RouterProvider router={router} />;
}
export default App;
