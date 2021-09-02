import React, { useState, useContext } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";
import {
  Button,
  Flex,
  Heading,
  Box,
  Center,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useStyles } from "@chakra-ui/system";
import AppContext from "./AppContext";
const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const Home = () => {
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
  } = useContext(AppContext);
  return (
    <Flex
      justify="center"
      align="center"
      h="100vh"
      bg="blackAlpha.900"
      flexDir="column"
    >
      <LightSpeed left>
        <Text
          mb={4}
          mt={["100px", "0"]}
          bgClip="text"
          textAlign="center"
          fontSize={["70px", "80px", "100px", "100px", "70px", "90px"]}
          // bgGradient="linear(to-l, #43cea2, #185a9d)"
          // bgGradient="linear(to-l, #134e5e, #71b280)"
          bgGradient="linear(to-l, #1d976c, #1DB954)"
          // bgGradient="linear(to-l, #3ca55c, #b5ac49)"

          fontWeight="bold"
        >
          You like music
        </Text>
        <Text
          mb={4}
          mt={10}
          bgClip="text"
          textAlign="center"
          fontSize={["70px", "80px", "100px", "100px", "70px", "90px"]}
          // bgGradient="linear(to-l, #43cea2, #185a9d)"
          // bgGradient="linear(to-l, #134e5e, #71b280)"
          bgGradient="linear(to-l, #1d976c, #1DB954)"
          // bgGradient="linear(to-l, #3ca55c, #b5ac49)"
          fontWeight="bold"
        >
          We like music
        </Text>
      </LightSpeed>
      <LightSpeed right>
        <Text
          textAlign="center"
          mb={20}
          mt={20}
          fontSize={["17px", "23px", "30px", "30px", "20px"]}
          alignContent="center"
          orientation="horizontal"
          fontWeight="bold"
          color="white"
        >
          See your top tracks & artists
        </Text>
      </LightSpeed>
      <Zoom bottom>
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/Stats/&response_type=token&scope=user-top-read playlist-modify-public user-modify-playback-state`}
        >
          {/* https://grooves-app.herokuapp.com */}
          <Button
            mb={["100px", "0px"]}
            bgColor="#1DB954"
            _hover={{ bgColor: "#1DB954" }}
          >
            {" "}
            Log In With Spotify{" "}
          </Button>
        </a>
      </Zoom>
    </Flex>
    // <Flex bg="blackAlpha.900">
    //   <Center>
    //     <Stack align="center" spacing="-30px">
    //       <Center>
    //         <Text
    //           mb={4}
    //           mt={10}
    //           bgClip="text"
    //           fontSize="70px"
    //           bgGradient="linear(to-l, #80ff72, #7ee8fa)"
    //           fontWeight="bold"
    //         >
    //           You like music
    //         </Text>
    //       </Center>
    //       <Center>
    //         <Text
    //           mb={4}
    //           mt={10}
    //           bgClip="text"
    //           fontSize="70px"
    //           bgGradient="linear(to-l, #01baef, #20bf55)"
    //           fontWeight="bold"
    //         >
    //           We like music
    //         </Text>
    //       </Center>
    //     </Stack>
    //   </Center>
    //   <Center>
    //     <Text
    //       fontSize="20px"
    //       alignContent="center"
    //       orientation="horizontal"
    //       fontWeight="bold"
    //       color="white"
    //     >
    //       See your top songs & artists whenever you want
    //     </Text>
    //   </Center>
    //   <Flex justifyContent="center" alignItems="center" pt={10} pb={500}>
    //     {/* OAuth is handled with anchor tag - axios gives an error but this will redirect the user to login to their Spotify Account */}
    //     <a
    //       href={`https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/Stats/&response_type=token&scope=user-top-read playlist-modify-public user-modify-playback-state`}
    //     >
    //       <Button colorScheme="green"> Log In With Spotify </Button>
    //     </a>
    //   </Flex>
    // </Flex>
  );
};

export default Home;
