import { React, useState } from "react";
import { Box, Text, Center } from "@chakra-ui/layout";
import { TriangleDownIcon } from "@chakra-ui/icons";
import AboutCards from "./AboutCards";
import { SimpleGrid, Image, Tooltip } from "@chakra-ui/react";
import Harjit from "../images/Harjit.png";
import Daljit from "../images/Daljit.png";
import Brendan from "../images/Brendan.JPG";
import Edward from "../images/Edward.jpeg";
import CSS from "../images/cssLogo.svg";
import Figma from "../images/figmaLogo.svg";
import Heroku from "../images/herokuLogo.svg";
import JavaScript from "../images/javascriptLogo.svg";
import Node from "../images/nodejsLogo.svg";
import Npm from "../images/npmLogo.svg";
import ReactLogo from "../images/reactLogo.svg";
import ChakraLogo from "../images/chakraLogo.jpg";
import Github from "../images/githubLogo.svg";
import FramerMotion from "../images/framer-motion.png";
import PhotoShop from "../images/adobe-photoshop.svg";
import AI from "../images/adobe-illustrator.svg";
import { motion } from "framer-motion";

const About = () => {
  const [color, setColor] = useState("#000000");
  const [textColorTransition, setTextColorTransition] = useState("white");
  const [transparent, setTransparent] = useState(true);

  const devs = {
    brendan: {
      name: "Brendan Gubbins",
      bio: "Hey, I'm Brendan and I'm a junior at Queens College studying Mathematics and Computer Science. I like discovering new artists to add to my playlists so I took on the role of creating and displaying the discover page. ",
      github: "https://www.github.com/brendangubbins",
      linkedin: "https://www.linkedin.com/in/brendan-gubbins",
      email: "mailto:brendansg97@gmail.com",
      backgroundImage: Brendan,
    },
    edward: {
      name: "Edward Paez",
      bio: "Hello, I'm Edward and I'm a senior at CUNY Queens College studying Computer Science. Personally, I have playlists for any scenario, such as working out, studying, or chilling with my friends. I created and displayed the playlist page.",
      github: "https://www.github.com/epaez1996",
      linkedin: "https://www.linkedin.com/in/edward-paez",
      email: "mailto:paez.edward5@gmail.com",
      backgroundImage: Edward,
    },
    harjit: {
      name: "Harjit Liyal",
      bio: "Hi! I'm Harjit and I'm a senior at CUNY Queens College studying Computer Science. Outside of class, you can always catch me listening to my favorite music on Spotify. I helped bring your top tracks & artists to the statistics page.",
      github: "https://www.github.com/Slaeh",
      linkedin: "https://www.linkedin.com/in/harjitliyal",
      email: "mailto:harjitliyal@gmail.com",
      backgroundImage: Harjit,
    },

    daljit: {
      name: "Daljit Liyal",
      bio: "Hey, I'm Daljit and I'm a junior at CUNY Queens College studying Graphic Design. While creating illustrations, I'm always listening to music on Spotify. I created the logo, favicon, and oversaw the design layout of the site.",
      github: "https://github.com/WorstTwitchEver",
      linkedin: "https://www.linkedin.com/in/daljitliyal/",
      email: "mailto:daljitliyal2@gmail.com",
      backgroundImage: Daljit,
    },
  };

  //Changes the background color, card transparency, & text color once scroll reaches a certain point
  const listenScrollEvent = (e) => {
    if (window.scrollY < 450) {
      setColor("#000000");
      setTextColorTransition("white");
      setTransparent(true);
    } else if (window.scrollY > 450 && window.scrollY <= 1200) {
      setColor("#1DB954");
      setTextColorTransition("black");
      setTransparent(false);
    } else if (window.scrollY > 1200) {
      setColor("#000000");
      setTextColorTransition("white");
      setTransparent(false);
    }
  };

  window.addEventListener("scroll", listenScrollEvent);
  return (
    <Box
      style={{ backgroundColor: color, transition: "0.6s ease" }}
      pt={10}
      pb={300}
      pl={10}
      pr={10}
    >
      {/* Speech / inspiration / motivation behind the project */}
      <Center>
        <Text
          textAlign="center"
          color="white"
          fontSize={["20px", "50px", "70px"]}
          fontWeight="bold"
        >
          Inspiration & Motivation
        </Text>
      </Center>
      <Center>
        <TriangleDownIcon
          color={textColorTransition}
          boxSize={["50px", "80px", "100px"]}
        />
      </Center>
      <Center>
        <Box width={"80%"}>
          <Text
            pt={10}
            color="white"
            fontSize={["15px", "20px", "25px"]}
            fontWeight="bold"
            textAlign="center"
          >
            Spotify's Year in Review is one of our favorite times of the year,
            but there's one problem - It only comes once a year.
          </Text>
          <ul>
            <Center>
              <Text
                pt={5}
                color="white"
                fontSize={["15px", "20px", "25px"]}
                fontWeight="bold"
              >
                With Grooves:
              </Text>
            </Center>
            <Center>
              <Text
                pt={10}
                color="#1DB954"
                fontSize={["15px", "20px", "25px"]}
                fontWeight="bold"
              >
                <li>
                  You're able to see your top five tracks & artists anytime you
                  want.
                </li>
              </Text>
            </Center>
            <Center>
              <Text
                pt={10}
                color="#1DB954"
                fontSize={["15px", "20px", "25px"]}
                fontWeight="bold"
              >
                <li>You get a playlist with songs we think you'll like.</li>
              </Text>
            </Center>
            <Center>
              <Text
                pt={10}
                color="#1DB954"
                fontSize={["15px", "20px", "25px"]}
                fontWeight="bold"
              >
                <li>
                  If you don't like a song, no worries! Remove it and keep what
                  you want.
                </li>
              </Text>
            </Center>
          </ul>
        </Box>
      </Center>

      {/* Section with our profile cards & social links  */}
      <Center>
        <Text
          textColor={textColorTransition}
          pt={100}
          fontSize={["20px", "50px", "70px"]}
          fontWeight="bold"
        >
          Our Team
        </Text>
      </Center>
      <Center>
        <TriangleDownIcon
          color={textColorTransition}
          boxSize={["50px", "80px", "100px"]}
        />
      </Center>
      <Center>
        <SimpleGrid
          columns={[1, 1, 1, 1, 4]}
          pt={100}
          hidden={transparent}
          justifyItems="center"
          alignItems="center"
        >
          <Center>
            <AboutCards person={devs.brendan} />
          </Center>
          <Center>
            <AboutCards person={devs.edward} />
          </Center>
          <Center>
            <AboutCards person={devs.harjit} />
          </Center>
          <Center>
            <AboutCards person={devs.daljit} />
          </Center>
        </SimpleGrid>
      </Center>

      {/* Section about Technologies we used in our project - I went blind doing this */}
      <Center>
        <Text
          color={textColorTransition}
          fontSize={["20px", "50px", "70px"]}
          fontWeight="bold"
          pt={20}
        >
          Technologies
        </Text>
      </Center>
      <Center>
        <TriangleDownIcon
          color={textColorTransition}
          boxSize={["50px", "80px", "100px"]}
        />
      </Center>
      <Center>
        <Text
          color={textColorTransition}
          fontSize={["20px", "30px", "50px"]}
          fontWeight="bold"
          pt={20}
          pb={20}
        >
          Made with ❤️ using
        </Text>
      </Center>
      <Center>
        <SimpleGrid columns={[2, 2, 3, 6]} spacing={20}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="React"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={ReactLogo} boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="JavaScript"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={JavaScript} boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="Node.js"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={Node} boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="Chakra UI"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={ChakraLogo} borderRadius="full" boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="Framer Motion"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={FramerMotion} boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="Npm"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={Npm} boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="Github"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image
                src={Github}
                boxSize="100px"
                bgColor="white"
                rounded="xl"
              />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="Heroku"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={Heroku} boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="CSS3"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={CSS} boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="Figma"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={Figma} boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="Adobe Photoshop"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={PhotoShop} boxSize="100px" />
            </Tooltip>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Tooltip
              hasArrow
              label="Adobe Illustrator"
              bg="gray.300"
              color="black"
              arrowSize={15}
              gutter="20"
            >
              <Image src={AI} boxSize="100px" />
            </Tooltip>
          </motion.div>
        </SimpleGrid>
      </Center>
      <Text
        pt={20}
        color="#1DB954"
        fontSize="30px"
        fontWeight="bold"
        textAlign="center"
      >
        Thank you for using Grooves!
      </Text>
      <Text
        pt={20}
        color="#1DB954"
        fontSize="20px"
        fontWeight="bold"
        textAlign="center"
      >
        All rights belong to Spotify and the respective artists
      </Text>
    </Box>
  );
};

export default About;
