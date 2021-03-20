import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'
import tutoring  from './HomePagePic/Tutoring.png'
import assembly  from './HomePagePic/Assembly.png'
import shopping  from './HomePagePic/Shopping.png'
import volunteering  from './HomePagePic/Volunteering.png'
const Home = () => {
    const catogoryDetail ={
        priceRange: "null",
        taskNumber : "null"
    }
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
            <h1 onClick={handleCatogories}>Tutoring</h1>
            <img src={tutoring} className="homePagePic"/>
            <p>Price Range: {catogoryDetail.priceRange}</p>
            <p>Number of Tasks: {catogoryDetail.taskNumber}</p>
        </div>
        <p></p>
        <div className = "catogoryDetail">
            <h1 onClick={handleCatogories}>Assembly</h1>
            <img src={assembly} className="homePagePic"/>
            <p>Price Range: {catogoryDetail.priceRange}</p>
            <p>Number of Tasks: {catogoryDetail.taskNumber}</p>
        </div>
        <p></p>
        
        <div className = "catogoryDetail">
            <h1 onClick={handleCatogories}>Shopping</h1>
            <img src={shopping} className="homePagePic"/>
            <p>Price Range: {catogoryDetail.priceRange}</p>
            <p>Number of Tasks: {catogoryDetail.taskNumber}</p>
        </div>
        <p></p>
        
        <div className = "catogoryDetail">
            <h1 onClick={handleCatogories}>Volunteering</h1>
            <img src={volunteering} className="homePagePic"/>
            <p>Price Range: {catogoryDetail.priceRange}</p>
            <p>Number of Tasks: {catogoryDetail.taskNumber}</p>
        </div>
     </div>
    );
   }

    const handleCatogories = () =>{
        // redirect to Task List page
        window.location.href = './TaskList';
    }
   
   export default Home;