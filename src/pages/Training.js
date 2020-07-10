import React, { useContext } from "react";
import { AuthContext } from "../services/Auth";
import app from "../services/firebase";

const Training = ({ history }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="main-wrapper">
      <div className="container">
      <h1>Moove Training</h1>
      <p>
        Olá, {currentUser?.displayName}! Bem vindo ao Moove Game Training! Escolha um Level.
      </p>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
    </div>
  );
};

export default Training;
