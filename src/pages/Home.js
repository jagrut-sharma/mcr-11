import React from "react";
import { useData } from "../context/dataContext";
import Filters from "../components/Filters";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const {
    dataState: { movieList },
  } = useData();

  return (
    <main className="p-8 font-Libre">
      <Filters />

      <div className="my-4 flex flex-wrap gap-4">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
