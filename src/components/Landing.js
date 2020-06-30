import React from "react";
import { useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl
} from 'react-bootstrap';
import logo from '../assets/images/logo.png';

function Landing() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Navbar className="navbar-dark" bg="dark" expand="lg" >
      <section className="container -md">
        <img 
          src={logo} 
          height="50" 
          width="50" 
          className="d-inline-block align-top"
          alt="Moove Game"
          style={{ marginRight: '10px' }} 
        />
        <Navbar.Brand href="/">Moove Game</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-moove-game" />
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
          <Form style={{ marginTop: '5px' }}  inline>
            <div className="row row-cols-2">
              <section className="col-8">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </section>
              <section className="col-4" >
                <Button variant="outline-success">Search</Button>
              </section>
            </div>
          </Form>
        </Navbar.Collapse>
      </section>
    </Navbar>
  );
}

export default Landing;
