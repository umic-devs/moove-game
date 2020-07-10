import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./services/Auth";
import PrivateRoute from "./services/PrivateRoute";

import Landing from "./pages/Landing";
import Training from "./pages/Training";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/entrar" component={SignIn} />
          <Route exact path="/cadastrar" component={SignUp} />
          <PrivateRoute exact path="/treinamento" component={Training} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
