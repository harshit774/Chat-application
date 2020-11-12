import React from "react";
import MaterialIcon from "material-icons-react";
import "./infobar.css";

const Infobar = ({ room }) => (
  <div className="infobar">
    <div className="leftContainer">
      <MaterialIcon icon="fiber_manual_record" color="#32CD32" />
      <h3>{room}</h3>
    </div>
    <div className="rightContainer">
      <a href="/">
        <MaterialIcon icon="close" color="#fff" />
      </a>
    </div>
  </div>
);

export default Infobar;
