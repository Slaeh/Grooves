import React, { useEffect, useContext } from 'react';
import axios from 'axios'
import AppContext from '../AppContext';
import ArtistCard from './ArtistCard';
import TrackCard from './TrackCard';
import { Link } from "react-router-dom";
import { Button, Text, Box, Flex, Center, Tooltip, Spinner } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { motion } from "framer-motion"
import whiteBgImage from '../../images/spotify-white2-bg.png'

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
                console.log(response)
                const artistArr = []
                for (let i = 0; i < 5; i++) {
                    const artistObject = {
                        artistName: response.data.items[i].name,
                        artistImage: response.data.items[i].images[0].url,
                        artistId: response.data.items[i].id,
                        artistLink: response.data.items[i].external_urls.spotify,
                        artistFollowers: response.data.items[i].followers.total,
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
                console.log(response)
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

    //Get an artists top tracks
    // const [ artistTopTracks, setArtistTopTracks ] = useState('')
    // artist.map(id => 
    // axios.get(`https://api.spotify.com/v1/artists/${id.artistId}/top-tracks?market=US`, {
    //     headers: {
    //         'Authorization': 'Bearer ' + token,
    //     }
    // })
    //     .then(response => {
    //         const artistTopTracks = []
    //         console.log(response)
    //     })
    //     setArtistTopTracks(response.data.tracks)
    //     )
    //     .catch(err => {
    //         console.log(err)
    //     })
    // )
    
    //Make sure we have atleast track data before we render
    if (track.length !== 5 || artist.length !== 5) {
        return (
            <Center pt={20} pb={20}>
                <Spinner size="xl" color='green'>
                </Spinner>
            </Center>
        )
    }
    else {
        return (
            <Box backgroundImage={`url(${whiteBgImage})`} backgroundRepeat="no-repeat" bgSize="contain 100%" bgPosition="right">
                {/* Return user's display name */}
                <Center>

                    <Text
                        mb={4}
                        mt={10}
                        bgClip="text" fontSize="70px"
                        bgGradient="linear(to-l, #2c3e50, #000000)"
                        fontWeight="bold"
                    >
                        Hello, {display}
                    </Text>

                </Center>

                {/* Return top tracks */}
                <Center>
                    <Text
                        mb={4}
                        mt={10}
                        bgClip="text" fontSize="70px"
                        bgGradient="linear(to-l, #000000, #2c3e50 )"
                        fontWeight="bold"
                    >
                        Your Top Tracks
                    </Text>

                </Center>

                {/* Tooltip for tracks */}
                <Center pt={2} pb={10}>
                    <Tooltip
                        hasArrow label="Swipe to see more tracks"
                        bg="gray.300"
                        color="black"
                    >
                        <InfoIcon />
                    </Tooltip>
                </Center>

                {/* Carousel for songs */}
                <Flicking renderOnlyVisible={false} >
                    {track.slice(0).reverse().map((song, index) =>
                        <Flex className="flicking-panel" key={song.trackId} style={{ width: "100%" }} justifyContent={'center'}>
                            <TrackCard class='panel' data={song} ranking={track.length - index}></TrackCard>
                        </Flex>
                    )}
                </Flicking>

                {/* Return top artists */}
                <Center>
                    <motion.div
                        transition={{ duration: 0.5 }}
                    >
                    <Text mb={4}
                        mt={10}
                        bgClip="text" fontSize="70px"
                        bgGradient="linear(to-l, #2c3e50, #000000)"
                        fontWeight="bold"
                    >
                        Your Top Artists
                    </Text>
                    </motion.div>
                </Center>

                {/* Tooltip for artists */}
                <Center pt={2} pb={10}>
                    <Tooltip hasArrow label="Swipe to see more artists" bg="gray.300" color="black">
                        <InfoIcon />
                    </Tooltip>
                </Center>

                {/* Carousel for artists */}
                <Flicking renderOnlyVisible={false}>
                    {artist.slice(0).reverse().map((artists, index) =>
                        <Flex className="flicking-panel" key={artists.artistId} style={{ width: "100%" }} justifyContent={'center'} >
                            <ArtistCard class='panel' data={artists} ranking={(artist.length - index)} />
                        </Flex>

                    )}
                </Flicking>

                {/* Redirect to discover page */}
                <Center>
                    <Text
                        mb={4}
                        mt={10}
                        bgClip="text" fontSize="70px"
                        bgGradient="linear(to-l, #000000, #2c3e50)"
                        fontWeight="bold"
                    >
                        Get a playlist personalized for you
                    </Text>
                </Center>
                <Center pt={10} pb={10}>
                    <Link to="/Discover">
                        <Button
                            label="Discover"
                            bgGradient="linear(to-l, #01baef, #20bf55)"
                            fontWeight="bold"
                            size="lg"
                            variant="solid"
                        >
                            Discover
                        </Button>
                    </Link>
                </Center>
            </Box>
        )
    }
}

export default Stats;

