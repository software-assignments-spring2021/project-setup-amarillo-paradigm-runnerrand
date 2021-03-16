// import logo from './logo.svg';
import './Profile.css';
import ProfilePicture from './ProfilePicture';
// import ProfilePicture from './ProfilePicture';

const Profile = (props) =>{
    return(
        // <section className="profile">
        <section>
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

export default Profile;
