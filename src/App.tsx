import { Outlet } from "react-router";
import { AppHeader } from "./Components/AppHeader/AppHeader";

export function App() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
