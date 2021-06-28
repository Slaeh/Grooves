import {
    Box,
    Image,
    Text,
    Center,
    Heading,
    Button
} from '@chakra-ui/react';

export default function ArtistCard({ artist, artists, setArtists }) {

    const handleMouse = () => {
        console.log(`hovered ${artist.artistName}`)
    }

    const handleClick = (event) => {
        console.log(`clicked ${artist.artistName}`)
    }

    const removeArtist = (event) => {
        event.preventDefault()
        console.log(artists.filter(a => a.id !== artist.id))
        setArtists(artists.filter(a => a.id !== artist.id))
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
                    <Text>{artist.artistName}</Text>
                </Center>
                <Image
                    _hover={{ background: '#1DB954', opacity: '50%' }}
                    maxWidth={'360px'}
                    maxHeight={'360px'}
                    src={artist.artistImage}
                />
                <Button onClick={removeArtist}>Remove Artist</Button>
            </Box>
        </div>
    );
}