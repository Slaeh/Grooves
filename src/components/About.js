import React from "react";
import { Box, Text, Center } from "@chakra-ui/layout";

const About = () => {
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
    </Box>
  );
};

export default About;
