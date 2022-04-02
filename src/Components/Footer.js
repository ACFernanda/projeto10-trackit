import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styled from "styled-components";
import { Link } from "react-router-dom";

import UserContext from "../Contexts/UserContext";

export default function Footer() {
  const user = useContext(UserContext);
  const [todayHabits, setTodayHabits] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
      config
    );

    promise.then((response) => {
      console.log(response.data);
      setTodayHabits(response.data);
    });

    promise.catch((err) => {
      console.log(err.response);
    });
  }, []);

  const totalHabits = todayHabits.length;
  const doneHabits = todayHabits.filter((habit) => habit.done === true);
  const percentageDone = (doneHabits.length * 100) / totalHabits;

  return (
    <BottomBar>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <div>
        <Link to="/hoje">
          <CircularProgressbar
            value={percentageDone}
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
