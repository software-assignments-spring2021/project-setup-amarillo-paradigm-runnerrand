import React from 'react'
import './ChangeAvatar.css'
import ProfilePicture from './ProfilePicture'
import Button from 'react-bootstrap/Button'


const ChangeAvatar = (props) => {
  return (
    <section>
      <ProfilePicture> </ProfilePicture>
      <Button className="changeAvatar"> Choose </Button>
      <Button className="changeAvatar"> Download </Button>
    </section>
  )
}

export default ChangeAvatar