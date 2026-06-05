import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import type { RootState } from "../../redux/store";

export function ChangeThemeButton() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <button
      className={`text-md inline-block w-[150px] cursor-pointer rounded-lg border px-4 py-2 font-medium transition ${theme === "Dark" ? "border-zinc-600 bg-zinc-800 text-zinc-100 hover:border-indigo-500 hover:text-indigo-400" : "border-zinc-300 bg-white text-zinc-800 hover:border-indigo-500 hover:text-indigo-600"}`}
      onClick={() => dispatch(toggleTheme())}
    >
      {theme} theme
    </button>
  );
}
