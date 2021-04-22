import React from "react";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Chat em Tempo real APS UNIP 5° Semestre{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Criado com React, Express, Node e Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>Pessoas nessa sala:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <i className="circle icon onlineIcon"></i>
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
