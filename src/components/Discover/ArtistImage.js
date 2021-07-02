import {
    Box,
    Image,
    Text,
    Center,
    Heading,
    Button,
    Flex,
    Stack
} from '@chakra-ui/react';
import AppContext from '../AppContext';
import React, { useState, useEffect, useContext } from 'react';

export default function ArtistImage({ a }) {

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
        if (artist.length === 1) {
            alert("Must have one artist")
            return
        }
        console.log(artist.filter(art => art.artistId !== a.artistId))
        setArtist(artist.filter(art => art.artistId !== a.artistId))
    }

    return (
        <div>
            <Flex w="360px" pos="relative" overflow="hidden">
                <Flex h="360px" w="full">
                    <Box boxSize="full" shadow="md" flex="none">
                        <Image
                            draggable={false}
                            // _hover={{ background: '#1DB954', opacity: '20%' }}
                            maxWidth={'360px'}
                            maxHeight={'360px'}
                            src={a.artistImage}
                        />
                        <Stack
                            p="2px 12px"
                            pos="absolute"
                            bottom="24px"
                            textAlign="center"
                            w="full"
                            color="white"
                        >
                            <Text fontSize="2xl">{a.artistName}</Text>
                            <a href={a.artistLink}>
                                <Text color="green.300">Learn More</Text>
                            </a>
                            {artist.length === 1 ? null :
                                (
                                    <Text style={{cursor: "pointer"}} color="red.300" onClick={removeArtist}>Remove Artist</Text>
                                )
                            }
                        </Stack>
                    </Box>
                </Flex>
            </Flex>
        </div>
    );
}