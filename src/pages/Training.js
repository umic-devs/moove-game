import React, { useEffect, useContext, useState, useCallback } from "react";
import { Accordion, Card } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";
import { AuthContext } from "../services/Auth";
import app from "../services/firebase";
import Header from '../components/Header';

const watchDataClear = {
  trainingStatus: {
    L01I01: false,
    L01I02: false,
    L01I03: false,
    L02I01: false,
    L02I02: false,
    L02I03: false,
    L03I01: false,
    L03I02: false,
    L03I03: false,
  },
};

const Training = () => {
  const { currentUser } = useContext(AuthContext);
  const [watchData, setWatchData] = useState(watchDataClear);

  useEffect(() => {
    app
      .firestore()
      .collection("users")
      .doc(currentUser.email)
      .onSnapshot(
        (doc) => {
          !!doc.data().trainingStatus
            ? setWatchData(doc.data().trainingStatus)
            : setWatchData(watchDataClear);
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
          );
      }
    },
    [currentUser.email, watchData]
  );

  const itemStatus = (id) => {
    if (watchData[id] === true) return "watched-item";
  };

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="training">
                <h1>Moove Training</h1>
                <section className="welcome">
                  <p>
                    Olá, {currentUser?.displayName}! Bem vindo ao Moove Game Training!
                    <br />
                    Escolha um Level e veja os vídeos para alcançar novos níveis
                    maiores de intimidade com Deus.
                  </p>
                </section>
              </div>
            <Accordion>
              <div className="my-4">
                <h2>LEVEL 1: NIVELAMENTO</h2>
              </div>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L01I01"
                  )}`}
                >
                  01. PORTAS FECHADAS - MAYARA BRITO
                  {watchData["L01I01"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/vbb2n2ZV6gA"
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
                  02. CONECTADOS COM DEUS - MEL
                  {watchData["L01I02"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/oQK93-in3rI"
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
                  03. RELACIONAMENTO ANTES DO SERVIÇO - MISSIONÁRIA ARIADNA
                  {watchData["L01I03"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/c8oir0bLKIA"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L01I03")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <div className="my-4">
                <h2>LEVEL 2: VOCAÇÃO E CHAMADO</h2>
              </div>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="3"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L02I01"
                  )}`}
                >
                  01. PRA ONDE EU IREI? - ANA PAULA
                  {watchData["L02I01"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/AHxmBnoqXBA"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L02I01")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="4"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L02I02"
                  )}`}
                >
                  02. A IMPORTÂNCIA DO PREPARO - JEAN MARIE
                  {watchData["L02I02"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/deqj92Fl2D4"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L02I02")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="5"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L02I03"
                  )}`}
                >
                  03. VOCAÇÃO E CHAMADO - MISSIONÁRIO GLAUBER
                  {watchData["L02I03"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/59E69MypEBk"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L02I03")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <div className="my-4">
                <h2>LEVEL 3: JOVENS RELEVANTES</h2>
              </div>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="6"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L03I01"
                  )}`}
                >
                  01. RESPONSABILIDADE SOCIAL DO JOVEM CRISTÃO - PR. ROBERTO
                  {watchData["L03I01"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/DagTiOfmu8I"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L03I01")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="7"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L03I02"
                  )}`}
                >
                  02. JOVENS RELEVANTES: POSSIBILIDADES E FERRAMENTAS - LEANDRO ALVES
                  {watchData["L03I02"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/XriS1uW0s4w"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L03I02")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="8"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L03I03"
                  )}`}
                >
                  03. JOVENS RELEVANTES - PR. ANTÔNIO CARLOS COSTA
                  {watchData["L03I03"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/xtkIu0RfcC4"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L03I03")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <div className="my-4">
                <h2>LEVEL 4: O CARÁTER DO JOVEM</h2>
              </div>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="9"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L04I01"
                  )}`}
                >
                  01. O CARÁTER DO SERMÃO DO MONTE - PR. JAKSON WELLEY
                  {watchData["L04I01"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/6isTq0FG8wg"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L04I01")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="my-2">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="10"
                  className={`d-flex justify-content-between ${itemStatus(
                    "L04I02"
                  )}`}
                >
                  02. O CARÁTER DO JOVEM - RODRIGO BIBO
                  {watchData["L04I02"] ? <small>VISTO</small> : null}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <Card.Body className="card-training">
                    <ReactPlayer
                      url="https://youtu.be/GsMDvYltEWI"
                      width="100%"
                      height="100%"
                      className="react-player"
                      onStart={() => setWatchedItem("L04I02")}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="row">
            <div className="col mt-4 text-center">
              <p onClick={() => app.auth().signOut()}>SAIR</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
