// import logo from './logo.svg';
import './App.css';
import Profile from './ProfilePage/Profile'
import AccountDetails from './ProfilePage/AccountDetails'
import PaymentMethod from './ProfilePage/PaymentMethod'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={profile} id="profilePic"/> */}
        <Profile username={"zijiahu"}> </Profile>
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
      </header>
    </div>
  );
}

function Payment(){
  return(
  <div className="Payment">
    <header className="App-header">
      <PaymentMethod> </PaymentMethod>
      </header>
    </div>
  );
}

// export default Account;
export default App;
// export default Payment;