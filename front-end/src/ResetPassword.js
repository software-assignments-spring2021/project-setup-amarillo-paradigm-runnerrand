import "./ResetPassword.css";
import React, {useState, useEffect, Component} from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import {Redirect} from 'react-router';


const ResetPassword = (props) => {
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [cnfrmPw, setCnfrmPw] = useState("");
  const [msg, setMsg] = useState("");
  const [error,setError] = useState(false)

  let dataArray = {
    oldPassword: oldPw,
    newPassword: newPw,
  }

  function savePassword(e) {
    e.preventDefault();
    if(newPw === cnfrmPw){
        setMsg("");
        setError(false)
        console.log(dataArray)
        const token = localStorage.getItem("token")
        axios({
            method:'post',
            url:`${process.env.REACT_APP_BACKEND}/users/reset-password`,
            data:dataArray,
            headers:{
                Authorization:token
            }
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                if(res.data.status === 401){
                    setError(true)
                    setMsg(res.data.msg)
                }else{
                    // window.location.href = './PasswordResetConfirmation';
                    setMsg("Password Changed Successfully!")
                    console.log("Reset password success");
                }
            }
        })
        .catch( err => {
            setError(true)
            console.error(err);
            setMsg("Incorrect current password");
        })
    }
}
function handleOldData(e) {
  setOldPw(e.target.value)
}

function handleNewData(e) {
  setNewPw(e.target.value)
}

function handleCnfrmPw(e) {
    setCnfrmPw(e.target.value)
}

useEffect(() => {
    if(newPw.length !== 0 && cnfrmPw.length !== 0){
        if(newPw !== cnfrmPw){
            setMsg("Passwords Do Not Match")
        }else{
            setMsg("")
        }
    }
}, [newPw,cnfrmPw])

return (
  <div className="ResetPassword">
    
      <h1>Reset Password</h1>
      <section className="main_content">
          <form action="/Reset_password" method="POST">
                <p>Enter your current password: </p>
                <input type='password' name='currentPassword' onChange={handleOldData} />
                <br/>
                <p>Enter your new password:</p>
                <input type='password' name='newPassword' onChange={handleNewData}/>
                <p>Confirm your new password:</p>
                <input type='password' name='confirmPassword' onChange={handleCnfrmPw}/>
                <br/>
                <p></p>
                <p className={error ? "text-danger":"text-success"}>{msg}</p>
                <button className='button1' onClick={savePassword}>Save</button>
                <div className='correctPassword'> 
                </div>
                </form>
      </section>
  </div>
)
}

export default ResetPassword;
