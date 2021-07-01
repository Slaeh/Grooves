import React from 'react';
import { Flex, Box, Spacer, Heading, } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const Navbar = () => {
    const storage = window.sessionStorage
    const accessToken = storage.getItem('accessToken')
    console.log(accessToken)
    return (
        <Flex pt={5} pl={5} pr={5} pb={10} bg='black'>
            <Box p='2'>
                <Heading size="lg" color='white'>Spotify Project</Heading>
            </Box>
            <Spacer />
            <Flex>
            <Box p='2'>
                <Button colorScheme="green" mr="5" size="md">About</Button>
                {
                accessToken == null ? 
                    (<Button colorScheme="green" size="md">Login</Button>)
                        :
                    (<Button colorScheme="green" size="md">Logout</Button>)
                }
            </Box>
            </Flex>
        </Flex>

    );
}

export default Navbar;
