import { useParams } from "react-router-dom";
import { useData } from "../context/dataContext";

export default function SingleMovie() {
  const { movieID } = useParams();
  const {
    dataState: { movieList },
  } = useData();

  const movie = movieList.find((movie) => movie.id === +movieID);

  return (
    <main className="min-w-screen mt-[8rem] flex justify-center">
      <div className="flex w-4/5 justify-center gap-4 rounded-lg bg-slate-100 p-3 shadow-lg">
        <div className="w-[40%]">
          <img
            src={movie.imageURL}
            alt={movie.title}
            className="h-full w-full rounded-md object-cover"
          />
        </div>

        <div className="flex w-[60%] flex-col gap-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>

          <p>{movie.summary}</p>
          <p>Year: {movie.year}</p>
          <p>
            Genre:{" "}
            {movie.genre.map((name, i) =>
              i === movie.genre.length - 1 ? name : `${name}, `,
            )}
          </p>
          <p>Rating: {movie.rating}</p>
          <p>Director: {movie.director}</p>
          <p>Writer: {movie.writer}</p>
          <p>
            Cast:{" "}
            {movie.cast.map((name, i) =>
              i === movie.cast.length - 1 ? name : `${name}, `,
            )}
          </p>

          <div className="flex gap-4">
            <button className="rounded bg-black px-3 py-1 text-base font-bold text-white hover:opacity-90">
              Star
            </button>

            <button className="rounded bg-black px-3 py-1 text-base font-bold text-white hover:opacity-90">
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
