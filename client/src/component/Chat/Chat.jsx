import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './chat.css'
import Infobar from '../Infobar/infobar';

let socket;

const Chat = ({ location })=> {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(()=> {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {
            
        });
        //unmounting 
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]); // this specify that when only endpoint and location.search changes then only it occurs.

    useEffect(()=> {
        socket.on('message', (message)=>{
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (e)=> {
        e.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, ()=> setMessage(''))
        }
    }
    console.log(messages, message);
    
    return (
        <div className="outerContainer">
            <div className="container">
                <Infobar room={room} />
            </div>
        </div>
    )
};
export default Chat;
