import './ResetPassword.css';
import './PasswordResetConfirmation'

const ResetPassword=(props)=>{
    return (
    <div>   
        <button onClick={handleGoBack}> Go Back </button>
        <h1 className="title">Reset Password</h1>
        <hr></hr>
        <h>
            <p></p>
            <form old = {handleOld}>
                <label>
                    Old Password: 
                    <input type="text"/>
                </label>
            </form>
            <p></p>
            <form old = {handleNew}>
                <label>
                    New Password: 
                    <input type="text"/>
                </label>
            </form>
            <p></p>
            <form old = {handleRetype}>
                <label>
                    Retype Password: 
                    <input type="text"/>
                </label>
            </form>

            <p></p>
            <button onClick={handleSave}>Save</button>
            
        </h>
    </div>
    )  
}

const handleOld = ()=>{
    //redirect to old password
}

const handleNew = ()=>{
    //redirect to new password
}

const handleRetype = ()=>{
    //redirect to retype page
}

const handleSave = ()=>{
    //redirect to confirmation page
    window.location.href = './PasswordResetConfirmation'
}

const handleGoBack = () =>{
    window.location.href = '../Profile'
}

export default ResetPassword;