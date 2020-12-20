import React from "react";
import FilmRate from "./FilmRate";
import './Style.css';

const MovieCard =({Film:{Title, PosterUrl,Description,Rate ,Date},})  => {
  
  return (
<div className='card' >
  <div className='poster'>
  <img src={PosterUrl} alt='filmposter'/>
  </div>
  <div className='details1'>
<h1 > {Title} </h1>
    <h4>   {Description} </h4> 
    </div>
  <div className='details2'>
    
       {Date} <br/>
<div>
    <FilmRate  Rate={Rate} />
    </div>
       </div> 
   
 </div> 

  );
};
export default MovieCard;