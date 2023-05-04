import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Start } from "./components/Start";
import { AnimalsPage } from "./components/AnimalsPage";
import { AnimalPage } from "./components/AnimalPage";
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
    element: <AnimalsPage></AnimalsPage>,
  },
  {
    path: "/animals/:id",
    element: <AnimalPage></AnimalPage>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
