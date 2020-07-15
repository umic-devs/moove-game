import React from "react";
import { useHistory } from "react-router-dom";
import { bounceOut, bounceInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

import LandingButton from "../LandingButton";

import "./styles.css";

import logoMoove from "../../assets/images/logo-game.png";

const MooveGameApresentation = () => {
  const history = useHistory();

  const handleSubscribe = () => {
    window.location.href = "https://bit.ly/MooveGame";
  };

  const handleAccept = () => {
    history.push("/treinamento");
  };

  return (
    <div
      data-overlay=""
      className="image-background text-light o-hidden position-relative"
    >
      <section className="container-apresentation min-vh-70 o-hidden d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row justify-content-center text-center align-items-center">
            <div
              className="col-xl-8 col-lg-9 col-md-10 layer-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <StyleRoot>
                <img
                  className="moove-logo"
                  src={logoMoove}
                  alt="Moove Game"
                  style={{
                    animation: "x 1s",
                    animationName: Radium.keyframes(bounceInDown, "bounce"),
                  }}
                />
                <p
                  className="umic-name"
                  style={{
                    animation: "x 1.5s",
                    animationName: Radium.keyframes(bounceOut, "bounce"),
                  }}
                >
                  UMIC - BLITZ
                </p>
              </StyleRoot>
              <div className="mb-4">
                <div className="text-landing">
                  <p className="lead px-xl-5 under-logo">
                    Um jeito diferente de ser Blitz. Um jeito diferente de ser
                    Igreja de Cristo. Juntos somos mais fortes!
                  </p>
                </div>
              </div>
              <div className="row buttons-container">
                <LandingButton
                  handleFunction={handleSubscribe}
                  style={{ margin: "15px" }}
                  backgroundColor="#ea9200"
                  color="#ea9200"
                  shadowColor="#0098b0"
                  font="arcade-classic"
                  fontSize="25"
                  fontWeight="regular"
                  flex={false}
                >
                  Inscrever Igreja
                </LandingButton>
                <LandingButton
                  handleFunction={handleAccept}
                  style={{ margin: "15px" }}
                  backgroundColor="#ea9200"
                  font="arcade-classic"
                  color="#ea9200"
                  shadowColor="#0098b0"
                  fontSize="25"
                  fontWeight="regular"
                  flex={false}
                >
                  Participar
                </LandingButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MooveGameApresentation;
