import React, { useState } from "react";
import Header from "../Header";
import { MemoryGameContainer, GameTitle } from "./styles";
import CardMemory from "../CardMemory";

import blitz2015 from "../../assets/MemoryGame/Blitz-2015.jpg";
import blitz2016Assuncion from "../../assets/MemoryGame/Blitz-2016-Assuncion.jpg";
import blitz2016Guanambi from "../../assets/MemoryGame/Blitz-2016-Guanambi.jpg";
import blitz2017Para from "../../assets/MemoryGame/Blitz-2017-Para.jpg";
import blitz2017RioNegrinho from "../../assets/MemoryGame/Blitz-2017-Rio.jpg";
import blitz2018PR from "../../assets/MemoryGame/Blitz-2018-PR.jpeg";
// import blitz2018SC from "../../assets/MemoryGame/Blitz-2018-SC.jpeg";
import blitz2018SP from "../../assets/MemoryGame/Blitz-2018-SP.jpeg";
import blitz2019 from "../../assets/MemoryGame/Blitz-2019.jpeg";

const MemoryGame = () => {
  const [clicks, setClicks] = useState(0);
  const [cards, setCards] = useState([
    {
      image: blitz2015,
      click: false,
      check: false,
      find: false,
      id: 0,
    },
    {
      image: blitz2016Assuncion,
      click: false,
      check: false,
      find: false,
      id: 1,
    },
    {
      image: blitz2016Guanambi,
      click: false,
      check: false,
      find: false,
      id: 2,
    },
    {
      image: blitz2015,
      click: false,
      check: false,
      find: false,
      id: 3,
    },
    {
      image: blitz2016Assuncion,
      click: false,
      check: false,
      find: false,
      id: 4,
    },
    {
      image: blitz2016Guanambi,
      click: false,
      check: false,
      find: false,
      id: 5,
    },
    //
    {
      image: blitz2017Para,
      click: false,
      check: false,
      find: false,
      id: 6,
    },
    {
      image: blitz2017RioNegrinho,
      click: false,
      check: false,
      find: false,
      id: 7,
    },
    {
      image: blitz2019,
      click: false,
      check: false,
      find: false,
      id: 8,
    },
    {
      image: blitz2017Para,
      click: false,
      check: false,
      find: false,
      id: 9,
    },
    {
      image: blitz2017RioNegrinho,
      click: false,
      check: false,
      find: false,
      id: 10,
    },
    {
      image: blitz2019,
      click: false,
      check: false,
      find: false,
      id: 11,
    },
  ]);

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
    const previousSelectedCard = cards.filter((card) => card.click === true);
    const selectedCard = cards.filter((card) => card.id === Number(id));

    if (previousSelectedCard[0].image === selectedCard[0].image) {
      console.log("Acertou");
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
      console.log("Errou");
      const newCards = cards.map((card) => {
        if (card.click) {
          card.click = false;
        }
        return card;
      });

      setCards(newCards);
    }

    setClicks(0);
    console.log(cards);
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

    // console.log(cards);
  };

  return (
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
        </section>
      </MemoryGameContainer>
    </>
  );
};

export default MemoryGame;
