import {
    Box,
    Image,
    Text,
    Center,
    Heading,
    Button
} from '@chakra-ui/react';
import AppContext from '../AppContext';
import React, { useState, useEffect, useContext } from 'react';

export default function ArtistCard({ a, artists, setArtists }) {

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

    const handleMouse = () => {
        console.log(`hovered ${a.artistName}`)
    }

    const handleClick = (event) => {
        console.log(`clicked ${a.artistName}`)
    }

    const removeArtist = (event) => {
        event.preventDefault()
        console.log(artists.filter(artist => artist.artistId !== a.artistId))
        setArtist(artists.filter(artist => artist.artistId !== a.artistId))
    }

    return (
        <div>
            <Box
                boxShadow="dark-lg"
                as="button"
                onClick={handleClick}
                _hover={{ fontWeight: 'bold', color: 'white', background: '#1DB954', opacity: '50%', visibility: 'visible' }}
                onMouseOver={handleMouse}
            >
                <Center>
                    <Text>{a.artistName}</Text>
                </Center>
                <Image
                    _hover={{ background: '#1DB954', opacity: '50%' }}
                    maxWidth={'360px'}
                    maxHeight={'360px'}
                    src={a.artistImage}
                />
            </Box>
            <Button onClick={removeArtist}>Remove Artist</Button>
        </div>
    );
}