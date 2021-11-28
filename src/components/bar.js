import React, { useState } from "react";
import logo from "../img/lg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const Bar = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  

  return (
    <div>
      <div className="bar">
        <img alt="logo" className="logo-bar" src={logo}></img>
        <div className="grid-bar">
          <FontAwesomeIcon
            icon={faUser}
            onClick={() => cambiarEstadoModal(true)}
          />
          <FontAwesomeIcon
            icon={faBriefcase}
            onClick={() => cambiarEstadoModal2(true)}
          />
          <FontAwesomeIcon
            icon={faPhone}
            onClick={() => cambiarEstadoModal3(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Bar;
