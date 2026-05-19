import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { MovieProps } from "../Components/MovieCard/MovieCardProps.types";
import { Link } from "react-router";
import noPoster from "../assets/noPoster.png";

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
  }, [params.id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8">
      <Link to="/" className="mb-6 inline-block text-blue-600 underline">
        ← Back
      </Link>

      {/* <h2 className="mb-6 text-3xl font-bold"> About movie: {movie.Title}</h2> */}

      <div className="flex w-auto gap-4 rounded-2xl bg-white p-4 shadow-lg transition hover:scale-[1.02] hover:shadow-2xl">
        <img
          src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : noPoster}
          alt="Poster"
          className="w-auto rounded-lg object-cover"
        />
        <div className="flex flex-col gap-2 text-start">
          <h2 className="text-xl font-bold text-zinc-800">{movie.Title}</h2>
          <p className="text-md mt-2 text-zinc-600">Year:{movie.Year}</p>

          <p className="text-md my-5 text-zinc-800">{movie.Plot}</p>
          <p className="text-md mt-5 text-zinc-600">Actors: {movie.Actors}</p>
          <p className="text-md mt-5 text-zinc-800"> Genre: {movie.Genre}</p>
          <p className="text-md mt-5 text-zinc-600">
            Director:{movie.Director}
          </p>
        </div>
      </div>
    </div>
  );
}
