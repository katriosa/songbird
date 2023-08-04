import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./page/Root";
import HomePage from "./page/Home";
import GamePage from "./page/Game";
import GalleryPage from "./page/Gallery";
import ErrorPage from "./page/Error";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchBirdsRequest } from "./redux/birdsActions";
import { useSelector } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/game",
        element: <GamePage />,
        errorElement: <ErrorPage />,
      },
      { path: "/gallery", element: <GalleryPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const loadedBirdsData = useSelector((state) => state.birds.birdsData);

  useEffect(() => {
    if (!loadedBirdsData) {
      dispatch(fetchBirdsRequest());
    }
  }, [dispatch, loadedBirdsData]);

  return <RouterProvider router={router} />;
}
export default App;
