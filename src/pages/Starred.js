import MovieCard from "../components/MovieCard";
import { useData } from "../context/dataContext";

export default function Starred() {
  const {
    dataState: { starredList },
  } = useData();

  return (
    <main className="p-8 font-Libre">
      {starredList.length === 0 ? (
        <h1 className="mt-[4rem] text-center text-3xl font-bold">
          Add movies to watchlist
        </h1>
      ) : (
        <div className="my-4 flex flex-wrap gap-4">
          {starredList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} watchlist />
          ))}
        </div>
      )}
    </main>
  );
}
