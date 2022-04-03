import { useContext, useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import ListHabits from "./ListHabits";
import WeekDays from "./WeekDays";

import UserContext from "../Contexts/UserContext";
import TodayHabitsContext from "../Contexts/TodayHabitsContext";

export default function HabitsPage() {
  const user = useContext(UserContext);
  const { setTodayHabits } = useContext(TodayHabitsContext);
  const [newHabit, setNewHabit] = useState(false);
  const [habits, setHabits] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);

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
    // eslint-disable-next-line
  }, [lastUpdate]);

  return (
    <>
      <Header />
      <Main>
        <Title>
          <p>Meus hábitos</p>
          <Button onClick={() => setNewHabit(true)}>
            <span>+</span>
          </Button>
        </Title>
        {newHabit === true ? <NewHabit /> : <></>}
        <ListHabits
          setHabits={setHabits}
          habits={habits}
          setLastUpdate={setLastUpdate}
        />
      </Main>
      <Footer />
    </>
  );

  function NewHabit() {
    const [title, setTitle] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [disabled, setDisabled] = useState(false);

    function PostNewHabbit() {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const promise = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          name: title,
          days: selectedDays,
        },
        config
      );

      promise.then((response) => {
        console.log(response.data);
        setHabits([...habits, response.data]);
        setLastUpdate(Date.now());
      });
      promise.catch((err) => {
        console.log(err.response);
        alert("Erro! :( Tente novamente.");
      });
    }

    return (
      <AddHabit>
        <input
          disabled={disabled}
          type="text"
          placeholder="nome do hábito"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Week>
          <WeekDays
            setSelectedDays={setSelectedDays}
            selectedDays={selectedDays}
          />
        </Week>
        <Submit>
          <button
            onClick={() => {
              setNewHabit(false);
              setDisabled(true);
            }}
            className="cancel"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              PostNewHabbit();
              setNewHabit(false);
            }}
            className="save"
          >
            {!disabled ? "Salvar" : <ThreeDots color="white" />}
          </button>
        </Submit>
      </AddHabit>
    );
  }
}

const Main = styled.div`
  margin: 70px 0;
  background-color: #e5e5e5;
  height: 100vh;
  font-family: "Lexend Deca";
  overflow: auto;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;
  margin-bottom: 20px;
  p {
    margin-top: 28px;
    font-size: 22.976px;
    color: #126ba5;
  }
`;

const Button = styled.button`
  margin-top: 28px;
  width: 40px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 4.63636px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  span {
    color: #ffffff;
    font-size: 27px;
  }
`;

const AddHabit = styled.div`
  width: 92%;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin: 20px auto 29px auto;
  display: flex;
  flex-direction: column;
  padding: 0 19px;

  input {
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    color: #666666;
    font-size: 20px;
    font-family: "Lexend Deca";
    margin-top: 18px;
  }

  input:placeholder {
    color: #dbdbdb;
  }
`;

const Week = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

const Submit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 32px;

  .cancel {
    height: 20px;
    font-family: "Lexend Deca";
    font-size: 15px;
    color: #52b6ff;
    background-color: #ffffff;
    border: none;
    margin-right: 10px;
  }

  .save {
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
