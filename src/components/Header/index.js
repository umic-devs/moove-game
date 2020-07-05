import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

import './styles.css';

import logoUmic from '../../assets/images/logoUmicAzulClaro.png';

const Header = () => {
  const history = useHistory();

  const handleAccept = () => {
    history.push('/');
  }

  return(
    <Navbar 
      sticky="top"
      className="navbar-dark"
      bg="dark"
      expand="lg"
    >
      <section className="container -md">
        <img 
          src={logoUmic} 
          height="50" 
          width="50" 
          className="d-inline-block align-top header-container"
          alt="Moove Game" 
        />
        <Navbar.Brand href="/">Moove Game</Navbar.Brand>
        <Navbar.Toggle aria-expanded="false" aria-controls="navbar-moove-game" />
        <Navbar.Collapse id="navbar-moove-game">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#devocional">Devocional</Nav.Link>
            <NavDropdown title="Levels" id="basic-nav-dropdown">
              <NavDropdown.Item href="#levels/1">Level 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#levels/2">Level 2</NavDropdown.Item>
              <NavDropdown.Divider  />
              <NavDropdown.Item href="#levels/3">Level 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="header-form" inline>
            <div className="row row-cols-2">
              <section className="col-4" >
                <Button onClick={handleAccept} variant="outline-success">Participar</Button>
              </section>
            </div>
          </Form>
        </Navbar.Collapse>
      </section>
    </Navbar>
  );
};

export default Header;