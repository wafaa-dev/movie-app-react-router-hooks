import React ,{useState, useEffect} from "react";
import {Link} from "react-router-dom";



const Trailer =({Films,match}) => {
  const [Movie, setMovie]= useState ({});
  useEffect(()=>{
  const item =Films.find((Films)=> Films.id ===match.params.id);
  Movie(item);
  },);

 return(

<div className="div1">
  setMovie={setMovie};
  <Link to="/">
    <button type="button" className="home-btn" >
     home page 
    </button>
  </Link>
  <span className="movie-title" >{Movie.Title} 

  </span>
<div className="movie-video" >
<frame
  width="500"
  height="300"
  src= {Movie.Trailer}
 >
</frame>
</div>
</div>

  
 )
}
export default Trailer

