import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import axios from 'axios';
import { SimpleGrid, Center } from '@chakra-ui/layout';

const Discover = () => {
    const [artists, setArtists] = useState([])

    const storage = window.sessionStorage
    const accessToken = storage.getItem('accessToken')

    useEffect(() => {
        axios.get("https://api.spotify.com/v1/me/top/artists", {
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

    return (
        <div>
            {/* {console.log(artists)} */}
            Discover Page
            <Center>
                <SimpleGrid py={6} columns={3} spacingX="15px" spacingY="15px">
                    {artists.map(artist =>
                        <div key={artist.id}>
                            {/* <li>
                            <b>{artist.name}</b>
                            <br></br>
                            <img src={artist.images[2].url} alt={artist.name} />
                            {artist.genres.map(genre => 
                                <div key={genre}>
                                    {genre}
                                </div>  
                            )}
                        </li> */}
                            <ArtistCard artist={artist} />
                        </div>
                    )}
                </SimpleGrid>
            </Center>
        </div>
    );
}

export default Discover;
