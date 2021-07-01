import React from 'react';
import { Box, Image, Text, Spacer } from '@chakra-ui/react';

// Returns a artist card with the artist image & name
const ArtistCard = ({ data }) => {
    return (
        <Box maxW="sm" maxH='lg' borderWidth="1px" borderRadius="lg" overflow="hidden" bgGradient="linear(to-l, #01baef, #20bf55)">
            <Image src={`${data.artistImage}`} draggable='false' />
            <Box d="flex" p='6' mt="2" justifyContent='center' alignItems='center'>
                <Text
                    fontSize='20px'
                    textColor='white'
                    fontWeight="bold"
                    fontFamily='Montserrat'
                >
                    {data.artistName}
                </Text>
            </Box>
            <Spacer />
        </Box>
    );
}


export default ArtistCard;
