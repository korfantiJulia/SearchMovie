import { Link } from "react-router";
import { MovieCard } from "../MovieCard/MovieCard";
import type { MovieProps } from "../MovieCard/MovieCardProps.types";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const MoviesList = ({
  movies,
  error = null,
  loading = false,
}: {
  movies: MovieProps[];
  error?: string | null;
  loading: boolean;
}) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("No theme context");
  }
  const { theme } = context;

  const whatRender = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>{error}</p>;
    } else {
      return movies.length > 0
        ? movies.map((movie) => {
            return (
              <MovieCard movieData={movie} key={movie.imdbID}>
                <Link
                  to={`/movie/${movie.imdbID}`}
                  className={`mt-auto inline-block w-fit rounded-lg px-4 py-2 transition ${theme === "Dark" ? "bg-blue-500 text-white hover:bg-blue-400" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}
                >
                  Read more
                </Link>
              </MovieCard>
            );
          })
        : "Search your movie...";
    }
  };

  return (
    <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-6 px-4">
      {whatRender()}
    </div>
  );
};
