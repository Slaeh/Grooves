import axios from "axios";
import Song from "./Song";
import { useContext, useState } from "react";
import AppContext from "../AppContext";
import blackBgImage from "../../images/spotify-black-bg.png";
import RubberBand from "react-reveal/RubberBand";
import { InfoIcon } from "@chakra-ui/icons";
import ModalButton from "./ModalButton";
import {
  Box,
  useDisclosure,
  Heading,
  Center,
  Flex,
  Text,
  Button,
  Divider,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Tooltip,
  Link,
} from "@chakra-ui/react";

const Playlist = () => {
  const [hideCreate, setHideCreate] = useState(false);
  const [hideClose, setHideClose] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { playlistName, setPlaylistName, user, userPlaylist, setUserPlaylist } =
    useContext(AppContext);
  const accessToken = window.sessionStorage.getItem("accessToken");

  // onClick function for Create Playlist button to send API request to create a user playlist
  const handleCreatePlaylist = async () => {
    // spotify API request to create an Empty playlist to a user's account
    const createPlaylistResponse = await axios({
      method: "post",
      url: `https://api.spotify.com/v1/users/${user}/playlists`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        name: playlistName,
      },
    });

    const playlistId = createPlaylistResponse.data.id;
    const tracksURI = userPlaylist.map((track) => track.uri);

    // spotify API request to add a list of songs to the empty playlist created
    // from the above API request
    console.log(userPlaylist);
    await axios({
      method: "post",
      url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      data: {
        uris: tracksURI,
      },
    });
    setHideClose(false);
    setHideCreate(true);
  };

  // onChange function for controlling playlist title input
  const handleChange = (e) => setPlaylistName(e.target.value);

  // onClick function for trash IconButton
  // removes a song from userPlaylist when clicked
  const handleTrashButton = (songToRemove) => {
    console.log("in handleTrashButton");
    const playlistAfterSongRemoved = userPlaylist.filter(
      (song) => song !== songToRemove
    );

    setUserPlaylist(playlistAfterSongRemoved);
  };

  // list of songs to render in main container
  const listOfSongs = userPlaylist.map((song) => {
    const albumImage = song.album.images[0];
    const songName = song.name;
    const artistName = song.artists[0].name;
    const albumName = song.album.name;
    const yearReleased = song.album.release_date.slice(0, 4);
    const previewAudio = song.preview_url;

    return (
      <Song
        onClick={() => handleTrashButton(song)}
        key={song.id}
        image={albumImage}
        title={songName}
        artist={artistName}
        album={albumName}
        year={yearReleased}
        previewAudio={previewAudio}
      />
    );
  });

  // text for the tool tip label
  const toolTipLabel = (
    <Text>
      Hover over album art to hear a preview of the song (if available) <br />{" "}
      WARNING - LOWER VOLUME
    </Text>
  );

  return (
    <Box
      backgroundImage={`url(${blackBgImage})`}
      backgroundRepeat="no-repeat"
      bgSize="contain 100%"
      bgPosition="right"
    >
      <Center>
        <Box width={["95%", "95%", "95%", "90%", "59%"]} mt="75px">
          <Center>
            <Heading
              d="inline-block"
              // bgGradient="linear(to-l, #2c3e50, #000000 )"
              color="#fff"
              fontWeight="bold"
              mb="20px"
              size="2xl"
              // ml={['40px']}
              // bgClip="text"
            >
              Your New Playlist
            </Heading>
            <Tooltip
              placement="right"
              hasArrow
              label={toolTipLabel}
              bg="#fff"
              color="black"
            >
              <InfoIcon color="white" mb="15px" ml="10px" w="8" h="8" />
            </Tooltip>
          </Center>
          <Flex
            justify="space-between"
            overflowX="hidden"
            overflowY="scroll"
            maxHeight="500px"
            p="20px"
            pr="0px"
            direction="column"
            borderRadius="30px"
            bg="#e6e6e6"
            boxShadow="dark-lg"
          >
            <Divider
              width="95%"
              borderColor="gray.400"
              orientation="horizontal"
              colorScheme="primary"
            />
            {listOfSongs}
          </Flex>
        </Box>
      </Center>
      <Center>
        {/* <motion.button 
                    whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                > */}
        <RubberBand>
          <Button
            mb="50px"
            mt="75px"
            size="lg"
            bgColor="#fff"
            _hover={{ bgColor: "#fff" }}
            borderRadius="20px"
            onClick={onOpen}
          >
            <Text fontSize="24px" color="#1DB954">
              Create Playlist
            </Text>
          </Button>
        </RubberBand>
        {/* </motion.button> */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Playlist Name</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Playlist Name"
                value={playlistName}
                onChange={handleChange}
              />
              <Text mt="20px">
                Note: Once you create your playlist, it will be on your Spotify.
              </Text>
              <Center>
                <ModalButton
                  hideCreate={hideCreate}
                  handleCreatePlaylist={handleCreatePlaylist}
                />
              </Center>
            </ModalBody>
            <ModalFooter>
              <Link
                href="https://grooves-app.herokuapp.com/Closing"
                style={{ textDecoration: "none" }}
              >
                <Button hidden={hideClose} colorScheme="blue" mr={3}>
                  Finish
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </Box>
  );
};

export default Playlist;
