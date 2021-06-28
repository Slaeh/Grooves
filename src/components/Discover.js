import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import axios from 'axios';
import { SimpleGrid, Center } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const Discover = () => {
    const [artists, setArtists] = useState([])
    const [ playlist, setPlaylist ] = useState([])

    const storage = window.sessionStorage
    const accessToken = storage.getItem('accessToken')

    useEffect(() => {
        axios.get("https://api.spotify.com/v1/me/top/artists", {
            params: {
                'limit': 5
            },
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            }
        })
            .then(response => {
                console.log(response.data.items)
                setArtists(response.data.items)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const generatePlaylist = (event) => {
        event.preventDefault()
        const artistIDs = artists.map(artist => artist.id)
        console.log(artistIDs)
        const seeds = artistIDs.join(",")
        console.log(seeds)
        axios.get("https://api.spotify.com/v1/recommendations", {
            params: {
                'seed_artists': seeds,
                'limit': 20
            },
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            }
        })
        .then(response => {
            console.log(response.data.tracks)
            setPlaylist(response.data.tracks)
        })
    }

    return (
        <div>
            <Center>
                <Button onClick={generatePlaylist}>MAKE A PLAYLIST</Button>
            </Center>
            <Center>
                <SimpleGrid py={6} columns={3} spacingX="15px" spacingY="15px">
                    {artists.map(artist =>
                        <div key={artist.id}>
                            <ArtistCard artist={artist} artists={artists} setArtists={setArtists} />
                        </div>
                    )}
                </SimpleGrid>
            </Center>

            {playlist.length ? (
                    playlist.map(song => 
                        <div key={song.id}>
                            <p>{song.name}</p>
                        </div>)
                ) 
            : null}
        </div>
    );
}

export default Discover;
