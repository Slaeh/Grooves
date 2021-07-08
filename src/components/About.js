import { React, useState } from "react";
import { Box, Text, Center } from "@chakra-ui/layout";
import { TriangleDownIcon } from "@chakra-ui/icons";
import AboutCards from "./AboutCards";

const About = () => {
  const [color, setColor] = useState("#000000");
  const [textColorTransition, setTextColorTransition] = useState("white");

  const devs = {
    brendan: {
      name: "Brendan Gubbins",
      bio: "fillertext fillertext fillertext fillertext fillertext fillertext",
      github: "https://www.github.com/brendangubbins",
      linkedin: "https://www.linkedin.com/in/brendan-gubbins",
      email: "mailto:brendansg97@gmail.com",
    },
    edward: {
      name: "Edward Paez",
      bio: "fillertext fillertext fillertext fillertext fillertext fillertext",
      github: "https://www.github.com/epaez1996",
      linkedin: "https://www.linkedin.com/in/edward-paez",
      email: "mailto:paez.edward5@gmail.com",
    },
    harjit: {
      name: "Harjit Liyal",
      bio: "fillertext fillertext fillertext fillertext fillertext fillertext",
      github: "https://www.github.com/Slaeh",
      linkedin: "https://www.linkedin.com/in/harjitliyal",
      email: "mailto:harjitliyal@gmail.com",
    },
  };

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

      <AboutCards person={devs.brendan} />
      <AboutCards person={devs.edward} />
      <AboutCards person={devs.harjit} />
    </Box>
  );
};

export default About;
