import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Start } from "./pages/Start";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
// import { Error } from "./pages/Error";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start></Start>,
    // errorElement: <Error></Error>
  },
  {
    path: "/animals",
    element: <Animals></Animals>,
  },
  {
    path: "/animals/:id",
    element: <Animal></Animal>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
