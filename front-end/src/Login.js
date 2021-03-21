import './Login.css';
import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class Login extends Component {

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
        fetch('/login', {
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
                
                <div className="login">
		    <br />
                    <div className="form">
		        <form className="login-form" onSubmit={(e) => { this.submit(); e.preventDefault(); }}>
                            <div className="error">{this.state.errorMsg}</div>
                            <input autoFocus={true} type="email" name="username" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} required/>
                            <p></p>
                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                            <p></p>
                            <button type="submit">Login</button>
                            <p className="message">Not registered? <Link to="/signup">Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;

