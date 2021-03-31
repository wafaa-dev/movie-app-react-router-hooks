import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Trailer = ({ films, match }) => {
  const [theMovie, setTheMovie] = useState({});
  useEffect(() => {
    const item = films.find((e) => {return e.id === +match.params.id;});
console.log(item)
    setTheMovie(item);
  }, [films, match.params.id]);
  
  return (
    <div className="div1" style={{textAlign:'center'}}>
      <Link to="/">
        <button type="button" className="home-btn" style={{backgroundColor:'#b498c2',color:'black', alignItems:"center",height:'30px' , width:'150px'}}>
          home page
        </button>
      </Link>
      <div className="trailer-container">
        <h1 className="movie-title"> {theMovie.Title} 
        
        </h1>
        <div className="movie-container" style={{textAlign:'center'}} >
              <iframe
        title="this is the title"
          className="movie"
          width="700"
          height="394"
          src={theMovie.Trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
           </div>
    
        
      </div>
    </div>
  );
};
export default Trailer;