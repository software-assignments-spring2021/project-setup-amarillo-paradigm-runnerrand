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
import Post from './Post'
import ResetPassword from './ResetPassword'
import PaymentMethod from './PaymentMethod';
import PasswordResetConfirmation from './PasswordResetConfirmation'
import TaskList from './TaskList'
import TaskDetails from './TaskDatails'
import PostConfirmation from './PostConfirmation'
import TaskListGen from './TaskListGen'
import TaskBrowser from './TaskBrowser'
import MyTasks from './MyTasks'


const TaskWrapper = ({ match }) => {
  return (
    <>
      <NavBar />
      <TaskBrowser taskId={match.params.id} />
    </>
  )
}



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


          <Route path="/tasks/:id" component={TaskWrapper} />

          <Route path="/tasks">
            <TaskListGen />
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

        <Route exact path="/mytasks" >
          <NavBar />
          <MyTasks />
        </Route>

        <Route exact path="/ResetPassword" >
          <NavBar />
          <ResetPassword />
        </Route>

        <Route exact path="/PasswordResetConfirmation" >
          <NavBar />
          <PasswordResetConfirmation />
        </Route>

        <Route exact path="/PostConfirmation" >
          <NavBar />
          <PostConfirmation />
        </Route>

        <Route exact path="/Post" >
          <NavBar />
          <Post />
        </Route>

      </Router>
    )
  }

export default App;
