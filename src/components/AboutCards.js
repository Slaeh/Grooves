import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  chakra,
  Flex,
  IconButton,
  Link,
  SimpleGrid,
  Text,
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
      direction={["column", "column", "row"]}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
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
          <Image src={person.backgroundImage} />
        </Box>

        <Box
          w={{ base: 56, md: 360 }}
          bg={useColorModeValue("white", "gray.800")}
          mt={-10}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          boxShadow="dark-lg"
        >
          <chakra.h3
            py={2}
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
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    color="#2867B2"
                    opacity="75%"
                    _hover={{ opacity: "100%" }}
                    href={person.linkedin}
                    isExternal
                  >
                    <FaLinkedin fontSize="35px" />
                  </Link>
                </motion.button>
              </Box>
              <Box>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    color="black"
                    opacity="75%"
                    _hover={{ opacity: "100%" }}
                    href={person.github}
                    isExternal
                  >
                    <FaGithub fontSize="33px" />
                  </Link>
                </motion.button>
              </Box>
              <Box>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href={person.email} target="_blank" rel="noreferrer">
                    <EmailIcon fontSize="30px" />
                  </a>
                </motion.button>
              </Box>
            </SimpleGrid>
          </Center>
          {/* </Flex> */}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutCards;
