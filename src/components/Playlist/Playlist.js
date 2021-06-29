import { Box } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import axios from 'axios'
import Song from './Song'
import { useContext } from "react"
import AppContext from '../AppContext'

const Playlist = () => {
    // onClick function for Create Playlist button to send API request to create a user playlist
    // const handleCreatePlaylist = () => {
    //     axios.post('https://api.spotify.com/v1/users/{user_id}/playlists', {
    //         headers: {
    //             'Authorization': 
    //         }
    //     }
    //     )
    // }
    const { user, setUser, userPlaylist, setUserPlaylist } = useContext(AppContext)
    console.log('userID', user)
    console.log('userPlaylist', userPlaylist)
    const accessToken = window.sessionStorage.getItem('accessToken')
    return (
        <>
            <Center>
                <Box bg="" width="60%" mt="75px">
                    <Heading color="green" mb="20px" ml="20">
                        <Text>Your New Playlist</Text>
                    </Heading>
                    <Flex overflowX="hidden"overflowY="scroll" maxHeight="500px"p="20px"direction="column"  borderRadius="20px" bg="white">
                    <Divider borderColor="gray.400" orientation="horizontal" colorScheme="primary"/>
                        { userPlaylist.map(song => {
                            const albumImage = song.album.images
                            const albumName = song.name
                            const artistName = song.artist[0].name
                            const songName = song.album.name
                            const yearReleased = song.release_date.slice(0, 4)

                            return <Song image={albumImage} title={songName} artist={artistName} album={albumName} year={yearReleased}/>
                        })}
                    </Flex>
                </Box>
            </Center>
            <Center>
                <Button mb="50px"mt="75px"size="lg"colorScheme="green" borderRadius="20px">
                    <Text fontSize="24px">Create Playlist</Text>
                </Button>
            </Center>
        </>
    )
}

export default Playlist