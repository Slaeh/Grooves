import { React } from "react";
import { chakra, Box, Image, Flex } from "@chakra-ui/react";

// Returns a track card with the album image & artist name
const TrackCard = ({ data, ranking }) => {
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
          src={`${data.trackImage}`}
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          draggable="false"
          border="2px solid #000000"
          maxH="384px"
          w="384px"
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
        // bgColor="lightgray"
        mt={2}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <chakra.h3
          py={2}
          textAlign="center"
          fontWeight="bold"
          bgGradient="linear(to-l, #ffffff, #d7e1ec)"
          textAlign="center"
          fontSize="15px"
        >
          #{ranking}
          <br></br>
          {data.trackName}
          <br></br>
          {data.trackArtist}
        </chakra.h3>
      </Box>
    </Flex>
  );
};

export default TrackCard;

// const [hover, setHover] = useState(false);

// const showHover = e => {
//     console.log(hover)
//     setHover(true)
// }

// const hideHover = e => {
//     console.log(hover)
//     setHover(false)
// }

// return (
//     <Box
//         maxW="md"
//         _hover={{
//             background: 'black',
//             opacity: '90%',
//             zindex: '10',
//             transition: '0.3s'
//         }}
//     >
//         <Image
//             src={`${data.trackImage}`}
//             _hover={{
//                 background: 'black',
//                 opacity: '0.13',
//                 zindex: '10',
//                 transition: '0.3s'
//             }}

//             draggable='false'

//             onMouseEnter={
//                 e => showHover(true)
//             }

//             onMouseOut={
//                 e => hideHover(false)
//             }
//         />

//         {/* <Stack
//             p="2px 12px"
//             bottom="24px"
//             textAlign="center"
//             w="full"
//         > */}
//             <Heading
//                 textColor='green'
//                 position='relative'
//                 className={hover}
//                 display='inlineblock'
//                 verticalalign='top'
//             >
//                 {data.trackName}
//                 <br></br>
//                 {data.trackArtist}
//             </Heading>

//         {/* </Stack> */}
//     </Box>

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
