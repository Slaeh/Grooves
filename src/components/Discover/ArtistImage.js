import {
  Box,
  Image,
  Text,
  Center,
  Heading,
  Button,
  Flex,
  Stack,
  IconButton,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import AppContext from "../AppContext";
import React, { useState, useEffect, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";

export default function ArtistImage({ a }) {
  const toast = useToast();
  const [deletedArtist, setDeletedArtist] = useState();
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

  const close = () => {
    toast.closeAll();
  };

  const handleMouse = () => {
    console.log(`hovered ${a.artistName}`);
  };

  const handleClick = (event) => {
    console.log(`clicked ${a.artistName}`);
  };

  const removeArtist = (event) => {
    event.preventDefault();

    setDeletedArtist(a);
    console.log(artist.filter((art) => art.artistId !== a.artistId));
    setArtist(artist.filter((art) => art.artistId !== a.artistId));

    toast({
      position: "bottom-left",
      duration: "3600",
      isClosable: true,
      render: () => (
        <Tooltip hasArrow bg="gray.300" label="Undo" placement="right-start">
          <Box color="white" p={3} bg="#1DB954">
            <Flex alignContent="center" alignItems="center">
              <Text>Deleted {a.artistName}</Text>
              <Spacer />
              <IconButton
                isRound
                size="lg"
                onClick={() => {
                  setArtist(artist);
                  close();
                }}
              >
                <RepeatClockIcon color="white" />
              </IconButton>
            </Flex>
          </Box>
        </Tooltip>
      ),
    });
  };

  return (
    <div>
      <a href={a.artistLink} target="_blank" rel="noreferrer">
        <Flex w="360px" pos="relative" overflow="hidden">
          <Flex h="360px" w="full">
            <Box
              backgroundColor="#000000"
              _hover={{ color: "#1DB954" }}
              shadow="md"
              flex="none"
            >
              <Center>
                <Text fontColor="#FFFFFF" cursor="pointer" fontSize="2xl">
                  {a.artistName}
                </Text>
              </Center>
              <Image
                draggable={false}
                maxWidth={"360px"}
                maxHeight={"360px"}
                src={a.artistImage}
              />
            </Box>
          </Flex>
        </Flex>
      </a>
      <Stack
        p="2px 12px"
        bottom="24px"
        textAlign="center"
        w="full"
        color="white"
      >
        {artist.length === 1 ? null : (
          <Text
            style={{ cursor: "pointer" }}
            color="red.300"
            onClick={removeArtist}
          >
            Remove Artist
          </Text>
        )}
      </Stack>
    </div>
  );
}
