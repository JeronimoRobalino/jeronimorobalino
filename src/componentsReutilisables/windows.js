import React from "react";
import styled from "styled-components";

const Windows = ({
  children,
  estado,
  cambiarEstado,
  titulo = "Alerta",
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  padding,
}) => {
  return (
    <>
      {estado && (
        <ContenedorModal
          padding={padding}
          mostrarOverlay={mostrarOverlay}
          posicionModal={posicionModal}
        >
          {mostrarHeader && (
            <EncabezadoModal
            ></EncabezadoModal>
          )}
          {children}
        </ContenedorModal>
      )}
    </>
  );
};

export default Windows;

const ContenedorModal = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  position: absolute;
  left: 30%;
  top: 30%;
`;

const EncabezadoModal = styled.div`
  position: absolute;
  top: 10px;
  z-index: 10;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  background: #000;
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766dc;
  }
`;
