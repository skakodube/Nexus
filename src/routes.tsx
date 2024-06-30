import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import GameBrowse from "./pages/GameBrowse";
import GameDetailsPage from "./pages/GameDetailsPage";
import GameSearch from "./pages/GameSearch";
import HomePage from "./pages/HomePage";
import GameDiscover from "./pages/GameDiscover";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/",
        element: <GameBrowse />,
      },
      {
        path: "games/:slug",
        element: <GameDetailsPage />,
      },
      {
        path: "search",
        element: <GameSearch />,
      },
      {
        path: "discover/:timeframe", // Define route with a parameter
        element: <GameDiscover />,
      },
    ],
  },
]);

export default router;
