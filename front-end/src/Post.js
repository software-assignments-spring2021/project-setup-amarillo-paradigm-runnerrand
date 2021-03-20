import './Post.css';
import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Post = () =>{
    return (
        <section>
            <button onClick={handleGoBack}> Go Back </button>
            <h1 className="title">Post Tasks</h1>
            <hr></hr>

            <br></br>
            <label for="Task Title" className="item">Task Title:</label><br></br>
            <input type="text" id="tasktitle"/> <br></br>

            <br></br>
            <label for="Adsress" className="item">Address:</label><br></br>
            <input type="text" id="address"/> <br></br>

            <br></br>
            <label for="Task Title" className="item">Due Date:</label><br></br>
            <input type="text" id="duedate"/> <br></br>

            <br></br>
            <label for="Task Title" className="item">Budget:</label><br></br>
            <input type="text" id="budget"/> <br></br>

            <br></br>
            <label for="Task Title" className="item">Contact:</label><br></br>
            <input type="text" id="contact"/> <br></br>

            <br></br>
            <label for="details" className="item">Details:</label><br></br>
            <input type="text" id="details"/> <br></br>

        </section>
    )
}

const handleGoBack =() =>{
    window.location.href = '../'
}




export default Post