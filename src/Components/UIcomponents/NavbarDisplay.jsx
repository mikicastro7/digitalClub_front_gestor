/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import NavbarLogin from "./NavbarLogin";
import Navbar from "./Navbar";
import ContextoUsuario from "../../Contextos/ContextoUsuario";

const NavbarDisplay = () => {
  const { infoUsuario } = useContext(ContextoUsuario);
  return (
    <>
      {
        (Object.keys(infoUsuario).length !== 0 && infoUsuario.constructor === Object) ? <Navbar /> : <NavbarLogin />
      }
    </>
  );
};

export default NavbarDisplay;
