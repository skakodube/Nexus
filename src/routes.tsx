import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import GameBrowse from "./pages/GameBrowse";
import GameDetailsPage from "./pages/GameDetailsPage";
import GameSearch from "./pages/GameSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <GameBrowse />,
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
    ],
  },
]);

export default router;
