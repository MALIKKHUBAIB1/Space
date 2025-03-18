import React from "react";

import Body from "./component/Body";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Capsule from "./component/capsules/Capsule";
import Cores from "./component/Cores/Cores";
import Dragon from "./component/dragon/Dragon";
import DragonDetailsPage from "./component/dragon/DragonDetailsPage";
import History from "./component/History/History";
function App() {
  const router = createBrowserRouter([
    {
      element: <Body />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Capsule />,
          path: "/capsule",
        },
        {
          element: <Cores />,
          path: "/cores",
        },
        {
          element: <Dragon />,
          path: "/dragons",
        },
        {
          element: <History />,
          path: "/history",
        },
        {
          element: <DragonDetailsPage />,
          path: "/dragons/:id",
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
