import { Outlet } from "react-router";
import { AppHeader } from "./Components/AppHeader/AppHeader";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

export function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

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
