import './Post.css';
import './Home'
import React, { Component } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
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
            <input type="text" id="tasktitle" placeholder='' /> <br></br>

            <br></br>
            <label for="Category" className="item">Category:</label><br></br>
           
            <DropdownButton id="drpdwn" title="select a task categoty">
            <Dropdown.Item href="#/action-1">Tutoring</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Assembly</Dropdown.Item>
            <Dropdown.Item href="#/action-3">......</Dropdown.Item>
            </DropdownButton>
           
            <br></br>
            
            

            <label for="Category" className="item">Campus:</label><br></br>
           
            <DropdownButton id="drpdwn" title="select a campus">
            <Dropdown.Item href="#/action-1">Manhattan</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Brooklyn</Dropdown.Item>
            <Dropdown.Item href="#/action-3">......</Dropdown.Item>
            </DropdownButton>
            <br></br>


           
            <label for="Adsress" className="item">Address:</label><br></br>
            <input type="text" id="textbar"/> <br></br>

            <br></br>
            <label for="Task Title" className="item">Due Date:</label><br></br>
            <input type="text" id="textbar"/> <br></br>

            <br></br>
            <label for="Task Title" className="item">Budget:</label><br></br>
            <input type="text" id="textbar"/> <br></br>

            <br></br>
            <label for="Task Title" className="item">Contact:</label><br></br>
            <input type="text" id="textbar"/> <br></br>

            <br></br>
            <label for="details" className="item">Details:</label><br></br>
            <textarea type="text" id="textarea"/> <br></br>

            <div>
                <button onClick={handlePostButton}>Post</button> 
                <button onClick={handleCancelButtion}>Cancel</button>
            </div>
            

        </section>
    )
}

const handleGoBack =() =>{
    window.location.href = '../'
}

const handlePostButton = ()=>{
    window.location.href = '../PostConfirmation';

}
const handleCancelButtion = ()=>{
    window.location.href = '../Home';
}




export default Post