import styled from "styled-components";

export const ButtonStyled = styled.button`
  /* background-color: ${(props) => `${props.backgroundColor}`}; */
  background-color: ${(props) =>
    props.flex ? `${props.backgroundColor}` : "transparent"};
  transition: box-shadow 0.2s;
  outline-style: none;
  outline: none;
  margin-top: 30px;
  padding: 6px;
  /* border-radius: 10px; */
  border: 0px solid gray;
  display: ${(props) => props.flex && `${props.flex}`};

  &:hover {
    box-shadow: 0 0 20px ${(props) => `${props.shadowColor}`};
    outline: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 40px ${(props) => `${props.shadowColor}`};
  }

  div {
    font-family: ${(props) => props.font && `${props.font}`};
    color: ${(props) => `${props.color}`};
    font-weight: ${(props) => `${props.fontWeight}`};
    font-size: ${(props) => `${props.fontSize}px`};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
