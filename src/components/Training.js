import React from "react";
import app from "../services/firebase";

class Training extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Treinamento</h1>
        <button onClick={() => app.auth().signOut()}>Sign Out</button>
      </div>
    );
  }
}

export default Training;
