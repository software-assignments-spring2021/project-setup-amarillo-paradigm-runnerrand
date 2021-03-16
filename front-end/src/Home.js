import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = (props) => {
    return (
        <>
            <Router>
                <Switch>

                    <Route path = "/Home">
                    </Route>

                    <Route path = "/Post">
                    </Route>

                    <Route path = "/Task">
                    </Route>  

                    <Route path = "/Profile">
                    </Route>
                    
                </Switch>
            </Router>
        </>
    );
}

export default Home;