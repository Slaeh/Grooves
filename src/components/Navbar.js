import { React } from 'react';
import { useContext } from 'react';
import { Flex, Box, Spacer, Heading } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/button';

import AppContext from './AppContext';

const Navbar = () => {
  const { user } = useContext(AppContext);

  return (
    <Flex justify="center" align="center" p="20px" bg="black" top="0">
      <Box p="2">
        <Heading size="lg" color="white">
          Spotify Project
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup size="md">
        {user !== '' ? null : (
          <Button
            bg="#1DB954"
            mr="5"
            color="white"
            _hover={{
              bgColor: '#1DB954',
            }}
          >
            About
          </Button>
        )}
        {user === '' ? (
          <Button
            bg="#1DB954"
            color="white"
            _hover={{
              bgColor: '#1DB954',
            }}
          >
            Login
          </Button>
        ) : (
          <Link href="https://www.spotify.com/us/account/apps/" target="_blank">
            <Button
              bg="#1DB954"
              color="white"
              _hover={{
                bgColor: '#1DB954',
              }}
            >
              Logout
            </Button>
          </Link>
        )}
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
