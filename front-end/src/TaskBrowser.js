import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './TaskBrowser.css'

const TaskBrowser = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get('http://104.131.170.212:3333/posts')
      .then((response) => {
        console.log(response)
        setData(response.data)
      })
      .catch((err) => {
        console.log(`Error`)
        console.error(err) 

        const backupData = [

        ]

        setData(backupData[0])
      })
  }, [props.taskId])

  const imgSrc = `https://picsum.photos/200?id=${props.taskId}`

  return (
    <div className="TaskList">
      <h1>{data.title}</h1>

      <section className="main-content">
        <article className="task" key={data.id}>
          <img alt={data.title} src={imgSrc} />
          <div class="details">
            <id class="id">{data.taskId}</id> //added task id here 
            <address class="address">{data.country}</address>
            <strong class="price">{data.price}</strong>
            <p>{data.description}</p>
            <button class="buy-now">Buy now!</button>
          </div>
        </article>
      </section>
    </div>
  )
}

// make this function available to be imported into another module
export default TaskBrowser;
