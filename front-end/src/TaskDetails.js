import './TaskDetails.css'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { __RouterContext } from 'react-router';
import { Link } from 'react-router-dom'

const TaskDetails = (props) => {

    const [data, setData] = useState([])
    const [token,setToken] = useState(null)
    const [msg,setMsg] = useState('')

  useEffect(() => {
    setToken(localStorage.getItem("token"))
    axios.get(`${process.env.REACT_APP_BACKEND}/posts/${props.taskId}/get`)
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
      setMsg('')
        if(token === null){
            window.location.href = '/login';
        }else{
            axios({
                method:'post',
                url:`${process.env.REACT_APP_BACKEND}/posts/${props.taskId}/accept`,
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                },
                data:{
                    id:data._id,
                    author:data.author
                }
            })
            .then((response) => {
                console.log(response)
                // setData(response.data)
                window.location.href = '/TaskAcceptSuccess';
            })
            .catch((err) => {
                console.log(`Error`)
                setMsg("You cannot accept your own task")
                console.error(err)
            })
        }
    }
  console.log('context object:', routerContext);
    return(
        <div>
            <div>
                <h1>Task Details</h1>
                <p></p>
                <p><b> Task ID: </b> {data._id} </p>
                <p><b> Task Title: </b> {data.title} </p>
                <p><b> Category: </b> {data.category} </p>      
		        <p><b>Campus: </b>{data.campus}</p>
		        <p><b>Budget: </b>{data.budget}</p>
		        <p><b>Details: </b>{data.details}</p>
                <p><b>Contact: </b>{data.contact}</p>
            </div>
            <p className="text-danger">{msg}</p>
            <div>
                <button onClick={handleAcceptButton}>Accept</button> 
                <button className="go-back" onClick={() => routerContext.history.goBack()}>Go Back</button>
            </div>
          

        </div>

    )
}


export default TaskDetails
