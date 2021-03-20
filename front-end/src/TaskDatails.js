import './TaskDetails.css'
import React from 'react'
import { Link } from 'react-router-dom'

const TaskDetails = () =>{
    return(
        <div>
            <div>
                <h1>Task Details</h1>
                <p></p>
                <p><b> Task Title: </b> Task No.</p>
		        <p><b>Category: </b>Category Name</p>
		        <p><b>Address: </b>Here is the address</p>
		        <p><b>Due Date: </b>Here is the Due Date</p>
	            <p><b>Budget: </b>Here is the Budget</p>
                <p><b>Contact: </b>Here is the Contact number</p>
		        <p><b>Any Remarks:</b>Any comments here</p>
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
