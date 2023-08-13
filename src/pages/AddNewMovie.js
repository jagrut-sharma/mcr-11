import { useNavigate } from "react-router-dom";
import { initialMovieForm, ratings, releaseYears } from "../utils/constants";
import { useImmer } from "use-immer";
import { useData } from "../context/dataContext";
import { ACTIONS } from "../utils/ACTIONS";

export default function AddNewMovie() {
  const [movieData, setMovieData] = useImmer(initialMovieForm);
  const {
    dataState: { movieList },
    dataDispatch,
  } = useData();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovieData((draft) => {
      draft[e.target.name] = e.target.value;
    });
  };

  const handleAddNew = () => {
    const id = movieList.length + 1;
    const castArr = movieData.cast.split(",").map((c) => c.trim());
    const genreArr = movieData.genre.split(",").map((g) => g.trim());
    const copyMovieData = { ...movieData, id, cast: castArr, genre: genreArr };
    const payloadData = [...movieList, copyMovieData];

    dataDispatch({ type: ACTIONS.ADD_MOVIE, payload: payloadData });
    setMovieData(initialMovieForm);
    navigate("/");
  };

  return (
    <main className="mx-auto flex w-[50%] flex-col gap-4 p-8 font-Libre">
      <h1 className="text-center text-3xl font-bold">Add new movie</h1>

      <div className="flex flex-col">
        <label htmlFor="title" className="text-lg">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="rounded border-2 border-gray-700 px-[5px]"
          placeholder="Title"
          onChange={handleChange}
          value={movieData.title}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="rating" className="text-lg">
          Rating:
        </label>
        <select
          name="rating"
          id="rating"
          className="rounded border-2 border-gray-700 px-[5px]"
          onChange={handleChange}
          value={movieData.rating}
        >
          <option value="all">Select Rating</option>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="year" className="text-lg">
          Release Year:
        </label>
        <select
          name="year"
          id="year"
          className="rounded border-2 border-gray-700 px-[5px]"
          onChange={handleChange}
          value={movieData.year}
        >
          <option value="all">Release year</option>
          {releaseYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="genre" className="text-lg">
          Genre:
        </label>
        <input
          type="text"
          name="genre"
          id="genre"
          className="rounded border-2 border-gray-700 px-[5px]"
          placeholder="enter genre separated by commas"
          onChange={handleChange}
          value={movieData.genre}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="director" className="text-lg">
          Director:
        </label>
        <input
          type="text"
          name="director"
          id="director"
          className="rounded border-2 border-gray-700 px-[5px]"
          placeholder="Director"
          onChange={handleChange}
          value={movieData.director}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="writer" className="text-lg">
          Writer:
        </label>
        <input
          type="text"
          name="writer"
          id="writer"
          className="rounded border-2 border-gray-700 px-[5px]"
          placeholder="Writer"
          onChange={handleChange}
          value={movieData.writer}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="cast" className="text-lg">
          Cast:
        </label>
        <input
          type="text"
          name="cast"
          id="cast"
          className="rounded border-2 border-gray-700 px-[5px]"
          placeholder="enter cast separated by commas"
          onChange={handleChange}
          value={movieData.cast}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="summary" className="text-lg">
          Summary:
        </label>
        <textarea
          name="summary"
          id="summary"
          cols="30"
          rows="5"
          className="resize-none rounded border-2 border-gray-700 px-[5px]"
          placeholder="Summary"
          onChange={handleChange}
          value={movieData.summary}
        ></textarea>
      </div>

      <div className="flex flex-col">
        <label htmlFor="imageURL" className="text-lg">
          Image link:
        </label>
        <input
          type="text"
          name="imageURL"
          id="imageURL"
          className="rounded border-2 border-gray-700 px-[5px]"
          placeholder="image link"
          onChange={handleChange}
          value={movieData.imageURL}
        />
      </div>

      <button
        className="mt-3 w-max rounded-md bg-black p-2 px-4 text-base font-bold text-white hover:opacity-80"
        onClick={handleAddNew}
      >
        Add Movie
      </button>
    </main>
  );
}
