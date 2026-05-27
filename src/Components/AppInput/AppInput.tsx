import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { ReactElement } from "react";

export const AppInput = ({
  value,
  inputHandler,
  children,
}: {
  value: string;
  inputHandler: (val: string) => void;
  children?: ReactElement;
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <label>
      <span>{children}</span>

      <input
        className={`rounded-lg border border-black p-2 ${
          theme === "Dark"
            ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500"
            : "border-zinc-300 bg-white text-zinc-700"
        }`}
        placeholder="Search movie..."
        value={value}
        onChange={(e) => inputHandler(e.target.value)}
      />
    </label>
  );
};
