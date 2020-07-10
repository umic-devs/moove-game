import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../services/Auth";
import { Link } from "react-router-dom";
import app from "../services/firebase";

const SignUp = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [church, setChurch] = useState("");
  const [password, setPassword] = useState("");

  const validEmailRegex = RegExp(
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g
  );
  const isInvalid =
    name.length < 2 ||
    name.length > 40 ||
    surname.length < 2 ||
    surname.length > 40 ||
    church.length < 3 ||
    church.length > 60 ||
    password.length < 4 ||
    password.length > 60 ||
    !validEmailRegex.test(email);

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { name, surname, church, email, password } = event.target.elements;

      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((auth) => {
          auth.user.updateProfile({
            displayName: name.value,
          });

          app
            .firestore()
            .collection("users")
            .doc(email.value)
            .set({
              name: name.value,
              surname: surname.value,
              church: church.value,
            })
            .then(history.push("/treinamento"))
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          alert(error);
        });
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/treinamento" />;
  }

  return (
    <div className="main-wrapper d-flex align-items-center">
      <div className="container text-center">
        <h1 className="mb-4">Cadastro no Training</h1>
        <form onSubmit={handleSignUp}>
          <div className="nes-field">
            <label>
              Nome
              <input
                name="name"
                type="text"
                value={name}
                placeholder="Nome"
                className="nes-input is-dark"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="nes-field">
            <label>
              Sobrenome
              <input
                name="surname"
                type="text"
                value={surname}
                placeholder="Sobrenome"
                className="nes-input is-dark"
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>
          </div>
          <div className="nes-field">
            <label>
              Igreja
              <input
                name="church"
                type="text"
                value={church}
                onChange={(e) => setChurch(e.target.value)}
                placeholder="Nome completo da sua igreja"
                className="nes-input is-dark"
              />
            </label>
          </div>
          <div className="nes-field">
            <label>
              Email
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email"
                className="nes-input is-dark"
              />
            </label>
          </div>
          <div className="nes-field">
            <label>
              Senha
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Crie uma senha"
                className="nes-input is-dark"
              />
            </label>
          </div>
          <button type="submit" disabled={isInvalid} className="my-4 nes-btn">
            Completar cadastro
          </button>
          <p className="mt-2">
            Já entrou no Moove Training antes? <Link to="/entrar">Entrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
