import { Image, Center } from "@chakra-ui/react";
import Grooves from "../../images/Grooves.svg";
import * as React from "react";

export const Logo = () => {
  return (
    <Center>
      <Image
        src={Grooves}
        h={["50px", "200px", "100px"]}
        w={["300px", "350px", "300px", "450px", "550px"]}
        // borderRadius="full"
        draggable="false"
      />
    </Center>
  );
};
