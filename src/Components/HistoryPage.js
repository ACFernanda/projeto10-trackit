import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function HistoryPage() {
  return (
    <>
      <Header />
      <Main>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  margin-top: 70px;
  font-family: "Lexend Deca";
  background: #e5e5e5;
  height: 100vh;
  padding: 28px 15px 0 15px;

  h1 {
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 17px;
  }

  p {
    font-size: 18px;
    color: #666666;
  }
`;
