import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <div className="container">
      <Navbar.Brand className="nav-first" href="#home">Digital Clubs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Gestionar" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Noticias</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Equipos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Usuarios</Nav.Link>
        </Nav>
        <Nav className="ml-auto nav-last">
          <NavDropdown title="Usuario" id="basic-nav-dropdown">
            <NavDropdown.Item>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default NavbarComponent;
