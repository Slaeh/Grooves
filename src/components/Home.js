import React, { useState, useContext } from 'react';
import { Button, Flex, Heading, Box, Center, Text, Stack } from "@chakra-ui/react"
import { useStyles } from '@chakra-ui/system';
import AppContext from './AppContext';
const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REACT_APP_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const Home = () =>  {
    
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
        setUserPlaylist, 
    } 
    = useContext(AppContext);
    return (
        <Box>
            <Stack spacing="-30px">
                <Center>
                    <Text mb={4}
                        mt={10}
                        bgClip="text" fontSize="70px"
                        bgGradient="linear(to-l, #20bf55, #01baef )"
                        fontWeight="bold"
                    >
                        You like music
                    </Text>
                </Center>
                <Center>
                    <Text mb={4}
                        mt={10}
                        bgClip="text" fontSize="70px"
                        bgGradient="linear(to-l, #01baef, #20bf55)"
                        fontWeight="bold"
                    >
                        We like music
                    </Text>
                </Center>
            </Stack>

            <Center>
                <Text fontSize="20px"
                    alignContent='center'
                    orientation='horizontal'
                    fontWeight="bold"
                    
                >
                    See your top songs & artists whenever you want
                </Text>
            </Center>
            <Flex justifyContent='center' alignItems='center' pt={10} pb={500}>
                {/* OAuth is handled with anchor tag - axios gives an error but this will redirect the user to login to their Spotify Account */}
                <a href={`https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/Stats/&response_type=token&scope=user-top-read`}>
                    <Button colorScheme="green"> Log In With Spotify </Button>
                </a>
            </Flex>
        </Box>
    );
}

export default Home;
