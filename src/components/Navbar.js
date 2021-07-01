import React from 'react';
import { Flex, Box, Spacer, Heading, } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const Navbar = () => {
    return (
        <Flex pt={5} pl={5} pr={5} pb={10} bg='black'>
            <Box p='2'>
                <Heading size="lg" color='white'>Spotify Project</Heading>
            </Box>
            <Spacer />
            <Flex>
            <Box p='2'>
                <Button colorScheme="green" mr="5" size="md">About</Button>
                <Button colorScheme="green" size="md">Log in</Button>
            </Box>
            </Flex>
        </Flex>

    );
}

export default Navbar;
