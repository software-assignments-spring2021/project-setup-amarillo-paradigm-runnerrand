import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './TaskBrowser.css'
import { __RouterContext } from 'react-router';

const TaskBrowser = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get(`http://localhost:3000/mytasks/${props.taskId}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(`Error`);
        console.error(err);

        const backupData = [

        ]

        setData(backupData[0]);
      })
  })

  const imgSrc = `https://picsum.photos/200?id=${props.taskId}`;

  const routerContext = useContext(__RouterContext);
  console.log('context object:', routerContext);

  return (
    <div className="TaskList">

      <section className="main-content">
        <article className="task" key={data.id}>
      
          <div class="details">
            <id class="id">Task ID: {data.id}</id> 
            <address class="address">Campus: {data.campus}</address>
            <p>Title: {data.title}</p>
            <strong class="price">Price: {data.price}</strong><p>
            <strong class="status">Status: {data.status}</strong></p>
            <p>Description: {data.description}</p>
            <p>Contact: {data.contact}</p>
            <button class="buy-now" onClick={() => routerContext.history.goBack()}>Go Back</button>
          </div>
        </article>
      </section>
    </div>
  )
}

// make this function available to be imported into another module
export default TaskBrowser;