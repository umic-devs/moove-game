import React from 'react';
import './styles.css';

const CardPoint = ({ point, text, delay }) => {
  return(
    <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init" data-aos="fade-up" data-aos-delay={delay}>
      <div data-aos="fade-page" className="card card-sm card-body flex-row align-items-center fade-page hover-shadow-3d card-actions">
        <div className="ml-3">
          <h5 className="mb-0 title-style" style={{ fontSize: '25px' }} >{point}</h5>
          <span style={{ fontSize: '18px', fontFamily: 'Inter' }}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CardPoint;
