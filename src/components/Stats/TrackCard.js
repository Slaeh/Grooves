import React from 'react';
import { Box, Text, Image, Spacer } from '@chakra-ui/react';

const TrackCard = ({ data }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={`${data.trackImage}`} draggable='false' />
            <Box d='flex' p="6" mt="2" justifyContent='center' alignItems='center' maxHeight='10px'>
                <Text
                    fontWeight="semi-bold"
                    fontFamily='Signika'
                >
                    {data.trackName} - {data.trackArtist}
                </Text>
            </Box>
            <Spacer />
        </Box>
    );
}

export default TrackCard;
