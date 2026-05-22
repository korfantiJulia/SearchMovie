import { useContext, type ReactElement } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const AppInput = ({
  value,
  inputHandler,
  children,
}: {
  value: string;
  inputHandler: (val: string) => void;
  children?: ReactElement;
}) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Please, pass theme context");
  }

  const { theme } = context;

  return (
    <label>
      <span>{children}</span>

      <input
        className={`rounded-lg border border-black p-2 ${theme === "Dark" ? "bg-white text-zinc-700" : "bg-white text-zinc-700"}`}
        placeholder="Search movie..."
        value={value}
        onChange={(e) => inputHandler(e.target.value)}
      />
    </label>
  );
};
