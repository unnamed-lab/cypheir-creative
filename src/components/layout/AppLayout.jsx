import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./Navigation";
import Footer from "./Footer";

function AppLayout() {
  const [getThemeMode, setThemeMode] = useState("false");
  const themeMode = getThemeMode ? "dark" : "";
  return (
    <>
      <NavigationBar setTheme={setThemeMode} />
      <Outlet context={themeMode}/>
      <Footer getTheme={themeMode} />
    </>
  );
}

export default AppLayout;
