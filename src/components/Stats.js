import React, { useState } from 'react';
import axios from 'axios'
import {BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";

const Stats = () => {
    //Parses the querystring in the browser and store it into the session storage
    const hash = window.location.hash.substring(1).split("&")
    const accessToken = hash[0].substring(13)
    console.log(accessToken)
    const storage = window.sessionStorage
    storage.setItem("accessToken", accessToken)
    console.log(storage.getItem('accessToken'))
    
    return (
        <div>We made it to this page!
            
        </div>
)}

export default Stats;
