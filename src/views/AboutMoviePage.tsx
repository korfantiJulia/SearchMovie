import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { MovieProps } from "../Components/MovieCard/MovieCardProps.types";
import { Link } from "react-router";
import noPoster from "../assets/noPoster.png";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export function AboutMoviePage() {
  const theme = useSelector((state: RootState) => state.theme.theme);
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
    <div className="min-h-screen p-8">
      <Link to="/" className="mb-6 inline-block text-blue-600 underline">
        ← Back
      </Link>

      {/* <h2 className="mb-6 text-3xl font-bold"> About movie: {movie.Title}</h2> */}

      <div
        className={`flex w-auto gap-4 rounded-2xl p-4 ${theme === "Dark" ? "bg-zinc-900 shadow-lg shadow-white/20" : "bg-white shadow-lg"}`}
      >
        <img
          src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : noPoster}
          alt="Poster"
          className="w-auto rounded-lg object-cover"
        />
        <div className="flex flex-col gap-2 text-start">
          <h2
            className={`text-xl font-bold ${theme === "Dark" ? "text-zinc-100" : "text-zinc-800"}`}
          >
            {movie.Title}
          </h2>
          <p
            className={`text-md mt-2 ${theme === "Dark" ? "text-zinc-400" : "text-zinc-600"}`}
          >
            Year:{movie.Year}
          </p>

          <p
            className={`text-md my-5 ${theme === "Dark" ? "text-zinc-100" : "text-zinc-800"}`}
          >
            {movie.Plot}
          </p>
          <p
            className={`text-md mt-5 ${theme === "Dark" ? "text-zinc-400" : "text-zinc-600"}`}
          >
            Actors: {movie.Actors}
          </p>
          <p
            className={`text-md mt-5 ${theme === "Dark" ? "text-zinc-300" : "text-zinc-800"}`}
          >
            {" "}
            Genre: {movie.Genre}
          </p>
          <p
            className={`text-md mt-5 ${theme === "Dark" ? "text-zinc-400" : "text-zinc-600"}`}
          >
            Director:{movie.Director}
          </p>
        </div>
      </div>
    </div>
  );
}
