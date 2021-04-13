import './SignupSuccess.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="success">
                    {/* <img src={Success_IMG} alt=""/> */}
                    <h2>User Created Successfully!</h2>
                    <Link to="/login">
                        <button>Click Here To Login!</button>
                    </Link>
                </div>
            </Container>
        </React.Fragment>
    );
}
export default Signup;