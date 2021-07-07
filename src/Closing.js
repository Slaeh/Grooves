import { useContext } from 'react'
import AppContext from './components/AppContext'
import { motion } from "framer-motion"
import { 
    Box,
    Text,
    Button,
    Center,
    Flex,
    Heading
} from "@chakra-ui/react"


const Closing = ()=> {

    //Parses the querystring in the browser and store it into the session
    const hash = window.location.hash.substring(1).split("&")
    const playlistToken = hash[0].substring(13)

    const { display, user, setUser, userPlaylist, setUserPlaylist, playlistName, setPlaylistName } = useContext(AppContext)
    console.log('display', display)
    console.log('userPlayist', user)
    
    return (
        <Flex bg="gray.500" h="100vh"justify="center" align="center" flexDir="column">
            {/* <Center> */}
            <Heading color="#000" size="4xl">Thank you for using our application!</Heading>
            <Text fontSize="5xl" color="black"> 
                We do not save your spotify information. 
                <br/> However, if you want to remove our application's  
                <br/> permission to your account, click on the 
                <br/>button below.
            </Text>
            <Button 
                size="lg" 
                bg="#000" 
                color="white" 
                _hover={{bg: '#000'}}
            >
                Click me
            </Button>
            {/* </Center> */}
        </Flex>
    )
}

export default Closing