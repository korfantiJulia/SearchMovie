import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
