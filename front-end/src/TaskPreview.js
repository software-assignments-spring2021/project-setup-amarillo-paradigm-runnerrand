import React from 'react'
import { Link } from 'react-router-dom'
import './TaskPreview.css'
import task_image from './task_image.jpg'

const TaskPreview = (props) => {

  // const imgSrc = `https://picsum.photos/200?id=${props.details.id}` 
  const imgSrc = task_image

  return (
    <article className="TaskPreview">
        <Link to={`/TaskDetails`}>
        <h2>{props.details.title}</h2>
        <img alt={props.details.title} src={imgSrc} className="taskImage"/>
      </Link>
      <h3>{props.details.price} - {props.details.campus}</h3>
      <p>{props.details.description}</p>
      <br />
      
    </article>
  )
}

export default TaskPreview;