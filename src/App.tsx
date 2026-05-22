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
          theme === "Dark"
            ? "min-h-screen bg-zinc-950 text-zinc-100"
            : "min-h-screen bg-zinc-100 text-zinc-900"
        }
      >
        <Outlet />
      </div>
    </>
  );
}
