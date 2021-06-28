import { Box } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import Song from './Song'

const Playlist = () => {
    return (
        <>
            <Center>
                <Box bg="lightgray" width="60%" mt="50px">
                    <Heading color="green" mb="20px" ml="20">
                        <Text>Your New Playlist</Text>
                    </Heading>
                    <Flex overflowX="hidden"overflowY="scroll" maxHeight="500px"p="20px"direction="column"  borderRadius="20px" bg="white">
                        <Song />
                        <Song />
                        <Song />
                        <Song />
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

export default Playlist