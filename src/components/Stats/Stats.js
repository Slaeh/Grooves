import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import AppContext from '../AppContext';
import ArtistCard from './ArtistCard';
import TrackCard from './TrackCard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Text, Box, Flex, Center } from '@chakra-ui/react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

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
        = useContext(AppContext)

    //Parses the querystring in the browser and store it into the session
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

    { console.log(track) }
    //Make sure we have atleast track data before we render
    if (track.length !== 5 || artist.length !== 5) {
        return (
            <div>
                Still Loading
            </div>
        )
    }
    else {
        return (
            <Box>
                {/* Return user's display name */}
                <Center>
                <Text mb={4}
                        mt={10}
                        bgClip="text" fontSize="70px"
                        bgGradient="linear(to-l, #01baef, #20bf55)"
                        fontWeight="bold">
                        Hello, {display}
                    </Text>
                </Center>

                {/* Return top tracks */}
                <Center>
                    <Text mb={4}
                        mt={10}
                        bgClip="text" fontSize="70px"
                        bgGradient="linear(to-l, #20bf55, #01baef )"
                        fontWeight="bold">
                        Your Top Tracks
                    </Text>
                </Center>

                {/* Carousel for songs */}
                <Flicking renderOnlyVisible={false} circular={true}>
                    {track.slice(0).reverse().map(song =>
                        <Flex className="flicking-panel" key={song.trackId} style={{ width: "100%" }} justifyContent={'center'}>
                            <TrackCard class='panel' data={song} />
                        </Flex>
                    )}
                </Flicking>

                {/* Return top artists */}
                <Center>
                    <Text mb={4}
                        mt={10}
                        bgClip="text" fontSize="70px"
                        bgGradient="linear(to-l, #01baef, #20bf55)"
                        fontWeight="bold">
                        Your Top Artists
                    </Text>
                </Center>

                {/* Carousel for artists */}
                <Flicking renderOnlyVisible={false} circular={true}>
                    {artist.slice(0).reverse().map(artists =>
                        <Flex className="flicking-panel" key={artists.artistId} style={{ width: "100%" }} justifyContent={'center'} >
                            <ArtistCard class='panel' data={artists} />
                        </Flex>
                    )}
                </Flicking>

                <Center pt={10} pb={10}>
                    <Link to="/Discover">
                        <Button label="Discover" bgGradient="linear(to-l, #01baef, #20bf55)" fontWeight="bold">
                            Discover
                        </Button>
                    </Link>
                </Center>
            </Box>
        )
    }
}

export default Stats;

