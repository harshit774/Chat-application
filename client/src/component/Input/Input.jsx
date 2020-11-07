import React from 'react';
import MaterialIcon from 'material-icons-react';

import './input.css';

const Input = ({ message, setMessage, sendMessage })=> (
  <form className="form">
   <input 
    className="input"
    type="text"
    placeholder="Send a message..."
    value={message}
    onChange={event => setMessage(event.target.value)}
    onKeyPress={event => event.key === 'Enter' ? sendMessage(event): null}
   />
   <button  className="sendButton" onClick={e => sendMessage(e)}><MaterialIcon icon="send" color="#9465C6"/></button>
  </form>
)
 export default Input;