import noPoster from "../../assets/cinema.jpg";
import type { MovieProps } from "../MovieCard/MovieCardProps.types";
import { type ReactNode } from "react";

export const MovieCard = ({
  movieData,
  children,
}: {
  movieData: MovieProps;
  children: ReactNode;
}) => {
  return (
    <div className="flex gap-4 rounded-xl bg-white p-4 shadow">
      <img
        src={movieData.Poster !== "N/A" ? movieData.Poster : noPoster}
        alt="Poster"
        className="w-[100px] rounded object-cover"
      />
      <div>
        <h2 className="text-lg font-bold">{movieData.Title}</h2>
        <p>Year:{movieData.Year}</p>
        <p className="text-gray-500">{movieData.Type}</p>
      </div>

      {children}
    </div>
  );
};
