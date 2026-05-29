import { useEffect } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesList } from "../MoviesList/MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setQuery } from "../../redux/slices/moviesSlice";
import type { AppDispatch, RootState } from "../../redux/store";

export function SearchMovie() {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector((state: RootState) => state.movies.query);
  const movies = useSelector((state: RootState) => state.movies.moviesList);
  const error = useSelector((state: RootState) => state.movies.error);
  const loading = useSelector((state: RootState) => state.movies.loading);

  useEffect(() => {
    if (!query?.length) return;
    dispatch(fetchMovies(query));
  }, [query, dispatch]);

  return (
    <>
      <SearchForm
        querySubmitHandler={(newQuery) => dispatch(setQuery(newQuery))}
      />
      <MoviesList movies={movies} loading={loading} error={error} />
    </>
  );
}
