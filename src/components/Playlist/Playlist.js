import axios from 'axios'
import Song from './Song'
import { useContext, useState } from "react"
import AppContext from '../AppContext'
import bgImage from '../../images/spotify-black-bg.png'
import whiteBgImage from '../../images/spotify-white2-bg.png'
import { 
    Box, 
    useDisclosure,
    Heading,
    Center,
    Flex, 
    Text,
    Button,
    Divider,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"


const Playlist = () => {
	
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { playlistName, setPlaylistName, user, setUser, userPlaylist, setUserPlaylist } = useContext(AppContext)
	const accessToken = window.sessionStorage.getItem('accessToken')
    
    // onClick function for Create Playlist button to send API request to create a user playlist
    const handleCreatePlaylist = async () => {
        // spotify API request to create an Empty playlist to a user's account
        const createPlaylistResponse = await axios({
			method: 'post',
			url: `https://api.spotify.com/v1/users/${user}/playlists`,
			headers: {
				'Authorization' : `Bearer ${accessToken}`
			},
			data: {
				name: playlistName
			}
		})

		const playlistId = createPlaylistResponse.data.id
        const tracksURI = userPlaylist.map(track => track.uri)
        
        // spotify API request to add a list of songs to the empty playlist created
        // from the above API request 
        await axios({
            method: 'post',
			url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
			headers: {
				'Authorization' : `Bearer ${accessToken}`,
                'Content-Type' : 'application/json'
			},
			data: {
				uris: tracksURI
			}
        })
        
    }
   
	// onChange function for controlling playlist title input
	const handleChange = (e) => setPlaylistName(e.target.value)

    // onClick function for trash IconButton
    // removes a song from userPlaylist when clicked
    const handleTrashButton = (songToRemove) => {
        console.log('in handleTrashButton')
        const playlistAfterSongRemoved = userPlaylist.filter(song => song !== songToRemove)

        setUserPlaylist(playlistAfterSongRemoved)
    }

    // list of songs to render in main container
    const listOfSongs = userPlaylist.map(song => {
        const albumImage = song.album.images[0]
        const songName = song.name
        const artistName = song.artists[0].name
        const albumName = song.album.name
        const yearReleased = song.album.release_date.slice(0, 4)
    
        return <Song onClick={() => handleTrashButton(song)} key={song.id} image={albumImage} title={songName} artist={artistName} album={albumName} year={yearReleased}/>
    })
    
    return (
        <Box backgroundImage={`url(${whiteBgImage})`} backgroundRepeat="no-repeat" bgSize="contain 100%" bgPosition="right">
            <Center>
                <Box width={["95%", "95%", "95%", "90%", "59%"]} mt="75px">
                    {/* <Center></Center> */}
                    <Heading color="green" mb="20px" ml="20">
                        <Text mr="30px" color="black">Your New Playlist</Text>
                    </Heading>
                    <Flex  justify="space-between"overflowX="hidden"overflowY="scroll" maxHeight="500px"p="20px" pr="0px"direction="column"  borderRadius="30px" bg="#e6e6e6" boxShadow="dark-lg">
                        <Divider width="95%"borderColor="gray.400" orientation="horizontal" colorScheme="primary"/>
                        {listOfSongs}
                    </Flex>
                </Box>
            </Center>
            <Center>
                <Button mb="50px"mt="75px"size="lg"bg="#1DB954" borderRadius="20px" onClick={onOpen}>
                    <Text fontSize="24px" color="white">Create Playlist</Text>
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
						<ModalContent>
							<ModalHeader>Enter Playlist Name</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<Input 
									placeholder="Enter Playlist Name"
									value={playlistName}
									onChange={handleChange}
								/>
								<Center>
									<a href='http://localhost:3000/Closing/'>
										<Button onClick={handleCreatePlaylist}size="lg"mt="20px"colorScheme="green">Create</Button>
									</a>
								</Center>
							</ModalBody>
						</ModalContent>
                </Modal>
            </Center>
            
        </Box>
    )
}

export default Playlist