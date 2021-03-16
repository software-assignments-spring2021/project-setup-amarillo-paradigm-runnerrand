// import logo from './logo.svg';
import './App.css';
import Profile from './ProfilePage/Profile'

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

export default App;
