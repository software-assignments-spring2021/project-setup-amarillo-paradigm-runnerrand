import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState,useEffect } from "react";
import { Link,Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const NavBar = () => {
    const [user,setUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch('http://127.0.0.1:3000/users/auth_user',{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
        }).then(res => res.json())
        .then(response => {
            console.log(response)
            setUser(response)
            setIsLoading(false)
            // return <Redirect to="/profile" />
        }).catch(err => {
            console.log(err)
            setIsLoading(false)
            localStorage.removeItem("token")
        })
    }, [])
    return(
        <Navbar variant="dark" className="navbar-custom">
            <Navbar.Brand>
                RunNErrand
                { user !== null && <sup> (Welcome! {user.firstName} {user.lastName})</sup> }
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">

                <ButtonGroup className="mr-2">
                    <Link to="/Home"><Button variant="outline-light">Home</Button></Link>
                </ButtonGroup>
                {
                    isLoading ?
                    ""
                    :
                    user === null
                    ?
                    <>
                        <ButtonGroup className="mr-2">
                            <Link to="/login"><Button variant="outline-light">Login</Button></Link>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2">
                            <Link to="/signup"><Button variant="outline-light">Signup</Button></Link>
                        </ButtonGroup>
                    </>
                    :
                    <>
                        <ButtonGroup className="mr-2">
                            <Link to="/post"><Button variant="outline-light">Post</Button></Link>
                        </ButtonGroup>

                        <ButtonGroup className="mr-2">
                            <Link to="/mytasks"><Button variant="outline-light">My Tasks</Button></Link>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2">
                            <Link to="/profile"><Button variant="outline-light">Profile</Button></Link>
                        </ButtonGroup>
                    </>
                }
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(NavBar);

