import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import axios from 'axios';
import './MyTasks.css';

const MyTasks = (props) => {
    const [tasks, setTasks] = useState(null);
    const [data, setData] = useState([])
    //const [token,setToken] = useState(null)
    const [user,setUser] = useState(null)

    useEffect(() => {
        console.log(props)
        setUser(JSON.parse(localStorage.getItem("user")))
        // const token2 = localStorage.getItem("token")
        // fetch(`${process.env.REACT_APP_BACKEND}/users/auth_user`,{
        //     method:"GET",
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Authorization":token2
        //     },
        // }).then(res => res.json())
        // .then(response => {
        //     console.log(response)
        //     setUser(response)
        //     //setIsLoading(false)
        //     // return <Redirect to="/profile" />
        // }).catch(err => {
        //     console.log(err)
        //     //(false)
        //     localStorage.removeItem("token")
        // })
    }, [])

    const fetchDataScheduled = async () => {      
        // const response= await axios.get(`${process.env.REACT_APP_BACKEND}/posts/user/${user.id}/scheduled`)
        const token = localStorage.getItem("token")
        const response= await axios({
            method:"get",
            url:`${process.env.REACT_APP_BACKEND}/posts/ongoing`,
            headers:{
                "Authorization":token
            }
        })
        setTasks(response.data);
    };

    const fetchDataCompleted = async () => {
        // const response= await axios.get(`${process.env.REACT_APP_BACKEND}/posts/user/${user.id}/completed`)
        const token = localStorage.getItem("token")
        const response= await axios({
            method:"get",
            url:`${process.env.REACT_APP_BACKEND}/posts/completed`,
            headers:{
                "Authorization":token
            }
        })
        setTasks(response.data);
    };

    return (
        <div className="App">
          <h2>My Ongoing and Completed Tasks</h2><br />
    
          {/* Fetch data from API */}
          <div>
            <button className="fetch-button" onClick={fetchDataScheduled}>
              Ongoing Tasks
            </button><span> </span>  
            {/* <button className="fetch-button" onClick={fetchDataScheduled}>
              Pending Owner Approval
            </button> */}
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

                    <p>Task ID: {task._id}</p>
                    <Link to={`/display_mytasks/${task._id}`}>
                    <h2>{task.title}</h2>
                  </Link>
                    <div className="details">
                        <center>
                            <p>Status: {task.status}</p>
                            <p>Budget: {task.budget}</p>
                            <p>Location: {task.campus}</p>
                        </center>
                    </div>
                  </div>
                );
              })}
          </div>
    
        </div>
      );
    }

export default MyTasks;