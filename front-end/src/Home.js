import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return(
      <div>
        <div className="searchBar">
            <p></p>
            <p1> Enter a location: </p1>
            <input type="text" id="SearchBar" name="LocationSearch" placeholder="Enter a location"/>
       
            <p></p>
            <h1>What do you need help for ? </h1>
            <input type="text" id="JobSearchBar" name="JobSearch" placeholder="Search for jobs"/>

            <p></p>
        </div>
        <div>
            <h1>Search by Catogories: </h1>
          
        </div>
     </div>
    );
   }
   
   export default Home;