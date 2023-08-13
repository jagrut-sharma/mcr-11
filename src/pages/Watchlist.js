import MovieCard from "../components/MovieCard";
import { useData } from "../context/dataContext";

export default function Watchlist() {
  const {
    dataState: { watchlist },
  } = useData();

  return (
    <main className="p-8 font-Libre">
      {watchlist.length === 0 ? (
        <h1 className="mt-[4rem] text-center text-3xl font-bold">
          Add movies to watchlist
        </h1>
      ) : (
        <div className="my-4 flex flex-wrap gap-4">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} watchlist />
          ))}
        </div>
      )}
    </main>
  );
}
