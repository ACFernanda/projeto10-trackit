import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";
import logo from "../assets/img/Logo.svg";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      {
        email: email,
        name: name,
        image: picture,
        password: password,
      }
    );
    promise.then((response) => {
      const { data } = response;
      console.log(data);
      navigate("/");
    });
    promise.catch((err) => {
      console.log(err.response);
      alert("Erro! :( Tente novamente.");
      setDisabled(false);
    });
  }

  return (
    <Container>
      <img src={logo} alt="TrackIt" />

      <form onSubmit={register}>
        <input
          required
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
        />
        <input
          required
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disabled}
        />
        <input
          required
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disabled}
        />
        <input
          required
          type="url"
          placeholder="foto"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          disabled={disabled}
        />
        <button onClick={() => setDisabled(true)} type="submit">
          {!disabled ? "Cadastrar" : <ThreeDots color="white" />}
        </button>
      </form>

      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;

  img {
    height: 30%;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 6px;
  }

  input:placeholder {
    color: #dbdbdb;
  }

  input:disabled {
    background-color: #f2f2f2;
  }

  button {
    width: 100%;
    height: 45px;
    background: #52b6ff;
    border: none;
    border-radius: 4.63636px;
    font-size: 20.976px;
    line-height: 26px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: #52b6ff;
  }

  p {
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 25px;
  }
`;
