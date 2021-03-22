import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './MyTasks.css';


function MyTasks() {
    const [tasks, setTasks] = useState(null);
  
    const fetchDataScheduled = async () => {
      const response = await axios.get(
        'http://104.131.170.212:3333/mytasks_scheduled'
      );
  
      setTasks(response.data);
    };

    const fetchDataCompleted = async () => {
        const response = await axios.get(
          'http://104.131.170.212:3333/mytasks_completed'
        );
    
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
                    <h2>{task.title}</h2>
    
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