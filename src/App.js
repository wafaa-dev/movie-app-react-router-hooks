import React ,{useState}from "react";
import './component/Style.css';
import NewMovie from "./component/newMovie";
import MovieList from './component/MovieList';
import Search from "./component/Search";

function  App  () {
 const [Films, setFilms] = useState([
    {
    id:Math.random(),
    Title: 'the notebook',
    Description :'The story he reads follows two young lovers named Allie Hamilton and Noah Calhoun, who meet one evening at a carnival. But they are separated by Allie`s parents who disapprove of Noah`s unwealthy family, and move Allie away.' ,
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/200406-the-notebook.jpeg' ,
    Date :'2000',
    Rate :'5' 
    },
    {
    id:Math.random(),
    Title: 'The best of me',
    Description :'Based on the bestselling novel by acclaimed author Nicholas Sparks, The Best of Me tells the story of Dawson and Amanda, two former high school sweethearts who find themselves reunited after 20 years apart, when they return to their small town for the funeral of a beloved friend.',
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2014/07/BOMPoster-680x972.jpg' ,
     Date : '2014',
     Rate :'4' 
    },
    {
      id:Math.random(),
      Title: 'Safe heaven',
      Description :'A young woman with a mysterious past lands in Southport, North Carolina where her bond with a widower forces her to confront the dark secret that haunts her. When a mysterious young woman named Katie appears in the small North Carolina town of Southport, her sudden arrival raises questions about her past.'  ,
      PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/safe-haven-movie-poster-680x972.jpg' ,
     Date :'2013',
     Rate :'4' 
    },
     {
      id:Math.random(),
      Title: 'A walk to remember',
      Description :'A Walk to Remember is the story of an only son of a wealthy family that finds true love with the most unexpected person. The daughter of a minister (Mandy Moore) meets the only son (Shane West) and the story takes us through hard times, love and bitter sweet passion.' ,
      PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/200201-a-walk-to-remember.jpeg' ,
     Date :'2002',
     Rate :'3' 
    },

    ]);
const [searchByName, setSearchByName]=useState('');
const [searchByRate, setSearchByRate]=useState(1)
    
const addMovie=(e, newFilm) => {
     e.preventDefault();
      setFilms ([...Films,newFilm]);
    }
 
	return (
		<div className='app'>
      <Search 
      setSearchByName={setSearchByName}
      searchByRate={searchByRate}
      setSearchByRate={setSearchByRate}
      />

      <h1> The Best Nicholas Sparks Movies, Ranked</h1>
      <div className="myList" > </div>
    <MovieList 
    Films={Films} 
    searchByName={searchByName}
      searchByRate={searchByName}
    />
   <div style={{display:'flex', justifyContent:'center'}}> 
     	<NewMovie addMovie={addMovie} /> 
   </div>
	
		</div>
  );

};

export default App ;
