import { useState } from "react";
import { AppInput } from "../AppInput/AppInput";

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

  return (
    <form className="flex justify-center gap-4" onSubmit={submitHandler}>
      <AppInput value={query} inputHandler={queryHandler} />
      <button
        className="rounded-lg border bg-zinc-800 px-[25px] py-2 text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
