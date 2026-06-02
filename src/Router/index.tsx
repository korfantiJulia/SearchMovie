import { createBrowserRouter } from "react-router";
import { HomePage } from "../views/HomePage";
import { AboutMoviePage } from "../views/AboutMoviePage";
import { ContactPage } from "../views/Contact";
import { App } from "../App";
import { RegisterPage } from "../views/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
