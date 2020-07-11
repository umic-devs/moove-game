import React, { useEffect, useContext, useState, useCallback } from "react";
import { Accordion, Card } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";
import { AuthContext } from "../services/Auth";
import app from "../services/firebase";

const watchDataClear = {
  trainingStatus: {
    L01I01: false,
    L01I02: false,
  },
};

const Training = () => {
  const { currentUser } = useContext(AuthContext);
  const [watchData, setWatchData] = useState(watchDataClear);
  console.log(watchData)

  useEffect(() => {
    app
      .firestore()
      .collection("users")
      .doc(currentUser.email)
      .onSnapshot(
        (doc) => {
          !!doc.data().trainingStatus
          ? setWatchData(doc.data().trainingStatus)
          : setWatchData(watchDataClear)
        },
        (error) => console.log(error)
      );
  }, [currentUser.email]);

  const setWatchedItem = useCallback(
    (id) => {
      if (watchData[id] !== true) {
        app
          .firestore()
          .collection("users")
          .doc(currentUser.email)
          .set(
            {
              trainingStatus: {
                [id]: true,
              },
            },
            { merge: true }
          )
          .then(() => {
            console.log("Video marcado");
          })
          .catch((error) => console.log(error));
      }
    },
    [currentUser.email, watchData]
  );

  const itemStatus = (id) => {
    if (watchData[id] === true) return "watched-item";
  };

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Moove Training</h1>
            <p>
              Olá, {currentUser?.displayName}! Bem vindo ao Moove Game Training!
              <br />
              Escolha um Level e veja os vídeos para alcançar novos níveis
              maiores de intimidade com Deus.
            </p>
            <Accordion>
              <div className="my-4">
                <h2>LEVEL 1: God and Me</h2>
              </div>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L01I01"
                  )}`}
                >
                  01. Portas Fechadas
                  {watchData["L01I01"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="card-training d-flex justify-content-center">
                    <ReactPlayer
                      url="https://youtu.be/E3zoLouykyc&origin=http://game.umic.com.br"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L01I01")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="1"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L01I02"
                  )}`}
                >
                  02. Conectados com Deus
                  {watchData["L01I02"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="card-training d-flex justify-content-center">
                    <ReactPlayer
                      url="https://youtu.be/oQK93-in3rI&origin=http://game.umic.com.br"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L01I02")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L01I03"
                  )}`}
                >
                  03. Live com Missionária Ariadna
                  {watchData["L01I03"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Disponível em breve!</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="3"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L01I04"
                  )}`}
                >
                  04. # FICA A DICA
                  {watchData["L01I04"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Disponível em breve!</Card.Body>
                </Accordion.Collapse>
              </Card>
              <div className="my-4">
                <h2>Level 2</h2>
              </div>
              <p>Disponível em breve!</p>
            </Accordion>
          </div>
        </div>

        <div className="row">
          <div className="col mt-4 text-center">
            <p onClick={() => app.auth().signOut()}>SAIR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
