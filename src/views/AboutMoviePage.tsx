import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieCard } from "../Components/MovieCard/MovieCard";
import type { MovieProps } from "../Components/MovieCard/MovieCardProps.types";
import { Link } from "react-router";

export function AboutMoviePage() {
  const params = useParams();
  const [movie, setMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=2cf3419&i=` + params.id,
      );

      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <h2>About movie: {movie.Title}</h2>

      {movie ? <MovieCard movieData={movie}>Info</MovieCard> : "Loading..."}
    </div>
  );
}
