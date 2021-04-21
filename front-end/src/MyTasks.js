import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import axios from 'axios';
import './MyTasks.css';

const MyTasks = (props) => {
    const [tasks, setTasks] = useState(null);
    const [data, setData] = useState([])
    //const [token,setToken] = useState(null)
    const [user,setUser] = useState(null)

    const token2 = localStorage.getItem("token")
    fetch('http://127.0.0.1:3000/users/auth_user',{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":token2
        },
    }).then(res => res.json())
    .then(response => {
        console.log(response)
        setUser(response)
        //setIsLoading(false)
        // return <Redirect to="/profile" />
    }).catch(err => {
        console.log(err)
        //(false)
        localStorage.removeItem("token")
    })

    const fetchDataScheduled = async () => {
      
      const response= await axios.get(`http://localhost:3000/posts/user/${user._id}/scheduled`)
      setTasks(response.data);
    };

    const fetchDataCompleted = async () => {
      const response= await axios.get(`http://localhost:3000/posts/user/${user._id}/completed`)

    
        setTasks(response.data);
      };

    return (
        <div className="App">
          <h2>My Scheduled and Completed Tasks</h2><br />
    
          {/* Fetch data from API */}
          <div>
            <button className="fetch-button" onClick={fetchDataScheduled}>
              Scheduled Tasks
            </button><span> </span>  
            <button className="fetch-button" onClick={fetchDataCompleted}>
              Completed Tasks
            </button>
          </div>
    
          {/* Display data from API */}
          <div className="tasks">
            
            {tasks &&
              tasks.map((task, index) => {
    
                return (


                  <div className="task" key={index}>

                    <p>Task ID: {task.id}</p>
                    <Link to={`/display_mytasks/${task.id}`}>
                    <h2>{task.title}</h2>
                  </Link>
                    <div className="details">
                    <p><center>Status: {task.status}</center></p>
                      <p><center>Price: {task.price}</center></p>
                      <p><center>Location: {task.campus}</center></p>
                    </div>
                  </div>
                );
              })}
          </div>
    
        </div>
      );
    }

export default MyTasks;