import React ,{useState}from "react";
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import './component/Style.css';
import NewMovie from "./component/newMovie";
import MovieList from './component/MovieList';
import Search from "./component/Search";
import Trailer from "./component/Trailer";


function  App  () {
 const [Films, setFilms] = useState([
    {
    // id:Math.random(),
    id:1,
    Title : 'The Notebook',
    Description :'The story he reads follows two young lovers named Allie Hamilton and Noah Calhoun, who meet one evening at a carnival. But they are separated by Allie`s parents who disapprove of Noah`s unwealthy family, and move Allie away.' ,
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/200406-the-notebook.jpeg' ,
    Date :'2000',
    Rate :'5' ,
    Trailer:'https://www.youtube.com/embed/yDJIcYE32NU"'
    },
    {
    // id:Math.random(),
    id:2,
    Title: 'The Best Of Me',
    Description :'Based on the bestselling novel by acclaimed author Nicholas Sparks, The Best of Me tells the story of Dawson and Amanda, two former high school sweethearts who find themselves reunited after 20 years apart, when they return to their small town for the funeral of a beloved friend.',
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2014/07/BOMPoster-680x972.jpg' ,
     Date : '2014',
     Rate :'4' ,
     Trailer:'https://www.youtube.com/embed/mrEvBiqoeRc'
    },
    {
      // id:Math.random(),
      id:3,
      Title: 'Safe Heaven',
      Description :'A young woman with a mysterious past lands in Southport, North Carolina where her bond with a widower forces her to confront the dark secret that haunts her. When a mysterious young woman named Katie appears in the small North Carolina town of Southport, her sudden arrival raises questions about her past.'  ,
      PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/safe-haven-movie-poster-680x972.jpg' ,
     Date :'2013',
     Rate :'4' ,
      Trailer:'https://www.youtube.com/embed/ejQEdUwv0ew'
    },
      {
    // id:Math.random(),
    id:4,
    Title : 'The Longest Ride',
    Description :'Based on the bestselling novel by master storyteller Nicholas Sparks, THE LONGEST RIDE centers on the star-crossed love affair between Luke, a former champion bull rider looking to make a comeback, and Sophia, a college student who is about to embark upon her dream job in New York City`s art world.' ,
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2014/12/201504-longest-ride.jpg' ,
    Date :'2015',
    Rate :'4' ,
    Trailer:'https://www.youtube.com/embed/FUS_Q7FsfqU'
    },
    {
    // id:Math.random(),
    id:5,
    Title : 'The Lucky One',
    Description :'It is an adaptation of Nicholas Sparks 2008 novel of the same name. The film stars Zac Efron as Logan Thibault, a US Marine who finds a photograph of a young woman while serving in Iraq, carries it around as a good luck charm, and later tracks down the woman, with whom he begins a relationship.' ,
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/201204-the-lucky-one.jpeg' ,
    Date :'2009',
    Rate :'3' ,
    Trailer:'https://www.youtube.com/embed/9w8lE83oYeM'
    },
    {
    // id:Math.random(),
    id:6,
    Title : 'Dear John',
    Description :'Dear John tells the heartbreaking story of two lovely young people who fail to find happiness together because they are trapped in an adaptation of a Nicholas Sparks novel. Their romance leads to bittersweet loss thats so softened by the sweet characters that it feels like triumph.' ,
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/201002-dear-john.jpeg' ,
    Date :'2010',
    Rate :'4' ,
    Trailer:'https://www.youtube.com/embed/r0fq5dd0C60'
    },
    {
    // id:Math.random(),
    id:7,
    Title : 'The Choice',
    Description :'Travis and Gabby first meet as neighbors in a small coastal town and wind up in a relationship that is tested by life`s most defining events. In a small coastal town, the veterinarian Travis Shaw works with his father Shep and is very close to his beloved sister Steph.' ,
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2015/10/201602-the-choice.jpg' ,
    Date :'2016',
    Rate :'3' ,
    Trailer:'https://www.youtube.com/embed/nWPM1jTnuuo'
    },
    {
    // id:Math.random(),
    id:8,
    Title : 'Nights In Rodanthe',
    Description :'A doctor, who is travelling to see his estranged son, sparks with an unhappily married woman at a North Carolina inn. Adrienne Willis, a woman with her life in chaos, retreats to the tiny coastal town of Rodanthe, in the Outer Banks of North Carolina, to tend to a friend`s inn for the weekend.' ,
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/200809-nights-in-rodanthe.jpeg' ,
    Date :'2008',
    Rate :'4' ,
    Trailer:'https://www.youtube.com/embed/mvN5lCPl7m8'
    },
      {
    // id:Math.random,
    id:9,
    Title : 'The Last Song',
    Description :'The Last Song stars Miley Cyrus, Liam Hemsworth, and Greg Kinnear, and follows a troubled teenager as she reconnects with her estranged father and falls in love during a summer in a quiet Southern United States beach town.' ,
    PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/201003-the-last-song.jpeg' ,
    Date :'2010',
    Rate :'3' ,
    Trailer:'https://www.youtube.com/embed/vZH0Nf4KLBo'
    },
    
     {
      // id:Math.random(),
      id:10,
      Title: 'A Walk To Remember',
      Description :'A Walk to Remember is the story of an only son of a wealthy family that finds true love with the most unexpected person. The daughter of a minister (Mandy Moore) meets the only son (Shane West) and the story takes us through hard times, love and bitter sweet passion.' ,
      PosterUrl:'https://nicholassparks.com/wp-content/uploads/2013/07/200201-a-walk-to-remember.jpeg' ,
     Date :'2002',
     Rate :'3' ,
      Trailer:'https://www.youtube.com/embed/k3B2XBcp7vA'
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
       <Router> 
    <Switch> 
<Route exact path="/"
render= {()=> {
  return (
  <>
   <h1>Nicholas Sparks Best Movies, Ranked</h1>
<Search 
      setSearchByName={setSearchByName}
      searchByRate={searchByRate}
      setSearchByRate={setSearchByRate}
      />
    <MovieList 
    Films={Films} 
    searchByName={searchByName}
    searchByRate={searchByRate}
    />
    <NewMovie addMovie={addMovie} /> 
  </>
)}
}
/>
     <Route path='/Trailer/:id/:name' 
 render= {(props)=> {
     return <Trailer {...props } films={Films} />
   }}>  
     </Route>
    </Switch>
       </Router>
		</div>
  );

};

export default App ;
