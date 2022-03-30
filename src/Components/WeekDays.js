import styled from "styled-components";
import { useState } from "react";

export default function WeekDays({ setSelectedDays, selectedDays }) {
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  const toggleDay = (index) => {
    if (selectedDays.includes(index)) {
      return setSelectedDays(
        selectedDays.filter((selected) => selected !== index)
      );
    }

    setSelectedDays([...selectedDays, index]);
  };

  const Day = ({ index, day, isSelected, onClick }) => {
    return (
      <Button
        style={{
          background: isSelected ? "#CFCFCF" : "white",
          color: isSelected ? "#FFFFFF" : "#DBDBDB",
        }}
        onClick={() => onClick(index)}
      >
        {day}
      </Button>
    );
  };

  return days.map((day, index) => {
    const isSelected = selectedDays.includes(index);

    return (
      <Day
        key={index}
        index={index}
        day={day}
        isSelected={isSelected}
        onClick={toggleDay}
      />
    );
  });
}

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 20px;
  font-family: "Lexend Deca";
  margin-right: 4px;
`;
