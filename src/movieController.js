import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const getAddMovie = (req, res) =>
  res.render("addMovie", { pageTitle: "Add Movie" });

export const postAddMovie = (req, res) => {
  const {
    body: { title, synopsis, genres }
  } = req;
  const genreArray = genres.trim().split(",");
  console.log(genreArray);
  const movie = { title, synopsis, genres: genreArray };
  addMovie(movie);
  res.redirect("/");
};
