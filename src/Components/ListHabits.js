import Habit from "./Habit";
import { useContext, useState } from "react";
import styled from "styled-components";

import UserContext from "../Contexts/UserContext";

export default function ListHabits() {
  const user = useContext(UserContext);

  // FAZER UM GET DOS HABITOS

  return "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";
}

// se não tem: "STRING"; se tem algum: map de cada Habit.js
