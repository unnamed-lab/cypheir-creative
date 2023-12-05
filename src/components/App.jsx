import { RouterProvider } from "react-router-dom";
import { routes } from "../routes/Routes";
import { Helmet, HelmetProvider } from "react-helmet-async"; 

function App() { 

  return (
    <>
    <HelmetProvider>
      <Helmet>
      </Helmet>
    </HelmetProvider>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
