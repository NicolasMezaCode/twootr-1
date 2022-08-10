import React, { useState, useEffect } from 'react';
import axios from "axios";
import SingleTwoot from './SingleTwoot';

export default function TwootList(props) {

    const [twoots, setTwoots] = useState([]);

    useEffect (() => {
        axios.get(`https://twoot-app.herokuapp.com/twoots`).then((res) => {
            console.log(" ")
        setTwoots(res.data);
        });
    }, []);

    return (
        <section>
            <h2 style={{marginLeft:"70px",padding:"2rem",marginBottom:"20px"}}>See what people is humming about</h2>
            <div>
                {          
                    twoots.length > 0 &&           
                    twoots.map(twoot => <SingleTwoot twoot={twoot}/>)
                } 
            </div>
        </section>
    );
}