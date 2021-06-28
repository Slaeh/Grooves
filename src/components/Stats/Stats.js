import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import AppContext from '../AppContext';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from '@chakra-ui/button';

const Stats = () => {
    const { 
        display,
        setDisplay,
        user,
        setUser,
        track,
        setTrack,
        artist,
        setArtist,
    } 
    = useContext(AppContext);

    //Parses the querystring in the browser and store it into the state
    const hash = window.location.hash.substring(1).split("&")
    const token = hash[0].substring(13)
    window.sessionStorage.setItem("accessToken", token)

    //Api request to get users information - User Id & Display name and stores them in states
    useEffect(() => {
        axios.get(`https://api.spotify.com/v1/me`, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                setDisplay(response.data.display_name)
                setUser(response.data.id)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //Set userId & displayName to session storage - will be used in playlist component
    window.sessionStorage.setItem("userId", user)
    window.sessionStorage.setItem("displayName", display)

    //Make API get request to get user's top artists and store them in state
    useEffect(() => {
        axios.get(`https://api.spotify.com/v1/me/top/artists`, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                const artistArr = []
                for (let i = 0; i < 5; i++) {
                    const artistObject = {
                        artistName: response.data.items[i].name,
                        artistImage: response.data.items[i].images[0].url,
                        artistId: response.data.items[i].id,
                    }
                    artistArr.push(artistObject)
                }
                setArtist(artistArr)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //Make API get request to get user's top tracks and store them in state
    useEffect(() => {
        axios.get(`https://api.spotify.com/v1/me/top/tracks`, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                const tracksArr = []
                for (let i = 0; i < 5; i++) {
                    const trackObject = {
                        trackName: response.data.items[i].name,
                        trackArtist: response.data.items[i].artists[0].name,
                        trackImage: response.data.items[i].album.images[0].url,
                        trackId: response.data.items[i].id,
                    }
                    tracksArr.push(trackObject)
                }
                setTrack(tracksArr)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            We made it to this page!
            <Link to="/Discover">
                <Button label="Discover">
                    Discover
                </Button>
            </Link>
        </div>
    )
}

export default Stats;

