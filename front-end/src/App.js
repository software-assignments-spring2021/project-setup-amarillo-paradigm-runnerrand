import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
