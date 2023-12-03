import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import ErrorLayout from "./error/Error";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AppLayout />}
      errorElement={<ErrorLayout />}
    >
      <Route path="/" element={<Home />} />
    </Route>
  )
);

export { routes };
