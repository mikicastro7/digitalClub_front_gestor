import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <div className="container">
      <Navbar.Brand className="nav-first" as={Link} to="/">Digital Clubs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Gestionar" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/noticias">Noticias</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/equipos">Equipos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/us">Usuarios</Nav.Link>
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
