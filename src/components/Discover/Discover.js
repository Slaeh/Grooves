import React, { useState, useEffect, useContext } from 'react';
import ArtistCard from './ArtistCard';
import axios from 'axios';
import { SimpleGrid, Center, Box, Container, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/slider';

const Discover = () => {
    // const [artists, setArtists] = useState([])
    // const [ playlist, setPlaylist ] = useState([])

    const [value, setValue] = useState(20)
    const handleChange = (value) => setValue(value)

    const { 
        display,
        setDisplay,
        user,
        setUser,
        track,
        setTrack,
        artist,
        setArtist,
        userPlaylist,
        setUserPlaylist
    } 
    = useContext(AppContext);

    const storage = window.sessionStorage
    const accessToken = storage.getItem('accessToken')

    // useEffect(() => {
    //     axios.get("https://api.spotify.com/v1/me/top/artists", {
    //         params: {
    //             'limit': 5
    //         },
    //         headers: {
    //             'Authorization': 'Bearer ' + accessToken,
    //         }
    //     })
    //         .then(response => {
    //             console.log(response.data.items)
    //             setArtists(response.data.items)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])

    useEffect(() => {
        const artistIDs = artist.map(a => a.artistId)
        const seeds = artistIDs.join(",")
        axios.get("https://api.spotify.com/v1/recommendations", {
            params: {
                'seed_artists': seeds,
                'limit': 20
            },
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            }
        })
        .then(response => {
            setUserPlaylist(response.data.tracks)
        })
    }, [])

    // const generatePlaylist = (event) => {
    //     event.preventDefault()
    //     const artistIDs = artist.map(a => a.id)
    //     console.log(artistIDs)
    //     const seeds = artistIDs.join(",")
    //     console.log(seeds)
    //     axios.get("https://api.spotify.com/v1/recommendations", {
    //         params: {
    //             'seed_artists': seeds,
    //             'limit': 20
    //         },
    //         headers: {
    //             'Authorization': 'Bearer ' + accessToken,
    //         }
    //     })
    //     .then(response => {
    //         console.log(response.data.tracks)
    //         setUserPlaylist(response.data.tracks)
    //     })
    // }

    return (
        <div>
            <div>

                <Link to="/CreatePlaylist">
                    <Button label="CreatePlaylist">
                        MAKE A PLAYLIST
                    </Button>
                </Link>

            </div>
            
            <div>
            <Center>
                <SimpleGrid py={6} columns={3} spacingX="15px" spacingY="15px">
                    {artist.map(a =>
                        <div key={a.artistId}>
                            <ArtistCard a={a} artists={artist} setArtists={setArtist} />
                        </div>
                    )}
                </SimpleGrid>
            </Center>

            <Container centerContent>
            <Heading>Select Amount of Songs</Heading>
            <Slider flex="1" defaultValue={20} min={20} max={100} step={10} onChange={handleChange}>
                <SliderTrack bg="lightgreen">
                    <SliderFilledTrack bg="green" />
                </SliderTrack>
                <SliderThumb boxSize={6} children={value} />
            </Slider>
            </Container>
            </div>

            {userPlaylist.length ? (
                    userPlaylist.map(song => 
                        <div key={song.id}>
                            <p>{song.name}</p>
                        </div>)
                ) 
            : null}
        </div>
    );
}

export default Discover;
