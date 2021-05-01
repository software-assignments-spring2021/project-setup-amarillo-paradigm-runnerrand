import React,{useEffect,useState} from "react"
import './AccountDetails.css';
import ProfilePicture from './ProfilePicture';
import Button from 'react-bootstrap/Button';

const AccountDetails = (props) => {
    // const accountInfo ={
    //     userName: "null",
    //     firstName : "null", 
    //     lastName : "null",
    //     email : "null",
    //     phoneNumber: "null",
    //     zipCode : "null"
    // }
    const [token,setToken] = useState()
    const [placeholderImg,setPlaceholderImg] = useState(null)
    const [accountInfo,setAccountInfo] = useState()

    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [zip,setZip] = useState('')

    const [isEdit,setIsEdit] = useState(false)

    useEffect(() => {
        setToken(localStorage.getItem("token"))
        setAccountInfo(JSON.parse(localStorage.getItem("user")))
    },[])

    const handleProfilePicture = () =>{
        document.getElementById("upload_img_btn").click()
    }
    
    const handleEditDetails=()=>{
        setIsEdit(true)
    }

    const updatePlaceholder = (e) => {
        let tempPath = URL.createObjectURL(e.target.files[0]);
        console.log(tempPath)
        setPlaceholderImg(tempPath)
    }

    const handleDiscard = () => {
        setPlaceholderImg(null)
    }

    const handleProfileImageUpdate = () => {
        const formData = new FormData()
        formData.append("picture",document.getElementById("upload_img_btn").files[0])
        fetch(`${process.env.REACT_APP_BACKEND}/users/edit-avatar`,{
            method:"POST",
            headers:{
                "Authorization":token
            },
            body:formData
        }).then(res => res.json())
        .then(response => {
            console.log(response)
            // setUser(response)
            // setIsLoading(false)
            // return <Redirect to="/profile" />
        }).catch(err => {
            console.log(err)
            // setIsLoading(false)
            // localStorage.removeItem("token")
        })
    }

    const handleProfileUpdate = () => {
        fetch(`${process.env.REACT_APP_BACKEND}/users/edit`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify({
                email,
                phone,
                zip
            })
        }).then(res => res.json())
        .then(response => {
            console.log(response)
            if(response.status === 200){
                window.location.href = "/AccountDetailsSuccess"
            }
        }).catch(err => {
            console.log(err)
        })
    }
    
    const handleGoBack=(props)=>{
        // redirect to the previous profile page
        window.location.href = '../Profile'
    }

    const handleCancelEdit = () => {
        setIsEdit(false)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updateZip = (e) => {
        setZip(e.target.value)
    }

    const updatePhone = (e) => {
        setPhone(e.target.value)
    }

    return(
        <section>
            <div className="account flex">
                <h1 className="title">Account Details</h1>
                <button className="go-back-btn" onClick={handleGoBack}> Go Back </button>
            </div>
            <hr></hr>
            <section className="accountDetails">
                {
                    placeholderImg === null ?
                        <ProfilePicture onClick={handleProfilePicture} avatar={accountInfo?.avatar} />
                    :
                    <>
                        <img className="placeholder" src={placeholderImg} alt="new avatar"/>
                        <div>
                            <button onClick={handleProfileImageUpdate}>Save Profile Picture</button>
                            &emsp;
                            <button onClick={handleDiscard}>Discard Profile Picture</button>
                        </div>
                    </>
                }
                <input id="upload_img_btn" type="file" name="picture" accept="image/*"  style={{display:'none'}} onChange={updatePlaceholder}/>                
                <div className="fields">
                    <h4><strong>First Name:</strong>  {accountInfo?.firstName}</h4>
                    <h4><strong>Last Name:</strong> {accountInfo?.lastName}</h4>
                    <h4><strong>Email:</strong> {isEdit ? <input type="email" placeholder={accountInfo?.email} defaultValue={accountInfo?.email} onChange={updateEmail} /> : accountInfo?.email}</h4>
                    <h4><strong>Phone Number:</strong> {isEdit ? <input type="tel" placeholder={accountInfo?.phone || "N/A"} defaultValue={accountInfo?.phone || ""} onChange={updatePhone}/> : accountInfo?.phone || "N/A"}</h4>
                    <h4><strong>Zip Code:</strong> {isEdit ? <input type="number" placeholder={accountInfo?.zip || "N/A"} defaultValue={accountInfo?.zip || ""} onChange={updateZip}/> : accountInfo?.zip || "N/A"}</h4>
                </div>
                {
                    isEdit ? 
                    <div className="row">
                        <button onClick={handleProfileUpdate}>Save Details</button>
                        <button onClick={handleCancelEdit}>Cancel Edit</button>
                    </div>
                    :
                    <button onClick={handleEditDetails}>Edit Account Details</button>
                }
            </section>
        </section>
    )
}

const handleProfilePicture = (props) =>{
    // window.location.href = '/AccountDetails/ChangeAvatar'
    window.location.href = '/AccountDetails/AvatarChanger'

}

const handleEditDetails=(props)=>{
    // redirect to account details editing page
    window.location.href = '/AccountDetails/ChangeAccountDetails'
}

const handleGoBack=(props)=>{
    // redirect to the previous profile page
    window.location.href = '../Profile'
}

export default AccountDetails;
