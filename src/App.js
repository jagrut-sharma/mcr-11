import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Watchlist from "./pages/Watchlist";
import Starred from "./pages/Starred";
import SingleMovie from "./pages/SingleMovie";
import AddNewMovie from "./pages/AddNewMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/starred",
        element: <Starred />,
      },
      {
        path: "/movies/:movieID",
        element: <SingleMovie />,
      },
      {
        path: "/newmovie",
        element: <AddNewMovie />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
