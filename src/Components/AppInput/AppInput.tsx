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
  return (
    <label>
      <span>{children}</span>

      <input
        className="rounded-lg border border-black p-2"
        placeholder="Search movie..."
        value={value}
        onChange={(e) => inputHandler(e.target.value)}
      />
    </label>
  );
};
