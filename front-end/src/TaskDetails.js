import './TaskDetails.css'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { __RouterContext } from 'react-router';
import { Link } from 'react-router-dom'

const TaskDetails = (props) => {

    const [data, setData] = useState([])
    const [token,setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem("token"))
    axios.get(`http://localhost:3000/tasks_api/${props.taskId}`)
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((err) => {
        console.log(`Error`)
        console.error(err)

       
      })
    }, [props.taskId])

  const imgSrc = `https://picsum.photos/200?id=${props.taskId}`;

  const routerContext = useContext(__RouterContext);
  const handleAcceptButton = ()=>{
        if(token === null){
            window.location.href = '/login';
        }else{
            window.location.href = '/Home';
        }
    }
  console.log('context object:', routerContext);
    return(
        <div>
            <div>
                <h1>Task Details</h1>
                <p></p>
                <p><b> Task ID: </b> {data.id} </p>
                <p><b> Task Title: </b> {data.title} </p>
                <p><b> Category: </b> {data.category} </p>      
		        <p><b>Campus: </b>{data.campus}</p>
		        <p><b>Price: </b>{data.price}</p>
		        <p><b>Details: </b>{data.description}</p>
                <p><b>Contact: </b>{data.contact}</p>
            </div>

            <div>
                <button onClick={handleAcceptButton}>Accept</button> 
                <button className="go-back" onClick={() => routerContext.history.goBack()}>Go Back</button>
            </div>
          

        </div>

    )
}


export default TaskDetails
