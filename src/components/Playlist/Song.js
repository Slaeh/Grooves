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
        <HStack spacing="80px" p="10px">
            <Image
                src={image[0].url} 
                alt="album"
                boxSize="79px"
            />
            <Text fontWeight="bold" fontSize="14px">{title}</Text>
            <Text fontWeight="bold" fontSize="14px">{artist}</Text>
            <Text fontWeight="bold" fontSize="14px">{album}</Text>
            <Text fontWeight="bold" fontSize="14px">{year}</Text>
            <IconButton bg="white"icon={<FaTrash />}/>
        </HStack>
        <Center>
            <Divider size="50px"width="80%"borderColor="gray.400" orientation="horizontal"/>
        </Center>
        </>
    )
}

export default Song