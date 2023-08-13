import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";
import { ratings, releaseYears } from "../utils/constants";

export default function Filters() {
  const {
    dataState: { movieList },
  } = useData();

  const genres = [...new Set(movieList.flatMap(({ genre }) => genre))];

  return (
    <div className="flex items-center justify-between">
      <h3>Movies</h3>

      <select
        name="genre"
        id="genre"
        className="rounded border-2 border-gray-700 px-[5px]"
      >
        <option value="all">All genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select
        name="year"
        id="year"
        className="rounded border-2 border-gray-700 px-[5px]"
      >
        <option value="all">Release year</option>
        {releaseYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        name="rating"
        id="rating"
        className="rounded border-2 border-gray-700 px-[5px]"
      >
        <option value="all">Ratings</option>
        {ratings.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>

      <Link
        to={"/newmovie"}
        className="rounded bg-black px-3 py-1 text-base text-slate-200 hover:opacity-90"
      >
        Add a Movie
      </Link>
    </div>
  );
}
