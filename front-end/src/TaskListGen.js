import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './TaskListGen.css'
import TaskPreview from './TaskPreview'

const TaskListGen = (props) => {
  // start a state varaible with a blank array
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('fetching data')
    axios.get(`${process.env.REACT_APP_BACKEND}/tasks_api`)
      .then((response) => {
        console.log(response)
        setData(response.data)
        
      })
      .catch((err) => {
        console.log(`Error with fetching server data, defaulting to backup data`)

      })
  }, []) 

  return (
    <div className="Tasks for hire">
      <h1>Tasks For Hire</h1>
      <section className="main-content">
        <img
          alt="Tasks for Hire"
          src="https://picsum.photos/200?page=animals"
        />
        <p>
          Random Text
        </p>
      </section>
      <section className="tasks">
        {data.map((item) => (
          <TaskPreview key={item.id} details={item} />          
        ))}
      </section>
    </div>
  )
}

export default TaskListGen;

