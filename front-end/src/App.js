import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import AccountDetails from './AccountDetails';
import NavBar from './Navbar';
import Signup from './Signup'
import ResetPassword from './ResetPassword'
import PaymentMethod from './PaymentMethod';
import PasswordResetConfirmation from './PasswordResetConfirmation'
import TaskList from './TaskList'
import TaskDetails from './TaskDatails'

const App = (props)=> {
  return (
    <Router>
        <Route exact path="/" >
          <Welcome />
          </Route>
        
        <Route exact path="/Home" >
          <NavBar />
          <Home />
          </Route>

          <Route exact path="/TaskList" >
          <NavBar />
          <TaskList />
        </Route>

        <Route exact path="/TaskDetails" >
          <NavBar />
          <TaskDetails />
        </Route>

        <Route exact path="/Login" >
          <NavBar />
          <Login />
          </Route>

        <Route exact path="/Signup" >
          <NavBar />
          <Signup />
          </Route>  

        <Route exact path="/Profile" >
          <NavBar />
          <Profile />
        </Route>

        <Route exact path="/AccountDetails" >
          <NavBar />
          <AccountDetails />
        </Route>

        <Route exact path="/PaymentMethod" >
          <NavBar />
          <PaymentMethod />
        </Route>

        <Route exact path="/ResetPassword" >
          <NavBar />
          <ResetPassword />
        </Route>

        <Route exact path="/PasswordResetConfirmation" >
          <NavBar />
          <PasswordResetConfirmation />
        </Route>

      </Router>
    )
  }

export default App;
