import { chakra, useColorModeValue, useToken, Image } from "@chakra-ui/react";
import * as React from "react";

export const Logo = (props) => {
  return (
    <Image
      src="../Spotify.svg"
      maxHeight="100px"
      maxWidth="200px"
      borderRadius="full"
      draggable="false"
    />
  );
};
