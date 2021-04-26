import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './TaskBrowser.css'
import { __RouterContext } from 'react-router';

const TaskBrowser = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_BACKEND}/posts/${props.taskId}/get`)
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
    }, [props.taskId])

  const handleComplete = () => {
    const token = localStorage.getItem("token")
    axios({
        method:'post',
        url:`${process.env.REACT_APP_BACKEND}/posts/${props.taskId}/pending-approval`,
        headers:{
            "Content-Type":"application/json",
            "Authorization":token
        },
        data:{
            id:data._id
        }
    })
    .then((response) => {
      console.log(response.data);
      setData(prev => ({
          ...prev,
          status:"pending-approval"
      }));
    })
  }  

  const imgSrc = `https://picsum.photos/200?id=${props.taskId}`;

  const routerContext = useContext(__RouterContext);
  console.log('context object:', routerContext);

  return (
    <div className="TaskList">

      <section className="main-content">
        <article className="task" key={data._id}>
      
          <div className="details">
            <span className="id">Task ID: {data._id}</span> 
            <address className="address">Campus: {data.campus}</address>
            <p>Title: {data.title}</p>
            <strong className="price">Price: {data.budget}</strong><p>
            <strong className="status">Status: {data.status}</strong></p>
            <p>Description: {data.details}</p>
            <p>Contact: {data.contact}</p>
            <button className="go-back" onClick={() => routerContext.history.goBack()}>Go Back</button>
            { data.status === "accepted" && <button onClick={handleComplete}>Mark as Complete</button>}
          </div>
        </article>
      </section>
    </div>
  )
}

// make this function available to be imported into another module
export default TaskBrowser;
