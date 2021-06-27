import React, { useState } from 'react';
import { Button, Flex, Heading, Box, Center} from "@chakra-ui/react"
import { connect } from 'react-redux';
const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REACT_APP_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET


const Home = () =>  {

    return (
        <Box>
            <Center>
                <Heading mb={4} mt={10} alignContent='center' orientation='horizontal'>Spotify Project</Heading>
            </Center>
            <Flex justifyContent='center' alignItems='center'>
                {/* OAuth is handled with anchor tag - axios gives an error but this will redirect the user to login to their Spotify Account */}
                <a href={`https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/Stats/&response_type=token&scope=user-top-read`}>
                    <Button colorScheme="green"> Log In With Spotify </Button>
                </a>
            </Flex>
        </Box>
    );
}

export default Home;
