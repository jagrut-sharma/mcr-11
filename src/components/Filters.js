import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";
import { ratings, releaseYears } from "../utils/constants";
import { ACTIONS } from "../utils/ACTIONS";

export default function Filters() {
  const {
    dataState: { movieList, filtersVal },
    dataDispatch,
  } = useData();

  const genres = [...new Set(movieList.flatMap(({ genre }) => genre))];

  const handleChange = (e) => {
    dataDispatch({
      type: ACTIONS.APPLY_FILTER,
      payload: {
        category: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold">Movies</h3>

      <select
        name="genre"
        id="genre"
        className="rounded border-2 border-gray-700 px-[5px]"
        value={filtersVal.genre}
        onChange={handleChange}
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
        value={filtersVal.year}
        onChange={handleChange}
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
        value={filtersVal.rating}
        onChange={handleChange}
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
