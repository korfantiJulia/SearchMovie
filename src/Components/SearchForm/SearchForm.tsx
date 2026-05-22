import { useContext, useState } from "react";
import { AppInput } from "../AppInput/AppInput";
import { ThemeContext } from "../../context/ThemeContext";

export const SearchForm = ({
  querySubmitHandler,
}: {
  querySubmitHandler: (val: string) => void;
}) => {
  const [query, setQuery] = useState<string>("");

  const queryHandler = (value: string) => {
    setQuery(() => value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    querySubmitHandler(query);
  };

  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Please, pass theme context");
  }

  const { theme } = context;

  return (
    <form className="flex justify-center gap-4" onSubmit={submitHandler}>
      <AppInput value={query} inputHandler={queryHandler} />
      <button
        className={`inline-block cursor-pointer rounded-lg px-4 py-2 transition hover:bg-zinc-700 ${theme === "Dark" ? "bg-white text-zinc-800" : "bg-zinc-800 text-white"}`}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
