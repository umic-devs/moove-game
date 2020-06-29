import React from "react";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <section>
      <h1>Landing</h1>
      <button onClick={handleClick}>Home</button>
    </section>
  );
}

export default Landing;
