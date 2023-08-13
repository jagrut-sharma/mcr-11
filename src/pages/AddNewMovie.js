import { useNavigate } from "react-router-dom";
import { ratings, releaseYears } from "../utils/constants";

export default function AddNewMovie() {
  const navigate = useNavigate();

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
          placeholder="title"
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
        />
      </div>

      <button className="mt-3 w-max rounded-md bg-black p-2 px-4 text-base font-bold text-white hover:opacity-80">
        Add Movie
      </button>
    </main>
  );
}
