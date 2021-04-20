import './AvatarChanger.css'
import React, { useState, useRef} from 'react'
import ProfilePicture from './ProfilePicture'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const AvatarChanger = (props) => {

    return(
      <div>
        <ProfilePicture> </ProfilePicture>
        <div>
            <Button className="changeAvatar"> Choose </Button>
            <Button className="changeAvatar"> Download </Button>
            <Button className="changeAvatar" onClick={handleGoBack}> Cancel </Button>
        </div>
      </div>
    )
}

const handleGoBack=(props)=>{
    // redirect to the previous account details page
    window.location.href = './'
}

export default AvatarChanger
