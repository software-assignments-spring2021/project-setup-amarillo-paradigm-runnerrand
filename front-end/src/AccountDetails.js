import './AccountDetails.css';
import ProfilePicture from './ProfilePicture';
// should account details be run with another .js file like App.js? 
const accountDetails = (props) => {
    const accountInfo ={
        userName: "null",
        firstName : "null", 
        lastName : "null",
        email : "null",
        phoneNumber: "null",
        zipCode : "null"
    }
    return(
        <section class="accountDetails">
            <ProfilePicture> </ProfilePicture>
            <h4 id="username">Username: {accountInfo.userName}</h4>
            <p></p>
            <button onClick={handleProfilePhoto}>Edit Profile Picture</button>
            <p></p>
            <h4>First Name: {accountInfo.firstName}</h4>
            <p></p>
            <h4>Last Name: {accountInfo.lastName}</h4>
            <p></p>
            <h4>Email: {accountInfo.email}</h4>
            <p></p>
            <h4>Phone Number: {accountInfo.phoneNumber}</h4>
            <p></p>
            <h4>Zip Code: {accountInfo.zipCode}</h4>
            <p></p>
            <button onClick={handleEditDetails}>Edit Account Details</button>
            <p></p>
        </section>
        // <section>
        //     <ProfilePicture class="profilePic"> </ProfilePicture>
        //     <p></p>
        //     <button onClick={handleProfilePhoto}>Profile Photo</button>
        //     <p></p>
        //     <button onClick={handleFirstName}>First Name</button>
        //     <p></p>
        //     <button onClick={handleLastName}>Last Name</button>
        //     <p></p>
        //     <button onClick={handleEmail}>Email</button>
        //     <p></p>
        //     <button onClick={handlePhoneNumber}>Phone Number</button>
        //     <p></p>
        //     <button onClick={handleZipCode}>Zip Code</button>
        //     <p></p>
        //     <button onClick={handleZipCode}>Edit</button>
        //     <p></p>
        // </section>
        
    )
}

const handleProfilePhoto = (props) =>{
    //redirect to profile photo editing page
}

const handleEditDetails=(props)=>{
    // redirect to account details editing page
}

export default accountDetails;
