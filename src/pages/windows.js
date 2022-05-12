import React, { useState } from "react";
import Draggable from "react-draggable";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMaximize,
  faWindowMinimize,
  faBriefcase,
  faUser,
  faPhone,
  faSkiing,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Modal from "../componentsReutilisables/modal";
import logo from "../img/lg.svg";

export const Windows = () => {
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);

  const [max1, setMax1] = useState("none");
  const [max2, setMax2] = useState("none");
  const [max3, setMax3] = useState("none");
  const [max4, setMax4] = useState("none");

  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(15);
    setCounter2(10);
    setCounter3(10);
    setCounter4(10);
  };

  const [counter2, setCounter2] = useState(0);

  const handleClick2 = () => {
    setCounter2(15);
    setCounter(10);
    setCounter3(10);
    setCounter4(10);
  };

  const [counter3, setCounter3] = useState(0);

  const handleClick3 = () => {
    setCounter3(15);
    setCounter(10);
    setCounter2(10);
    setCounter4(10);
  };

  const [counter4, setCounter4] = useState(0);

  const handleClick4 = () => {
    setCounter4(15);
    setCounter(10);
    setCounter3(10);
    setCounter2(10);
  };

  return (
    <div>
      <div className="content">
        <ContenedorBotones className="app-content">
          <Boton className="menu-btng" onClick={() => cambiarEstadoModal(true)}>
            <FontAwesomeIcon icon={faUser} />
            <p>Acerca de mi</p>
          </Boton>
          <Boton
            className="menu-btng"
            onClick={() => cambiarEstadoModal2(true)}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            <p>Proyectos</p>
          </Boton>
          <Boton
            className="menu-btng"
            onClick={() => cambiarEstadoModal3(true)}
          >
            <FontAwesomeIcon icon={faSkiing} />
            <p>Habilidades</p>
          </Boton>
          <Boton
            className="menu-btng"
            onClick={() => cambiarEstadoModal4(true)}
          >
            <FontAwesomeIcon icon={faPhone} />
            <p>Contacto</p>
          </Boton>
        </ContenedorBotones>
        <Modal
          estado={estadoModal}
          cambiarEstado={cambiarEstadoModal}
          mostrarHeader={false}
          mostrarOverlay={true}
          posicionModal={"center"}
          padding={"0px"}
        >
          <Contenido className={"z" + counter3} onClick={handleClick3}>
            <Draggable
              onDrag={() => {
                setMax1("none");
              }}
              axis="both"
              handle="strong"
              defaultPosition={{ x: 85, y: -10 }}
              position={null}
              grid={[1, 1]}
              scale={1}
            >
              <div className={"window " + max1}>
                <strong className="cursor">
                  <div className="header-window"></div>
                </strong>
                <div className="control">
                  <div className="controls mini">
                    <FontAwesomeIcon
                      icon={faWindowMinimize}
                      className="iconos"
                      onClick={() => {
                        setMax1("none");
                      }}
                    />
                  </div>
                  <div
                    className="controls max"
                    onClick={() => {
                      setMax1("maxed");
                    }}
                    onDoubleClick={() => {
                      setMax1("none");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faWindowMaximize}
                      className="iconos"
                    />
                  </div>
                  <div
                    className="controls close"
                    onClick={() => cambiarEstadoModal(!estadoModal)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="iconos" />
                  </div>
                </div>
                <iframe
                  id="inlineFrameExample"
                  title="Inline Frame Example"
                  width="100%"
                  height="90%"
                  src="https://windowsproyect.github.io/Jeronimo/"
                ></iframe>
              </div>
            </Draggable>
          </Contenido>
        </Modal>

        <Modal
          estado={estadoModal2}
          cambiarEstado={cambiarEstadoModal2}
          mostrarHeader={false}
          mostrarOverlay={true}
          posicionModal={"center"}
          padding={"0px"}
        >
          <Contenido className={"z" + counter2} onClick={handleClick2}>
            <Draggable
              onDrag={() => {
                setMax2("none");
              }}
              axis="both"
              handle="strong"
              defaultPosition={{ x: 100, y: 100 }}
              position={null}
              grid={[1, 1]}
              scale={1}
            >
              <div className={"window z" + counter2 + " " + max2}>
                <strong className="cursor">
                  <div className="header-window"></div>
                </strong>
                <div className="control">
                  <div className="controls mini">
                    <FontAwesomeIcon
                      icon={faWindowMinimize}
                      className="iconos"
                      onClick={() => {
                        setMax2("none");
                      }}
                    />
                  </div>
                  <div
                    className="controls max"
                    onClick={() => {
                      setMax2("maxed");
                    }}
                    onDoubleClick={() => {
                      setMax2("none");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faWindowMaximize}
                      className="iconos"
                    />
                  </div>
                  <div
                    className="controls close"
                    onClick={() => cambiarEstadoModal2(!estadoModal2)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="iconos" />
                  </div>
                </div>
                <iframe
                  onClick={handleClick2}
                  id="inlineFrameExample"
                  title="Inline Frame Example"
                  width="100%"
                  height="90%"
                  src="https://windowsproyect.github.io/Jeronimo/#/port"
                ></iframe>
              </div>
            </Draggable>
          </Contenido>
        </Modal>

        <Modal
          estado={estadoModal3}
          cambiarEstado={cambiarEstadoModal3}
          mostrarHeader={false}
          mostrarOverlay={true}
          posicionModal={"center"}
          padding={"0px"}
        >
          <Contenido className={"z" + counter} onClick={handleClick1}>
            <Draggable
              onDrag={() => {
                setMax3("none");
              }}
              axis="both"
              handle="strong"
              defaultPosition={{ x: 20, y: 20 }}
              position={null}
              grid={[1, 1]}
              scale={1}
            >
              <div className={"window z" + counter + " " + max3}>
                <strong className="cursor">
                  <div className={"header-window"}></div>
                </strong>
                <div className="control">
                  <div className="controls mini">
                    <FontAwesomeIcon
                      icon={faWindowMinimize}
                      className="iconos"
                      onClick={() => {
                        setMax3("none");
                      }}
                    />
                  </div>
                  <div
                    className="controls max"
                    onClick={() => {
                      setMax3("maxed");
                    }}
                    onDoubleClick={() => {
                      setMax3("none");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faWindowMaximize}
                      className="iconos"
                    />
                  </div>
                  <div
                    className="controls close"
                    onClick={() => cambiarEstadoModal3(!estadoModal3)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="iconos" />
                  </div>
                </div>
                <iframe
                  onClick={handleClick1}
                  id="inlineFrameExample"
                  title="Inline Frame Example"
                  width="100%"
                  height="90%"
                  src="https://windowsproyect.github.io/Jeronimo/#/habilidades"
                ></iframe>
              </div>
            </Draggable>
          </Contenido>
        </Modal>



        <Modal
          estado={estadoModal4}
          cambiarEstado={cambiarEstadoModal4}
          mostrarHeader={false}
          mostrarOverlay={true}
          posicionModal={"center"}
          padding={"0px"}
        >
          <Contenido className={"z" + counter4} onClick={handleClick4}>
            <Draggable
              onDrag={() => {
                setMax4("none");
              }}
              axis="both"
              handle="strong"
              defaultPosition={{ x: 20, y: 20 }}
              position={null}
              grid={[1, 1]}
              scale={1}
            >
              <div className={"window z" + counter4 + " " + max4}>
                <strong className="cursor">
                  <div className={"header-window"}></div>
                </strong>
                <div className="control">
                  <div className="controls mini">
                    <FontAwesomeIcon
                      icon={faWindowMinimize}
                      className="iconos"
                      onClick={() => {
                        setMax4("none");
                      }}
                    />
                  </div>
                  <div
                    className="controls max"
                    onClick={() => {
                      setMax4("maxed");
                    }}
                    onDoubleClick={() => {
                      setMax4("none");
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faWindowMaximize}
                      className="iconos"
                    />
                  </div>
                  <div
                    className="controls close"
                    onClick={() => cambiarEstadoModal4(!estadoModal4)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="iconos" />
                  </div>
                </div>
                <iframe
                  onClick={handleClick4}
                  id="inlineFrameExample"
                  title="Inline Frame Example"
                  width="100%"
                  height="90%"
                  src="https://windowsproyect.github.io/Jeronimo/#/contacto"
                ></iframe>
              </div>
            </Draggable>
          </Contenido>
        </Modal>
      </div>
      <div className="bar">
        <img
          alt="logo"
          className="logo-bar"
          src={logo}
        />
        <div className="grid-bar">
          <div onClick={() => handleClick1}>
            <FontAwesomeIcon
              icon={faUser}
              onClick={() => cambiarEstadoModal(true)}
            />
          </div>
          <div onClick={() => handleClick2}>
            <FontAwesomeIcon
              icon={faBriefcase}
              onClick={() => cambiarEstadoModal2(true)}
            />
          </div>
          <div onClick={() => handleClick3}>
            <FontAwesomeIcon
              icon={faPhone}
              onClick={() => cambiarEstadoModal3(true)}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

const ContenedorBotones = styled.div`
  z-index: 1;
`;

const Boton = styled.button`
  cursor: pointer;
  z-index: 2;
  width: 100%;
  color: #ffffff;
  height: 15vh;
`;

const Contenido = styled.div`
  margin-top: 45px;
  position: absolute;
  width: 800px;
  height: 0vh;
  z-index: 10;
  p {
    left: 10px;
    font-size: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
