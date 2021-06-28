import './App.css';
import Home from './components/Home'
import Stats from './components/Stats';
import Discover from './components/Discover'
import CreatePlaylist from './components/CreatePlaylist'
import {BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/Stats' render={() => <Stats />} />
        <Route path = '/Discover' render={() => <Discover />} />
        <Route path = '/CreatePlaylist' render={() => <CreatePlaylist />} />
      </Switch>
    </Router>
  );
}

export default App;
