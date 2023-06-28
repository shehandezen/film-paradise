import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=3347addc";

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <>
      <div className="search">
        <input
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div
              onClick={(e) => {
                console.log(movie.imdbID);
              }}
            >
              <Link to={`/movie/${movie.imdbID}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="container empty">
          <h2>No movies found!</h2>
        </div>
      )}
    </>
  );
};

export default MovieCards;
