import { Box, Link, Center, Flex } from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading";
import { SocialMediaLinks } from "./SocialMediaLinks";
// import About from "../About";

// Links in footer
export const LinkGrid = (props) => (
  <Flex
    w="100%"
    justify={["center", "flex-end"]}
    marginBottom={["20px", "15px", "10px", "5px"]}
  >
    <Flex flexFlow="column wrap" mr={["10px", "0", "30px", "100px"]}>
      {/* Application portion of footer - contains About & Contact Information */}
      {/* <Center> */}
      <FooterHeading mb="4" textColor="#919496" fontWeight="bold">
        Application
      </FooterHeading>
      {/* </Center> */}
      {/* <Stack>
          <Center> */}
      <Center>
        <Link
          href="/About"
          target="_blank"
          textColor="white"
          _hover={{ textColor: "#1DB954" }}
        >
          About
        </Link>
      </Center>
      {/* </Center> */}
      {/* <Center>
          <Link textColor="white" _hover={{ textColor: "#1DB954" }}>
            Contact
          </Link>
        </Center> */}
      {/* </Stack> */}
    </Flex>
    <Flex
      flexFlow="column wrap"
      justify="space-between"
      mr={["10px", "0", "30px", "100px"]}
    >
      {/* Application portion of footer - contains About & Contact Information */}
      <Center>
        <FooterHeading mb="4" textColor="#919496" fontWeight="bold">
          Made By
        </FooterHeading>
      </Center>
      {/* <Stack> */}
      <Center>
        <Link
          href="https://github.com/brendangubbins"
          target="_blank"
          textColor="white"
          _hover={{ textColor: "#1DB954" }}
          mb="5px"
          w={[null, null, "200px", null]}
          textAlign="center"
        >
          Brendan Gubbins
        </Link>
      </Center>
      <Center>
        <Link
          href="https://github.com/Slaeh"
          target="_blank"
          textColor="white"
          _hover={{ textColor: "#1DB954" }}
          mb="5px"
        >
          Harjit Liyal
        </Link>
      </Center>
      <Center>
        <Link
          href="https://github.com/epaez1996"
          target="_blank"
          textColor="white"
          _hover={{ textColor: "#1DB954" }}
          mb="5px"
        >
          Edward Paez
        </Link>
      </Center>
      <Center>
        <Link
          href="https://github.com/WorstTwitchEver"
          target="_blank"
          textColor="white"
          _hover={{ textColor: "#1DB954" }}
          mb="5px"
        >
          Daljit Liyal
        </Link>
      </Center>
      {/* </Stack> */}
    </Flex>

    <Flex flexDir="column">
      <Box>
        {/* Source Code portion of footer - contains link to GitHub repo */}
        {/* <Center> */}
        <FooterHeading mb="4" textColor="#919496" fontWeight="bold">
          Source Code
        </FooterHeading>
        {/* </Center> */}
        <Center>
          <SocialMediaLinks />
        </Center>
      </Box>
    </Flex>
  </Flex>
);
