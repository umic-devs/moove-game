import React from 'react';
import { useHistory } from 'react-router-dom';
import { bounceOut, bounceInDown } from 'react-animations';
import Radium ,{ StyleRoot } from 'radium';

import LandingButton from '../LandingButton';

import './styles.css';

import logoMoove from '../../assets/images/logoMoove.png';

const MooveGameApresentation = () => {
  const history = useHistory();

  const handleSubscribe = () => {
    window.location.href = 'https://bit.ly/MooveGame';
  };

  const handleAccept = () => {
    history.push('/');
  }

  return(
    <div
      data-overlay="" 
      className="image-background text-light o-hidden position-relative" 
    >
      <section className="container-apresentation min-vh-70 o-hidden d-flex flex-column justify-content-center">
        <div className="container container-all">
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
                  className="display-5 umic-name" 
                  style={{
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
              <LandingButton text="Inscrever Igreja" handleFunction={handleSubscribe} />
              <LandingButton text="Participar" handleFunction={handleAccept} style={{ marginLeft: '10px' }} />
            </div>
          </div>
        </div>
      </section>
      <div className="divider flip-x">
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100%" height="96px" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" className="injected-svg border-container" data-src="assets/img/dividers/divider-2.svg">
          <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z" fill="#70FBCA"></path>
        </svg>
      </div>
    </div>
  );
}

export default MooveGameApresentation;