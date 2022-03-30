import styled from "styled-components";

export default function WeekDays() {
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  return days.map((day) => <Button>{day}</Button>);
}

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  color: #dbdbdb;
  font-size: 20px;
  font-family: "Lexend Deca";
  margin-right: 4px;
`;
