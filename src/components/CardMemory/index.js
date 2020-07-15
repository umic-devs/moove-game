import React, { useState } from 'react';

import { ImageContainer, GameImage } from './styles';

const CardMemory = ({ image }) => {
  const [toggle, setToggle] = useState(false);
  const [translate, setTranslate] = useState(false);

  const handleClick = () => {
    console.log('clicou', image);
    setToggle(!toggle);
    setTranslate(!translate);
  };

  return(
    <div className="col-sm-6 col-lg-4 d-flex mb-4 aos-init icon" data-aos="fade-up" data-aos-delay='100'>
      <div className="ml-3">
        <ImageContainer>
          <GameImage
            src={image} 
            alt="Blitz - 2015"
            onClick={handleClick}
            toggle={toggle}
          />
        </ImageContainer>
      </div>
    </div>
  );
};

export default CardMemory;
