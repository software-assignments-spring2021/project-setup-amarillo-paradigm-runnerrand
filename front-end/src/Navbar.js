import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const NavBar = () => {

        return(
            <Navbar variant="dark" className="navbar-custom">
                <Navbar.Brand>RunNErrand</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">

                    <ButtonGroup className="mr-2">
                        <Link to="/Home"><Button variant="outline-light">Home</Button></Link>
                    </ButtonGroup>

                    <ButtonGroup className="mr-2">
                        <Link to="/post"><Button variant="outline-light">Post</Button></Link>
                    </ButtonGroup>

                    <ButtonGroup className="mr-2">
                        <Link to="/mytasks"><Button variant="outline-light">My Tasks</Button></Link>
                    </ButtonGroup>

                    <ButtonGroup className="mr-2">
                    <Link to="/profile"><Button variant="outline-light">Profile</Button></Link>
                    </ButtonGroup>

                    <ButtonGroup className="mr-2">
                        <Link to="/login"><Button variant="outline-light">Login</Button></Link>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2">
                        <Link to="/signup"><Button variant="outline-light">Signup</Button></Link>
                    </ButtonGroup>
                </Navbar.Collapse>
            </Navbar>
        );
    }

export default withRouter(NavBar);

