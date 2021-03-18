import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: "",
            firstname: "",
            lastname: ""
        }
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        fetch('/user', {credentials: 'include'}).then((response) => {
            response.json().then(body => {
                this.setState({
                    username: body.username,
                    firstname: body.first,
                    lastname: body.last,
                    avatar: body.avatar
                })
            });
        }); 
    }

    logout() {
        fetch('/logout',{credentials: 'include'}).then((response) => {
            this.props.history.push('/login');
        });
    }

    render() {
        return(
            <Navbar variant="dark" className="navbar-custom">
                <Navbar.Brand onClick={(e) => {this.props.history.push('/')}} href="javascript:void(0)">RunNErrand</Navbar.Brand>
                {this.state.username &&
                <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="pr-3">Welcome back, {this.state.firstname} {this.state.lastname}!</Navbar.Text>
                        <img src={this.state.avatar} width={50} height={50}/>
                </Navbar.Collapse>}


                {!this.state.username &&
                <Navbar.Collapse className="justify-content-end">

                    <ButtonGroup className="mr-2">
                        <Link to="/Home"><Button variant="outline-light">Home</Button></Link>
                    </ButtonGroup>

                    <ButtonGroup className="mr-2">
                        <Link to="/post"><Button variant="outline-light">Post</Button></Link>
                    </ButtonGroup>

                    <ButtonGroup className="mr-2">
                        <Link to="/mytasks"><Button variant="outline-light">Tasks</Button></Link>
                    </ButtonGroup>

                    <ButtonGroup className="mr-2">
                    <Link to="/ProfilePage/profile"><Button variant="outline-light">Profile</Button></Link>
                    </ButtonGroup>

                    <ButtonGroup className="mr-2">
                        <Link to="/login"><Button variant="outline-light">Login</Button></Link>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2">
                        <Link to="/signup"><Button variant="outline-light">Signup</Button></Link>
                    </ButtonGroup>
                </Navbar.Collapse>}
            </Navbar>
        );
    }
}

export default withRouter(NavBar);

