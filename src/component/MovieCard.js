import React from "react";

import {Link} from 'react-router-dom';
import FilmRate from "./FilmRate";
import './Style.css';

const MovieCard =({Film:{Title, PosterUrl,Rate ,Date}})  => {
// const MovieCard =(Film)  => {
  
  return (


<div className='card' >

  <div className='poster'>
  <img src={PosterUrl} alt='filmposter'/>
  </div>
  <div className='details1'>
   
<h1 > {Title} </h1>

  <h3 className="filmDescription"> 
     
    <Link to='/FilmDescription:id'>  see film description </Link> </h3>  
    
 
<h5 ClassName="trailer">  <Link to='/Trailer:id'>  click here to watch the trailer </Link>  </h5>

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