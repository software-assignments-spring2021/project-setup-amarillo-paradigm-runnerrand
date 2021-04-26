import './Login.css';
import React, { useState } from "react";
import Axios from "axios"
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [error,setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        Axios({
            method:'post',
            url:`${process.env.REACT_APP_BACKEND}/users/signin`,
            data:{
                email,
                password,
            }
        }).then(res => {
            console.log(res)
            localStorage.setItem("token",res.data.token)
            window.location.href = "/profile"
        }).catch(err => {
            if(err.response.status === 401){
                setError('Invalid Username/Password')
            }
            else if(err.response.status === 400){
                setError("Please Fill All Required Fields")
            }
        })

    }

    return (
        <React.Fragment>
            <div className="login">
                <br />
                <div className="form" onSubmit={handleLogin}>
                    <form className="login-form">
                        <input autoFocus={true} type="email" name="username" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                        <p></p>
                        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <p className="text-danger">{error}</p>
                        <button type="submit" onClick={handleLogin}>Login</button>
                        <p className="message">Not registered? <Link to="/signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;

