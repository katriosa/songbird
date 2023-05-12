import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./page/Root";
import Homepage from "./page/Home";
import GamePage from "./page/Game";
import GalleryPage from "./page/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/game", element: <GamePage /> },
      { path: "/gallery", element: <GalleryPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
