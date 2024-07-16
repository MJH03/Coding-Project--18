//U68997808
import './App.css';

//Step 1: creating a dynamic movie rater button
function MovieRaterButton(){
  return(
    <div>
  <label htmlFor="choice1">1 Star(s)</label>
  <input type="radio" name="rating" value="1 Star(s)" id="choice1"/>

  <label htmlFor="choice2">2 Star(s)</label>
  <input type="radio" name="rating" value="2 Star(s)" id="choice2"/>

  <label htmlFor="choice3">3 Star(s)</label>
  <input type="radio" name="rating" value="3 Star(s)" id="choice3"/>

  <label htmlFor="choice4">4 Star(s)</label>
  <input type="radio" name="rating" value="4 Star(s)" id="choice4"/>

  <label htmlFor="choice5">5 Star(s)</label>
  <input type="radio" name="rating" value="5 Star(s)" id="choice5"/>
  </div>
  )}

export default function Toolbar(){
  return(
  <div>
    <h1>Movie Rater</h1>
    <center>
    <form id="movieForm" onSubmit={()=> alert("Thanks for Rating")}>
    <MovieRaterButton />
    <button type="submit">Submit</button>
    </form>
    <div id="movieRating">

    </div>
    </center>
    
    
  </div>
)}