import React, { useState, useEffect, useContext } from "react";
import ArtistImage from "./ArtistImage";
import axios from "axios";
import { SimpleGrid, Center, Container, Heading, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import AppContext from "../AppContext";
import { Link } from "react-router-dom";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";

const Discover = () => {
  const [value, setValue] = useState(35);

  const handleChange = (value) => setValue(value);

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

  // New recommended playlist on each 'artist' state update
  useEffect(() => {
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
  }, [artist]);

  // Creates final playlist from onClick
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

  return (
    <Box backgroundColor="#000000">
      <Box>
        <Center>
          <Heading textColor="white" py={10}>
            Pick Your Artists
          </Heading>
        </Center>

        <Center>
          <SimpleGrid columns={[1, 2, 2, 2, 3]} spacingX="15px" spacingY="15px">
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
          <Link to="/CreatePlaylist" onClick={generatePlaylist}>
            <Button label="CreatePlaylist" size="lg" mt="20px" color="#1DB954">
              Generate A Playlist
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default Discover;
