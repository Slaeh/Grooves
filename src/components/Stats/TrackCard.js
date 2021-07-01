import React from 'react';
import { Box, Text, Image, Spacer } from '@chakra-ui/react';

// Returns a track card with the album image & artist name
const TrackCard = ({ data }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgGradient="linear(to-l, #20bf55, #01baef)">
            <Image src={`${data.trackImage}`} draggable='false' />
            <Box d='flex' p="6" mt="2" justifyContent='center' alignItems='center' maxH='sm'>
                <Text
                    fontSize='20px'
                    textColor='white'
                    fontWeight="bold"
                    fontFamily= 'Montserrat'
                >
                    {data.trackName} - {data.trackArtist}
                </Text>
            </Box>
            <Spacer />
        </Box>
    );
}

export default TrackCard;
