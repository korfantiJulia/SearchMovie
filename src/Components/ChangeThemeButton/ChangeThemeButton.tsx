import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import type { RootState } from "../../redux/store";

export function ChangeThemeButton() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <button
      className={`inline-block w-[170px] cursor-pointer rounded-lg px-4 py-2 text-xl font-medium ${theme === "Dark" ? "bg-zinc-800 text-white" : "bg-white text-zinc-800"}`}
      onClick={() => dispatch(toggleTheme())}
    >
      {theme} theme
    </button>
  );
}
