import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./page/Root";
import HomePage from "./page/Home";
import GamePage from "./page/Game";
import GalleryPage from "./page/Gallery";
import ErrorPage from "./page/Error";
import { useDispatch } from "react-redux";
import React, { useEffect, useMemo, useState } from "react";
import { fetchBirdsRequest } from "./redux/birdsActions";
import { useSelector } from "react-redux";
import { ReactComponent as Spinner } from "./assets/spinner.svg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/game",
        element: <GamePage />,
      },
      { path: "/gallery", element: <GalleryPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const loadedBirdsData = useSelector((state) => state.birds.birdsData);

  useEffect(() => {
    if (!loadedBirdsData) {
      dispatch(fetchBirdsRequest());
    } else {
      setLoading(false);
    }
  }, [dispatch, loadedBirdsData]);

  const content = useMemo(() => {
    if (loading) {
      return (
        <div className="centred">
          <Spinner />
        </div>
      );
    }
    return <RouterProvider router={router} />;
  }, [loading]);

  return <>{content}</>;
}
export default App;
