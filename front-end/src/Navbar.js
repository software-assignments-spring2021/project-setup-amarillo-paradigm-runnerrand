import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState,useEffect } from "react";
import { Link,Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import profile from './profile.png'


const NavBar = () => {
    const [user,setUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`${process.env.REACT_APP_BACKEND}/users/auth_user`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
        }).then(res => res.json())
        .then(response => {
            console.log(response)
            localStorage.setItem("user",JSON.stringify(response))
            setUser(response)
            setIsLoading(false)
            // return <Redirect to="/profile" />
        }).catch(err => {
            console.log(err.name)
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            let path = window.location.pathname
            if(path !== "/Home" && path !== "/login" && path !== "/signup" && path.includes("Success")){
                window.location.href = "/login"
            }
            setIsLoading(false)
        })
    }, [])
    return(
        <Navbar variant="dark" className="navbar-custom">
            <Navbar.Brand>
                RunNErrand
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
                        
                        {/* only for the purpose of debugging */}
                        <ButtonGroup className="mr-2">
                            <Link to="/profile"><Button variant="outline-light">Profile</Button></Link>
                        </ButtonGroup>
                    </>
                    :
                    <>
                        <ButtonGroup className="mr-2">
                            <Link to="/post"><Button variant="outline-light">Post</Button></Link>
                        </ButtonGroup>

                        <ButtonGroup className="mr-2">
                            <Link to="/mytasks"><Button variant="outline-light">My Accepted Tasks</Button></Link>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2">
                            <Link to="/mytasksposted"><Button variant="outline-light">My Posted Tasks</Button></Link>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2">
                            <Link to="/profile"><Button variant="outline-light">Profile</Button></Link>
                        </ButtonGroup>

                        { user !== null && 
                            <div className="user_loggedin">
                                { 
                                    user.avatar === undefined ?
                                    <img className="avatar" src={profile} alt={user.firstName}/>
                                    :
                                    <img className="avatar" src={"data:image/png;base64,"+user.avatar} alt={user.firstName}/>
                                }
                                <span> (Welcome! {user.firstName} {user.lastName})</span> 
                            </div>
                        }
                    </>
                }
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(NavBar);

