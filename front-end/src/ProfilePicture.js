import  './ProfilePicture.css'
import profile from './profile.png'
import React from 'react'

const ProfilePicture = (props) =>{
    return (
        <React.Fragment>
        {
            props.avatar !== undefined ?
            <img src={"data:image/png;base64,"+props.avatar} onClick={props.onClick} className="profilePic" alt="profile pic"/>
            :
            <img src={profile} onClick={props.onClick} className="profilePic" alt="profile pic"/>
        }
        </React.Fragment>
    )
}

export default ProfilePicture
