// import logo from './logo.svg';
import './App.css';
import Profile from './ProfilePage/Profile'
import AccountDetails from './ProfilePage/AccountDetails'
import PaymentMethod from './ProfilePage/PaymentMethod'
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <div className="main">
        <Router>
          <Switch>
            <Route path = "/">
              <Profile username={"zijiahu"}></Profile>
            </Route>

            <Route path = "/">
              <AccountDetails username ={"zijiahu"}></AccountDetails>
            </Route>

            <Route path = "/">
              <PaymentMethod> </PaymentMethod>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App