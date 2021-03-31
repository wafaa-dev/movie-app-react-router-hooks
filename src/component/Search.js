import React from "react";
import FilmRate from './FilmRate';
import './Style.css';

const Search =({setSearchByName , searchByRate , setSearchByRate}) => {
 
  return (
    <div className='search-container'style={{display:"flex", textAlign:"center"}}>
    <div className="search"> 
    <input 
    type="text" 
    placeholder="type to find a movie ..." 
     onChange ={(e)=> setSearchByName(e.target.value)}
     />
 </div>
    <div  className="rate-search">
      <h6> find a movie by rate </h6>
<FilmRate Rate={searchByRate} setSearchByRate={setSearchByRate} />
    </div>
   
     </div>
  );
};
export default Search;