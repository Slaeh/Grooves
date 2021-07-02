import React from 'react';
import { Box, Image, Text, Spacer, Center, Badge } from '@chakra-ui/react';

// Returns a artist card with the artist image & name
const ArtistCard = ({ data, ranking }) => {
    return (
        <Box maxW="sm" maxH='lg' borderWidth="1px" borderRadius="lg" overflow="hidden" bgGradient="linear(to-l, #01baef, #20bf55)">
            <Image src={`${data.artistImage}`} draggable='false' />
            <Center pt={3}>
                <Badge
                    colorScheme="white"
                    variant="solid"
                    fontSize="30px"
                    
                >
                    #{ranking}
                </Badge>
            </Center>
            <Box d="flex" p='6' justifyContent='center' alignItems='center'>
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
