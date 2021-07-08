import { Text } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { Center } from '@chakra-ui/react';
import { Image, Box } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';

const Song = ({ onClick, image, title, artist, album, year, previewAudio }) => {
  let audio = new Audio();
  return (
    <>
      <Flex p="10px" align="center">
        {previewAudio != null ? (
          <Image
            src={image.url}
            alt="album"
            boxSize={['50px', '79px']}
            draggable="false"
            onMouseOver={() => {
              console.log('hello');
              audio = new Audio(previewAudio);
              audio.play();
            }}
            onMouseOut={() => {
              console.log('bye');
              audio.pause();
            }}
          />
        ) : (
          <Image
            src={image.url}
            alt="album"
            boxSize={['50px', '79px']}
            draggable="false"
            opacity="25%"
          />
        )}
        <Box m={['5px', '5px']} width="100px" textAlign="left">
          <Text fontWeight="bold" fontSize={['11px', '14px']}>
            {title}
          </Text>
        </Box>
        <Spacer />
        <Box m={['5px', '5px']} width="100px" textAlign="center">
          <Text fontWeight="bold" fontSize={['11px', '14px']}>
            {artist}
          </Text>
        </Box>
        <Spacer />
        <Box m={['5px', '5px']} width="100px" textAlign="center">
          <Text fontWeight="bold" fontSize={['11px', '14px']}>
            {album}
          </Text>
        </Box>
        <Spacer />
        <Box
          d={['none', 'block']}
          m={['5px', '5px']}
          width="100px"
          textAlign="center"
        >
          <Text fontWeight="bold" fontSize={['11px', '14px']}>
            {year}
          </Text>
        </Box>
        <Spacer />
        <Box
          mr={['5px', '5px']}
          textAlign={['right', 'right', 'right', 'right', 'left']}
          width="100px"
        >
          <IconButton
            size={['sm', 'md']}
            variant="unstyled"
            onClick={onClick}
            bg="#e6e6e6"
            icon={<FaTrash />}
          />
        </Box>
      </Flex>
      <Center>
        <Divider
          size="50px"
          width="90%"
          borderColor="gray.500"
          orientation="horizontal"
        />
      </Center>
    </>
  );
};

export default Song;
