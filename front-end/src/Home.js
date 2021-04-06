import './Home.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Fuse from 'fuse.js'

import { Link } from 'react-router-dom'

import TaskPreview from './TaskPreview'

const Home = (props) => {
  const [search, setSearch] = useState('')
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/tasks_api')
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(`Error`);
        console.error(err);

        setTasks(null);
      })
  }, [])

  var tasksResults = []
    if (tasks) {
      const fuse = tasks ? new Fuse(tasks, {
        keys:[
          'id',
          'title',
          'category',
          'campus',
          'price',
          'contact',
          'description'
        ],
        includeScore: true
      }) : null;

      const results = fuse.search(search)
      tasksResults = search ? results.map(result => result.item) : tasks

      console.log('results', results)
    }

    function handleOnSearch({ currentTarget }) {
      setSearch(currentTarget.value);
    }
    
  
    

    return(
      <div>
        <div className="searchBar">
            <p></p>
            <p1> Enter a location: </p1>
            <input type="text" id="SearchBar" name="LocationSearch" placeholder="Enter a location"/>
       
            <p></p>
            <h1>What do you need help for ? </h1>
            <input type="text" id="JobSearchBar" name="JobSearch" placeholder="Search for jobs" value={search} onChange={handleOnSearch}/>

            <p></p>
        </div>
        <h1>Current Active Tasks:</h1>
        <section className="tasks">
          {tasksResults.map(item => {
          return <TaskPreview key={item.id} details={item} /> 
          })}
          </section>
     </div>
    )
   }


    const handleCatogories = () =>{
        // redirect to Task List page
        window.location.href = './TaskList';
    }
   
   export default Home;