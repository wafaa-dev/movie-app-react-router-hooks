import React from "react";

import FilmRate from "./FilmRate";
import "./Style.css";
const MovieCard = ({ title, poster, rating, date, id,description,trailer }) => {

  return (
    <div className="container">
    <div className="card">
      <div className="title"  >
        <p style={{color:'#234552',fontFamily:'fantasy',fontWeight:'bold',fontSize:'40px', textAlign:"center" ,TextDecoration:"none",  overflow: 'hidden',
  background: 'transparent',marginBottom:'0',paddingBottom:'0' }} > {title} </p>
      </div>
        <div className="date" style={{color:'lila',fontSize:'20px',marginTop:'0',paddingTop:'0'}}>
        {date} <br />
      </div>
        <div className="poster">
        <img src={poster} alt="filmposter" style={{maxHeight: '100%' , maxWidth: '100%' , objectFit: 'contain', marginTop:'20px',}}/>
      </div>
      <div className='description'>
      <p> {description}  </p>
      </div>
<div className='rating'>
       <div className="rate" >
          <FilmRate key={id} rating={rating} />
        </div>
</div>
    </div>
   </div>
  );
};
export default MovieCard;