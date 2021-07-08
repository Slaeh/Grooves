import { React, useState } from "react";
import { Box, Text, Center } from "@chakra-ui/layout";
import { TriangleDownIcon } from "@chakra-ui/icons";
const About = () => {
  const [color, setColor] = useState("#000000");
  const [textColorTransition, setTextColorTransition] = useState("white");

  //Changes the background color once scroll reaches a certain point
  const listenScrollEvent = (e) => {
    if (window.scrollY > 450) {
      setColor("#1DB954");
      setTextColorTransition("black");
    } else if (window.scrollY < 450) {
      setColor("#000000");
      setTextColorTransition("white");
    }
  };

  window.addEventListener("scroll", listenScrollEvent);
  return (
    <Box
      style={{ backgroundColor: color, transition: "0.6s ease" }}
      pt={10}
      pb={900}
      pl={10}
      pr={10}
    >
      <Center>
        <Text color="white" fontSize="70px" fontWeight="bold">
          Inspiration & Motivation
        </Text>
      </Center>

      <Center>
        <Text
          pt={10}
          pr={10}
          pl={10}
          color="white"
          fontSize="25px"
          fontWeight="bold"
        >
          Spotify's Year in Review is one of our favorite times of the year, but
          there's one problem - It only comes once a year.
        </Text>
      </Center>

      <Center>
        <Text pr={10} pl={10} color="white" fontSize="25px" fontWeight="bold">
          With our application, you're able to see your top five tracks &
          artists anytime you want.
        </Text>
      </Center>

      <Center>
        <Text pr={10} pl={10} color="white" fontSize="25px" fontWeight="bold">
          It also gives you a playlist with songs we think you'll like.
        </Text>
      </Center>

      <Center>
        <Text pr={10} pl={10} color="white" fontSize="25px" fontWeight="bold">
          If you don't like some of the recommendations, no worries! Feel free
          to delete it and keep picking what you want.
        </Text>
      </Center>

      <Center>
        <Text pr={10} pl={10} color="white" fontSize="25px" fontWeight="bold">
          We hope you enjoy our project!
        </Text>
      </Center>
      <Center>
        <Text
          textColor={textColorTransition}
          pt={20}
          fontSize="75px"
          fontWeight="bold"
        >
          Our Team
        </Text>
      </Center>
      <Center>
        <TriangleDownIcon color={textColorTransition} boxSize="100px" />
      </Center>
    </Box>
  );
};

export default About;
