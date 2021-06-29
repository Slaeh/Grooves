import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import AppContext from '../AppContext';
import { Box, Text, Image, Center } from '@chakra-ui/react';

const TrackCard = ({ data }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={`${data.trackImage}`} draggable='false'/>
            <Box p="6">
                <Box d="flex" mt="2" alignItems="center">
                        <Text>
                            {data.trackName} - {data.trackArtist}
                        </Text>
                </Box>
            </Box>
        </Box>
    );
}

export default TrackCard;
