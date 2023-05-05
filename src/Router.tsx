import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Start } from "./components/StartPage";
import { AnimalsPage } from "./components/AnimalsPage";
import { AnimalPage } from "./components/AnimalPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Start></Start>, index: true },
      { path: "/animals", element: <AnimalsPage></AnimalsPage> },
      { path: "/animals/:id", element: <AnimalPage></AnimalPage> },
    ],
  },
]);
