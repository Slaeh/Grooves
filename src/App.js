import './App.css';
import Home from './components/Home'
import Stats from './components/Stats';
import {BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/Stats' render={() => <Stats />} />
      </Switch>
    </Router>
  );
}

export default App;
