import './Signup.css';
import React, { useState,Component, useEffect } from "react";
import Axios from "axios";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [passwordConfirm,setPasswordConfirm] = useState()

    const [error,setError] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // fetch('http://127.0.0.1:3100/users/signup',{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         firstName,
        //         lastName,
        //         email,
        //         password,
        //     })
        // }).then(res => res.json())
        // .then(response => {
        //     console.log(response)
        // })
        // const token = localStorage.getItem("token")

        if(password === passwordConfirm){
            Axios({
                method:'post',
                url:'http://127.0.0.1:3000/users/signup',
                data:{
                    firstName,
                    lastName,
                    email,
                    password,
                }
            }).then(res => {
                console.log(res.data)
                window.location.href = '/signupsuccess';
            }).catch(err => {
                if(err.response.status === 403){
                    setError(err.response.data.error)
                }
                else if(err.response.status === 400){
                    setError("Please Fill All Required Fields")
                }
                console.log(err.response)
            })
        }
    }

    useEffect(() => {
        if(passwordConfirm !== password){
            setError('Passwords Do Not Match')
        }else{
            setError('')
        }
    },[password,passwordConfirm])

    return (
        <React.Fragment>
            <div className="signup">
                <br />
                <div className="form">
                    <form className="register-form" onSubmit={handleFormSubmit}>

                        <div>
                            <p>Enter Your Name:
                                <input autoFocus={true} type="text" name="firstname" placeholder="First name" size={10} onChange={(e) => setFirstName(e.target.value)} />
                                <input type="text" name="lastname" placeholder="Last name" size={10}  onChange={(e) => setLastName(e.target.value)} />
                            </p>
                        </div>

                        <p>Enter Your Email Address:{' '}
                        <input type="email" name="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} /></p>
                        <p>Create a Password{' '}
                        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /></p>
                        <p>Confirm Your Password{' '}
                        <input type="password" name="passwordconfirm" placeholder="Confirm Password" onChange={(e) => setPasswordConfirm(e.target.value)} /></p>
                        <p className="text-danger">{error}</p>
                        <p><button type="submit" >Create Account</button></p>    

                        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Signup;

