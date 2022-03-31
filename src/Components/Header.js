import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Contexts/UserContext";

export default function Header() {
  const user = useContext(UserContext);
  return (
    <TopBar>
      <h1>TrackIt</h1>
      <img src={user.image} alt={user.name} />
    </TopBar>
  );
}

const TopBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 70px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  z-index: 10;

  h1 {
    font-family: "Playball";
    font-size: 39px;
    line-height: 49px;
    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    object-fit: cover;
  }
`;
