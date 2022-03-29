import styled from "styled-components";

export default function Header() {
  return (
    <TopBar>
      <h1>TrackIt</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
        alt="foto"
      />
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
  }
`;
