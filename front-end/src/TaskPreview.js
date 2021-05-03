import React from 'react'
import { Link } from 'react-router-dom'
import './TaskPreview.css'
// import task_image from './task_image.jpg'

const TaskPreview = ({details}) => {
  // const imgSrc = `https://picsum.photos/200?id=${props.details.id}` 

  return (
        <div class="card task-preview">
            <div class="card-body">
                <h5 class="card-title">{details.title}</h5>
                <p class="card-text"><span className="font-weight-bold">Details:</span>&emsp;<span className="text-muted">{details.details}</span></p>
                <p class="card-text"><span className="font-weight-bold">Budget:</span>&emsp;<span className="text-muted">{details.budget}</span></p>
                <p class="card-text"><span className="font-weight-bold">Campus:</span>&emsp;<span className="text-muted">{details.campus}</span></p>
                <Link to={`/TaskDetails/${details._id}`}>
                    <button type="button" class="btn btn-primary">View Task</button>
                </Link>
            </div>
        </div>
    // <article className="TaskPreview">
    //     <Link to={`/TaskDetails/${details._id}`}>
    //         <h2></h2>
    //         <img alt={props.details.title} src={imgSrc} className="taskImage"/>
    //     </Link>
    //     <h3>{props.details.budget} - {props.details.campus}</h3>
    //     <p>{props.details.details}</p>
    //     <br />  
    // </article>
  )
}

export default TaskPreview;