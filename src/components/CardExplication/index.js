import React from 'react';

import './styles.css';

const CardExplication = ({ image, blitz, title, badge, badgeText, paragraphs }) => {
  let count = 0;

  const showNewLine = (text) => {
    if(count++ >= 1) {
      return(
        <div key={text}>
          <br/>
          <span>{text}</span>
        </div>
      )
    } else {
      return(
        <span key={text}>{text}</span>
      )
    }
  };
  
  return(
    <section className="pt-0 card-explanation-container">
      <div className="container">
        <div 
          className="row aos-init" 
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration='500'
        >
          <div className="col-md-6 card-content">
            <img 
              src={image} 
              alt="Moove Game" 
              className={
                blitz 
                ? "rounded shadow-3d hover-shadow-3d mb-3 mb-md-0 card-image-blitz" 
                : "rounded shadow-3d hover-shadow-3d mb-3 mb-md-0 card-image"
              } 
            />
          </div>
          <div className="col">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10">
                <h3 className="h2 card-title">
                  {title}
                  <span className={`badge badge-${badge} ml-2`}>
                    {badgeText}
                  </span>
                </h3>
                <p className="lead card-text">
                  {paragraphs.map(paragraph => {
                    return showNewLine(paragraph.text);
                  })}
                </p>
              </div>
            </div>    
          </div>
        </div>      
      </div>
    </section>
  );
};

export default CardExplication;
