import { Text } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { FaTrash } from 'react-icons/fa'
import { Center, Square, Circle } from "@chakra-ui/react"
import { Stack, HStack, VStack, StackDivider } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

const Song = ({ image, title, artist, album, year }) => {

    return (
        <>
        <Divider  orientation="horizontal" colorScheme="primary"/>
        <HStack spacing="80px" p="10px">
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
            <Divider size="50px"width="80%"borderColor="gray.400" orientation="horizontal"/>
        </Center>
        </>
    )
}

export default Song