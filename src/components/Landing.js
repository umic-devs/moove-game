import React from "react";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <section>
      <div className="container">
        <h1>Landing</h1>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Home</button>
      </div>
    </section>
  );
}

export default Landing;
