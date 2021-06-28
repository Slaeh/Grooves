import {
    Box,
    Image,
    Text,
    Center,
    Heading
} from '@chakra-ui/react';

export default function ArtistCard({ artist }) {

    const handleMouse = () => {
        console.log(`hovered ${artist.name}`)
    }

    const handleClick = (event) => {
        console.log(`clicked ${artist.name}`)
    }

    return (
        <div>
            <Box
                boxShadow="dark-lg"
                as="button"
                onClick={handleClick}
                _hover={{ fontWeight: 'bold', color: 'white', background: '#1DB954', opacity: '50%', visibility: 'visible' }}
                onMouseOver={handleMouse}
            >
                <Center>
                    <Text>{artist.name}</Text>
                </Center>
                <Image
                    _hover={{ background: '#1DB954', opacity: '50%' }}
                    maxWidth={'360px'}
                    maxHeight={'360px'}
                    src={artist.images[0].url}
                />
            </Box>
        </div>
    );
}