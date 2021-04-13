import './PostSuccess.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const PostSuccess = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="success">
                    <h2>Post Created Successfully!</h2>
                    <Link to="/home">
                        <button>Go to Home</button>
                    </Link>
                </div>
            </Container>
        </React.Fragment>
    );
}
export default PostSuccess;