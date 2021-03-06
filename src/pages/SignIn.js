import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../services/Auth";
import { Link } from "react-router-dom";
import app from "../services/firebase";
import Header from '../components/Header';

const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validEmailRegex = RegExp(
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g
  );
  const isInvalid = !validEmailRegex.test(email) || password.length < 4;

  const handleSignIn = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/treinamento");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/treinamento" />;
  }

  return (
    <>
      <Header />
      <div className="main-wrapper d-flex align-items-center">
        <div className="container text-center game-container">
          <h1 className="mb-4">Entrar no Training</h1>
          <form onSubmit={handleSignIn}>
            <div className="nes-field">
              <div className="input-label">
                <label>
                  Email
                </label>
              </div>
              <input
                name="email"
                type="email"
                value={email}
                placeholder="Email"
                className="nes-input is-dark"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="nes-field">
              <div className="input-label">
                <label>
                  Senha
                </label>
              </div>
              <input
                name="password"
                type="password"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                className="nes-input is-dark"
              />
            </div>
            <button type="submit" disabled={isInvalid} className="my-4 nes-btn">
              Entrar
            </button>
            <p className="mt-2">
              Primeira vez no Moove Training?{" "}
              <Link to="/cadastrar">Ir pra Cadastro</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(SignIn);
