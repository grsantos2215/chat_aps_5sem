import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Entrar</h1>
        <div className="field">
          <div className="ui left large fluid icon input">
            <i className="user icon"></i>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="ui left large fluid icon input">
            <i className="comment icon"></i>
            <input
              placeholder="Room"
              className="joinInput"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
        </div>
        <div className="position">
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="ui green large button" type="submit">
              Entrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
