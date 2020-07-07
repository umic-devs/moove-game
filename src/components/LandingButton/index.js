import React from 'react';

import './styles.css';

const LandingButton = ({ text, handleFunction, style }) => {
  return(
    <button
      onClick={handleFunction}
      type='button'
      className="button-landing"
      style={style && style}
    >
      <div className="button-content">
        {text} 
      </div>
    </ button>      
  );
};

export default LandingButton;
