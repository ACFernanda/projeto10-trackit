import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  const percentage = 50;
  return (
    <BottomBar>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <div>
        <Link to="/hoje">
          <CircularProgressbar
            value={percentage}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </Link>
      </div>
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

  div {
    width: 30%;
    margin-bottom: 35px;
  }
`;
