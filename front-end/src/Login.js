import './Login.css';
import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Login = () => {
        return (
            <div>
                
                <div className="login">
		    <br />
                    <div className="form">
		        <form className="login-form">
                            <input autoFocus={true} type="email" name="username" placeholder="Email Address" />
                            <p></p>
                            <input type="password" name="password" placeholder="Password"  />
                            <p></p>
                            <button type="submit">Login</button>
                            <p className="message">Not registered? <Link to="/signup">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

export default Login;

