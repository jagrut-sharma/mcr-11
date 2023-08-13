import { ACTIONS } from "../utils/ACTIONS";
import { initialFilterVal } from "../utils/constants";
import { movies } from "../utils/data";

export const initialDataState = {
  movieList: localStorage.getItem("movieList")
    ? JSON.parse(localStorage.getItem("movieList"))
    : movies,

  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],

  starredList: localStorage.getItem("starredList")
    ? JSON.parse(localStorage.getItem("starredList"))
    : [],

  filtersVal: { ...initialFilterVal },
};

export const dataReducer = (draft, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MOVIE: {
      draft.movieList = action.payload;
      localStorage.setItem("movieList", action.payload);
      break;
    }

    case ACTIONS.APPLY_FILTER: {
      draft.filtersVal[action.payload.category] = action.payload.value;
      break;
    }

    default:
      break;
  }
};
