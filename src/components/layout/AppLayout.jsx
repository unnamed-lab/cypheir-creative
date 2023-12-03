import { Outlet } from "react-router-dom";
import NavigationBar from "./Navigation";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
