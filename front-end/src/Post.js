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
            <h1 className="title">Payment Method</h1>
            <hr></hr>

            <p className="item">Credit Card Type: </p>
            

            <br></br>
            
            
        </section>
    )
}

const handleGoBack =() =>{
    window.location.href = '../'
}


export default Post