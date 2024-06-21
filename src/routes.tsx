import { createBrowserRouter } from "react-router-dom";
import GameCollection from "./pages/GameCollection";
import GamePage from "./pages/GamePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <GameCollection />,
      },
      {
        path: "games/:id",
        element: <GamePage />,
      },
    ],
  },
]);

export default router;
