import { Box, Link, SimpleGrid, Stack, Center } from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading";
import { SocialMediaLinks } from "./SocialMediaLinks";
// import About from "../About";

// Links in footer
export const LinkGrid = (props) => (
  <SimpleGrid columns={3} {...props}>
    <Box minW="130px">
      {/* Application portion of footer - contains About & Contact Information */}
      <Center>
        <FooterHeading mb="4" textColor="#919496" fontWeight="bold">
          Application
        </FooterHeading>
      </Center>
      <Stack>
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
        {/* <Center>
          <Link textColor="white" _hover={{ textColor: "#1DB954" }}>
            Contact
          </Link>
        </Center> */}
      </Stack>
    </Box>
    <Box minW="130px">
      {/* Application portion of footer - contains About & Contact Information */}
      <Center>
        <FooterHeading mb="4" textColor="#919496" fontWeight="bold">
          Made By
        </FooterHeading>
      </Center>
      <Stack>
        <Center>
          <Link
            href="https://github.com/brendangubbins"
            target="_blank"
            textColor="white"
            _hover={{ textColor: "#1DB954" }}
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
          >
            Edward Paez
          </Link>
        </Center>
      </Stack>
    </Box>
    <Box minW="130px">
      {/* Source Code portion of footer - contains link to GitHub repo */}
      <Center>
        <FooterHeading mb="4" textColor="#919496" fontWeight="bold">
          Source Code
        </FooterHeading>
      </Center>
      <Center>
        <SocialMediaLinks />
      </Center>
    </Box>
  </SimpleGrid>
);
