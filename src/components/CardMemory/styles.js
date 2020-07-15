import styled, { css } from 'styled-components';

export const ImageContainer = styled.div`
  border: 3px solid #ff0080;
  padding: 3px;
  border-radius: 5px;
  box-shadow: 0 0 8px #ff0080;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(10px);
  }
`;

export const ImageContainerToggle = styled.div`
  border: 3px solid #ff0080;
  padding: 3px;
  border-radius: 5px;
  box-shadow: 0 0 8px #ff0080;
`;

export const GameImage = styled.img`
  width: 100%;
  height: 213.34px;
  transition: all 0.7s;

  ${props => props.toggle && 
    css`
      opacity: 0;
      transform: rotateY(180deg) rotateX(180deg);
    `
  }
`;