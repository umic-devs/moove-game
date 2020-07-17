import React from "react";

import { ImageContainer, GameImage } from "./styles";

const CardMemory = ({ card, handleClick }) => {
  return (
    <div
      className="col-sm-6 col-lg-3 d-flex mb-3 aos-init icon"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="ml">
        <ImageContainer find={card.find}>
          <GameImage
            click={card.click || card.find}
            id={card.id}
            src={card.image}
            alt="Blitz"
            onClick={(e) => handleClick(e)}
          />
        </ImageContainer>
      </div>
    </div>
  );
};

export default CardMemory;
