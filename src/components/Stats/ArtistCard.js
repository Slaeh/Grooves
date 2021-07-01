import React from 'react';
import { Box, Image, Text, Spacer } from '@chakra-ui/react';

const ArtistCard = ({ data }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
            <Image src={`${data.artistImage}`} draggable='false' />
            <Box d="flex" p='6' mt="2" justifyContent='center' alignItems='center' maxHeight='10px'>
                <Text
                    fontWeight="semi-bold"
                    fontFamily='Signika'
                >
                    {data.artistName}
                </Text>
            </Box>
            <Spacer />
        </Box>
    );
}


export default ArtistCard;
