import React ,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
  
const FilmDescription= ({Films,match}) => {
    const [Movie, setMovie]= useState ({});
  useEffect(()=>{
  const item =Films.find((Films)=> Films.id ===match.params.id);
  Movie(item);
  },);

return(

<div className="div2">
   setMovie={setMovie};
  <Link to="/">
    <button type="button" className="home-btn" >
     home page 
    </button>
  </Link>
  <span className="movie-title" > {Movie.Title} 

  </span>

<div>
  <p> {Movie.Description} </p>
</div>
</div>
)
  }
export default FilmDescription 
