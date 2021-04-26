// import './SignupSuccess.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const AccountDetailsSuccess = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="success">
                    <h2>Details Saved Successfully!</h2>
                    <Link to="/profile">
                        <button>Go To Profile</button>
                    </Link>
                </div>
            </Container>
        </React.Fragment>
    );
}
export default AccountDetailsSuccess;