import { useState, useEffect } from "react";
import { type MovieProps } from "../MovieCard/MovieCardProps.types";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesList } from "../MoviesList/MoviesList";

export function SearchMovie() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) return;

    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=2cf3419&s=` +
            encodeURIComponent(query),
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const movies = await response.json();

        setMovies(movies.Search || []);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [query]);

  return (
    <>
      <SearchForm querySubmitHandler={(newQuery) => setQuery(() => newQuery)} />
      <MoviesList movies={movies} loading={loading} error={error} />
    </>
  );
}
