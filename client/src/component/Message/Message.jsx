import React from 'react';

import './message.css';
import ReactEmoji from 'react-emoji';

const Message = ({message: { user, text }, name}) => {
 let currentUser = false;
 const trimUser = name.trim().toLowerCase();
 if(user === trimUser){
  currentUser = true;
 }
 return (
  currentUser ?
  (
   <div className="messageContainer justifyEnd">
    <p className="sendText pr-10">{trimUser} </p>
    <div className="box backgroundViolet">
     <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
    </div>
   </div>
  ) :
  (
   <div className="messageContainer justifyStart">
    <div className="box backgroundLight">
    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
   </div>
   <p className="sendText pl-10">{user} </p>  
  </div>
  )
 )
}
export default Message;