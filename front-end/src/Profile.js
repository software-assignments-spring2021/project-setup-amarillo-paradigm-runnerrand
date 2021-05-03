import React,{useEffect,useState} from "react"
// import logo from './logo.svg'
import './Profile.css'
import axios from "axios"
import ProfilePicture from './ProfilePicture'
import { Link } from 'react-router-dom'
import Home from './Home'
import PaymentMethod from './PaymentMethod'
import AccountDetails from './AccountDetails'
import ResetPassword from './ResetPassword'

const Profile = (props) =>{
    const [avatar,setAvatar] = useState(undefined)
    const [earnings,setEarnings] = useState(0)
    const [spend,setSpend] = useState(0)

    useEffect(() => {
        setAvatar(JSON.parse(localStorage.getItem("user"))?.avatar)
        const token = localStorage.getItem("token")
        axios({
            method:'get',
            url:`${process.env.REACT_APP_BACKEND}/users/balance`,
            headers:{
                Authorization:token
            }
        }).then(res => {
            console.log(res.data)
            setEarnings(res.data.earnings)
            setSpend(res.data.spend)
        })

    }, [])

    return(
        <>  
            <div className="ledger">
                <h2>How Much i Earned: ${earnings}</h2>
                <h2>How Much i Spent: ${spend}</h2>
            </div>
            <section className="profile">
                <ProfilePicture avatar={avatar}/>
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
        </>
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
    localStorage.removeItem("user")
    window.location.href = './Home';
}

export default Profile
