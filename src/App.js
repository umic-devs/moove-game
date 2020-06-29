import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/landing" component={Landing} />
    </Router>
  );
}

export default App;
