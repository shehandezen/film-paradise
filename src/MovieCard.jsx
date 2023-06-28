import React from "react";
import "./App.css";
import PlaceholderImage from "./placeholder.png";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="year">
        <p>{movie.Year}</p>
      </div>
      <img src={movie.Poster !== "N/A" ? movie.Poster : PlaceholderImage} />
      <div className="description">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
