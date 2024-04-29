import { Outlet } from "react-router-dom";
import MainNavigationBar from "../components/MainNavigationBar";

const RootLayout = () => {
  return (
    <>
      <MainNavigationBar />
      <Outlet />
    </>
  );
};
export default RootLayout;
