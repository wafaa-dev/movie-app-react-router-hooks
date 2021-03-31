import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import "./Style.css";
const MovieList = ({ Films, searchByName, searchByRate }) => {

  return (
    <div
      className="my-List" 
      style={{
        textAlign:"center",
      }}
    >
      {Films.filter(
        (e) =>
          e.Title.toLowerCase().includes(searchByName.toLowerCase().trim()) &&
          e.Rate >= searchByRate
      ).map((e, index) => (
        <Link to={`/Trailer/${e.id}/${e.Title}`} style={{textDecoration:'none'}}>
          <MovieCard
            key={index}
            poster={e.PosterUrl}
            title={e.Title}
            rating={e.Rate}
            description={e.Description}
            date={e.Date}
            id={e.id}
            trailer={e.Trailer}
          />
        </Link>
      ))}
    </div>
  );
};
export default MovieList;