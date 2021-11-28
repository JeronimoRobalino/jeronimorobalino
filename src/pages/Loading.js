import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import user from "../img/user.png";

export const Loading = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="conteiner">
          <img src={logo} className="logo-load" alt="logo" />
          <div className="wrapper">
            <div className="loader">
              <div className="dot"></div>
            </div>
            <div className="loader">
              <div className="dot"></div>
            </div>
            <div className="loader">
              <div className="dot"></div>
            </div>
            <div className="loader">
              <div className="dot"></div>
            </div>
            <div className="loader">
              <div className="dot"></div>
            </div>
            <div className="loader">
              <div className="dot"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="start-page">
          <div className="overly"></div>
          <div className="content-start">
          <img alt="user" className="user-pic" src={user} />
          <Link to="/windows"><button className="btn-start">Acceder</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};
