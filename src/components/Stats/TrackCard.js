import { React, useState } from 'react';
import { Box, Text, Image, Spacer, Center, Badge, Stack } from '@chakra-ui/react';

// Returns a track card with the album image & artist name
const TrackCard = ({ data, ranking }) => {
    const [hover, setHover] = useState(false);

    return (
        // <Box
        //     maxW="sm"
        //     borderWidth="1px"
        //     borderRadius="lg"
        //     overflow="hidden"
        //     bgGradient="linear(to-l, #20bf55, #01baef)"
        //     // _hover={{  
        //     //     background: '#1DB954' 
        //     // }}
        //     onMouseOver={() => 'background: #1DB954' }
        // >

        <Box
            maxW="md"
            _hover={{
                background: 'black',
                opacity: '90%',
                zindex: '10',
                transition: '0.3s'
            }}
        >
            <Image
                src={`${data.trackImage}`}
                _hover={{
                    background: 'black',
                    opacity: '0.13',
                    zindex: '10',
                    transition: '0.3s'
                }}
                draggable='false'
                // onMouseOver = {
                //     <Stack
                //             p="2px 12px"
                //             pos="absolute"
                //             bottom="24px"
                //             textAlign="center"
                //             w="full"
                //     >
                //             <Text fontSize="2xl">{data.artist}</Text>
                //     </Stack>
                // }
            />

        </Box>



        //     <Center pt={3}>
        //         <Badge
        //             colorScheme="white"
        //             variant="solid"
        //             fontSize="30px"

        //         >
        //             #{ranking}
        //         </Badge>
        //     </Center>
        //     <Box d='flex' p="6" mt="2" justifyContent='center' alignItems='center' maxH='sm'>
        //         <Text
        //             fontSize='20px'
        //             textColor='white'
        //             fontWeight="bold"
        //             fontFamily='Montserrat'
        //         >
        //             {data.trackName}
        //         </Text>
        //     </Box>
        //     <Center>
        //         <Text
        //             fontSize='20px'
        //             textColor='white'
        //             fontWeight="bold"
        //             fontFamily='Montserrat'
        //         >
        //             {data.trackArtist}
        //         </Text>
        //     </Center>
        //     <Spacer />
        // </Box>
    );
}

export default TrackCard;
