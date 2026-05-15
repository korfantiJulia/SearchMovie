import { SearchMovie } from "../Components/FetchMovie/FetchMovie";

export function HomePage() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Search Movie</h1>

      <SearchMovie />
    </>
  );
}
