import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import ResetPassword from './ResetPassword';
import Profile from './Profile'
import NavBar from './Navbar';

const App = (props)=> {
  return (
    <Router>
        <Route exact path="/" >
          <Welcome />
          </Route>
        
        <Route exact path="/Login" >
          <NavBar />
          <Login />
          </Route>

        <Route exact path="/Profile" >
          <NavBar />
          <Profile />
        </Route>

        {/* <Route exact path="/reset" >
          <NavBar />
          <ResetPassword />
          </Route> */}


      </Router>
    )
  }

export default App;