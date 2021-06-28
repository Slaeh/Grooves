import { Box } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Stack, HStack, VStack, StackDivider } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { FaTrash } from 'react-icons/fa'
import { Button } from "@chakra-ui/react"

const CreatePlaylist = () => {
    return (
        <>
            <Center>
                <Box radii="sm" bg="lightgray" width="70%" mt="50px">
                    <Heading color="green" mb="20px" ml="20">
                        <Text>Your New Playlist</Text>
                    </Heading>
                    <Flex direction="column"  justify="">
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                    </Flex>
                </Box>
            </Center>
            <Center>
                <Button mt="50px"size="lg"colorScheme="green" borderRadius="20px">
                    <Text fontSize="24px">Create Playlist</Text>
                </Button>
            </Center>
        </>
    )
}

const Song = ({ image, title, artist, album, year }) => {

    return (
        <>
        <Divider sizes="small"orientation="horizontal" colorScheme="primary"/>
        <HStack spacing="75px" p="10px">
            <Image
                src="https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg" 
                alt="album"
                boxSize="79px"
            />
            <Text fontWeight="bold" fontSize="14px">Master of Puppets (Remastered)</Text>
            <Text fontWeight="bold" fontSize="14px">Metallica</Text>
            <Text fontWeight="bold" fontSize="14px">Master of Puppets (Remastered)</Text>
            <Text fontWeight="bold" fontSize="14px">1986</Text>
            <IconButton bg="lightgray"icon={<FaTrash />}/>
        </HStack>
        <Center>
            <Divider size="50px"width="80%"borderColor="red.200" orientation="horizontal"/>
        </Center>
        </>
    )
}

export default CreatePlaylist