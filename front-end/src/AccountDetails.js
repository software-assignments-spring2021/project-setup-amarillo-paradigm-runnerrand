import './AccountDetails.css';
import ProfilePicture from './ProfilePicture';

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
        <section>
            <button onClick={handleGoBack}> Go Back </button>
            <h1 className="title">Account Details</h1>
            <hr></hr>
            <section className="accountDetails">
                <ProfilePicture> </ProfilePicture>
                <h4 id="username">Username: {accountInfo.userName}</h4>
                {/* <input name="my_files" type="file" multiple />
                <br></br>
                <input type="submit" value="Submit!!!" /> */}
                <button onClick={handleProfilePicture}>Edit Profile Picture</button>
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
        </section>
    )
}

const handleProfilePicture = (props) =>{
    <input name="edit_profile" type="file" multiple />
}

const handleEditDetails=(props)=>{
    // redirect to account details editing page
}

const handleGoBack=(props)=>{
    // redirect to the previous profile page
    window.location.href = '../Profile'
}

export default accountDetails;
