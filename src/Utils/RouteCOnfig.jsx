import React, { lazy,Suspense } from "react";
import Body from "../component/Body";
import { createBrowserRouter } from "react-router-dom";

// Lazy Load Components
const Home = lazy(() => import("../component/Home"));
const Capsule = lazy(() => import("../component/capsules/Capsule"));
const Cores = lazy(() => import("../component/Cores/Cores"));
const Dragon = lazy(() => import("../component/dragon/Dragon"));
const DragonDetailsPage = lazy(() =>
  import("../component/dragon/DragonDetailsPage")
);
const History = lazy(() => import("../component/History/History"));
const LandingPads = lazy(() => import("../component/Landingpads/LandingPads"));
const LandingPadsDetails = lazy(() =>
  import("../component/Landingpads/LandingPadsDetails")
);
const Launches = lazy(() => import("../component/Launches/Launches"));
const LaunchDetails = lazy(() =>
  import("../component/Launches/LaunchesDetailsPage")
);
const PayLoads = lazy(() => import("../component/Payloads/PayLoads"));
const PayLoadsDetails = lazy(() =>
  import("../component/Payloads/PayLoadsDetails")
);
const Crew = lazy(() => import("../component/Crew/Crew"));
const CrewDetailsPage = lazy(() => import("../component/Crew/CrewDetailsPage"));
const Rockets = lazy(() => import("../component/rockets/Rockets"));
const RocketsDetails = lazy(() =>
  import("../component/rockets/RocketsDetails")
);
const Ships = lazy(() => import("../component/ships/Ships"));
const ShipDetailsPage = lazy(() => import("../component/ships/ShipDetailsPage"));

// Define Routes as an Array
const router = createBrowserRouter([
  {
    element: <Body />,
    path: "/",
    children: [
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
        path: "/",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Capsule />
          </Suspense>
        ),
        path: "/capsule",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cores />
          </Suspense>
        ),
        path: "/cores",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dragon />
          </Suspense>
        ),
        path: "/dragons",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <History />
          </Suspense>
        ),
        path: "/history",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DragonDetailsPage />
          </Suspense>
        ),
        path: "/dragons/:id",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPads />
          </Suspense>
        ),
        path: "/landingpads",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPadsDetails />
          </Suspense>
        ),
        path: "/landingpads/:id",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Launches />
          </Suspense>
        ),
        path: "/launches",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LaunchDetails />
          </Suspense>
        ),
        path: "/launches/:id",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PayLoads />
          </Suspense>
        ),
        path: "/payloads",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PayLoadsDetails />
          </Suspense>
        ),
        path: "/payloads/:id",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Crew />
          </Suspense>
        ),
        path: "/crew",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CrewDetailsPage />
          </Suspense>
        ),
        path: "/crew/:id",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Rockets />
          </Suspense>
        ),
        path: "/rockets",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RocketsDetails />
          </Suspense>
        ),
        path: "/rockets/:id",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Ships />
          </Suspense>
        ),
        path: "/ships",
      },
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ShipDetailsPage />
          </Suspense>
        ),
        path: "/ships/:id",
      },
    ],
  },
]);

export default router;
