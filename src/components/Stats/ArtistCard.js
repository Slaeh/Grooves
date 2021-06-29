import React, { useState, useEffect, useContext } from 'react';
import { Box, Center, Image, Text } from '@chakra-ui/react';

const ArtistCard = ({ data }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
            <Image src={`${data.artistImage}`} draggable='false'/>
            <Box p='6'>
                <Box d="flex" mt="2" alignItems="center">
                    <Text>
                        {data.artistName}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}


export default ArtistCard;
