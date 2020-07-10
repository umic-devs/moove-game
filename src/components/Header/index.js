import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./styles.css";

import logoUmic from "../../assets/images/logoUmicAzulClaro.png";

const Header = ({ mode }) => {
  return (
    <Navbar className="navbar-dark" bg="dark" expand="lg">
      <div className="container">
        <Navbar.Brand href="/">
          <img
            src={logoUmic}
            height="50"
            width="50"
            className="d-inline-block align-top header-container"
            alt="Moove Game"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#regulamento">REGULAMENTO</Nav.Link>
            <Nav.Link href="#acoes">AÇÕES E PONTOS</Nav.Link>
            <Nav.Link href="/treinamento">TREINAMENTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
