import React, { useState } from 'react';
import axios from 'axios'
import { Button, ButtonGroup } from "@chakra-ui/react"
import { assertExpressionStatement } from '@babel/types';
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET


const Home = () =>  {
    const connectUser = () => { 
        console.log("Hello")
        axios.get(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=http://localhost:3000/callback/&scope=user-read-private%20user-read-email&response_type=token&state=123`)
                .then(response => { 
            console.log(response)
        })
        .catch (err => { 
            console.log(err)
        })
    }
    return (
        <div>
           <Button colorScheme="blue" onClick={connectUser}>Button</Button>   
        </div>
    );
    
    
}

export default Home;
