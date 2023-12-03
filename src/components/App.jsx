import { RouterProvider } from "react-router-dom";
import { routes } from "../routes/Routes";
import { Helmet } from "react-helmet"; 

function App() { 

  return (
    <>
      <Helmet>
      </Helmet>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
