import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="flex w-[16rem] flex-col items-center rounded-md p-2 shadow-md">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={movie.imageURL}
          alt={movie.title}
          className="h-[20rem] w-[15rem]"
        />
      </Link>

      <h3 className="text-xl font-bold">{movie.title}</h3>

      <p className="mb-[1rem]">{movie.summary}</p>

      <div className="mt-auto flex w-full justify-between">
        <button className="rounded bg-black px-3 py-1 text-base font-bold text-white hover:opacity-90">
          Star
        </button>
        <button className="rounded bg-black px-3 py-1 text-base font-bold text-white hover:opacity-90">
          Add to wishlist
        </button>
      </div>
    </div>
  );
}
