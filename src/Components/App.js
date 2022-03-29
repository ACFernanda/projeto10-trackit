import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HabitsPage from "./HabitsPage";
import TodayPage from "./TodayPage";
import HistoryPage from "./HistoryPage";
import GlobalStyle from "./GlobalStyle";
import TokenContext from "../Contexts/TokenContext";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={token}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            saveToken={(token) => setToken(token)}
            element={<LoginPage />}
          ></Route>
          <Route path="/cadastro" element={<RegisterPage />}></Route>
          <Route path="/habitos" element={<HabitsPage />}></Route>
          <Route path="/hoje" element={<TodayPage />}></Route>
          <Route path="/historico" element={<HistoryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
