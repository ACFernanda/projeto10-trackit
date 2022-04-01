import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import axios from "axios";

import UserContext from "../Contexts/UserContext";

export default function TodayPage() {
  const [todayHabits, setTodayHabits] = useState([]);
  const user = useContext(UserContext);

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

  return (
    <>
      <Header />
      <Main>Hoje</Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  background: #e5e5e5;
  height: 100vh;
`;
