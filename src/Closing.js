import LightSpeed from 'react-reveal/LightSpeed';
import Tada from 'react-reveal/Tada';
import Slide from 'react-reveal/Slide';
import {
  Box,
  Text,
  Button,
  Center,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react';

const Closing = () => {
  return (
    <Flex
      bg="#1DB954"
      h="100vh"
      justify={['center', 'center', 'center', 'center', 'center']}
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
          fontSize={['xl', '2xl', '4xl', '5xl', '6xl']}
          fontWeight="bold"
        >
          Thank you for using Grooves!
        </Text>
      </Tada>
      {/* <Slide bottom> */}
      <Text
        w={['80%', '70%', '70%', '70%', '51%']}
        fontSize={['md', 'lg', '3xl', '4xl']}
        color="black"
        mb={['40px', '50px', '50px', '50px', '50px']}
      >
        {/* We do not save your spotify information.
        <br /> However, if you want to remove our application's
        <br /> permission to your account, click on the
        <br />
        button below and click on remove access for <br />
        Grooves. */}
        We do not save your spotify information. However, if you want to remove
        our application's permission to your account, click on the button below
        and click on remove access for Grooves.
      </Text>
      {/* </Slide> */}
      <Link href="https://www.spotify.com/us/account/apps/" target="_blank">
        <Button
          size={['lg']}
          p={['5', '5', '8', '8', '8']}
          bg="#000"
          color="white"
          _hover={{ bg: '#000' }}
          rounded="lg"
        >
          Click me
        </Button>
      </Link>
      {/* </Center> */}
    </Flex>
  );
};

export default Closing;
