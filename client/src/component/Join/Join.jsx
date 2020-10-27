import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './join.css';

const Join = ()=> {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    return (
        <div className="login-box">
            <h2>Join</h2>
            <div className="user-box">
                <input type="text" onChange={e => setName(e.target.value)} required/>
                <label>Username</label>
            </div>
            <div className="user-box">
                <input type="text" onChange={e => setRoom(e.target.value)} required/>
                <label>Room ID</label>
            </div>
            <Link onChange={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
                <button className="button mt-20" type="submit">Sign In</button>
            </Link>
        </div>
    );
}               
export default Join;
