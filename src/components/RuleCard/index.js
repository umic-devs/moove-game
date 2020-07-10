import React from  'react';

import './styles.css';

import { FiCheckSquare } from 'react-icons/fi';
import { BsPeopleFill } from 'react-icons/bs'
import { GiHealthNormal, GiPodium } from 'react-icons/gi';
import { FaCalendarCheck, FaMedal, FaStar, FaTrophy, FaGift, FaRegBookmark, FaTable, FaHashtag, FaHandshake } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { MdAddToPhotos } from 'react-icons/md';

const RuleCard  = ({ icon, title, text, delay }) => {
  const selectIcon = () => {
    switch (icon) {
      case "FiCheckSquare":
        return(
          <FiCheckSquare size={50} />
        );
    
      case "BsPeopleFill":
        return(
          <BsPeopleFill size={50} />
        );

      case "GiHealthNormal":
        return(
          <GiHealthNormal size={50} />
        );
    
      case "FaGift":
        return(
          <FaGift size={60} />
        );

      case "FaCalendarCheck":
        return(
          <FaCalendarCheck size={30} />
        );
    
      case "GiPodium":
        return(
          <GiPodium size={20} />
        );

      case "FaRegBookmark":
        return(
          <FaRegBookmark size={20} />
        );
    
      case "FaMedal":
        return(
          <FaMedal size={20} />
        );

      case "FaStar":
        return(
          <FaStar size={30} />
        );
    
      case "FaTrophy":
        return(
          <FaTrophy size={50} />
        );

      case "FaTable":
        return(
          <FaTable size={40} />
        );
    
      case "MdAddToPhotos":
        return(
          <MdAddToPhotos size={30} />
        );

      case "FaHashtag":
        return(
          <FaHashtag size={30} />
        );

      case "RiTeamLine":
        return(
          <RiTeamLine size={50} />
        );
    
      case "FaHandshake":
        return(
          <FaHandshake size={80} />
        );
    
      default:
        return;
    }
  }

  return(
    <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay={delay}>
      {selectIcon()}
      <div className="ml-3">
        <h5>{title}</h5>
        <div>
          {text}
        </div>
      </div>
    </div>
  );
};

export default RuleCard;
