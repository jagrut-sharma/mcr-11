export const ratings = Array.from({ length: 10 }, (_, indx) => indx + 1);

const currentYear = new Date().getFullYear();
export const releaseYears = Array.from(
  { length: currentYear - 1989 },
  (_, indx) => 1990 + indx,
);

export const newMovieForm = {
  title: "",
  year: "",
  genre: [],
  rating: "",
  director: "",
  writer: "",
  cast: [],
  summary: "",
  imageURL: "",
};
