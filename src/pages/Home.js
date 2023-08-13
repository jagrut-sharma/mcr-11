import React from "react";
import { useData } from "../context/dataContext";
import Filters from "../components/Filters";
import MovieCard from "../components/MovieCard";
import { getFilteredList } from "../utils/constants";

export default function Home() {
  const {
    dataState: { movieList, filtersVal },
  } = useData();

  const filteredMovieList = getFilteredList(movieList, filtersVal);

  return (
    <main className="p-8 font-Libre">
      <Filters />

      {filteredMovieList.length === 0 ? (
        <h1 className="mt-[4rem] text-center text-3xl font-bold">
          No Movie Found
        </h1>
      ) : (
        <div className="my-4 flex flex-wrap gap-4">
          {filteredMovieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
