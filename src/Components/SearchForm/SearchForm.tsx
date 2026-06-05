import { useState } from "react";
import { AppInput } from "../AppInput/AppInput";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

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

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <form className="flex justify-center gap-4" onSubmit={submitHandler}>
      <AppInput value={query} inputHandler={queryHandler} />
      <button
        className={`inline-block cursor-pointer rounded-lg px-4 py-2 transition ${theme === "Dark" ? "bg-indigo-500 text-white hover:bg-indigo-400" : "bg-indigo-600 text-white hover:bg-indigo-500"}`}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
