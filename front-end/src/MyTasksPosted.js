import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const MyTasksPosted = (props) => {

    const [myPosts,setMyPosts] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios({
            method:'get',
            url:`${process.env.REACT_APP_BACKEND}/posts/auth_user`,
            headers:{
                "Authorization":token
            }
        })
        .then((response) => {
            setMyPosts(response.data.posts)
        })
        .catch((err) => {
            console.log(`Error`)
            console.error(err)
        })

    }, [])

    const handleComplete = (id) => {
        const token = localStorage.getItem("token")
        axios({
            method:'post',
            url:`${process.env.REACT_APP_BACKEND}/posts/${props.taskId}/completed`,
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            data:{
                id
            }
        })
        .then((response) => {
            console.log(response)
            // setMyPosts(response.data.posts)
            window.location.reload()
        })
        .catch((err) => {
            console.log(`Error`)
            console.error(err)
        })

    }

    return (
        <div className="App">
            <h2>Tasks Posted</h2><br />

            <table className="table table-hover table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Post ID</th>
                        <th>Post Title</th>
                        <th>Accepted By</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myPosts.map(post => {
                            return (
                                <tr key={post["_id"]}>
                                    <td>{post["_id"]}</td>
                                    <td>{post["title"]}</td>
                                    <td>{post["owner"] || "Not Yet Accepted"}</td>
                                    <td>{post["status"]}</td>
                                    {
                                        post["status"] === "pending-approval" ? <td><button onClick={() => handleComplete(post["_id"])}>Approve</button></td>:<td></td>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
                        
    
        </div>
    );
}

export default MyTasksPosted;