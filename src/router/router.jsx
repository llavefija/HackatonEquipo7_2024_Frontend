import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import MapPage from "../pages/MapPage";
import DetailsPage from "../pages/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "map", element: <MapPage /> },
      { path: "map/:id", element: <DetailsPage /> },
    ],
  },
]);
