import { React } from 'react';
import { useContext } from 'react';
import { Flex, Box, Spacer, Heading } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { motion } from 'framer-motion';
import AppContext from './AppContext';

const Navbar = () => {
  const { user } = useContext(AppContext);

  return (
    <Flex justify="center" align="center" p="20px" bg="black" top="0">
      <Box p="2">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/">
            <Heading size="xl" color="white" _hover={{ color: '#1DB954' }}>
              Grooves
            </Heading>
          </Link>
        </motion.button>
      </Box>
      <Spacer />
      <ButtonGroup size="md">
        {user === '' ? null : (
          <Link href="/About" target="_blank">
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
          </Link>
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
