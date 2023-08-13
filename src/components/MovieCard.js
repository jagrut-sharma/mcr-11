import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";
import { ACTIONS } from "../utils/ACTIONS";

export default function MovieCard({ movie, watchlist: fromWatchlist }) {
  const {
    dataState: { watchlist, starredList },
    dataDispatch,
  } = useData();

  const isInWatchlist = watchlist.some(({ id }) => +id === +movie.id);
  const isStarred = starredList.some(({ id }) => +id === +movie.id);

  const handleWatchlist = () => {
    const newWatchlist = [...watchlist, movie];
    dataDispatch({ type: ACTIONS.ADD_WATCHLIST, payload: newWatchlist });
  };

  const handleRemoveWatchlist = () => {
    const newWatchlist = watchlist.filter(({ id }) => id !== movie.id);
    dataDispatch({ type: ACTIONS.REMOVE_WATCHLIST, payload: newWatchlist });
  };

  const handleStarredList = () => {
    const newStarredlist = [...starredList, movie];
    dataDispatch({ type: ACTIONS.ADD_STARRED, payload: newStarredlist });
  };

  const handleRemoveStarredlist = () => {
    const newStarredlist = starredList.filter(({ id }) => id !== movie.id);
    dataDispatch({ type: ACTIONS.REMOVE_STARRED, payload: newStarredlist });
  };

  return (
    <div className="flex w-[19rem] flex-col items-center rounded-md p-2 shadow-md">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={movie.imageURL}
          alt={movie.title}
          className="h-[20rem] w-[18rem]"
        />
      </Link>

      <h3 className="text-xl font-bold">{movie.title}</h3>

      <p className="mb-[1rem]">{movie.summary}</p>

      <div className="mt-auto flex w-full justify-between">
        <div>
          {isStarred ? (
            <button
              className="rounded bg-black px-3 py-1 text-base font-bold text-white hover:opacity-90"
              onClick={handleRemoveStarredlist}
            >
              Unstar
            </button>
          ) : (
            <button
              className="rounded bg-black px-3 py-1 text-base font-bold text-white hover:opacity-90"
              onClick={handleStarredList}
            >
              Star
            </button>
          )}
        </div>

        <div>
          {isInWatchlist ? (
            <button
              className="rounded bg-black px-3 py-1 text-base font-bold text-white hover:opacity-90"
              onClick={handleRemoveWatchlist}
            >
              Remove Watchlisted
            </button>
          ) : (
            <button
              className="rounded bg-black px-3 py-1 text-base font-bold text-white hover:opacity-90"
              onClick={handleWatchlist}
            >
              Add to watchlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
