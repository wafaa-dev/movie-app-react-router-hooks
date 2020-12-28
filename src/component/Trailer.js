import React ,{useState, useEffect} from "react";
import {Link} from "react-router-dom";



const Trailer =({Films,match}) => {
  const [movie, setMovie]= useState ({});
  
  console.log(Films)
  // console.log(movie)

  useEffect(()=>{
  setMovie(Films.find((film)=> film.id ===match.params.id));
  },[movie]);

 return(

<div className="div1">
  {/* setMovie={setMovie}; */}
  <Link to="/">
    <button type="button" className="home-btn" >
     home page 
    </button>
  </Link>
  <span className="movie-title" >{movie.Title} 

  </span>
<div className="movie-video" >
<frame
  width="500"
  height="300"
  src= {movie.Trailer}
 >
</frame>
</div>
</div>

  
 )
}
export default Trailer

