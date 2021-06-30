import { Box, useDisclosure } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import axios from 'axios'
import Song from './Song'
import { useContext, useState } from "react"
import AppContext from '../AppContext'
import { Input } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"

const Playlist = () => {
	const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { playlistName, setPlaylistName, user, setUser, userPlaylist, setUserPlaylist } = useContext(AppContext)
	const accessToken = window.sessionStorage.getItem('accessToken')
    
	//Parses the querystring in the browser and store it into the session
    const hash = window.location.hash.substring(1).split("&")
    const playlistToken = hash[0].substring(13)
    
    // onClick function for Create Playlist button to send API request to create a user playlist
    const handleCreatePlaylist = () => {
        axios({
			method: 'post',
			url: `https://api.spotify.com/v1/users/${user}/playlists`,
			headers: {
				'Authorization' : `Bearer ${playlistToken}`
			},
			data: {
				name: playlistName
			}
		})
		.then(response => {
			console.log(response)
		})
		.catch(err => {
			console.log(err)
		})
        
    }
    console.log('userID', user)
	console.log('token', accessToken)
    // console.log('userPlaylist', userPlaylist)

	// onChange function for controlling playlist title input
	const handleChange = (e) => setPlaylistName(e.target.value)

    return (
        <>
            <Center>
                <Box width={["100%", "95%", "95%", "90%", "50%"]} mt="75px">
                    <Heading color="green" mb="20px" ml="20">
                        <Text>Your New Playlist</Text>
                    </Heading>
                    <Flex justify="space-between"overflowX="hidden"overflowY="scroll" maxHeight="500px"p="20px"direction="column"  borderRadius="20px" bg="white">
                        <Divider borderColor="gray.400" orientation="horizontal" colorScheme="primary"/>
                        { userPlaylist.map(song => {
                            const albumImage = song.album.images[0]
                            // console.log(albumImage)
                            const albumName = song.name
                            const artistName = song.artists[0].name
                            const songName = song.album.name
                            const yearReleased = song.album.release_date.slice(0, 4)

                            return <Song key={song.id} image={albumImage} title={songName} artist={artistName} album={albumName} year={yearReleased}/>
                        })}
                    </Flex>
                </Box>
            </Center>
            <Center>
                <Button mb="50px"mt="75px"size="lg"colorScheme="green" borderRadius="20px" onClick={onOpen}>
                    <Text fontSize="24px">Create Playlist</Text>
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
									<a href={`https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/Closing/&response_type=token&scope=playlist-modify-public`}>
										<Button onClick={handleCreatePlaylist}size="lg"mt="20px"colorScheme="green">Create</Button>
									</a>
								</Center>
							</ModalBody>
						</ModalContent>
                </Modal>
            </Center>
            
        </>
    )
}

export default Playlist