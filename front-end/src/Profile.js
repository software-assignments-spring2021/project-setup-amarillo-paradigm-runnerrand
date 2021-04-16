// import logo from './logo.svg'
import './Profile.css'
import ProfilePicture from './ProfilePicture'
import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import PaymentMethod from './PaymentMethod'
import AccountDetails from './AccountDetails'
import ResetPassword from './ResetPassword'

const Profile = (props) =>{
    return(
        <section className="profile">
            <ProfilePicture> </ProfilePicture>
            <p></p>
            {/* <username>{props.username}</username> */}
            <p></p>
            <button onClick={handleAccountDetail}>Account Details</button>
            <p></p>
            <button onClick={handlePaymentMethod}>Payment Method</button>
            <p></p>
            <button onClick={handleReset}>ResetPassword</button>
            <p></p>
            <button onClick={handleLogOut}>Log out</button>
        </section>
    )
}

const handleAccountDetail = ()=>{
    // redirect to account detail page
    window.location.href = './AccountDetails';

}

const handlePaymentMethod = ()=>{
    // redirect to payment method page
    window.location.href = './PaymentMethod';
}

const handleReset = ()=>{
    // redirect to payment method page
    window.location.href = './ResetPassword';
}

const handleLogOut = ()=>{
    // redirect to log out page
    localStorage.removeItem("token")
    window.location.href = './Home';
}

export default Profile
