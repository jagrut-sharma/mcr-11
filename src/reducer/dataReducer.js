import { ACTIONS } from "../utils/ACTIONS";
import { movies } from "../utils/data";

export const initialDataState = {
  movieList: localStorage.getItem("movieList")
    ? JSON.parse(localStorage.getItem("movieList"))
    : movies,
  watchlist: [],
};

export const dataReducer = (draft, action) => {
  switch (action.type) {
    case ACTIONS.TEST:
      break;

    default:
      break;
  }
};
