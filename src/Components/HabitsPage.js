import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function HabitsPage() {
  return (
    <>
      <Header />
      <Main>
        <Title>
          <p>Meus hábitos</p>
          <Button>
            <span>+</span>
          </Button>
        </Title>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  margin: 70px 0;
  background-color: #e5e5e5;
  height: 100vh;
  font-family: "Lexend Deca";
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;

  p {
    margin-top: 28px;
    font-size: 22.976px;
    color: #126ba5;
  }
`;

const Button = styled.div`
  margin-top: 28px;
  width: 40px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 4.63636px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #ffffff;
    font-size: 27px;
  }
`;
