import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  Code,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutCards = ({ person }) => {
  return (
    <Flex
      //bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      // w="full"
      justifyContent="space-between"
      alignItems="center"
      direction={["column", "column", "row", "row"]}
    >
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Flex
          direction="column"
          justifyContent="inherit"
          alignItems="inherit"
          w="sm"
          mx="auto"
        >
          {/* <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> */}
          <Box
            bg="gray.300"
            h={64}
            w="full"
            rounded="lg"
            shadow="md"
            bgSize="cover"
            bgPos="center"
            boxShadow="dark-lg"
            boxSize={["150px", "250px", "300px", "360px"]}
          >
            <Image
              src={person.backgroundImage}
              draggable="false"
              rounded="lg"
              maxH="360px"
              maxW="360px"
            />
          </Box>
          <Center>
            <Box
              // w={{ base: 56, md: 360 }}
              w={["360px", "360px", "360px", "360px"]}
              mt={["100px", "10px", "5px", "10px"]}
              bg={useColorModeValue("white", "gray.800")}
              zIndex="base"
              shadow="lg"
              rounded="lg"
              overflow="hidden"
              boxShadow="dark-lg"
            >
              <chakra.h3
                py={2}
                zIndex="overlay"
                textAlign="center"
                fontWeight="bold"
                textTransform="uppercase"
                color={useColorModeValue("gray.800", "white")}
                letterSpacing={1}
              >
                {person.name}
              </chakra.h3>

              <Flex
                alignItems="center"
                justifyContent="center"
                py={2}
                px={3}
                bg={useColorModeValue("gray.200", "gray.700")}
              >
                <Code>{person.bio}</Code>
              </Flex>
              {/* <Flex
            alignItems="center"
            justifyContent="center"
            py={2}
            px={3}
            bg={useColorModeValue("white", "gray.800")}
          > */}
              <Center py={1}>
                <SimpleGrid columns={3} spacing={4}>
                  <Box>
                    {/* <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  > */}
                    <Link
                      color="#2867B2"
                      opacity="75%"
                      _hover={{
                        color: "#1DB954",
                      }}
                      href={person.linkedin}
                      isExternal
                    >
                      <FaLinkedin fontSize="35px" />
                    </Link>
                    {/* </motion.button> */}
                  </Box>
                  <Box>
                    {/* <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  > */}
                    <Link
                      color="black"
                      opacity="75%"
                      _hover={{
                        color: "#1DB954",
                      }}
                      href={person.github}
                      isExternal
                    >
                      <FaGithub fontSize="33px" />
                    </Link>
                    {/* </motion.button> */}
                  </Box>
                  <Box>
                    {/* <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  > */}
                    <a href={person.email} target="_blank" rel="noreferrer">
                      <EmailIcon
                        fontSize="30px"
                        _hover={{
                          color: "#1DB954",
                        }}
                      />
                    </a>
                    {/* </motion.button> */}
                  </Box>
                </SimpleGrid>
              </Center>
              {/* </Flex> */}
            </Box>
          </Center>
          {/* </motion.button> */}
        </Flex>
      </motion.button>
    </Flex>
  );
};

export default AboutCards;
