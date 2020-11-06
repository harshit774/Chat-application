import React from 'react';

import './message.css';

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
    <div className="box backgroundBlue">
     <p className="messageText colorWhite">{text}</p>
    </div>
   </div>
  ) :
  (
   <div className="messageContainer justifyStart">
    <div className="box backgroundLight">
    <p className="messageText colorDark">{text}</p>
   </div>
   <p className="sendText pl-10">{user} </p>  
  </div>
  )
 )
}
export default Message;