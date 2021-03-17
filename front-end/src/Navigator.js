import React from React.js
import { Link } from 'react-router-dom'
import 'Navigator.css'

const Navigator = (props) =>{
    return(
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/">POST</Link>
            <Link to="/">TASKS</Link>
            <Link to="/ProfilePage">PROFILE</Link>
        </nav>
    )
}

export default Navigator