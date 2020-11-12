import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './chat.css'
import Infobar from '../Infobar/Infobar'; 
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextArea from '../TextArea/TextArea';

let socket;

const Chat = ({ location })=> {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    const [ users, setUsers ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const ENDPOINT = 'https://react-chat-web-app.herokuapp.com/';

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
        socket.on('roomData', ({users}) => {
            setUsers(users);
        });
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
                <img className="imgContainer" src=""/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextArea users={users} />
        </div>
        
    )
};
export default Chat;
