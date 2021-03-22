import './Signup.css';
import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Signup = () => {
{
        return (
            <div>
                <div className="signup">
                     <br />
		     <div className="form">
                        <form className="register-form">

                            <div>
                            <p>Enter Your Name:{' '}<input autoFocus={true} type="text" name="firstname" placeholder="First name" size={10} />
                            {' '}<input type="text" name="lastname" placeholder="Last name" size={10} />
                            </p></div>

                            <p>Enter Your Email Address:{' '}
                            <input type="email" name="email" placeholder="Email Address" /></p>
                            <p>Create a Password{' '}
                            <input type="password" name="password" placeholder="Password" /></p>
                            <p>Confirm Your Password{' '}
                            <input type="password" name="passwordconfirm" placeholder="Confirm Password" /></p>
                          
                            <p><button type="submit">Create Account</button></p>    

                            <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;

