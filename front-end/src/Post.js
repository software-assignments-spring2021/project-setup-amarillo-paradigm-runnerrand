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
    const url ="http://localhost:3000/post-task"
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
        Axios.post(url, {

        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <div>
                
                <form onSubmit={(e)=> submit(e)}>
                    <input onChange={(e) => handle(e)} id="title" value={data.title} placeholder="title" type="text"></input>
                    <input onChange={(e) => handle(e)} id="category" value={data.category} placeholder="category" type="text"></input>
                    <input onChange={(e) => handle(e)} id="campus" value={data.campus} placeholder="campus" type="text"></input>
                    <input onChange={(e) => handle(e)} id="address" value={data.address} placeholder="address" type="text"></input>
                    <input onChange={(e) => handle(e)} id="duedate" value={data.duedate} placeholder="duedate" type="date"></input>
                    <input onChange={(e) => handle(e)} id="budget" value={data.budget} placeholder="budget" type="text"></input>
                    <input onChange={(e) => handle(e)} id="details" value={data.details} placeholder="details" type="text"></input>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Post