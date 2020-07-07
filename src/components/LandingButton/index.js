import React from "react";

import { ButtonStyled } from "./styles";

import "./styles.scss";

const LandingButton = ({
  handleFunction,
  backgroundColor,
  color,
  shadowColor,
  fontSize,
  style,
  children,
  font,
  fontWeight,
  flex,
}) => {
  return (
    <ButtonStyled
      className={flex ? "button-insta" : "button-moove"}
      backgroundColor={backgroundColor}
      color={color}
      shadowColor={shadowColor}
      fontSize={fontSize}
      onClick={handleFunction}
      type="button"
      font={font}
      style={style && style}
      fontWeight={fontWeight}
      flex={flex}
    >
      <div>{children}</div>
    </ButtonStyled>
  );
};

export default LandingButton;
