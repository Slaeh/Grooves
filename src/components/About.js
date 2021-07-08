import { React, useState } from "react";
import { Box, Text, Center } from "@chakra-ui/layout";
import { TriangleDownIcon } from "@chakra-ui/icons";
import AboutCards from "./AboutCards";
import { SimpleGrid } from "@chakra-ui/react";
import Harjit from "../images/Harjit.png";
import Brendan from "../images/Brendan.JPG";
import Edward from "../images/Edward.jpeg";

const About = () => {
  const [color, setColor] = useState("#000000");
  const [textColorTransition, setTextColorTransition] = useState("white");
  const [transparent, setTransparent] = useState(true);

  const devs = {
    brendan: {
      name: "Brendan Gubbins",
      bio: "fillertext fillertext fillertext fillertext fillertext fillertext",
      github: "https://www.github.com/brendangubbins",
      linkedin: "https://www.linkedin.com/in/brendan-gubbins",
      email: "mailto:brendansg97@gmail.com",
      backgroundImage: Brendan,
    },
    edward: {
      name: "Edward Paez",
      bio: "fillertext fillertext fillertext fillertext fillertext fillertext",
      github: "https://www.github.com/epaez1996",
      linkedin: "https://www.linkedin.com/in/edward-paez",
      email: "mailto:paez.edward5@gmail.com",
      backgroundImage: Edward,
    },
    harjit: {
      name: "Harjit Liyal",
      bio: "fillertext fillertext fillertext fillertext fillertext fillertext",
      github: "https://www.github.com/Slaeh",
      linkedin: "https://www.linkedin.com/in/harjitliyal",
      email: "mailto:harjitliyal@gmail.com",
      backgroundImage: Harjit,
    },
  };

  //Changes the background color once scroll reaches a certain point
  const listenScrollEvent = (e) => {
    if (window.scrollY > 450 && window.scrollY <= 600) {
      setColor("#1DB954");
      setTextColorTransition("black");
      setTransparent(false);
    } else if (window.scrollY < 450) {
      setColor("#000000");
      setTextColorTransition("white");
      setTransparent(true);
    } else if (window.scrollY > 600) {
      setTransparent(false);
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
        <TriangleDownIcon color={textColorTransition} boxSize="100px" />
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
          With Grooves, you're able to see your top five tracks & artists
          anytime you want.
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
          pt={100}
          fontSize="75px"
          fontWeight="bold"
        >
          Our Team
        </Text>
      </Center>
      <Center>
        <TriangleDownIcon color={textColorTransition} boxSize="100px" />
      </Center>

      <SimpleGrid columns={[1, 1, 1, 1, 3]} pt={100} hidden={transparent}>
        <AboutCards person={devs.brendan} />
        <AboutCards person={devs.edward} />
        <AboutCards person={devs.harjit} />
      </SimpleGrid>

      <Center>
        <Text color="white" fontSize="70px" fontWeight="bold" pt={20}>
          Technologies
        </Text>
      </Center>
      <Center>
        <TriangleDownIcon color={textColorTransition} boxSize="100px" />
      </Center>
    </Box>
  );
};

export default About;
