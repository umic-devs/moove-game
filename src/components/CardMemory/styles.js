import styled, { css } from "styled-components";

export const ImageContainer = styled.button`
  border: 3px solid ${(props) => (props.find ? "#00FF00" : "#ff0080")};
  padding: 3px;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 0 0 8px ${(props) => (props.find ? "#00FF00" : "#ff0080")};
  transition: all 0.3s;
  background: none;

  &:hover {
    transform: translateY(10px);
  }

  &:focus {
    outline: none;
  }
`;

export const GameImage = styled.img`
  width: 100%;
  height: 213.34px;
  transition: all 0.7s;

  ${(props) =>
    !props.click &&
    css`
      opacity: 0;
      transform: rotateY(180deg) rotateX(180deg);
    `}
`;
