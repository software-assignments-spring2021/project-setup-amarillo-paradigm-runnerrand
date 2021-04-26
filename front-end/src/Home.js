import './Home.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Fuse from 'fuse.js'

import { Link } from 'react-router-dom'

import TaskPreview from './TaskPreview'

const Home = (props) => {
    const [search, setSearch] = useState('')
    const [tasks, setTasks] = useState(null)

    const [category,setCategory] = useState('')

    useEffect(() => {
        if(category !== ''){
            getTasks()
        }

    }, [category])

    const getTasks = () => {
        axios({
            method:'get',
            url:`${process.env.REACT_APP_BACKEND}/posts/home?category=${category}`,
        }).then((response) => {
            console.log(response.data);
            setTasks(response.data);
        })
        .catch((err) => {
            console.log(`Error`);
            console.error(err);
            setTasks(null);
        })
    }

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
        <React.Fragment>
            <div id="home">
                <div className="searchBar">
                    <h1>What do you need help for ? </h1>
                    <div className="form">
                        <p> Enter a location: </p>
                        <input type="text" id="SearchBar" name="LocationSearch" placeholder="Enter a location"/>
                        <p>Search Jobs</p>            
                        <input type="text" id="JobSearchBar" name="JobSearch" placeholder="Search for jobs" value={search} onChange={handleOnSearch}/>
                    </div>
                </div>


                <h3>Filter Current Active Tasks Based on Category:</h3>
                <nav className="nav nav-tabs" role="tablist">
                    <a id="tab-shopping" href="#!" role="tab" className={"nav-item nav-link "+(category === "shopping"?"active":"")} onClick={() => setCategory("shopping")}>Shopping</a>
                    <a id="tab-tutoring" href="#!" role="tab" className={"nav-item nav-link "+(category === "tutoring"?"active":"")} onClick={() => setCategory("tutoring")}>Tutoring</a>
                    <a id="tab-delivery" href="#!" role="tab" className={"nav-item nav-link "+(category === "delivery"?"active":"")} onClick={() => setCategory("delivery")}>Delivery</a>
                </nav>

                <section className="tasks">
                    {
                        tasksResults.map(item => {
                            return <TaskPreview key={item._id} details={item} /> 
                        })
                    }
                </section>
            </div>
        </React.Fragment>
    )
   }


    const handleCatogories = () =>{
        // redirect to Task List page
        window.location.href = './TaskList';
    }
   
   export default Home;
