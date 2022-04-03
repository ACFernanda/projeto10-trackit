import { useContext, useEffect } from "react";
import UserContext from "../Contexts/UserContext";
import TodayHabitsContext from "../Contexts/TodayHabitsContext";
import axios from "axios";

export default function useUpdateHabits() {
  const user = useContext(UserContext);
  const { setTodayHabits } = useContext(TodayHabitsContext);

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
      setTodayHabits(response.data);
    });
    promise.catch((err) => {
      console.log(err.response);
    });
    // eslint-disable-next-line
  }, []);
}
