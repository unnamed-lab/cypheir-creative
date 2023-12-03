import { RouterProvider } from "react-router-dom";
import { routes } from "../routes/Routes";
// import { Helmet } from "react-helmet";
// import { websiteSchemaMarkup } from "../utils/schema";
// import React, { useRef } from "react";

function App() {
  // const websiteSchema = useRef(null);
  // React.useEffect(() => {
  //   websiteSchema.current = websiteSchema(
  //     "Cypheir",
  //     "www.cypheir.com",
  //     "",
  //     {
  //       telephone: "+2347034268709",
  //       email: "contact@cypheir.com",
  //     },
  //     "Cypheir Creative",
  //     "",
  //     "Unnamed"
  //   );
  // })

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
