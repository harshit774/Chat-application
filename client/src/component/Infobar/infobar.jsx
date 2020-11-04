import React from 'react';
import closeIcon from '../Icons/close.png';
import onlineIcon from '../Icons/online.png';
import './infobar.css';

const Infobar = ({ room })=> (
<div className="infobar">
 <div className="leftContainer">
  <img className="onlineIcon" src={onlineIcon} />
  <h3>{ room }</h3>
 </div>
 <div className="rightContainer">
  <a href="/"><img className="closeIcon" src={closeIcon} /></a>
 </div>
</div>
)

export default Infobar;

