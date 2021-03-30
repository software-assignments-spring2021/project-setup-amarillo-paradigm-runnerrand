import './TaskDetails.css'
import React from 'react'
import { Link } from 'react-router-dom'

const TaskDetails = () =>{
    const taskDetails ={
        taskTitle: "Task No.",
        taskID: "Task ID",
        taskCategory: "Category Name",
        taskAddress: "Here is the address",
        taskDueDate: "Here is the Due Date",
        taskBudget: "Here is the Budget",
        taskContact: "Here is the Contact number",
        taskRemarks: "ny comments here"
    }
    return(
        <div>
            <div>
                <h1>Task Details</h1>
                <p></p>
                <p><b> Task ID: </b> {taskDetails.ID} </p>
                <p><b> Task Title: </b> {taskDetails.taskTitle} </p>
		        <p><b>Category: </b>{taskDetails.taskCategory}</p>
		        <p><b>Address: </b>{taskDetails.taskAddress}</p>
		        <p><b>Due Date: </b>{taskDetails.taskDueDate}</p>
	            <p><b>Budget: </b>{taskDetails.taskBudget}</p>
                <p><b>Contact: </b>{taskDetails.taskContact}</p>
		        <p><b>Any Remarks:</b>{taskDetails.taskRemarks}</p>
            </div>

            <div>
                <button onClick={handleAcceptButton}>Accept</button> 
                <button onClick={handleCancelButtion}>Cancel</button>
            </div>
          

        </div>

    )
}
const handleAcceptButton = ()=>{
    window.location.href = './Home';
}

const handleCancelButtion = ()=>{
    window.location.href = './TaskList';
}

export default TaskDetails
