// import logo from './logo.svg'
import './Profile.css'
import ProfilePicture from './ProfilePicture'
import React from 'react'
import { Link } from 'react-router-dom'
import PaymentMethod from './PaymentMethod'
import AccountDetails from './AccountDetails'

const Profile = (props) =>{
    return(
        <section className="profile">
            <ProfilePicture> </ProfilePicture>
            <p></p>
            <username>{props.username}</username>
            <p></p>
            <button onClick={handleAccountDetail}>Account Details</button>
            <p></p>
            <button onClick={handlePaymentMethod}>Payment Method</button>
            <p></p>
            <button onClick={handleLogOut}>Log out</button>
        </section>
    )
}

const handleAccountDetail = ()=>{
    // redirect to account detail page

}

const handlePaymentMethod = ()=>{
    // redirect to payment method page
}

const handleLogOut = ()=>{
    // redirect to log out page
}

export default Profile
