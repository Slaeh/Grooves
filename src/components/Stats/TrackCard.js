import React from 'react';
import { Box, Text, Image, Spacer, Center, Badge } from '@chakra-ui/react';

// Returns a track card with the album image & artist name
const TrackCard = ({ data, ranking }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgGradient="linear(to-l, #20bf55, #01baef)">
            <Image src={`${data.trackImage}`} draggable='false' />
            <Center pt={3}>
                <Badge
                    colorScheme="white"
                    variant="solid"
                    fontSize="30px"
                    
                >
                    #{ranking}
                </Badge>
            </Center>
            <Box d='flex' p="6" mt="2" justifyContent='center' alignItems='center' maxH='sm'>
                <Text
                    fontSize='20px'
                    textColor='white'
                    fontWeight="bold"
                    fontFamily='Montserrat'
                >
                    {data.trackName}
                </Text>
            </Box>
            <Center>
                <Text
                    fontSize='20px'
                    textColor='white'
                    fontWeight="bold"
                    fontFamily='Montserrat'
                >
                    {data.trackArtist}
                </Text>
            </Center>
            <Spacer />
        </Box>
    );
}

export default TrackCard;
