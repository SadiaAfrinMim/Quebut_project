import {
    createBrowserRouter,

  } from "react-router";
import App from "../App";
  
  let router = createBrowserRouter([
    {
      path: "/",
      Component: <App></App>
    },
  ]);
  
export default router