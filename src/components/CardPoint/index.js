import React from 'react';

import LandingButton from '../LandingButton';

import './styles.css';

import { FaInstagram } from 'react-icons/fa';

const CardPoint = ({ point, text, delay, instagram, handle }) => {
  
  const handleIGTVOldMan = () => {
    window.location.href = 'https://www.instagram.com/tv/CCJZXPpJfTE/?utm_source=ig_web_copy_link';
  };

  const handleIGTVChildren = () => {
    window.location.href = 'https://www.instagram.com/umicbrasil/';
  };

  const handleIGTVWoman = () => {
    window.location.href = 'https://www.instagram.com/tv/CCMAZjfJ3vN/?utm_source=ig_web_copy_link';
  };

  const showInstagramButton = () => {
    if(instagram) {
      switch (handle) {
        case "handleIGTVOldMan":
          return(
            <LandingButton
              type="button"
              handleFunction={handleIGTVOldMan}
              backgroundColor="black"
              color="white"
              shadowColor="#EA9200"
              font="arcade-classic"
              fontSize={17}
              fontWeight='regular'
              flex='flex'
            >
              <FaInstagram className="insta-icon" size={20} />
              Ver no Instagram
            </LandingButton>
          );

        case "handleIGTVChildren":
          return(
            <LandingButton
              type="button"
              handleFunction={handleIGTVChildren}
              backgroundColor="black"
              color="white"
              shadowColor="#EA9200"
              font="arcade-classic"
              fontSize={17}
              fontWeight='regular'
              flex='flex'
            >
              <FaInstagram className="insta-icon" size={20} />
              Ver no Instagram
            </LandingButton>
          );

        case "handleIGTVWoman":
          return(
            <LandingButton
              type="button"
              handleFunction={handleIGTVWoman}
              backgroundColor="black"
              color="white"
              shadowColor="#EA9200"
              font="arcade-classic"
              fontSize={17}
              fontWeight='regular'
              flex='flex'
            >
              <FaInstagram className="insta-icon" size={20} />
              Ver no Instagram
            </LandingButton>
          );
      
        default:
          break;
      }
    }
  };

  return(
    <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay={delay}>
      <div data-aos="fade-page" className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
        <div className="ml-3">
          <h5 className="mb-0 title-style">{point}</h5>
          <span>{text}</span>
          {showInstagramButton()}
        </div>
      </div>
    </div>
  );
};

export default CardPoint;
