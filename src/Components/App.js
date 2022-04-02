import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HabitsPage from "./HabitsPage";
import TodayPage from "./TodayPage";
import HistoryPage from "./HistoryPage";
import GlobalStyle from "./GlobalStyle";
import UserContext from "../Contexts/UserContext";
import TodayHabitsContext from "../Contexts/TodayHabitsContext";

export default function App() {
  const [user, setUser] = useState(null);
  const [todayHabits, setTodayHabits] = useState([]);

  return (
    <TodayHabitsContext.Provider value={{ todayHabits, setTodayHabits }}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />}></Route>
            <Route path="/cadastro" element={<RegisterPage />}></Route>
            <Route path="/hoje" element={<TodayPage />}></Route>
            <Route path="/habitos" element={<HabitsPage />}></Route>
            <Route path="/historico" element={<HistoryPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </TodayHabitsContext.Provider>
  );
}
