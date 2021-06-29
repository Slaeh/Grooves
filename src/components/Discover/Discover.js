import React, { useState, useEffect, useContext } from 'react';
import ArtistImage from './ArtistImage';
import axios from 'axios';
import { SimpleGrid, Center, Container, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/slider';

const Discover = () => {

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

    // New recommended playlist on each 'artist' state update
    useEffect(() => {
        const storage = window.sessionStorage
        const accessToken = storage.getItem('accessToken')
        console.log('state changed')
        console.log(artist)
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
            console.log(response.data.tracks)
            setUserPlaylist(response.data.tracks)
        })
    }, [artist])

    return (
        <div>   
            <div>
            <Center>
                <SimpleGrid py={6} columns={3} spacingX="15px" spacingY="15px">
                    {artist.map(a =>
                        <div key={a.artistId}>
                            <ArtistImage a={a} />
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
                <SliderThumb boxSize={6} textColor="black" children={value} />
            </Slider>
            </Container>
            </div>

            <div>
                <Center>
                <Link to="/CreatePlaylist">
                    <Button label="CreatePlaylist">
                        Generate A Playlist
                    </Button>
                </Link>
                </Center>
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
