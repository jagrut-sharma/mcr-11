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
      localStorage.setItem("movieList", JSON.stringify(action.payload));
      break;
    }

    case ACTIONS.APPLY_FILTER: {
      draft.filtersVal[action.payload.category] = action.payload.value;
      break;
    }

    case ACTIONS.ADD_WATCHLIST: {
      draft.watchlist = action.payload;
      localStorage.setItem("watchlist", JSON.stringify(action.payload));
      break;
    }

    case ACTIONS.REMOVE_WATCHLIST: {
      draft.watchlist = action.payload;
      localStorage.setItem("watchlist", JSON.stringify(action.payload));
      break;
    }

    case ACTIONS.ADD_STARRED: {
      draft.starredList = action.payload;
      localStorage.setItem("starredList", JSON.stringify(action.payload));
      break;
    }

    case ACTIONS.REMOVE_STARRED: {
      draft.starredList = action.payload;
      localStorage.setItem("starredList", JSON.stringify(action.payload));
      break;
    }

    default:
      break;
  }
};
