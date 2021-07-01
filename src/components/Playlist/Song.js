import { Text } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { FaTrash } from 'react-icons/fa'
import { Center, Square, Circle } from "@chakra-ui/react"
import { Stack, HStack, VStack, StackDivider } from "@chakra-ui/react"
import { Image, Box } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"

const Song = ({ onClick, image, title, artist, album, year }) => {

    return (
        <>
        {/* <HStack spacing={['5px','80px']} p="10px"> */}
        <Flex p="10px"align="center">
            <Image
                src={image.url} 
                alt="album"
                boxSize={['50px', '79px']}
                draggable="false"
            />
            <Box m={['5px', '5px']}width='100px' textAlign="left"><Text fontWeight="bold" fontSize={['11px', '14px']}>{title}</Text></Box>
            <Spacer />
            <Box  m={['5px', '5px']}width="100px" textAlign="center"><Text fontWeight="bold" fontSize={['11px', '14px']}>{artist}</Text></Box>
            <Spacer />
            <Box  m={['5px', '5px']}width="100px" textAlign="center"><Text fontWeight="bold" fontSize={['11px', '14px']}>{album}</Text></Box>
            <Spacer />
            <Box  d={['none']}m={['5px', '5px']}width="100px" textAlign="center"><Text fontWeight="bold" fontSize={['11px', '14px']}>{year}</Text></Box>
            <Spacer />
            <Box  mr={['5px', '5px']}textAlign={['right', 'right', 'left']}width="100px"><IconButton size={['sm', 'md']}variant="unstyled" onClick={onClick} bg="white"icon={<FaTrash />}/></Box>
            </Flex>
        {/* </HStack> */}
        <Center>
            <Divider size="50px"width="90%"borderColor="gray.400" orientation="horizontal"/>
        </Center>
        </>
    )
}

export default Song