import './Home.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import tutoring  from './HomePagePic/Tutoring.png'
import assembly  from './HomePagePic/Assembly.png'
import shopping  from './HomePagePic/Shopping.png'
import volunteering  from './HomePagePic/Volunteering.png'
import TaskPreview from './TaskPreview'
const Home = (props) => {
    // start a state varaible with a blank array
    const [data, setData] = useState([])
  
    useEffect(() => {
      console.log('fetching data')
      axios('http://104.131.170.212:3333/posts')
        .then((response) => {
          setData(response.data)
        })
        .catch((err) => {
          console.log(`Error with fetching server data, defaulting to backup data`)
  
        })
    }, []) 
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
        <h1>Current Active Tasks:</h1>
        <section className="tasks">
        {data.map((item) => (
          <TaskPreview key={item.id} details={item} />          
        ))}
      </section>
     </div>
    );
   }

    const handleCatogories = () =>{
        // redirect to Task List page
        window.location.href = './TaskList';
    }
   
   export default Home;
