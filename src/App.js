import './App.css';
import Home from './components/Home'
import Closing from './Closing'
import Stats from './components/Stats/Stats';
import Discover from './components/Discover/Discover'
import Playlist from './components/Playlist/Playlist'
import React, { useState } from 'react';
import AppContext from './components/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer'
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

  //State to hold playlist name
  const [ playlistName, setPlaylistName] = useState('')

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
    playlistName: playlistName,
    setPlaylistName: setPlaylistName
  }

  return (
    <AppContext.Provider value={globalStates}>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/Stats' render={() => <Stats />} />
          <Route path='/Discover' render={() => <Discover />} />
          <Route path='/CreatePlaylist' render={() => <Playlist />} />
          <Route path="/Closing" render={() => <Closing />} />
        </Switch>
      </Router>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
