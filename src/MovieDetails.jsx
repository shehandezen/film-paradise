import { useLoaderData } from "react-router-dom";
import "./App.css";
import PlaceholderImage from "./placeholder.png";

const API_URL = "https://www.omdbapi.com?apikey=3347addc";

export const MovieDetails = () => {
  const data = useLoaderData();
  return (
    <div className="container-detail">
      <img src={data.Poster !== "N/A" ? data.Poster : PlaceholderImage} />

      <div className="details">
        <h2>{data.Title}</h2>
        <div className="detail-body">
          <div className="detail-group">
            <div className="label">Genre </div>
            <div className="data">{data.Genre}</div>
          </div>

          <div className="detail-group">
            <div className="label">Type </div>
            <div className="data">{data.Type}</div>
          </div>

          <div className="detail-group">
            <div className="label">Year </div>
            <div className="data">{data.Year}</div>
          </div>

          <div className="detail-group">
            <div className="label">Rated </div>
            <div className="data">{data.Rated}</div>
          </div>

          <div className="detail-group">
            <div className="label">Released </div>
            <div className="data">{data.Released}</div>
          </div>

          <div className="detail-group">
            <div className="label">Runtime </div>
            <div className="data">{data.Runtime}</div>
          </div>

          <div className="detail-group">
            <div className="label">Director </div>
            <div className="data">{data.Director}</div>
          </div>

          <div className="detail-group">
            <div className="label">Writer </div>
            <div className="data">{data.Writer}</div>
          </div>

          <div className="detail-group">
            <div className="label">Actors </div>
            <div className="data">{data.Actors}</div>
          </div>

          <div className="detail-group">
            <div className="label">Awards </div>
            <div className="data">{data.Awards}</div>
          </div>

          <div className="detail-group">
            <div className="label">Plot </div>
            <div className="data">{data.Plot}</div>
          </div>

          <div className="detail-group">
            <div className="label">Language </div>
            <div className="data">{data.Language}</div>
          </div>

          <div className="detail-group">
            <div className="label">Country </div>
            <div className="data">{data.Country}</div>
          </div>

          <div className="detail-group">
            <div className="label">imdb Rating </div>
            <div className="data">{data.imdbRating}</div>
          </div>

          <div className="detail-group">
            <div className="label">imdb Votes </div>
            <div className="data">{data.imdbVotes}</div>
          </div>

          <div className="detail-group">
            <div className="label">Box Office </div>
            <div className="data">{data.BoxOffice}</div>
          </div>

          <div className="detail-group">
            <div className="label">Website </div>
            <div className="data">
              <a href={data.Website == !"N/A" ? data.Website : "#"}>
                {data.Website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const dataLoader = async ({ params }) => {
  const response = await fetch(`${API_URL}&i=${params.id}`);
  const data = response.json();
  return data;
};
