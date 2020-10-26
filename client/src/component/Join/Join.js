import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = ()=> {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    // console.log(name);
    return (
        <div className="innerJoin">
            <div className="outerJoin">
                <h1> JOIN </h1>
                <div><input type="text" placeholder="Name" className="input" onChange={event => setName(event.target.value)} /></div>
                <div><input type="text" placeholder="Room" className="roomInput mt-20" onChange={event => setRoom(event.target.value)} /></div>
                <Link onChange={event => (!name || !room)? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
};
export default Join;
