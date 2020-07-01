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
import backgroundLogo from '../assets/images/logomg.png';

function Landing() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <Navbar 
        sticky="top"
        className="navbar-dark" 
        bg="dark"
        expand="lg"
      >
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

      <div
        data-overlay="" 
        className="image-background text-light o-hidden position-relative" 
        style={{ 
          paddingTop: '73px !important',
          backgroundImage: 'repeating-linear-gradient(to bottom right, #70FBCA 20%, #00FF00 70%, #70FBCA 40% )',
        }}
      >
        <section style={{ height: '550px' }} className="min-vh-70 o-hidden d-flex flex-column justify-content-center">
          <div className="container">
            <div className="row justify-content-center text-center align-items-center">
              <div className="col-xl-8 col-lg-9 col-md-10 layer-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                <h1 className="display-2" style={{ fontFamily: 'Inter', fontWeight: 'bold', color: 'black' }}>
                  Moove Game
                </h1>
                <h3 className="display-4" style={{ fontFamily: 'Inter', fontWeight: 'bold', color: 'black' }}>
                  UMIC/Blitz
                </h3>
                <div className="mb-4">
                  <p className="lead px-xl-5" style={{ fontFamily: 'sans-serif', color: 'black' }}>
                    Um jeito diferente de ser Blitz. Um jeito diferente de ser Igreja de Cristo. Juntos somos mais fortes!
                  </p>
                </div>
                {/* <div className="row-cols-2">
                  <section className="col-6"> */}
                    <Button 
                      href="https://bit.ly/MooveGame" 
                      className="btn btn-lg btn-white mx-1 col-4"
                      variant="outline-dark"
                      style={{ marginTop: '100px', padding: '15px' }}
                    >
                      Inscrever Igreja
                    </ Button>  
                  {/* </section> */}
                  {/* <section className="col-6"> */}
                    <Button 
                      href="https://themes.getbootstrap.com/product/leap-multipurpose-bootstrap-theme/"
                      className="btn btn-lg btn-white mx-1 col-4"
                      variant="outline-dark"
                      style={{ marginTop: '100px', padding: '15px' }}
                    >
                      Participar
                    </Button>
                  {/* </section>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <div className="divider flip-x">
          <svg style={{ height: "150px" }} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100%" height="96px" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" className="injected-svg" data-src="assets/img/dividers/divider-2.svg">
            <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z" fill="white"></path>
          </svg>
        </div>
      </div>
      <section className="text-center" id="demos" style={{ marginTop: '50px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <h2 className="h1">
                Vamos começar a jogar, o Moove Game é uma forma interativa de juntos buscarmos Unidade.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
