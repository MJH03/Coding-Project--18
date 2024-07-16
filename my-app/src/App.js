//U68997808
//Step 4: Added style in App.css
import './App.css';

//Step 1: creating a dynamic movie rater button
function Ratings(){
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
  //Step 2: dynamic movie selector

  function Movie(){
    return(
      <div>
      <label id="movies">Movies</label>
      <select id="movies">
      <option value="Lorax">Lorax</option>
      <option value="Robinsons">Meet The Robinsons</option>
      <option value="UP">UP</option>
      <option value="JurassicPark">Jurassic Park</option>
      </select>
      </div>
    )
  }
  function handleUploadClick(){
    alert("Uploading...")
  }
//Logic For Form Submission
  //function MovieRaterButton(){
    //return(
      //<div>
        //<button onClick{()=>{return (
          //<div>
            //<h3>{Movie.value}<h3>
            //{Ratings.value}
          //</div>
        //)}}></button>
     // </div>
    //)
  //}
//<MovieRaterButton>Submit</MovieRaterButton> (This is was to be placed inside the form tag I couldnt figure it out)
export default function Toolbar(){
  return(
  <div>
    <h1>Movie Rater</h1>
    <center>
    <form id="movieForm" onSubmit={handleUploadClick}> 
    <Ratings/>
    <Movie/>
    <button>Submit</button>
    </form>
    <div id="movieRating">

    </div>
    </center>
    
    
  </div>
)}