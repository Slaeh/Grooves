import { React } from "react";
import { Box, Image, Flex, chakra } from "@chakra-ui/react";

// Returns a artist card with the artist image & name
const ArtistCard = ({ data, ranking }) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" w="sm">
      <Image
        src={`${data.artistImage}`}
        rounded="lg"
        boxShadow="md"
        bgSize="cover"
        bgPos="center"
        draggable="false"
        border="2px solid #1DB954"
        maxH={["300px", "300px", "360px", "384px"]}
        w={["300px", "300px", "360px", "384px"]}
      />

      <Box
        w={{ base: 56, md: 64 }}
        bgColor="lightgray"
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
          {data.artistName}
        </chakra.h3>
      </Box>
    </Flex>
  );
};
export default ArtistCard;

//Api request to get an artists top tracks - works but scrapped idea

// const [artistTopTracks, setArtistTopTracks] = useState([])
// const token = window.sessionStorage.getItem('accessToken')

// useEffect(() => {
//     axios.get(`https://api.spotify.com/v1/artists/${data.artistId}/top-tracks?market=US`, {
//         headers: {
//             'Authorization': 'Bearer ' + token,
//         }
//     })
//         .then(response => {
//             const topArr = []
//             for (let i = 0; i < 3; i++) {
//                 topArr.push(response.data.tracks[i])
//             }
//             console.log(response)
//             setArtistTopTracks(topArr)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }, [])

// while (typeof (artistTopTracks) === 'undefined') {
//     return (
//         <Center pt={20} pb={20}>
//             <Spinner size="xl" color='green'>
//             </Spinner>
//         </Center>
//     )
// }

// PopOver Code - scrapped because of responsiveness flaw

// <Popover
//         placement='right'
//         boxShadow = 'none'
//     >

//         <PopoverTrigger boxShadow = 'none'>

//         </PopoverTrigger>
//         </PopoverTrigger>
//         <PopoverContent
//             width='sm'
//             fontWeight='semibold'
//             bgGradient="linear(to-l, #fffcff, #d5fefd)"
//             boxShadow = 'none'
//         >
//             <PopoverBody boxShadow = 'none'>
//                 <Center>
//                     <Text fontWeight='bold'>
//                 {data.artistName}'s Top Tracks
//                 </Text>
//                 </Center>
//             </PopoverBody>

//             <PopoverBody border = 'none' textAlign='center'>
//                 <>
//                     {artistTopTracks.map((title, index) =>
//                         <li key={title.name}>
//                             #{index + 1} {title.name}
//                         </li>

//                     )}
//                 </>
//             </PopoverBody>
//             <Center>
//                 <PopoverBody>
//                 Followers : {data.artistFollowers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//                 </PopoverBody>

//             </Center>
//         </PopoverContent>
//     </Popover>

// Old Card layout - Scrapped

//         <Box maxW="sm" maxH='lg' borderWidth="1px" borderRadius="lg" overflow="hidden" bgGradient="linear(to-l, #01baef, #20bf55) // _hover={{
//             background: 'black',
//             opacity: '0.13',
//             zindex: '10',
//             transition: '0.3s'
//         }}">
//             <Image src={`${data.artistImage}`} draggable='false' />
//             <Center pt={3}>
//                 <Badge
//                     colorScheme="white"
//                     variant="solid"
//                     fontSize="30px"

//                 >
//                     #{ranking}
//                 </Badge>
//             </Center>
//             <Box d="flex" p='6' justifyContent='center' alignItems='center'
//         _hover={{
//             background: 'black',
//             opacity: '90%',
//             zindex: '10',
//             transition: '0.1s ease-in',
//             rounded:"lg",

//         }}>
//                 <Text
//                     fontSize='20px'
//                     textColor='white'
//                     fontWeight="bold"
//                     fontFamily='Montserrat'
//                 >
//                     {data.artistName}
//                 </Text>
//             </Box>
//             <Spacer />
//         </Box>
