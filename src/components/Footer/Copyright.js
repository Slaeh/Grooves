import { Text } from "@chakra-ui/layout";
import * as React from "react";

export const Copyright = (props) => (
  <Text fontSize="sm" {...props} textColor="white" fontWeight="bold" pb={2}>
    &copy; {new Date().getFullYear()} All rights belong to Spotify.
  </Text>
);
