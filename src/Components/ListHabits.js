import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import trash from "../assets/img/Trash.svg";
import axios from "axios";

import UserContext from "../Contexts/UserContext";

export default function ListHabits() {
  const user = useContext(UserContext);
  const [habits, setHabits] = useState([]);

  // FAZER UM GET DOS HABITOS
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
      config
    );

    promise.then((response) => {
      console.log(response.data); // DEVOLVE UMA ARRAY COM OS HÁBITOS
      setHabits(response.data);
    });

    promise.catch((err) => {
      console.log(err.response);
    });
  }, []);

  if (habits.length > 0) {
    return <Habit habits={habits} />;
  } else {
    return (
      <span>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </span>
    );
  }
}

function Habit({ habits }) {
  return habits.map(({ id, name, days }) => (
    <HabitCard>
      <p className="title">{name}</p>
      <ListDays>
        <Days days={days} />
      </ListDays>
      <img onClick={() => deleteHabit(id)} src={trash} alt="delete" />
    </HabitCard>
  ));
}

function Days({ days }) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return weekdays.map((day, index) => {
    if (days.includes(index)) {
      return <DaySelected key={index}>{day}</DaySelected>;
    } else {
      return <Day key={index}>{day}</Day>;
    }
  });
}

function deleteHabit(id) {
  console.log(id);
}

const HabitCard = styled.div`
  width: 92%;
  background: #ffffff;
  border-radius: 5px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  padding: 14px 19px;
  position: relative:

  .title {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #666666;
  }

  img {
    width: 13px;
    heigth: 15px;
    position: absolute;
    right: 30px;
    margin-left: 10px;
  }
`;

const ListDays = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const Day = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 20px;
  font-family: "Lexend Deca";
  margin-right: 4px;
  background: #ffffff;
  color: #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DaySelected = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #cfcfcf;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 20px;
  font-family: "Lexend Deca";
  margin-right: 4px;
  background: #cfcfcf;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
