// import logo from './logo.svg';
import './App.css';
import Profile from './ProfilePage/Profile'
import AccountDetails from './ProfilePage/AccountDetails'
import ResetPassword from './ResetPassword'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Profile username={"zijiahu"}> Hello</Profile>
        {/* <p> Hello </p> */}
      </header>
    </div>
  );
}

function Account(){
  return(
  <div className="Account">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <AccountDetails username ={"zijiahu"}>Hello</AccountDetails>
      {/* <p> Hello </p> */}
      </header>
    </div>
  );
}

function PasswordReset(){
  return(
    <div className="PasswordReset">
      <header className="App-header">
        <ResetPassword>reset</ResetPassword>
      </header>
    </div>
  )
}

export default PasswordReset;
