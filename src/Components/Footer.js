import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <BottomBar>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Link to="/historico">
        <p>Histórico</p>
      </Link>
    </BottomBar>
  );
}

const BottomBar = styled.div`
  height: 70px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  font-family: "Lexend Deca";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;

  p {
    font-size: 18px;
    color: #52b6ff;
  }

  a {
    text-decoration: none;
  }
`;
