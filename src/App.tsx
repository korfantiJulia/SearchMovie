import { Outlet } from "react-router";
import { AppHeader } from "./Components/AppHeader/AppHeader";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export function App() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Please, pass theme context");
  }

  const { theme } = context;

  return (
    <>
      <AppHeader />
      <div
        className={
          theme === "Dark" ? "bg-zinc-700 text-white" : "bg-white text-zinc-700"
        }
      >
        <Outlet />
      </div>
    </>
  );
}
