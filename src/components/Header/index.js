import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./styles.css";

import logoGame from "../../assets/images/logo-game-wide.png";

const Header = ({ mode }) => {
  return (
    <Navbar className="navbar-dark" bg="dark" expand="lg">
      <div className="container">
        <Navbar.Brand href="/">
          <img
            src={logoGame}
            className="d-inline-block align-top header-container"
            alt="Moove Game Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/#regulamento">REGULAMENTO</Nav.Link>
            <Nav.Link href="/#acoes">AÇÕES E PONTOS</Nav.Link>
            <Nav.Link href="/treinamento">TREINAMENTO</Nav.Link>
            <Nav.Link href="/memory-game">JOGO DA MEMÓRIA</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
