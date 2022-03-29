import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HabitsPage from "./HabitsPage";
import TodayPage from "./TodayPage";
import HistoryPage from "./HistoryPage";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/cadastro" element={<RegisterPage />}></Route>
        <Route path="/habitos" element={<HabitsPage />}></Route>
        <Route path="/hoje" element={<TodayPage />}></Route>
        <Route path="/historico" element={<HistoryPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
