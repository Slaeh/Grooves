import './App.css';
import Home from './components/Home'
import Stats from './components/Stats/Stats';
import Discover from './components/Discover'
import Playlist from './components/Playlist/Playlist'
import React, { useState } from 'react';
import AppContext from './components/AppContext';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //States to hold user information - display name & user id
  const [ displayName, setDisplayName ] = useState('')
  const [ userId, setUserId ] = useState('')

  //States to hold user's top artists and tracks
  const [ tracks, setTracks ] = useState([])
  const [ artists, setArtists ] = useState([])

  //State to hold playlist
  const [ playlist, setPlaylist ] = useState([])

  //State to hold access token
  const [ token , setToken ] = useState('')

  //Global states to pass to all components
  const globalStates = {
    display: displayName,
    setDisplay: setDisplayName,
    user: userId,
    setUser: setUserId,
    track: tracks,
    setTrack: setTracks,
    artist: artists,
    setArtist: setArtists,
    userPlaylist: playlist,
    setUserPlaylist: setPlaylist,
  }

  return (
    <AppContext.Provider value={globalStates}>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/Stats' render={() => <Stats />} />
          <Route path='/Discover' render={() => <Discover />} />
          <Route path='/CreatePlaylist' render={() => <Playlist />} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
