import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import AppContext from "../AppContext";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";
import { Link } from "react-router-dom";
import {
  Button,
  Text,
  Box,
  Flex,
  Center,
  Tooltip,
  Spinner,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { motion } from "framer-motion";
// import whiteBgImage from '../../images/spotify-white2-bg.png'

const Stats = () => {
  const {
    display,
    setDisplay,
    user,
    setUser,
    track,
    setTrack,
    artist,
    setArtist,
  } = useContext(AppContext);

  //Parses the querystring in the browser and store it into the session
  const hash = window.location.hash.substring(1).split("&");
  const token = hash[0].substring(13);
  window.sessionStorage.setItem("accessToken", token);
  // window.history.pushState({}, null, "/Stats");
  //Color states for background and text colors
  const [color, setColor] = useState("#1DB954");
  const [textColorTransition, setTextColorTransition] = useState("transparent");

  //Changes the background color once scroll reaches a certain point
  const listenScrollEvent = (e) => {
    if (window.scrollY > 700) {
      setColor("#000000");
      setTextColorTransition("white");
    } else if (window.scrollY < 700) {
      setColor("#1DB954");
      setTextColorTransition("transparent");
    }
  };

  window.addEventListener("scroll", listenScrollEvent);

  //Api request to get users information - User Id & Display name and stores them in states
  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setDisplay(response.data.display_name);
        setUser(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Make API get request to get user's top artists and store them in state
  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/me/top/artists`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const artistArr = [];
        for (let i = 0; i < 5; i++) {
          const artistObject = {
            artistName: response.data.items[i].name,
            artistImage: response.data.items[i].images[0].url,
            artistId: response.data.items[i].id,
            artistLink: response.data.items[i].external_urls.spotify,
            artistFollowers: response.data.items[i].followers.total,
          };
          artistArr.push(artistObject);
        }
        setArtist(artistArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Make API get request to get user's top tracks and store them in state
  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/me/top/tracks`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const tracksArr = [];
        for (let i = 0; i < 5; i++) {
          const trackObject = {
            trackName: response.data.items[i].name,
            trackArtist: response.data.items[i].artists[0].name,
            trackImage: response.data.items[i].album.images[0].url,
            trackId: response.data.items[i].id,
          };
          tracksArr.push(trackObject);
        }
        setTrack(tracksArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [loading, setLoading] = useState(true);

  if (artist.length !== 5 || track.length !== 5) {
    return (
      <Box>
        <Center pt={280} pb={10}>
          <Spinner size="xl" color="green"></Spinner>
        </Center>
        <Center pb={10}>
          <Heading color="#1DB954">Something went wrong</Heading>
        </Center>
        <Center pb={500}>
          <UnorderedList>
            <ListItem>
              Your Spotify account may not have enough artist & track data
            </ListItem>
            <ListItem>Spotify's Developer API may be down</ListItem>
            <ListItem>Our deployment needs to be fixed</ListItem>
          </UnorderedList>
        </Center>
      </Box>
    );
  } else {
    return (
      <Box style={{ backgroundColor: color, transition: "0.6s ease" }}>
        {/* Return user's display name */}
        <Center>
          <Text
            mb={4}
            mt={10}
            bgClip="text"
            fontSize={{ base: "40px", md: "50px", lg: "70px" }}
            color="black"
            fontWeight="bold"
          >
            Hello, {display}
          </Text>
        </Center>

        {/* Return top tracks */}
        <Center>
          <Text
            mb={4}
            mt={10}
            bgClip="text"
            fontSize={{ base: "40px", md: "50px", lg: "60px" }}
            color="black"
            fontWeight="bold"
          >
            Your Top Tracks
          </Text>
        </Center>

        {/* Tooltip for tracks */}
        <Center pt={2} pb={10}>
          <Tooltip
            hasArrow
            label="Swipe to see more tracks"
            bg="gray.300"
            color="black"
          >
            <InfoIcon w="8" h="8" />
          </Tooltip>
        </Center>

        {/* Carousel for songs */}
        <Flicking renderOnlyVisible={false} inputType={["touch", "mouse"]}>
          {track
            .slice(0)
            .reverse()
            .map((song, index) => (
              <Flex
                className="flicking-panel"
                key={song.trackId}
                style={{ width: "100%" }}
                justifyContent={"center"}
              >
                <TrackCard
                  class="panel"
                  data={song}
                  ranking={track.length - index}
                ></TrackCard>
              </Flex>
            ))}
        </Flicking>

        {/* Return top artists */}
        <Center>
          <motion.div transition={{ duration: 0.5 }}>
            <Text
              style={{
                backgroundColor: textColorTransition,
                transition: "0.6s ease",
              }}
              mb={4}
              mt={10}
              bgClip="text"
              fontSize={{ base: "40px", md: "50px", lg: "60px" }}
              fontWeight="bold"
            >
              Your Top Artists
            </Text>
          </motion.div>
        </Center>

        {/* Tooltip for artists */}
        <Center pt={2} pb={10}>
          <Tooltip hasArrow label="Swipe to see more artists">
            <InfoIcon
              w="8"
              h="8"
              color={textColorTransition}
              style={{ transition: "0.6s ease" }}
            />
          </Tooltip>
        </Center>

        {/* Carousel for artists */}
        <Flicking renderOnlyVisible={false} inputType={["touch", "mouse"]}>
          {artist
            .slice(0)
            .reverse()
            .map((artists, index) => (
              <Flex
                className="flicking-panel"
                key={artists.artistId}
                style={{ width: "100%" }}
                justifyContent={"center"}
              >
                <ArtistCard
                  class="panel"
                  data={artists}
                  ranking={artist.length - index}
                />
              </Flex>
            ))}
        </Flicking>

        {/* Redirect to discover page */}
        <Center>
          <Text
            // mb={10}
            mt={15}
            bgClip="text"
            fontSize={{ base: "30px", md: "50px", lg: "60px" }}
            fontWeight="bold"
            style={{
              backgroundColor: textColorTransition,
              transition: "0.6s ease",
            }}
          >
            A playlist personalized for you
          </Text>
        </Center>
        <Center pt={10} pb={10}>
          <Link to="/Discover">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, bgColor: "#1DB954" }}
            >
              <Button
                label="Discover"
                rounded="lg"
                bgColor="#1DB954"
                fontWeight="bold"
                size="lg"
                variant="solid"
                _hover={{
                  bgColor: "#1DB954",
                }}
              >
                Discover
              </Button>
            </motion.div>
          </Link>
        </Center>
      </Box>
    );
  }
};

export default Stats;
