import React, { useState } from 'react';
import axios from 'axios'
import {BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";
import { Button } from '@chakra-ui/button';

const Stats = () => {
    //Parses the querystring in the browser and store it into the session storage
    const hash = window.location.hash.substring(1).split("&")
    const accessToken = hash[0].substring(13)
    const storage = window.sessionStorage
    storage.setItem("accessToken", accessToken)
    console.log(storage.getItem('accessToken'))
    const response = axios.get(`https://api.spotify.com/v1/me/top/artists`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken,
    }
    })
        .then(response => { 
            console.log(response)
        })
        .catch(err => { 
            console.log(err)
        })
    
        return (
        <div>
            We made it to this page!
            <Link to="/Discover">
              <Button label="Discover">
                Discover  
              </Button>             
            </Link>
        </div>
)}

export default Stats;
