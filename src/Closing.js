import Tada from "react-reveal/Tada";
import { Text, Button, Center, Flex, Link, useToast } from "@chakra-ui/react";

const Closing = () => {
  const toast = useToast();
  toast({
    title: "Success!",
    description: "Your new playlist is posted to your Spotify library.",
    status: "info",
    isClosable: true,
    duration: null,
    position: "top",
  });
  return (
    <Flex
      bg="#1DB954"
      h="100vh"
      justify={["center", "center", "center", "center", "center"]}
      align="center"
      flexDir="column"
    >
      {/* <Center>
      <Heading color="#000" size={['sm', '4xl']} mb="50px">
        Thank you for using our application!
      </Heading> */}
      <Tada left>
        <Text
          color="#000"
          mb="40px"
          fontSize={["xl", "2xl", "4xl", "5xl", "6xl"]}
          fontWeight="bold"
        >
          Thank you for using Grooves!
        </Text>
      </Tada>
      {/* <Slide bottom> */}
      <Text
        w={["80%", "70%", "70%", "70%", "48%"]}
        fontSize={["md", "lg", "3xl", "4xl"]}
        color="black"
        mb={["40px", "50px", "50px", "50px", "50px"]}
        textAlign="center"
      >
        {/* We do not save your spotify information.
        <br /> However, if you want to remove our application's
        <br /> permission to your account, click on the
        <br />
        button below and click on remove access for <br />
        Grooves. */}
        We do not save your Spotify data. However, if you want to disconnect our
        application, click on the button below and remove access for Grooves.
      </Text>
      {/* </Slide> */}
      <Link href="https://www.spotify.com/us/account/apps/" target="_blank">
        <Button
          size={["lg"]}
          p={["5", "5", "8", "8", "8"]}
          bg="#000"
          color="white"
          _hover={{ bg: "#000" }}
          rounded="lg"
        >
          Click me
        </Button>
      </Link>
      <Center>
        <Text
          // w={["80%", "70%", "70%", "70%", "48%"]}
          pt={20}
          fontSize={["10px", "15px", "20px", "25px"]}
          fontWeight="semi-bold"
          color="black"
          mb={["40px", "50px", "50px", "50px", "50px"]}
        >
          If you liked the project, consider sharing it with your friends!
        </Text>
      </Center>
      {/* </Center> */}
    </Flex>
  );
};

export default Closing;
