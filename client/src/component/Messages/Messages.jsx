import React from 'react';
import ScrollBottom from 'react-scroll-to-bottom';
import './messages.css';

const Messages = ({ messages, name})=> (
  <ScrollBottom className="messages">
   {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
  </ScrollBottom>
)
 export default Messages;