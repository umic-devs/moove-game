import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Training from "./components/Training";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/treinamento" component={Training} />
    </Router>
  );
}

export default App;
