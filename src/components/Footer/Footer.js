import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import { LinkGrid } from "./LinkGrid";
import { Logo } from "./Logo";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Flex
      as="footer"
      role="contentinfo"
      bg="black"
      bottom="0"
      justifyContent="space-between"
      alignItems="center"
      direction={["column", "column", "row", "row"]}
    >
      <Box pl={20} pr={20} mt={["25px", "25px", "0px"]}>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="https://spotify.com/" target="_blank">
            <Logo />
          </a>
        </motion.button>
      </Box>
      <Flex>
        <LinkGrid
          alignSelf="flex-end"
          pl={5}
          pr={5}
          pt={10}
          pb={5}
          spacing={{
            base: "10",
            md: "20",
            lg: "28",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Footer;
