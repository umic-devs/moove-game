import React from 'react';
import Header from '../Header';
import { MemoryGameContainer, GameTitle } from './styles';
import CardMemory from '../CardMemory';

import blitz2015 from '../../assets/MemoryGame/Blitz-2015.jpg';
import blitz2016Assuncion from '../../assets/MemoryGame/Blitz-2016-Assuncion.jpg';
import blitz2016Guanambi from '../../assets/MemoryGame/Blitz-2016-Guanambi.jpg';
import blitz2017Para from '../../assets/MemoryGame/Blitz-2017-Para.jpg';
import blitz2017RioNegrinho from '../../assets/MemoryGame/Blitz-2017-Rio.jpg';
import blitz2018PR from '../../assets/MemoryGame/Blitz-2018-PR.jpeg';

const MemoryGame = () => {
  const images = [blitz2015, blitz2016Assuncion, blitz2016Guanambi,
    blitz2017Para, blitz2017RioNegrinho, blitz2018PR
  ];

  return(
    <>
      <Header />
      <MemoryGameContainer>
        <section className="pt-0 text-light" id="regulamento">
          <div className="container">
            <div className="row text-light mb-4">
              <div className="col">
                <GameTitle className="h1"># Memory Game</GameTitle>
              </div>
            </div>
            <div className="row">
              {images.map(image => {
                return(
                  <CardMemory key={image} image={image} />
                );
              })}
            </div>
          </div>
        </section>
      </MemoryGameContainer>
      </>
  );
};

export default MemoryGame;
