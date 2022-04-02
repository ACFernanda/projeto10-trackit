import { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import checkmark from "../assets/img/CheckMark.svg";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt";

import UserContext from "../Contexts/UserContext";
import TodayHabitsContext from "../Contexts/TodayHabitsContext";

export default function TodayPage() {
  const user = useContext(UserContext);
  const { todayHabits } = useContext(TodayHabitsContext);
  const date = dayjs().locale("pt").format("DD/MM");
  const weekday = dayjs().locale("pt").format("dddd");
  const shortWeekday = weekday.replace("-feira", "");

  const totalHabits = todayHabits.length;
  const doneHabits = todayHabits.filter((habit) => habit.done === true);
  const percentageDone = (doneHabits.length * 100) / totalHabits;

  return (
    <>
      <Header />
      <Main>
        <TopInfo>
          {shortWeekday}, {date}
          {percentageDone > 0 ? (
            <p className="green">{percentageDone}% dos hábitos concluídos</p>
          ) : (
            <p>Nenhum hábito concluído ainda</p>
          )}
        </TopInfo>
        {todayHabits.map((todayHabit) => TodayHabit(todayHabit))}
      </Main>
      <Footer />
    </>
  );

  function TodayHabit(habit) {
    return (
      <TodayHabitCard key={habit.id}>
        <h1>{habit.name}</h1>
        <p>Sequência atual: {habit.currentSequence}</p>
        <p>Seu recorde: {habit.highestSequence}</p>
        <CheckBox
          done={habit.done}
          onClick={(event) => {
            ToggleDone(habit, event);
          }}
        >
          <img src={checkmark} alt="Checkmark" />
        </CheckBox>
      </TodayHabitCard>
    );
  }

  function ToggleDone(habit, event) {
    const id = habit.id;

    if (habit.done === true) {
      event.preventDefault();
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        {},
        config
      );

      promise.catch((err) => {
        console.log(err.response);
      });
    } else {
      event.preventDefault();
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        {},
        config
      );

      promise.catch((err) => {
        console.log(err.response);
      });
    }
  }
}

const Main = styled.div`
  background: #e5e5e5;
  height: 100vh;
  padding: 0 17px 70px 18px;
`;

const TopInfo = styled.div`
  padding-top: 98px;
  font-family: "Lexend Deca";
  font-size: 23px;
  color: #126ba5;

  p {
    font-size: 18px;
    color: #bababa;
    line-height: 22px;
    margin: 2px 0 28px;
  }
  p.green {
    color: #8fc549;
  }
`;

const TodayHabitCard = styled.div`
  width: 98%;
  background: #ffffff;
  border-radius: 5px;
  padding: 13px 0 17px;
  margin-bottom: 10px;
  position: relative;

  h1 {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #666666;
    margin: 0px 100px 7px 15px;
  }

  p {
    font-family: "Lexend Deca";
    font-size: 13px;
    color: #666666;
    margin-left: 15px;
    line-height: 16px;
  }
`;

const CheckBox = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 5px;
  border: none;
  position: absolute;
  right: 13px;
  top: 10px;
  background: ${(props) => (props.done === true ? "#8FC549" : "#e7e7e7")};
`;
