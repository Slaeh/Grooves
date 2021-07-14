import { Image } from "@chakra-ui/react";
import * as React from "react";

export const Logo = () => {
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
