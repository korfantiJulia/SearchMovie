import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function ChangeThemeButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Please, pass theme context");
  }

  const { theme, setTheme } = context;

  return (
    <button
      className={`inline-block w-[170px] cursor-pointer rounded-lg px-4 py-2 text-xl font-medium ${theme === "Dark" ? "bg-zinc-800 text-white" : "bg-white text-zinc-800"}`}
      onClick={() => (theme === "Light" ? setTheme("Dark") : setTheme("Light"))}
    >
      {theme} theme
    </button>
  );
}
