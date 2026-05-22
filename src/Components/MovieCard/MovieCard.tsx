import noPoster from "../../assets/cinema.jpg";
import { ThemeContext } from "../../context/ThemeContext";
import type { MovieProps } from "../MovieCard/MovieCardProps.types";
import { useContext, type ReactNode } from "react";

export const MovieCard = ({
  movieData,
  children,
}: {
  movieData: MovieProps;
  children: ReactNode;
}) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("No theme context");
  }

  const { theme } = context;

  return (
    <div
      className={`flex min-h-[220px] w-[350px] gap-4 rounded-2xl bg-white p-4 shadow-lg transition hover:scale-[1.02] hover:shadow-2xl ${
        theme === "Dark"
          ? "bg-zinc-900 shadow-lg shadow-white/20"
          : "bg-white shadow-lg"
      }`}
    >
      <img
        src={movieData.Poster !== "N/A" ? movieData.Poster : noPoster}
        alt="Poster"
        className="h-[160px] w-[110px] rounded-lg object-cover"
      />
      <div>
        <h2
          className={`text-xl font-bold ${theme === "Dark" ? "text-zinc-100" : "text-zinc-800"}`}
        >
          {movieData.Title}
        </h2>
        <p
          className={`mt-2 text-sm text-zinc-600 ${
            theme === "Dark" ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          Year:{movieData.Year}
        </p>
        <p
          className={`mt-1 text-sm tracking-wide text-gray-400 uppercase ${
            theme === "Dark" ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          {movieData.Type}
        </p>

        {children}
      </div>
    </div>
  );
};
