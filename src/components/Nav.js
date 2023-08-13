import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const getClassName = ({ isActive }) => {
    return isActive ? "mx-2 font-bold" : "mx-2";
  };

  return (
    <div className="flex items-center justify-between bg-black p-4 font-Libre">
      <Link to={"/"} className="text-2xl font-bold text-white">
        IMDB
      </Link>

      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search.."
          className="p-[2px] px-2"
        />
      </div>

      <div className="flex gap-4 text-white">
        <NavLink to={"/"} className={getClassName}>
          Movies
        </NavLink>
        <NavLink to={"/watchlist"} className={getClassName}>
          Watchlist
        </NavLink>
        <NavLink to={"/starred"} className={getClassName}>
          Starred
        </NavLink>
      </div>
    </div>
  );
}
