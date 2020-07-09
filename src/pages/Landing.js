import React from "react";

import Header from '../components/Header';
import MooveGameApresentation from '../components/MooveGameApresentation';
import Slogan from '../components/Slogan';
import RuleCard from "../components/RuleCard";

import mooveGameLogo from '../assets/images/logomg.png';
import blitzLogo from '../assets/images/blitz.png';
import CardExplication from "../components/CardExplication";
import CardPoint from "../components/CardPoint";

import { cardsExplications } from '../utils/cardsExplications';
import { cardsRules } from '../utils/cardsRules';
import { cardsPoints } from '../utils/cardsPoints';
import Footer from "../components/Footer";
import LandingButton from '../components/LandingButton';
import { FaInstagram } from "react-icons/fa";

function Landing() {
  const handleIGTV = () => {
    window.location.href = 'https://www.instagram.com/tv/CCbN6DsJgD9/?utm_source=ig_web_copy_link';
  };

  return (
    <>
      <Header />
      <MooveGameApresentation />
      <Slogan />
      <div className="body-container">
        <div className="landing-container">
          <div>
            {cardsExplications.map(cardExplication => {
              return(
                <CardExplication
                  key={cardExplication.title}
                  image={cardExplication.blitz ? blitzLogo : mooveGameLogo}
                  blitz={cardExplication.blitz}
                  title={cardExplication.title}
                  badge={cardExplication.badge}
                  badgeText={cardExplication.badgeText}
                  paragraphs={cardExplication.paragraphs}
                />
              );
            })}
          </div>
          <section className="pt-0 text-light">
            <div className="container" >
              <div className="row text-light mb-4 title-container">
                <div className="col">
                  <h3 className="h1 title-style">
                    # Regulamento
                  </h3>
                </div>
              </div>
              <div className="row">
                {cardsRules.map(cardRule => {
                  return(
                    <RuleCard
                      key={cardRule.text}
                      icon={cardRule.icon}
                      title={cardRule.title}
                      text={cardRule.text}
                      delay={cardRule.delay}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <section>              
            <div className="container">
              <div className="row text-light mb-4">
                <div className="col">
                  <h3 className="h1 title-style">
                    # Temas para pontuacoes
                  </h3>
                </div>
              </div>
              <div className="row">
                {cardsPoints.map(cardPoint => {
                  return(
                    <CardPoint
                      key={cardPoint.text}
                      point={cardPoint.point}
                      text={cardPoint.text}
                      delay={cardPoint.delay}
                    />
                  );
                })}
              </div>
            </div>
            <div className="button-container">
              <LandingButton
                handleFunction={handleIGTV}
                backgroundColor="black"
                color="white"
                shadowColor="#00FBCA"
                fontSize="20"
                font="arcade-classic"
                fontWeight="regular"
                flex
              >
                <FaInstagram className="insta-icon" size={40} />
                Ver no instagram
              </LandingButton>
            </div>
          </section>          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
