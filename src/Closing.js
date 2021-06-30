import { useEffect, useContext } from 'react'
import axios from 'axios'
import AppContext from './components/AppContext'

const Closing = ()=> {
    const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID

    //Parses the querystring in the browser and store it into the session
    const hash = window.location.hash.substring(1).split("&")
    const playlistToken = hash[0].substring(13)
    console.log(playlistToken)

    const { user, setUser, userPlaylist, setUserPlaylist, playlistName, setPlaylistName } = useContext(AppContext)
    console.log(playlistName)
    console.log('user', user)
    
    // useEffect(() => {
    //     async function getAuthorize() {
    //         await  axios({
    //             method: 'post',
    //             url: `https://api.spotify.com/v1/users/${user}/playlists`,
    //             headers: {
    //                 'Authorization' : `Bearer ${playlistToken}`
    //             },
    //             data: {
    //                 name: playlistName
    //             }
    //         })
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
    //      getAuthorize()
    // }, [])

    return (
        <div>
            Thank you
        </div>
    )
}

export default Closing