import { Link } from "react-router";
import { MovieCard } from "../MovieCard/MovieCard";
import type { MovieProps } from "../MovieCard/MovieCardProps.types";

export const MoviesList = ({
  movies,
  error = null,
  loading = false,
}: {
  movies: MovieProps[];
  error?: string | null;
  loading: boolean;
}) => {
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
                  className="border-black-800 cursor-pointer border p-4"
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
    <div className="flex gap-4 rounded-xl bg-white p-4 shadow">
      {whatRender()}
    </div>
  );
};
