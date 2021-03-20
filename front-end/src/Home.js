import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'
import tutoring  from './HomePagePic/Tutoring.png'

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
        <h1>Search by Catogories:</h1>
        <div className = "catogoryDetail">
            <h1>Tutoring</h1>
            <img src={tutoring} className="homePagePic"/>
            <p>Price Range: $20 - $50</p>
            <p>Number of Tasks: 20</p>
        </div>
        <p></p>
        <div className = "catogoryDetail">
            <h1>Assembly</h1>
            <p>Price Range: $20 - $50</p>
            <p>Number of Tasks: 20</p>
        </div>
        <p></p>
        <div className = "catogoryDetail">
            <h1>Shopping</h1>
            <p>Price Range: $20 - $50</p>
            <p>Number of Tasks: 20</p>
        </div>
        <p></p>
        <div className = "catogoryDetail">
            <h1>Volunteering</h1>
            <p>Price Range: $20 - $50</p>
            <p>Number of Tasks: 20</p>
        </div>
     </div>
    );
   }
   
   export default Home;