import "./ResetPassword.css ";
import React, {useState, useEffect, Component} from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import {Redirect} from 'react-router';


const ResetPassword = (props) => {
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");

  let dataArray = {
    oldPassword: oldPw,
    newPassword: newPw,
    userID: "iamauser1234"
  }

  function savePassword(p) {
    setIncorrectPassword("");
    console.log(dataArray)
    p.preventDefault();
    axios.post(process.env.REACT_APP_BACKEND + "/ResetPassword/", dataArray, {withCredentials: true})
        .then ((res) => {
            console.log(res);
            if (res.status === 200) {
              console.log("Reset password success");
            //   setCorrectPassword("Password reset successfully!")
            window.location.href = './PasswordResetConfirmation';
            }
        })
        .catch( err => {
            console.error(err);
            setIncorrectPassword("Incorrect current password");
        })
}
function handleOldData(p) {
  setOldPw(p.target.value)
}

function handleNewData(p) {
  setNewPw(p.target.value)
}

return (
  <div className="ResetPassword">
    
      <h1>Reset Password</h1>
      <section className="main_content">
          <form action="/Reset_password" method="POST">
                <p>Enter your current password: </p>
                <input type='text' name='currentPassword' onChange={handleOldData} />
                <br/>
                <div className='incorrectPassword'> 
                <p>{incorrectPassword}</p>
                </div>
                
                <p>Enter your new password:</p>
                <input type='text' name='newPassword' onChange={handleNewData}/>
                <br/>
                <button className='button1' onClick={savePassword}>Save</button>
                <div className='correctPassword'> 
                <p>{correctPassword}</p>
                </div>
                </form>
      </section>
  </div>
)
}

export default ResetPassword;
