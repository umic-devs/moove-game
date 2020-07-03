import React from "react";
import { useHistory } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button
} from 'react-bootstrap';

import { FiCheckSquare } from 'react-icons/fi';
import { BsPeopleFill } from 'react-icons/bs'
import { GiHealthNormal, GiPodium } from 'react-icons/gi';
import { FaCalendarCheck, FaMedal, FaStar, FaTrophy, FaGift, FaRegBookmark, FaTable, FaHashtag, FaHandshake } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { MdAddToPhotos } from 'react-icons/md';

import { bounceOut, bounceInDown } from 'react-animations';
import Radium ,{ StyleRoot } from 'radium';

import logoUmic from '../assets/images/logoUmicAzulClaro.png';
import mooveGameLogo from '../assets/images/logomg.png';
import blitzLogo from '../assets/images/blitz.png';
import logoMoove from '../assets/images/logoMoove.png';

function Landing() {
  const history = useHistory();

  const handleSubscribe = () => {
    window.location.href = 'https://bit.ly/MooveGame';
  };

  const handleAccept = () => {
    history.push('/');
  }

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
            src={logoUmic} 
            height="50" 
            width="50" 
            className="d-inline-block align-top"
            alt="Moove Game"
            style={{ marginRight: '10px'}} 
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
                <section className="col-4" >
                  <Button onClick={handleAccept} variant="outline-success">Participar</Button>
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
          // paddingTop: '73px !important',
          backgroundImage: 'repeating-linear-gradient(to bottom right, black 20%, #1C1C1C 70%)',
          backgroundColor: 'black'
        }}
      >
        <section style={{ height: '600px' }} className="min-vh-70 o-hidden d-flex flex-column justify-content-center">
          <div className="container" style={{ marginTop: '40px' }}>
            <div className="row justify-content-center text-center align-items-center">
              <div className="col-xl-8 col-lg-9 col-md-10 layer-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                <StyleRoot>
                  <img 
                    className="moove-logo"
                    src={logoMoove} 
                    alt="Moove Game"
                    style={{
                      animation: 'x 1s',
                      animationName: Radium.keyframes(bounceInDown, 'bounce')
                    }}
                  />
                  <h3
                    className="display-5" 
                    style={{ 
                      fontFamily: 'arcade-classic', 
                      fontWeight: 'regular', 
                      // color: 'black',
                      color: '#70FBCA',
                      animation: 'x 2s',
                      animationName: Radium.keyframes(bounceOut, 'bounce')
                    }}
                  >
                    UMIC - Blitz
                  </h3>
                </StyleRoot> 
                <div className="mb-4">
                  <div className="text-landing">
                    <p className="lead px-xl-5 under-logo">
                      Um jeito diferente de ser Blitz. Um jeito diferente de ser Igreja de Cristo. Juntos somos mais fortes!
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleSubscribe}
                  type='button'
                  className="button-landing"
                >
                  <div className="button-content">
                    Inscrever Igreja 
                  </div>
                </ button>  
                <button
                  onClick={handleAccept}
                  className="button-landing"
                  type='button'
                  style={{ marginLeft: '10px' }}
                >
                  <div className="button-content">
                    Participar
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="divider flip-x">
          <svg style={{ height: "100px" }} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100%" height="96px" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" className="injected-svg" data-src="assets/img/dividers/divider-2.svg">
            <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z" fill="#70FBCA"></path>
          </svg>
        </div>
      </div>
      <section className="text-center" id="demos" style={{ padding: '50px', backgroundImage: 'repeating-linear-gradient(#70FBCA, black)' }}>
        <div 
          className="container aos-init"
          data-aos="zoom-in"
          data-aos-delay='200'
          data-aos-offset='200'
        >
          <div className="row justify-content-center slogan-moove">
            <div className="col-xl-9">
              <h2 className="h1" style={{ fontSize: '30px' }}>
                Vamos começar a jogar! <br/> O Moove Game é uma forma interativa de <br/> juntos buscarmos Unidade.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div style={{ backgroundColor: 'black' }}>
        <div className="landing-container">
          <section className="pt-0" style={{ marginTop: '60px' }}>
            <div className="container">
              <div 
                className="row aos-init" 
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration='500'
              >
                <div
                  className="col-md-6" 
                  style={{
                    height: '330px',
                    border: '2px solid #FF0080',
                    boxShadow: '0 0 10px #FF0080',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 10px 0 10px'
                  }}    
                >
                  <img 
                    src={mooveGameLogo} 
                    alt="Moove Game" 
                    className="rounded shadow-3d hover-shadow-3d mb-3 mb-md-0" 
                    style={{ 
                      width: '100%',
                      height: '90%',
                      backgroundColor: 'black',
                    }}
                  />
                </div>
                <div className="col">
                  <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
                      <h3 className="h2" style={{ color: 'white' }}>
                        Moove Game
                        <span className="badge badge-success ml-2">
                          New
                        </span>
                      </h3>
                      <p className="lead" style={{ color: '#D3D3D3' }}>
                        Achou que esse ano não teria Blitz? Achou errado!
                        <br/>
                        <br/>
                        O Moove Game foi o meio que a UMIC encontrou para adaptar a 
                        <span> <span className="blitz-style" style={{ color: '#00FF00' }}>BLITZ</span></span>
                        <span> </span> em tempos de COVID-19.
                        <br/>
                        <br/>
                        Vamos juntos nessa!
                      </p>
                    </div>
                  </div>    
                </div>
              </div>      
            </div>
          </section>
          <section className="pt-0" style={{ marginTop: '60px' }}>
            <div className="container" >
              <div 
                className="row aos-init" 
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration='500'
              >
                <div 
                  className="col-md-6" 
                  style={{ 
                    height: '330px',
                    border: '2px solid #FF0080',
                    boxShadow: '0 0 10px #FF0080',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 10px 0 10px'
                  }}
                >
                  <img 
                    src={blitzLogo} 
                    alt="Moove Game" 
                    className="rounded shadow-3d hover-shadow-3d mb-3 mb-md-0" 
                    style={{ 
                      width: '100%',
                      backgroundColor: 'black',
                    }}
                  />
                </div>
                <div className="col">
                  <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
                      <h3 className="h2" style={{ color: 'white' }}>
                        BLITZ
                        <span className="badge badge-danger ml-2">
                          Block
                        </span>
                      </h3>
                      <p className="lead" style={{ color: '#D3D3D3' }}>
                        A  <span> <span className="blitz-style" style={{ color: '#00FF00' }}>BLITZ</span></span>
                        <span> </span> tem o intuito de abençoar as cidades nas quais
                        as caravanas vão e o Moove Game é uma forma de dar 
                        continuidade a essa ideia, mas na sua própria comunidade.
                        <br/>
                        <br/>
                        Temos três focos principais: As Igrejas de Cristo, 
                        O jovem vocacionado e o Reino de Deus
                      </p>
                    </div>
                  </div>    
                </div>
              </div>      
            </div>
          </section>
          <section className="pt-0 text-light" >
            <div className="container" >


              <div className="row text-light mb-4" style={{ marginTop: '60px' }}>
                <div className="col">
                  <h3 className="h1" style={{ fontFamily: 'arcade-classic', color: '#00FF00' }}>
                    # Regulamento
                  </h3>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FiCheckSquare size={50} />
                  <div className="ml-3">
                    <h5>Objetivo</h5>
                    <div>
                      O objetivo principal da ação é abençoar as comunidades nas quais as Igrejas de Cristo estão inseridas;
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="200">
                  <BsPeopleFill size={50} />
                  <div className="ml-3">
                    <h5>Interação</h5>
                    <div>
                      A pontuação e premiação tem caráter exclusivo de gerar interação e entretenimento entre as igrejas participantes;
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="200">
                  <GiHealthNormal size={50} />
                  <div className="ml-3">
                    <h5>Cuidados</h5>
                    <div>
                      As ações deverão seguir as regras sanitárias estabelecidas em cada comunidade (por exemplo, sempre usando máscaras);
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FaGift size={60} />
                  <div className="ml-3">
                    <h5>Prêmiação</h5>
                    <div>
                      Os prêmios serão retirados em Brasília e Goiânia. Apenas serão enviados via correios em caso do ganhador estiver fora do DF e GO; 
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FaCalendarCheck size={30} />
                  <div className="ml-3">
                    <h5>Data</h5>
                    <div>
                      As ações são válidas para pontuação desde o dia 01/07/2020 até as 20h do dia 31/07/2020;  
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <GiPodium size={20} />
                  <div className="ml-3">
                    <h5>Rank</h5>
                    <div>
                      O ranking será divulgado toda sexta-feira; 
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FaRegBookmark size={20} />
                  <div className="ml-3">
                    <h5>Resultado</h5>
                    <div>
                      O resultado final será divulgado as 19h do dia 01/08/2020;
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FaMedal size={20} />
                  <div className="ml-3">
                    <h5>Pontuação</h5>
                    <div>
                      Os pontos serão contados por igreja participante; 
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FaStar size={30} />
                  <div className="ml-3">
                    <h5>Líder</h5>
                    <div>
                      Cada igreja deverá apresentar um integrante da equipe como líder; 
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FaTrophy size={50} />
                  <div className="ml-3">
                    <h5>Entrega dos prêmios</h5>
                    <div>
                      Os prêmios serão entregues para os líderes e este definirá o critério de entrega aos participantes da sua equipe; 
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FaTable size={40} />
                  <div className="ml-3">
                    <h5>Tabela de pontos</h5>
                    <div>
                      Cada ação tem uma pontuação específica, a tabela de pontuações será divulgada em post oficial; 
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <MdAddToPhotos size={30} />
                  <div className="ml-3">
                    <h5>Ações</h5>
                    <div>
                      Apenas serão pontuadas as ações pré estabelecidas;
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FaHashtag size={30} />
                  <div className="ml-3">
                    <h5>Postagens</h5>
                    <div>
                      As ações devem ser postadas no Instagram com a hashtag #BlitzMoove;
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <RiTeamLine size={50} />
                  <div className="ml-3">
                    <h5>Pontuação da equipe</h5>
                    <div>
                      Cada ação da equipe será pontuada apenas uma vez, mesmo que mais de uma pessoa faça a postagem;
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="100">
                  <FaHandshake size={80} />
                  <div className="ml-3">
                    <h5>Compromisso</h5>
                    <div>
                      Contamos com a integridade de todos os participantes no sentido de não violarem este regulamento e se atenham a finalidade desta ação disposta no Objetivo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      <section>              
        <div className="container">
          <div className="row text-light mb-4">
            <div className="col">
              <h3 className="h1">Premium Plugins</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="100">
              <a href="elements-flickity.html" data-aos="fade-page" className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="injected-svg icon icon-lg
                  bg-primary-2" data-src="assets/img/icons/theme/layout/layout-3d.svg">
                  <title>Icon For Layout-3d</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
                    <path d="M1.5,5 L4.5,5 C5.32842712,5 6,5.67157288 6,6.5 L6,17.5 C6,18.3284271 5.32842712,19 4.5,19 L1.5,19 C0.671572875,19 1.01453063e-16,18.3284271 0,17.5 L0,6.5 C-1.01453063e-16,5.67157288 0.671572875,5 1.5,5 Z M18.5,5 L22.5,5 C23.3284271,5 24,5.67157288 24,6.5 L24,17.5 C24,18.3284271 23.3284271,19 22.5,19 L18.5,19 C17.6715729,19 17,18.3284271 17,17.5 L17,6.5 C17,5.67157288 17.6715729,5 18.5,5 Z" fill="#000000"></path>
                    <rect fill="#000000" opacity="0.3" x="8" y="5" width="7" height="14" rx="1.5"></rect>
                  </g>
                </svg>
                <div className="ml-3">
                  <h5 className="mb-0">Flickity</h5>
                  <span>Responsive Content Slider</span>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="200">
              <a href="elements-fancybox.html" className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="injected-svg icon icon-lg
                  bg-primary-2" data-src="assets/img/icons/theme/general/expand-arrows.svg">
                  <title>Icon For Expand-arrows</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <polygon opacity="0" points="0 0 24 0 24 24 0 24"></polygon>
                    <path d="M10.5857864,12 L5.46446609,6.87867966 C5.0739418,6.48815536 5.0739418,5.85499039 5.46446609,5.46446609 C5.85499039,5.0739418 6.48815536,5.0739418 6.87867966,5.46446609 L12,10.5857864 L18.1923882,4.39339828 C18.5829124,4.00287399 19.2160774,4.00287399 19.6066017,4.39339828 C19.997126,4.78392257 19.997126,5.41708755 19.6066017,5.80761184 L13.4142136,12 L19.6066017,18.1923882 C19.997126,18.5829124 19.997126,19.2160774 19.6066017,19.6066017 C19.2160774,19.997126 18.5829124,19.997126 18.1923882,19.6066017 L12,13.4142136 L6.87867966,18.5355339 C6.48815536,18.9260582 5.85499039,18.9260582 5.46446609,18.5355339 C5.0739418,18.1450096 5.0739418,17.5118446 5.46446609,17.1213203 L10.5857864,12 Z" fill="#000000" opacity="0.3" transform="translate(12.535534, 12.000000) rotate(-360.000000) translate(-12.535534, -12.000000) "></path>
                    <path d="M6,18 L9,18 C9.66666667,18.1143819 10,18.4477153 10,19 C10,19.5522847 9.66666667,19.8856181 9,20 L4,20 L4,15 C4,14.3333333 4.33333333,14 5,14 C5.66666667,14 6,14.3333333 6,15 L6,18 Z M18,18 L18,15 C18.1143819,14.3333333 18.4477153,14 19,14 C19.5522847,14 19.8856181,14.3333333 20,15 L20,20 L15,20 C14.3333333,20 14,19.6666667 14,19 C14,18.3333333 14.3333333,18 15,18 L18,18 Z M18,6 L15,6 C14.3333333,5.88561808 14,5.55228475 14,5 C14,4.44771525 14.3333333,4.11438192 15,4 L20,4 L20,9 C20,9.66666667 19.6666667,10 19,10 C18.3333333,10 18,9.66666667 18,9 L18,6 Z M6,6 L6,9 C5.88561808,9.66666667 5.55228475,10 5,10 C4.44771525,10 4.11438192,9.66666667 4,9 L4,4 L9,4 C9.66666667,4 10,4.33333333 10,5 C10,5.66666667 9.66666667,6 9,6 L6,6 Z" fill="#000000" fill-rule="nonzero"></path>
                  </g>
                </svg>
                <div className="ml-3">
                  <h5 className="mb-0">Fancybox</h5>
                  <span>Responsive, Fullscreen Gallery</span>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
              <a href="elements-isotope.html" className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="injected-svg icon icon-lg
                  bg-primary-2" data-src="assets/img/icons/theme/layout/layout-arrange.svg">
                  <title>Icon For Layout-arrange</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect opacity="0" x="0" y="0" width="24" height="24"></rect>
                    <path d="M5.5,4 L9.5,4 C10.3284271,4 11,4.67157288 11,5.5 L11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L5.5,8 C4.67157288,8 4,7.32842712 4,6.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M14.5,16 L18.5,16 C19.3284271,16 20,16.6715729 20,17.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,17.5 C13,16.6715729 13.6715729,16 14.5,16 Z" fill="#000000"></path>
                    <path d="M5.5,10 L9.5,10 C10.3284271,10 11,10.6715729 11,11.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,12.5 C20,13.3284271 19.3284271,14 18.5,14 L14.5,14 C13.6715729,14 13,13.3284271 13,12.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z" fill="#000000" opacity="0.3"></path>
                  </g>
                </svg>
                <div className="ml-3">
                  <h5 className="mb-0">Isotope</h5>
                  <span>Fitted masonry layouts</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>





















      </div>
      <footer className="pb-4 bg-primary-3 text-light moove-footer" id="footer">
        <div className="container">
          <div className="row justify-content-center mb-2">
            <div className="col-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a href="/" className="nav-link">

                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">

                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">

                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">

                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">

                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-md-auto text-center">
              <small className="text-muted">
                &copy; 2019 This page is protected by reCAPTCHA and is subject to the Google <a href="https://www.google.com/policies/privacy/">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service.</a>
              </small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landing;
