import React from "react";
import { Box, Text, Center } from "@chakra-ui/layout";
import AboutCards from "./AboutCards";

const About = () => {
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
  return (
    <Box backgroundColor="gray.500" pt={10} pb={900} pl={10} pr={10}>
      <Center>
        <Text color="black" fontSize="70px" fontWeight="bold">
          Inspiration & Motivation
        </Text>
      </Center>
      <Center>
        <Text
          pt={10}
          pr={10}
          pl={10}
          color="black"
          fontSize="25px"
          fontWeight="bold"
        >
          Spotify's Year in Review is one of our favorite times of the year, but
          there's one problem - It only comes once a year.
          <br></br>
          We wanted to see how our favorite songs & artists changed throughout
          the year.
          <br></br>
          We hope you enjoy this
        </Text>
      </Center>
      <Center>
        <Text pt={20} color="black" fontSize="75px" fontWeight="bold">
          Our Team
        </Text>
      </Center>
      <AboutCards person={devs.brendan} />
      <AboutCards person={devs.edward} />
      <AboutCards person={devs.harjit} />
    </Box>
  );
};

export default About;
