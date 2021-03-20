import './TaskList.css'
import React from 'react'
import { Link } from 'react-router-dom'

const TaskList =  () => {
  return(
    <div>
    <h1>Task Lists</h1>

      <div className = "taskTitle">
            <h1>Task1</h1>
            <p onClick={handleTaskDetails}>Click for more details</p>
      </div>
      <div className = "taskTitle">
            <h1>Task2</h1>
            <p onClick={handleTaskDetails}>Click for more details</p>
      </div>
      <div className = "taskTitle">
            <h1>Task3</h1>
            <p onClick={handleTaskDetails}>Click for more details</p>
      </div>
      <div className = "taskTitle">
            <h1>Task4</h1>
            <p onClick={handleTaskDetails}>Click for more details</p>
      </div>
      <div className = "taskTitle">
            <h1>Task5</h1>
            <p onClick={handleTaskDetails}>Click for more details</p>
      </div>

      </div>
  )
}
    
const handleTaskDetails = ()=>{
      window.location.href = './TaskDetails';
  }

export default TaskList;