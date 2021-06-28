import React, { useState, useEffect, useContext } from 'react';
import ArtistCard from './ArtistCard';
import axios from 'axios';
import { SimpleGrid, Center } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import AppContext from '../AppContext';

const Discover = () => {
    // const [artists, setArtists] = useState([])
    // const [ playlist, setPlaylist ] = useState([])

    const { 
        display,
        setDisplay,
        user,
        setUser,
        track,
        setTrack,
        artist,
        setArtist,
        userPlaylist,
        setUserPlaylist
    } 
    = useContext(AppContext);

    const storage = window.sessionStorage
    const accessToken = storage.getItem('accessToken')

    // useEffect(() => {
    //     axios.get("https://api.spotify.com/v1/me/top/artists", {
    //         params: {
    //             'limit': 5
    //         },
    //         headers: {
    //             'Authorization': 'Bearer ' + accessToken,
    //         }
    //     })
    //         .then(response => {
    //             console.log(response.data.items)
    //             setArtists(response.data.items)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])

    const generatePlaylist = (event) => {
        event.preventDefault()
        const artistIDs = artist.map(a => a.id)
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
            setUserPlaylist(response.data.tracks)
        })
        window.location.href='/CreatePlaylist';
    }

    return (
        <div>
            <Center>
                    <Button onClick={generatePlaylist} label="CreatePlaylist">
                        MAKE A PLAYLIST
                    </Button>
            </Center>
            
            <Center>
                <SimpleGrid py={6} columns={3} spacingX="15px" spacingY="15px">
                    {artist.map(a =>
                        <div key={a.id}>
                            <ArtistCard artist={a} artists={artist} setArtists={setArtist} />
                        </div>
                    )}
                </SimpleGrid>
            </Center>

            {userPlaylist.length ? (
                    userPlaylist.map(song => 
                        <div key={song.id}>
                            <p>{song.name}</p>
                        </div>)
                ) 
            : null}
        </div>
    );
}

export default Discover;
