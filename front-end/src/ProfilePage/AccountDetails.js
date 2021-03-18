import './AccountDetails.css';
import ProfilePicture from './ProfilePicture';
// should account details be run with another .js file like App.js? 
const accountDetails = (props) => {
    return(
        <section>
            <ProfilePicture> </ProfilePicture>
            <p></p>
            <button onClick={handleProfilePhoto}>Profile Photo</button>
            <p></p>
            <button onClick={handleFirstName}>First Name</button>
            <p></p>
            <button onClick={handleLastName}>Last Name</button>
            <p></p>
            <button onClick={handleEmail}>Email</button>
            <p></p>
            <button onClick={handlePhoneNumber}>Phone Number</button>
            <p></p>
            <button onClick={handleZipCode}>Zip Code</button>
            <p></p>
        </section>
    )
}

const handleProfilePhoto = (props) =>{
    //redirect to profile photo editing page
}

const handleFirstName=(props)=>{
    // redirect to first name editing page
}

const handleLastName=(props)=>{
    // redirect to last name editing page
}

const handleEmail=(props)=>{
    // redirect to email editing page
}

const handlePhoneNumber=(props)=>{
    // redirect to phone number editing page
}

const handleZipCode=(props)=>{
    // redirect to zip code editing page
}

export default accountDetails;
