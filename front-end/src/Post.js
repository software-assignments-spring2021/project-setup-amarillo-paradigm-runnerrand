import './Post.css';
import './Home'
import React, { useState } from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Post() {
    // const url ="http://localhost:3000/post-task"
    const url ="http://localhost:3000/posts/create"
    const [data, setData] = useState({
        title: "",
        category: "",
        campus: "",
        address: "",
        duedate: "",
        budget: "",
        details: ""

    })

    function submit(e){
        e.preventDefault();
        // Axios.post(url, {

        // })
        //     .then(res => {
        //         console.log(res.data)
        //     })
        const token = localStorage.getItem("token")
        Axios({
            method:'post',
            url,
            data,
            headers:{
                Authorization:token
            }
        }).then(res => {
            console.log(res.data)
            window.location.href = "/postsuccess"
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <React.Fragment>
                <form onSubmit={submit} className="postTask">
                    <p id="postTitle">Posting a Task:</p>
                    <input onChange={(e) => handle(e)} id="title" value={data.title} placeholder="title" type="text" className="taskDetails"></input>
                    <p></p>
                    <select name="" id="category" className="taskDetails" onChange={(e) => handle(e)} required >
                        <option value="" disabled selected hidden>Category</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Tutoring">Tutoring</option>
                        <option value="Delivery">Delivery</option>
                    </select>
                    <p></p>
                    <select name="" onChange={(e) => handle(e)} id="campus" className="taskDetails" required>
                        <option value="" disabled selected hidden>Campus</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Greenwich Village">Greenwich Village</option>
                    </select>

                    <p></p>
                    <input onChange={(e) => handle(e)} id="address" value={data.address} placeholder="address" type="text" className="taskDetails"></input>
                    <p></p>
                    <input onChange={(e) => handle(e)} id="duedate" value={data.duedate} placeholder="duedate" type="date" className="taskDetails"></input>
                    <p></p>
                    <input onChange={(e) => handle(e)} id="budget" value={data.budget} placeholder="budget" type="text" className="taskDetails"></input>
                    <p></p>
                    <input onChange={(e) => handle(e)} id="details" value={data.details} placeholder="details" type="text" className="taskDetails"></input>
                    <p></p>
                    <button id="post">Submit</button>
                </form>
        </React.Fragment>
    );
}

export default Post
