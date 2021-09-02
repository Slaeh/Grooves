import React, { useState, useContext } from "react";
import ArtistImage from "./ArtistImage";
import axios from "axios";
import { SimpleGrid, Center, Container, Heading, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import AppContext from "../AppContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import { useToast } from "@chakra-ui/react";

const Discover = () => {
  const [value, setValue] = useState(35);

  const handleChange = (value) => setValue(value);

  const { artist, setUserPlaylist } = useContext(AppContext);

  const toast = useToast();

  const [showArtistToast, setShowArtistToast] = useState(true);
  // New recommended playlist on each 'artist' state update
  // useEffect(() => {
  //   const storage = window.sessionStorage;
  //   const accessToken = storage.getItem("accessToken");
  //   console.log("state changed");
  //   console.log(artist);
  //   const artistIDs = artist.map((a) => a.artistId);
  //   const seeds = artistIDs.join(",");
  //   axios
  //     .get("https://api.spotify.com/v1/recommendations", {
  //       params: {
  //         seed_artists: seeds,
  //         limit: value,
  //       },
  //       headers: {
  //         Authorization: "Bearer " + accessToken,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.tracks);
  //       setUserPlaylist(response.data.tracks);
  //     });
  // }, [artist]);

  // Creates final playlist from onClick
  window.scrollTo(0, 0);
  const generatePlaylist = () => {
    const storage = window.sessionStorage;
    const accessToken = storage.getItem("accessToken");
    console.log("state changed");
    console.log(artist);
    const artistIDs = artist.map((a) => a.artistId);
    const seeds = artistIDs.join(",");
    axios
      .get("https://api.spotify.com/v1/recommendations", {
        params: {
          seed_artists: seeds,
          limit: value,
        },
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        console.log(response.data.tracks);
        setUserPlaylist(response.data.tracks);
      });
  };

  // const toolTipLabel = (
  //   <Text>
  //     These artists will be used to generate a recommended playlist for you to
  //     listen to. <br />
  //     <br /> If you don't want certain artists to affect your results, hover
  //     over the artists and remove them.
  //     {/* Hover over album art to hear a preview of the song (if available) <br />{" "}
  //     WARNING - LOWER VOLUME */}
  //   </Text>
  // );
  if (showArtistToast === true && artist.length > 0) {
    toast({
      title: "Successfully loaded your artists!",
      description:
        "Choose what artists you want to include in your playlist. We'll recommend you songs similar to their genre.",
      status: "info",
      duration: null,
      isClosable: true,
      position: "top",
    });
    setShowArtistToast(false);
  }
  return (
    <Box backgroundColor="#000000">
      <Box>
        <Center>
          <Heading textColor="white" pt={10} pb={5}>
            Pick Your Artists
          </Heading>
        </Center>
        {/* <Center pb={5}>
          <Tooltip
            placement="right"
            hasArrow
            label={toolTipLabel}
            bg="#fff"
            color="black"
          >
            <InfoIcon color="white" mb="15px" ml="10px" w="8" h="8" />
          </Tooltip>
        </Center> */}
        <Center>
          <SimpleGrid columns={[1, 1, 2, 2, 3]} spacingX="15px" spacingY="15px">
            {artist.map((a) => (
              <div key={a.artistId}>
                <ArtistImage a={a} />
              </div>
            ))}
          </SimpleGrid>
        </Center>

        <Container centerContent pt={10} pb={5}>
          <Heading pb={5} textColor="white">
            Select Amount of Songs
          </Heading>
          <Slider
            flex="1"
            defaultValue={35}
            min={20}
            max={50}
            step={5}
            onChange={handleChange}
          >
            <SliderTrack bg="lightgreen">
              <SliderFilledTrack bg="green" />
            </SliderTrack>
            <SliderThumb boxSize={6} textColor="black" children={value} />
          </Slider>
        </Container>
      </Box>

      <Box>
        <Center pb={300}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, bgColor: "#1DB954" }}
          >
            <Link to="/CreatePlaylist" onClick={generatePlaylist}>
              <Button
                label="CreatePlaylist"
                size="lg"
                mt="20px"
                color="#1DB954"
              >
                Generate A Playlist
              </Button>
            </Link>
          </motion.div>
        </Center>
      </Box>
    </Box>
  );
};

export default Discover;
