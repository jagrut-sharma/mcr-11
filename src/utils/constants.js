export const ratings = Array.from({ length: 10 }, (_, indx) => indx + 1);

const currentYear = new Date().getFullYear();
export const releaseYears = Array.from(
  { length: currentYear - 1989 },
  (_, indx) => 1990 + indx,
);

export const initialMovieForm = {
  title: "",
  year: "all",
  genre: "",
  rating: "all",
  director: "",
  writer: "",
  cast: "",
  summary: "",
  imageURL: "",
};

export const initialFilterVal = {
  genre: "all",
  year: "all",
  rating: "all",
  search: "",
};

const genreFilter = (movieList, filterVal) => {
  if (filterVal.genre === "all") return movieList;

  return movieList.filter(({ genre }) => genre.includes(filterVal.genre));
};

const ratingFilter = (movieList, filterVal) => {
  if (filterVal.rating === "all") return movieList;

  return movieList.filter(({ rating }) => +rating === +filterVal.rating);
};

const releaseYearFilter = (movieList, filterVal) => {
  if (filterVal.year === "all") return movieList;

  return movieList.filter(({ year }) => +year <= +filterVal.year);
};

const searchFilter = (movieList, filterVal) => {
  // title, cast or director
  const searchTxt = filterVal.search.toLowerCase().trim();
  if (searchTxt.length === 0) return movieList;

  return movieList.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchTxt) ||
      movie.cast.some((name) => name.toLowerCase().includes(searchTxt)) ||
      movie.director.toLowerCase().includes(searchTxt)
    );
  });
};

const filterFunctions = [
  genreFilter,
  ratingFilter,
  releaseYearFilter,
  searchFilter,
];

export const getFilteredList = (movieList, filterVal) =>
  filterFunctions.reduce(
    (acc, currFunc) => currFunc(acc, filterVal),
    movieList,
  );
