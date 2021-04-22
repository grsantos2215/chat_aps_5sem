import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <i className="circle icon onlineIcon"></i>
        <h3>Sala: {room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <i className="close icon"></i>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
