import React from "react";
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';

import { FiCheckSquare } from 'react-icons/fi';
import { BsPeopleFill } from 'react-icons/bs'
import { GiHealthNormal, GiPodium } from 'react-icons/gi';
import { FaCalendarCheck, FaMedal, FaStar, FaTrophy, FaGift, FaRegBookmark, FaTable, FaHashtag, FaHandshake, FaInstagram, FaFacebook, FaYoutube, FaGithub } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { MdAddToPhotos } from 'react-icons/md';

import { bounceOut, bounceInDown } from 'react-animations';
import Radium ,{ StyleRoot } from 'radium';

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

  const handleIGTVOldMan = () => {
    window.location.href = 'https://www.instagram.com/tv/CCJZXPpJfTE/?utm_source=ig_web_copy_link';
  };

  const handleIGTVChildren = () => {
    window.location.href = 'https://www.instagram.com/umicbrasil/';
  };

  const handleIGTVWoman = () => {
    window.location.href = 'https://www.instagram.com/tv/CCMAZjfJ3vN/?utm_source=ig_web_copy_link';
  };

  return (
    <>
      <Header />
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
                      animation: 'x 1.5s',
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
          <section className="pt-0 text-light">
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
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="300">
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
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="200">
                  <FaCalendarCheck size={30} />
                  <div className="ml-3">
                    <h5>Data</h5>
                    <div>
                      As ações são válidas para pontuação desde o dia 01/07/2020 até as 20h do dia 31/07/2020;  
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="300">
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
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="200">
                  <FaMedal size={20} />
                  <div className="ml-3">
                    <h5>Pontuação</h5>
                    <div>
                      Os pontos serão contados por igreja participante; 
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="300">
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
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="200">
                  <FaTable size={40} />
                  <div className="ml-3">
                    <h5>Tabela de pontos</h5>
                    <div>
                      Cada ação tem uma pontuação específica, a tabela de pontuações será divulgada em post oficial; 
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="300">
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
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="200">
                  <RiTeamLine size={50} />
                  <div className="ml-3">
                    <h5>Pontuação da equipe</h5>
                    <div>
                      Cada ação da equipe será pontuada apenas uma vez, mesmo que mais de uma pessoa faça a postagem;
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay="300">
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
          <section>              
            <div className="container">
              <div className="row text-light mb-4">
                <div className="col">
                  <h3 className="h1" style={{ fontFamily: 'arcade-classic', color: '#00FF00' }}># Temas para pontuacoes</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="100">
                  <div data-aos="fade-page" className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>5 pontos/pedido</h5>
                      <span>Pedido em delivery de comerciante local - Fazer no máximo 15 pedidos, cada pedido vale 5 pontos.</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="200">
                  <div className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>30 pontos</h5>
                      <span>Vídeo famílias #FiqueEmCasa - Vídeos das famílias com placas escrito "Se puder, que em casa" e semelhantes.</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>50 pontos</h5>
                      <span>Aprendendo a sorrir com os olhos - Reinvente-se na pandemia. As máscaras têm escondido o sorriso de cada um , então, é necessário sorrir com os olhos, se adaptando a nova realidade.</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="100">
                  <div data-aos="fade-page" className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>50 pontos</h5>
                      <span>Toda pessoa faz falta pra alguém - Use máscaras, siga as recomendações de saúde. Se proteja e proteja seu próximo.</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="200">
                  <div className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>50 pontos</h5>
                      <span>Envelhecer com dignidade é direito de todos - Respeito aos direitos do idoso.</span>
                      <button className="btn-sm igtv-button" type="button" onClick={handleIGTVOldMan}>
                        <FaInstagram className="insta-icon" size={20} />
                        Ver no Instagram
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>50 pontos</h5>
                      <span>Direito de crescer - Dignidade da criança.</span>
                      <button className="btn-sm igtv-button" type="button" onClick={handleIGTVChildren}>
                        <FaInstagram className="insta-icon" size={20} />
                        Ver no Instagram
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="100">
                  <div data-aos="fade-page" className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>50 pontos</h5>
                      <span>Proteja o Rubi - Proteção a mulher.</span>
                      <button className="btn-sm igtv-button" type="button" onClick={handleIGTVWoman}>
                        <FaInstagram className="insta-icon" size={20} />  
                        Ver no Instagram
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="200">
                  <div className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>50 pontos</h5>
                      <span>Verdadeiro inimigo da Terra - Relacionado ao meio ambiente.</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>50 pontos</h5>
                      <span>Divulgue os empresários da Igreja - Divulgação dos empreendedores da sua Igreja.</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="100">
                  <div data-aos="fade-page" className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>80 pontos</h5>
                      <span>Paródia sobre o COVID-19 - Paródia musical sobre o Coronavírus.</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="200">
                  <div className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>100 pontos</h5>
                      <span>Música/dança/teatro de consolo/encorajamento - Alguma intervenção artística de apoio.</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
                    <div className="ml-3">
                      <h5 className="mb-0" style={{fontFamily: 'arcade-classic', color: '#00FF00' }}>150 pontos</h5>
                      <span>Jogo de interação familiar - A rede de Jovens criará um jogo e publicará o vídeo com uma família jogando para que as outras famílias da Igreja também possam jogar, cada uma em sua casa.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>          
        </div>
      </div>
      <footer className="pb-4 bg-primary-3 text-light moove-footer" id="footer">
        <div className="container" style={{ paddingTop: '10px' }}>
          <div className="row justify-content-center mb-2">
            <div className="col-auto">
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://www.instagram.com/umicbrasil/" className="nav-link">
                    <FaInstagram className="footer-icons" size={20} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.youtube.com/umicbrasil" className="nav-link">
                    <FaYoutube className="footer-icons" size={20} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.facebook.com/UMICBRASIL/" className="nav-link">
                    <FaFacebook className="footer-icons" size={20} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/umic-devs/moove-game" className="nav-link">
                    <FaGithub className="footer-icons" size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-md-auto text-center">
              <small className="text-muted">
                &copy; 2020 <a href="http://umic.com.br">UMIC</a> - União das Mocidades das Igrejas de Cristo - Moove Game
              </small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landing;
