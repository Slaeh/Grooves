import React from 'react';
import { Box, Image, Flex, chakra } from '@chakra-ui/react';

// Returns a artist card with the artist image & name
const ArtistCard = ({ data, ranking }) => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            w="sm"
            mx="auto"
        >
            <Box
                // _hover={{
                //     background: 'black',
                //     opacity: '90%',
                //     zindex: '10',
                //     transition: '0.1s ease-in',
                //     rounded:"lg",
                // }}
            >
            <Image
                src={`${data.artistImage}`}
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                draggable='false'
                // _hover={{
                //     background: 'black',
                //     opacity: '0.13',
                //     zindex: '10',
                //     transition: '0.3s'
                // }}
            />
            </Box>
            <Box
                w={{ base: 56, md: 64 }}
                bgColor='lightgray'
                mt={2}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
            >
                <chakra.h3
                    py={2}
                    // fontFamily='Montserrat'
                    textAlign="center"
                    fontWeight="bold"
                    bgGradient="linear(to-l, #ffffff, #d7e1ec)"
                    // background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
                    textAlign="center"
                    fontSize='15px'
                >
                    #{ranking}
                    <br></br>
                    {data.artistName}
                </chakra.h3>
            </Box>
        </Flex>
        
        );
    }
export default ArtistCard;
        
        // <Box maxW="sm" maxH='lg' borderWidth="1px" borderRadius="lg" overflow="hidden" bgGradient="linear(to-l, #01baef, #20bf55)">
        //     <Image src={`${data.artistImage}`} draggable='false' />
        //     <Center pt={3}>
        //         <Badge
        //             colorScheme="white"
        //             variant="solid"
        //             fontSize="30px"
                    
        //         >
        //             #{ranking}
        //         </Badge>
        //     </Center>
        //     <Box d="flex" p='6' justifyContent='center' alignItems='center'>
        //         <Text
        //             fontSize='20px'
        //             textColor='white'
        //             fontWeight="bold"
        //             fontFamily='Montserrat'
        //         >
        //             {data.artistName}
        //         </Text>
        //     </Box>
        //     <Spacer />
        // </Box>
