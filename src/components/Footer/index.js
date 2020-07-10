import React from 'react';

import './styles.css';
import { FaInstagram, FaYoutube, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return(
    <footer className="pb-4 bg-primary-3 text-light footer-container">
      <div className="container footer-content">
        <div className="row justify-content-center mb-2">
          <div className="col-auto">
            <ul className="nav">
              <li className="nav-item">
                <a href="https://www.instagram.com/umicbrasil/" className="nav-link">
                  <FaInstagram className="footer-icons" size={25} />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.youtube.com/umicbrasil" className="nav-link">
                  <FaYoutube className="footer-icons" size={25} />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.facebook.com/UMICBRASIL/" className="nav-link">
                  <FaFacebook className="footer-icons" size={25} />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/umic-devs/moove-game" className="nav-link">
                  <FaGithub className="footer-icons" size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-auto text-center">
            <p className="text-muted">
              &copy; 2020 <a href="http://umic.com.br">UMIC</a> - União das Mocidades das Igrejas de Cristo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
