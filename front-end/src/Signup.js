import './Signup.css';
import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.flash = true;
        this.state = {
            username: "",
            password: "",
            errorMsg: ""
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }

    submit() {
        fetch('/signup', {
           method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        
    }

    render() {
        return (
            <div>
                <div className="signup">
                     <br />
		     <div className="form">
                        <form className="register-form" onSubmit={(e) => {this.submit();  e.preventDefault(); }}>

                            <div>
                            <p>Enter Your Name:{' '}<input autoFocus={true} type="text" name="firstname" placeholder="First name" size={10} value={this.state.firstname} onChange={this.handleChange} required />
                            {' '}<input type="text" name="lastname" placeholder="Last name" size={10} value={this.state.lastname} onChange={this.handleChange} required />
                            </p></div>

                            <p>Enter Your Email Address:{' '}
                            <input type="email" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} required /></p>
                            <p>Create a Password{' '}
                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required /></p>
                            <p>Confirm Your Password{' '}
                            <input type="password" name="passwordconfirm" placeholder="Confirm Password" value={this.state.passwordconfirm} onChange={this.handleChange} required /></p>
                          
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

