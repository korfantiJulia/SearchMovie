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
      className={`flex min-h-[220px] w-[350px] gap-4 rounded-2xl bg-white p-4 shadow-lg transition hover:scale-[1.02] hover:shadow-2xl ${theme === "Dark" ? "bg-zinc-700 shadow-white/10" : "bg-white shadow-lg"}`}
    >
      <img
        src={movieData.Poster !== "N/A" ? movieData.Poster : noPoster}
        alt="Poster"
        className="h-[160px] w-[110px] rounded-lg object-cover"
      />
      <div>
        <h2
          className={`text-xl font-bold ${theme === "Dark" ? "text-white" : "text-zinc-800"}`}
        >
          {movieData.Title}
        </h2>
        <p className="mt-2 text-sm text-zinc-600">Year:{movieData.Year}</p>
        <p className="mt-1 text-sm tracking-wide text-gray-400 uppercase">
          {movieData.Type}
        </p>

        {children}
      </div>
    </div>
  );
};
