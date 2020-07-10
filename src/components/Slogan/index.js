import React from 'react';

import './styles.css';

const Slogan = () => {
  return(
    <section className="text-center slogan-container">
      <div 
        className="container aos-init"
        data-aos="zoom-in"
        data-aos-delay='200'
        data-aos-offset='200'
      >
        <div className="row justify-content-center slogan-moove">
          <div className="col-xl-9">
            <h2 className="h1 slogan-text">
              Vamos começar a jogar! <br/> O Moove Game é uma forma interativa de <br/> juntos buscarmos Unidade.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slogan;
