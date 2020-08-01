import React, { useState, useEffect } from "react";
import Header from "../Header";
import { MemoryGameContainer, GameTitle, TitleContainer, ButtonContainer } from "./styles";
import CardMemory from "../CardMemory";
import LandingButton from '../LandingButton';
import Footer from '../Footer';

import { memoryObjects } from './MemoryGameObject/memoryObjects';

const MemoryGame = () => {
  const [clicks, setClicks] = useState(0);
  const [cards, setCards] = useState(memoryObjects);
  const [shuffle, setShuffle] = useState(true); 

  const handleToggleCard = (id) => {
    const selectedCard = cards.filter((card) => card.id === Number(id));

    const cardClicked = {
      image: selectedCard[0].image,
      click: !selectedCard[0].click,
      check: selectedCard[0].check,
      find: selectedCard[0].find,
      id: selectedCard[0].id,
    };

    const newCards = [];

    for (let index = 0; index < cards.length; index++) {
      if (cards[index].id === Number(id)) {
        newCards.push(cardClicked);
        continue;
      }
      newCards.push(cards[index]);
    }

    setCards(newCards);
  };

  const checkTry = (id) => {
    const previousSelectedCard = cards.filter((card) => card.click === true && card.find === false);
    const selectedCard = cards.filter((card) => card.id === Number(id));

    if (previousSelectedCard[0].image === selectedCard[0].image && previousSelectedCard[0].id !== selectedCard[0].id) {
      const newCards = cards.map((card) => {
        if (card.id === selectedCard[0].id) {
          selectedCard[0].find = true;
          selectedCard[0].click = true;
          return selectedCard[0];
        } else if (card.id === previousSelectedCard[0].id) {
          previousSelectedCard[0].find = true;
          return previousSelectedCard[0];
        }

        return card;
      });
      setCards(newCards);
    } else {
      const newCards = cards.map((card) => {
        if (card.click) {
          card.click = false;
        }
        return card;
      });

      setCards(newCards);
    }

    setClicks(0);
  };

  const handleClick = (e) => {
    const { id } = e.target;

    const findCards = cards.filter((card) => card.id === Number(id));

    if (!findCards[0].find) {
      if (clicks <= 1) {
        handleToggleCard(id);
        setClicks(clicks + 1);
      }
      if (clicks === 1) {
        setTimeout(() => checkTry(Number(id)), 2000);
      }
    }
  };

  const handleResetGame = () => {
    const newCards = cards.map(card => {
      card.click = false;
      card.find = false;

      return card;
    });
    setCards(newCards);
    setShuffle(true);
    setClicks(0);
  };

  const shuffleCards = () => {
    let shuffleCards = [], indices = [];

    while(shuffleCards.length < cards.length) {
      let index = randint(0, cards.length - 1);

      if(!indices.includes(index)) {
        shuffleCards.push(cards[index]);
        indices.push(index);
      }
    }

    setCards(shuffleCards);
    setShuffle(false);
  };

  function randint(a, b) {
    return (Math.random() * (b + 1 - a) + a) | 0;
  }

  useEffect(() => {
    if(shuffle) {
      shuffleCards();
    }
  }, [shuffle]); // eslint-disable-line

  return (
    <>
      <Header />
      <MemoryGameContainer>
        <section className="pt-0 text-light">
          <div className="container">
            <div className="row text-light mb-4">
              <TitleContainer className='ml' >
                <GameTitle className="h1"># Memory Game</GameTitle>
              </TitleContainer>
            </div>
            <div className="row">
              {cards.map((card) => {
                return (
                  <CardMemory
                    key={card.id}
                    card={card}
                    handleClick={handleClick}
                  />
                );
              })}
            </div>
          </div>
          <ButtonContainer>
            <LandingButton
              handleFunction={handleResetGame}
              backgroundColor="black"
              color="white"
              shadowColor="#00FBCA"
              fontSize="20"
              font="arcade-classic"
              fontWeight="regular"
              style={{  
                marginTop: '10px',
              }}
            >
              Recomeçar
            </LandingButton>
          </ButtonContainer>
        </section>
      </MemoryGameContainer>
      <Footer />
    </>
  );
};

export default MemoryGame;
