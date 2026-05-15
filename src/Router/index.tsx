import { createBrowserRouter } from "react-router";
import { HomePage } from "../views/HomePage";
import { AboutMoviePage } from "../views/AboutMoviePage";
import { ContactPage } from "../views/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie/:id",
    element: <AboutMoviePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
