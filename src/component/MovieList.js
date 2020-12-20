import React from "react";
import MovieCard from  './MovieCard';
import './Style.css';

const MovieList= ({ Films, searchByName, searchByRate})  => {
    return (
    <div className="my-List"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
 
>
{Films.filter( (e)=> e.Title.toLowerCase().includes(searchByName.toLowerCase().trim()) && e.Rate >= searchByRate)
.map((e,index) =>( <MovieCard Film={e} key={index} />))}
		</div>
  );
};

export default MovieList ;
